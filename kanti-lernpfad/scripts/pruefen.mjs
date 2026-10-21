/* Prüft die Inhalte des Lernpfads gegen die Aufgaben-Engine.
   Bei mehreren hundert Aufgaben findet man einen vertippten Index sonst nie.
   Aufruf: npm run pruefen */

import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const wurzel = join(dirname(fileURLToPath(import.meta.url)), '..');

/* Ein Mini-DOM, damit die Skripte laufen, ohne einen Browser zu brauchen. */
const nichts = () => ({
  appendChild: nichts, setAttribute() {}, addEventListener() {}, removeChild: nichts,
  classList: { add() {}, toggle() {} }, style: {}, children: [], focus() {}
});
const kontext = vm.createContext({
  window: { localStorage: { getItem: () => null, setItem() {}, removeItem() {} }, addEventListener() {} },
  document: {
    createElement: nichts, createTextNode: nichts, getElementById: nichts,
    addEventListener() {}, readyState: 'complete', body: { contains: () => false }
  },
  location: { hash: '', protocol: 'file:' },
  navigator: {},
  console,
  setTimeout, setInterval, clearInterval,
  JSON, Math, Date, Object, Array, String, Number, Error, RegExp, parseInt, parseFloat, isNaN
});

const dateien = [
  'js/daten.js', 'js/texte.js',
  ...readdirSync(join(wurzel, 'inhalt')).sort().map((d) => 'inhalt/' + d),
  'js/aufgaben.js'
];
for (const d of dateien) {
  vm.runInContext(readFileSync(join(wurzel, d), 'utf8'), kontext, { filename: d });
}
const LP = kontext.LP;

const fehler = [];
const warnung = [];
let aufgabenZahl = 0;
let punkteZahl = 0;

function melde(liste, wo, was) { liste.push(`${wo}: ${was}`); }

function pruefeAufgabe(a, wo) {
  aufgabenZahl++;
  if (!a.typ) return melde(fehler, wo, 'kein Typ');
  if (!LP.aufgaben.typen[a.typ]) return melde(fehler, wo, `unbekannter Typ «${a.typ}»`);
  if (a.text && !LP.texte[a.text]) melde(fehler, wo, `Lesetext «${a.text}» existiert nicht`);
  if (!a.frage) melde(warnung, wo, 'keine Frage');

  let max = 0;
  try { max = LP.aufgaben.maxPunkte(a); } catch (e) { return melde(fehler, wo, 'maxPunkte: ' + e.message); }
  if (!(max > 0)) melde(fehler, wo, `Punktzahl ${max}`);
  punkteZahl += max;

  const zeilenZahl = a.text ? LP.texte[a.text].zeilen.length : 0;
  const zeilenPruefen = (s, feld) => {
    if (!zeilenZahl || typeof s !== 'string') return;
    for (const treffer of s.matchAll(/Z\.\s?(\d+)(?:\s?[–/-]\s?(\d+))?/g)) {
      for (const n of [treffer[1], treffer[2]]) {
        if (n && (+n < 1 || +n > zeilenZahl)) {
          melde(fehler, wo, `${feld}: Zeile ${n} gibt es im Text «${a.text}» nicht (1–${zeilenZahl})`);
        }
      }
    }
  };
  zeilenPruefen(a.erklaerung, 'erklaerung');
  zeilenPruefen(a.frage, 'frage');

  switch (a.typ) {
    case 'single':
      if (!Array.isArray(a.optionen) || a.optionen.length < 2) melde(fehler, wo, 'zu wenige Optionen');
      if (!(a.loesung >= 0 && a.loesung < a.optionen.length)) melde(fehler, wo, `loesung ${a.loesung} ausserhalb`);
      break;
    case 'multi':
      if (!Array.isArray(a.loesung) || !a.loesung.length) melde(fehler, wo, 'keine Lösung');
      a.loesung.forEach((i) => {
        if (!(i >= 0 && i < a.optionen.length)) melde(fehler, wo, `loesung-Index ${i} ausserhalb`);
      });
      if (new Set(a.loesung).size !== a.loesung.length) melde(fehler, wo, 'doppelter Lösungsindex');
      if (a.loesung.length === a.optionen.length) melde(warnung, wo, 'alle Optionen richtig');
      break;
    case 'rfk':
      a.aussagen.forEach((aus, i) => {
        if (!'rfk'.includes(aus.loesung) || !aus.loesung) melde(fehler, wo, `Aussage ${i + 1}: loesung «${aus.loesung}»`);
        if (!aus.text) melde(fehler, wo, `Aussage ${i + 1} ohne Text`);
      });
      break;
    case 'text':
    case 'luecke': {
      const teile = a.teile || a.luecken;
      if (!teile || !teile.length) return melde(fehler, wo, 'keine Teile');
      teile.forEach((t, i) => {
        const l = [].concat(t.loesungen || []);
        if (!l.length || l.some((x) => !String(x).trim())) melde(fehler, wo, `Teil ${i + 1}: leere Lösung`);
        l.forEach((x) => {
          if (LP.vergleiche(x, l) !== 'richtig') melde(fehler, wo, `Teil ${i + 1}: «${x}» wird nicht als richtig erkannt`);
        });
      });
      break;
    }
    case 'tabelle':
      a.zeilen.forEach((z, i) => {
        const spalten = (z.fest || []).length + z.felder.length;
        if (spalten !== a.kopf.length) melde(fehler, wo, `Zeile ${i + 1}: ${spalten} Spalten, Kopf hat ${a.kopf.length}`);
        z.felder.forEach((f, j) => {
          if (!f.loesungen || ![].concat(f.loesungen).length) melde(fehler, wo, `Zeile ${i + 1} Feld ${j + 1}: keine Lösung`);
        });
      });
      break;
    case 'zuordnung': {
      const quelle = a.vorrat || a.optionen;
      if (!quelle || !quelle.length) return melde(fehler, wo, 'kein Vorrat');
      a.zeilen.forEach((z, i) => {
        if (!(z.loesung >= 0 && z.loesung < quelle.length)) melde(fehler, wo, `Zeile ${i + 1}: loesung ${z.loesung} ausserhalb`);
      });
      break;
    }
    case 'markieren':
      /* Sätze ohne Lösung sind Absicht («sofern vorhanden») – nur wenn die
         ganze Aufgabe leer ist, stimmt etwas nicht. */
      if (a.saetze.every((s) => !s.loesung.length)) melde(fehler, wo, 'keine einzige Lösung');
      a.saetze.forEach((s, i) => {
        s.loesung.forEach((idx) => {
          if (!(idx >= 0 && idx < s.woerter.length)) melde(fehler, wo, `Satz ${i + 1}: Index ${idx} ausserhalb (0–${s.woerter.length - 1})`);
          else if (/^[.,;:!?»«"]$/.test(s.woerter[idx])) melde(fehler, wo, `Satz ${i + 1}: Index ${idx} zeigt auf Satzzeichen «${s.woerter[idx]}»`);
        });
        if (new Set(s.loesung).size !== s.loesung.length) melde(fehler, wo, `Satz ${i + 1}: doppelter Index`);
      });
      break;
    case 'trennen':
      if (!a.loesung.length) melde(fehler, wo, 'keine Lösung');
      a.loesung.forEach((idx) => {
        if (!(idx >= 0 && idx < a.woerter.length - 1)) melde(fehler, wo, `Index ${idx} ausserhalb (0–${a.woerter.length - 2})`);
      });
      if (new Set(a.loesung).size !== a.loesung.length) melde(fehler, wo, 'doppelter Index');
      break;
    case 'offen':
      a.teile.forEach((t, i) => {
        if (!t.frage) melde(fehler, wo, `Teil ${i + 1} ohne Frage`);
        if (!t.musterloesung) melde(fehler, wo, `Teil ${i + 1} ohne Musterlösung`);
        zeilenPruefen(t.musterloesung, `Teil ${i + 1} Musterlösung`);
      });
      break;
    case 'frei':
      if (a.raster) {
        if (!a.raster.length) melde(fehler, wo, 'leeres Raster');
        a.raster.forEach((r, i) => {
          if (!r.titel || !r.beschreibung) melde(fehler, wo, `Raster ${i + 1}: Titel oder Beschreibung fehlt`);
          if (!(r.punkte > 0)) melde(fehler, wo, `Raster ${i + 1}: Punktzahl ${r.punkte}`);
        });
      } else if (!a.musterloesung && !a.kriterien) {
        melde(fehler, wo, 'weder Musterlösung noch Kriterien');
      }
      zeilenPruefen(a.musterloesung, 'musterloesung');
      break;
  }
}

/* ---- Kapitel ---- */
const idsGesehen = new Set();
const nummern = new Set();
LP.kapitel.sort((a, b) => a.nr - b.nr);

for (const kap of LP.kapitel) {
  const wo = `Kapitel ${kap.nr} (${kap.id})`;
  if (idsGesehen.has(kap.id)) melde(fehler, wo, 'doppelte id');
  idsGesehen.add(kap.id);
  if (nummern.has(kap.nr)) melde(fehler, wo, 'doppelte Nummer');
  nummern.add(kap.nr);
  for (const feld of ['titel', 'bild', 'kurz', 'pruefungsgewicht', 'inPruefung']) {
    if (!kap[feld]) melde(fehler, wo, `Feld «${feld}» fehlt`);
  }
  if (!kap.theorie || !kap.theorie.length) melde(fehler, wo, 'keine Theorie');
  if (!kap.level || kap.level.length !== 4) melde(fehler, wo, `${kap.level ? kap.level.length : 0} Stufen statt 4`);
  (kap.level || []).forEach((lv, i) => {
    const woL = `${wo} · Stufe ${i + 1}`;
    if (!lv.titel) melde(fehler, woL, 'kein Titel');
    /* Eine 75-Minuten-Schreibaufgabe ist eine Stufe für sich – dort zählt
       nicht die Anzahl, sondern der Umfang. */
    const grosseAufgabe = (lv.aufgaben || []).some((a) => a.gross);
    if (!lv.aufgaben || (lv.aufgaben.length < 4 && !grosseAufgabe)) {
      melde(warnung, woL, `nur ${lv.aufgaben ? lv.aufgaben.length : 0} Aufgaben`);
    }
    (lv.aufgaben || []).forEach((a, j) => pruefeAufgabe(a, `${woL} · Aufgabe ${j + 1}`));
  });
}

/* ---- Prüfungen ---- */
for (const pr of LP.pruefungen) {
  const wo = `Prüfung ${pr.id}`;
  if (!pr.titel || !pr.minuten) melde(fehler, wo, 'Titel oder Dauer fehlt');
  let summe = 0;
  pr.aufgaben.forEach((a, j) => {
    pruefeAufgabe(a, `${wo} · Aufgabe ${j + 1}`);
    if (a.kapId && !LP.kapitel.some((k) => k.id === a.kapId)) melde(fehler, `${wo} · Aufgabe ${j + 1}`, `kapId «${a.kapId}» unbekannt`);
    if (!a.kapId) melde(warnung, `${wo} · Aufgabe ${j + 1}`, 'ohne kapId – keine Lernempfehlung möglich');
    try { summe += LP.aufgaben.maxPunkte(a); } catch (e) {}
  });
  if (summe < 60 || summe > 95) melde(warnung, wo, `${summe} Punkte – die echten Prüfungen hatten 75–80`);
  else console.log(`  ${pr.titel}: ${summe} Punkte, ${pr.aufgaben.length} Aufgaben`);
}

/* ---- Service Worker: hat er alle Dateien, die index.html lädt? ---- */
const htmlQuelle = readFileSync(join(wurzel, 'index.html'), 'utf8');
const swQuelle = readFileSync(join(wurzel, 'sw.js'), 'utf8');
const geladen = [...htmlQuelle.matchAll(/(?:src|href)="([^":]+)"/g)].map((m) => m[1]);
for (const datei of [...new Set(geladen)]) {
  if (!swQuelle.includes("'./" + datei + "'")) {
    melde(fehler, 'sw.js', `index.html lädt «${datei}», der Service Worker legt es nicht ab`);
  }
}
for (const m of swQuelle.matchAll(/'\.\/([^']+)'/g)) {
  try { readFileSync(join(wurzel, m[1])); }
  catch { melde(fehler, 'sw.js', `legt «${m[1]}» ab, die Datei gibt es nicht`); }
}

/* ---- Abzeichen, die sich auf Kapitel beziehen ---- */
for (const m of readFileSync(join(wurzel, 'js/abzeichen.js'), 'utf8').matchAll(/kapitelFertig\(s, '([^']+)'\)/g)) {
  if (!idsGesehen.has(m[1])) melde(fehler, 'abzeichen.js', `Abzeichen verweist auf unbekanntes Kapitel «${m[1]}»`);
}

console.log(`\n${LP.kapitel.length} Kapitel, ${LP.pruefungen.length} Prüfungen, ${aufgabenZahl} Aufgaben, ${Math.round(punkteZahl)} Punkte insgesamt.`);
if (warnung.length) {
  console.log(`\n${warnung.length} Hinweise:`);
  warnung.forEach((w) => console.log('  · ' + w));
}
if (fehler.length) {
  console.error(`\n${fehler.length} FEHLER:`);
  fehler.forEach((f) => console.error('  ✗ ' + f));
  process.exit(1);
}
console.log('\nAlles in Ordnung.');
