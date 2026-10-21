/* Grundlagen: Namensraum, kleine Helfer, Speicher.
   Alles als klassische Skripte, damit die Seite auch von einem USB-Stick
   (file://) läuft – Module tut das nicht. */

var LP = {
  kapitel: [],      // von inhalt/k*.js gefüllt
  pruefungen: [],   // von inhalt/pruefungen.js gefüllt
  texte: {},        // Lesetexte, von js/texte.js gefüllt
  version: '1.0.0'
};

/* ---------- DOM ---------- */

LP.el = function (tag, eigenschaften, kinder) {
  var k = document.createElement(tag);
  if (eigenschaften) {
    for (var name in eigenschaften) {
      var wert = eigenschaften[name];
      if (wert === null || wert === undefined || wert === false) continue;
      if (name === 'klasse') k.className = wert;
      else if (name === 'html') k.innerHTML = wert;
      else if (name === 'text') k.textContent = wert;
      else if (name === 'bei') { for (var e in wert) k.addEventListener(e, wert[e]); }
      else if (name === 'stil') { for (var s in wert) k.style[s] = wert[s]; }
      else k.setAttribute(name, wert === true ? '' : wert);
    }
  }
  (kinder || []).forEach(function (kind) {
    if (kind === null || kind === undefined || kind === false) return;
    k.appendChild(typeof kind === 'string' ? document.createTextNode(kind) : kind);
  });
  return k;
};

LP.leeren = function (knoten) { while (knoten.firstChild) knoten.removeChild(knoten.firstChild); return knoten; };

LP.sicher = function (s) {
  return String(s === undefined || s === null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
};

/* ---------- Antworten vergleichen ----------
   Die Prüfung zieht für Rechtschreibfehler einen halben Punkt ab, statt die
   Antwort ganz zu streichen. Genau das macht `LP.vergleiche`: inhaltlich
   richtig mit einem Tippfehler gibt «fast», nicht «falsch». */

LP.norm = function (s) {
  return String(s === undefined || s === null ? '' : s)
    .replace(/ /g, ' ')
    .replace(/[„“”»«]/g, '"')
    .replace(/[‚‘’]/g, "'")
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()
    .replace(/[.!?;:]+$/, '')
    .replace(/ß/g, 'ss');
};

LP.abstand = function (a, b) {          // Levenshtein, früh abgebrochen
  if (a === b) return 0;
  if (Math.abs(a.length - b.length) > 2) return 99;
  var zeile = [], i, j, vorher, temp;
  for (j = 0; j <= b.length; j++) zeile[j] = j;
  for (i = 1; i <= a.length; i++) {
    vorher = zeile[0]; zeile[0] = i;
    for (j = 1; j <= b.length; j++) {
      temp = zeile[j];
      zeile[j] = Math.min(
        zeile[j] + 1,
        zeile[j - 1] + 1,
        vorher + (a.charAt(i - 1) === b.charAt(j - 1) ? 0 : 1)
      );
      vorher = temp;
    }
  }
  return zeile[b.length];
};

/* Gibt 'richtig', 'fast' (Rechtschreibfehler) oder 'falsch' zurück. */
LP.vergleiche = function (eingabe, loesungen) {
  var e = LP.norm(eingabe);
  if (!e) return 'falsch';
  var liste = [].concat(loesungen || []);
  var i, l;
  for (i = 0; i < liste.length; i++) {
    l = LP.norm(liste[i]);
    if (!l) continue;
    if (e === l) return 'richtig';
    // Artikel vorn dürfen fehlen oder dazukommen, wenn die Lösung sie nicht fordert
    if (e.replace(/^(der|die|das|den|dem|des|ein|eine|einen|einem|einer)\s+/, '') === l) return 'richtig';
  }
  for (i = 0; i < liste.length; i++) {
    l = LP.norm(liste[i]);
    if (!l) continue;
    if (l.length >= 4 && LP.abstand(e, l) <= (l.length > 8 ? 2 : 1)) return 'fast';
  }
  return 'falsch';
};

/* Für offene Fragen: wie viele Schlüsselwörter kommen vor? */
LP.schluesselTreffer = function (eingabe, schluessel) {
  var e = LP.norm(eingabe), treffer = [];
  (schluessel || []).forEach(function (gruppe) {
    var worte = [].concat(gruppe);
    var gefunden = worte.some(function (w) { return e.indexOf(LP.norm(w)) >= 0; });
    if (gefunden) treffer.push(worte[0]);
  });
  return treffer;
};

/* ---------- Zahlen ---------- */

LP.punkteText = function (p) {
  var ganz = Math.floor(p + 1e-9);
  var rest = p - ganz;
  if (rest > .24 && rest < .26) return (ganz ? ganz : '') + '¼';
  if (rest > .49 && rest < .51) return (ganz ? ganz : '') + '½';
  if (rest > .74 && rest < .76) return (ganz ? ganz : '') + '¾';
  return String(Math.round(p * 100) / 100).replace('.', ',');
};

/* Notenskala der Aufnahmeprüfung: lineare Umrechnung, Note 6 bei voller
   Punktzahl, Note 4 bei 60 % – die im Thurgau übliche Faustregel. */
LP.note = function (anteil) {
  var n = anteil >= .6 ? 4 + (anteil - .6) / .4 * 2 : 1 + anteil / .6 * 3;
  return Math.round(n * 4) / 4;
};
LP.noteText = function (anteil) { return LP.note(anteil).toFixed(2).replace('.', ','); };

LP.heute = function () {
  var d = new Date();
  return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
};
LP.tageDazwischen = function (a, b) {
  return Math.round((new Date(b + 'T00:00') - new Date(a + 'T00:00')) / 86400000);
};

LP.mischen = function (liste) {
  var l = liste.slice(), i, j, t;
  for (i = l.length - 1; i > 0; i--) { j = Math.floor(Math.random() * (i + 1)); t = l[i]; l[i] = l[j]; l[j] = t; }
  return l;
};

/* ---------- Speicher ---------- */

LP.speicher = {
  lies: function (schluessel, ersatz) {
    try {
      var roh = window.localStorage.getItem(schluessel);
      return roh ? JSON.parse(roh) : ersatz;
    } catch (e) { return ersatz; }
  },
  schreib: function (schluessel, wert) {
    try { window.localStorage.setItem(schluessel, JSON.stringify(wert)); return true; }
    catch (e) { return false; }
  },
  loesche: function (schluessel) {
    try { window.localStorage.removeItem(schluessel); } catch (e) {}
  }
};

/* ---------- Meldungen ---------- */

LP.toast = function (text, dauer) {
  var raum = document.getElementById('toast-raum');
  var t = LP.el('div', { klasse: 'toast', text: text });
  raum.appendChild(t);
  setTimeout(function () {
    t.style.transition = 'opacity .3s ease';
    t.style.opacity = '0';
    setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 320);
  }, dauer || 2200);
};

LP.dialog = function (aufbau) {
  var raum = document.getElementById('dialog-raum');
  var kasten = LP.el('div', { klasse: 'dialog' }, [LP.el('div', { klasse: 'dialog-griff' })]);
  var hinter = LP.el('div', { klasse: 'dialog-hinter', bei: {
    click: function (e) { if (e.target === hinter) zu(); }
  } }, [kasten]);
  function zu() { if (hinter.parentNode) raum.removeChild(hinter); document.removeEventListener('keydown', taste); }
  function taste(e) { if (e.key === 'Escape') zu(); }
  document.addEventListener('keydown', taste);
  raum.appendChild(hinter);
  aufbau(kasten, zu);
  return zu;
};

LP.bestaetige = function (frage, text, knopfText, dann) {
  LP.dialog(function (kasten, zu) {
    kasten.appendChild(LP.el('h2', { text: frage }));
    if (text) kasten.appendChild(LP.el('p', { klasse: 'hinweis', text: text }));
    kasten.appendChild(LP.el('div', { klasse: 'knopfreihe abstand' }, [
      LP.el('button', { klasse: 'knopf', text: knopfText, bei: { click: function () { zu(); dann(); } } }),
      LP.el('button', { klasse: 'knopf rand', text: 'Abbrechen', bei: { click: zu } })
    ]));
  });
};
