/* Wer lernt, wie weit, und was davon gespeichert wird.
   Ein iPad wird in der Klasse herumgereicht, darum gibt es Profile. */

LP.fortschritt = (function () {

  var SCHLUESSEL_LISTE = 'lernpfad.profile';
  var SCHLUESSEL_AKTIV = 'lernpfad.aktiv';
  var SCHLUESSEL_STAND = 'lernpfad.stand.';

  var AVATARE = ['🦊','🐼','🦉','🐨','🦁','🐙','🦄','🐢','🦅','🐬','🐝','🦔','🐧','🦋','🐺','🦕'];

  var RAENGE = [
    { ab: 0,    name: 'Leseanfänger:in', bild: '🌱' },
    { ab: 150,  name: 'Wörtersammler:in', bild: '🔤' },
    { ab: 400,  name: 'Satzbauer:in',     bild: '🧱' },
    { ab: 800,  name: 'Grammatik-Scout',  bild: '🧭' },
    { ab: 1400, name: 'Sprachdetektiv:in',bild: '🔍' },
    { ab: 2200, name: 'Textversteher:in', bild: '📖' },
    { ab: 3200, name: 'Komma-Profi',      bild: '✒️' },
    { ab: 4500, name: 'Prüfungsreif',     bild: '🎯' },
    { ab: 6000, name: 'Kanti-Kandidat:in',bild: '🏔️' },
    { ab: 8000, name: 'Sprachmeister:in', bild: '👑' }
  ];

  var leer = {
    xp: 0,
    streakTage: 0,
    streakLetzter: '',
    tageAktiv: [],
    level: {},       // "kapId.levelNr" -> { sterne, punkte, max, versuche, datum }
    theorie: {},     // kapId -> true
    abzeichen: {},   // abzeichenId -> datum
    fehler: [],      // { kapId, levelNr, index, datum }
    pruefungen: {},  // pruefungId -> { punkte, max, datum, note }
    schreibtexte: {} // aufgabenId -> { text, datum }
  };

  var profile = [];
  var aktivId = null;
  var stand = null;

  function kopie(o) { return JSON.parse(JSON.stringify(o)); }

  function ladeListe() {
    profile = LP.speicher.lies(SCHLUESSEL_LISTE, []);
    aktivId = LP.speicher.lies(SCHLUESSEL_AKTIV, null);
    if (!profile.length) { aktivId = null; return; }
    if (!profile.some(function (p) { return p.id === aktivId; })) aktivId = profile[0].id;
  }

  function ladeStand() {
    if (!aktivId) { stand = null; return; }
    var s = LP.speicher.lies(SCHLUESSEL_STAND + aktivId, null);
    stand = s ? Object.assign(kopie(leer), s) : kopie(leer);
  }

  function sichere() {
    if (!aktivId || !stand) return;
    LP.speicher.schreib(SCHLUESSEL_STAND + aktivId, stand);
    LP.speicher.schreib(SCHLUESSEL_LISTE, profile);
    LP.speicher.schreib(SCHLUESSEL_AKTIV, aktivId);
  }

  ladeListe();
  ladeStand();

  /* ---------- Profile ---------- */

  function neuesProfil(name, avatar) {
    var p = {
      id: 'p' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      name: name || 'Ich',
      avatar: avatar || AVATARE[Math.floor(Math.random() * AVATARE.length)],
      erstellt: LP.heute()
    };
    profile.push(p);
    aktivId = p.id;
    stand = kopie(leer);
    sichere();
    return p;
  }

  function waehle(id) {
    if (!profile.some(function (p) { return p.id === id; })) return;
    aktivId = id;
    ladeStand();
    LP.speicher.schreib(SCHLUESSEL_AKTIV, aktivId);
  }

  function loesche(id) {
    profile = profile.filter(function (p) { return p.id !== id; });
    LP.speicher.loesche(SCHLUESSEL_STAND + id);
    if (aktivId === id) { aktivId = profile.length ? profile[0].id : null; ladeStand(); }
    LP.speicher.schreib(SCHLUESSEL_LISTE, profile);
    LP.speicher.schreib(SCHLUESSEL_AKTIV, aktivId);
  }

  function aktiv() {
    var i;
    for (i = 0; i < profile.length; i++) if (profile[i].id === aktivId) return profile[i];
    return null;
  }

  /* ---------- Tagesstreak ---------- */

  function tagMelden() {
    if (!stand) return null;
    var h = LP.heute();
    if (stand.streakLetzter === h) return null;
    var abstand = stand.streakLetzter ? LP.tageDazwischen(stand.streakLetzter, h) : 99;
    stand.streakTage = abstand === 1 ? stand.streakTage + 1 : 1;
    stand.streakLetzter = h;
    if (stand.tageAktiv.indexOf(h) < 0) stand.tageAktiv.push(h);
    sichere();
    return stand.streakTage;
  }

  /* ---------- XP und Rang ---------- */

  function rangZu(xp) {
    var r = RAENGE[0], i;
    for (i = 0; i < RAENGE.length; i++) if (xp >= RAENGE[i].ab) r = RAENGE[i];
    return r;
  }
  function naechsterRang(xp) {
    var i;
    for (i = 0; i < RAENGE.length; i++) if (xp < RAENGE[i].ab) return RAENGE[i];
    return null;
  }

  function xpGeben(menge) {
    if (!stand) return { rangAuf: null };
    var vorher = rangZu(stand.xp);
    stand.xp += Math.max(0, Math.round(menge));
    var nachher = rangZu(stand.xp);
    sichere();
    return { rangAuf: vorher.name !== nachher.name ? nachher : null };
  }

  /* ---------- Levelstand ---------- */

  function levelSchluessel(kapId, levelNr) { return kapId + '.' + levelNr; }

  function levelStand(kapId, levelNr) {
    if (!stand) return null;
    return stand.level[levelSchluessel(kapId, levelNr)] || null;
  }

  function levelSpeichern(kapId, levelNr, punkte, max) {
    if (!stand) return { sterne: 0, neu: false, besser: false };
    var s = levelSchluessel(kapId, levelNr);
    var alt = stand.level[s];
    var anteil = max > 0 ? punkte / max : 0;
    var sterne = anteil >= .9 ? 3 : anteil >= .75 ? 2 : anteil >= .55 ? 1 : 0;
    var besser = !alt || punkte > alt.punkte;
    stand.level[s] = {
      sterne: Math.max(sterne, alt ? alt.sterne : 0),
      punkte: besser ? punkte : alt.punkte,
      max: max,
      versuche: (alt ? alt.versuche : 0) + 1,
      datum: LP.heute()
    };
    sichere();
    return { sterne: sterne, neu: !alt, besser: besser };
  }

  function theorieGelesen(kapId) {
    if (!stand) return;
    stand.theorie[kapId] = true;
    sichere();
  }

  /* ---------- Kapitelstand ---------- */

  function kapitelStand(kap) {
    var erreicht = 0, moeglich = 0, sterne = 0, fertige = 0;
    kap.level.forEach(function (lv, i) {
      var st = levelStand(kap.id, i + 1);
      moeglich += 3;
      if (st) { sterne += st.sterne; erreicht += st.punkte; fertige += 1; }
    });
    return {
      sterne: sterne,
      maxSterne: moeglich,
      fertigeLevel: fertige,
      anzahlLevel: kap.level.length,
      anteil: moeglich ? sterne / moeglich : 0,
      theorie: !!(stand && stand.theorie[kap.id])
    };
  }

  /* Ein Level ist offen, wenn das vorherige Level mindestens einen Stern hat.
     Niemand soll festsitzen: ein Versuch reicht schon, um weiterzukommen. */
  function levelOffen(kap, levelNr) {
    if (levelNr <= 1) return true;
    var davor = levelStand(kap.id, levelNr - 1);
    return !!davor;
  }

  function kapitelOffen(kapIndex) {
    if (kapIndex === 0) return true;
    var davor = LP.kapitel[kapIndex - 1];
    if (!davor) return true;
    return !!levelStand(davor.id, 1);
  }

  /* ---------- Fehlerheft ---------- */

  function fehlerMerken(kapId, levelNr, index) {
    if (!stand) return;
    var da = stand.fehler.some(function (f) {
      return f.kapId === kapId && f.levelNr === levelNr && f.index === index;
    });
    if (!da) stand.fehler.push({ kapId: kapId, levelNr: levelNr, index: index, datum: LP.heute() });
    if (stand.fehler.length > 120) stand.fehler = stand.fehler.slice(-120);
    sichere();
  }

  function fehlerLoeschen(kapId, levelNr, index) {
    if (!stand) return;
    stand.fehler = stand.fehler.filter(function (f) {
      return !(f.kapId === kapId && f.levelNr === levelNr && f.index === index);
    });
    sichere();
  }

  /* ---------- Prüfungen ---------- */

  function pruefungSpeichern(id, punkte, max) {
    if (!stand) return;
    var anteil = max ? punkte / max : 0;
    var alt = stand.pruefungen[id];
    if (!alt || punkte > alt.punkte) {
      stand.pruefungen[id] = { punkte: punkte, max: max, datum: LP.heute(), note: LP.note(anteil) };
    }
    sichere();
  }

  function schreibtextSpeichern(id, text) {
    if (!stand) return;
    stand.schreibtexte[id] = { text: text, datum: LP.heute() };
    sichere();
  }

  /* ---------- Prüfungsbarometer ----------
     Wie weit bin ich? Gewichtet nach dem Punktegewicht des Kapitels in der
     echten Prüfung, nicht nach der Anzahl Kapitel. */

  function barometer() {
    var summe = 0, gewicht = 0;
    LP.kapitel.forEach(function (kap) {
      var g = kap.gewicht || 1;
      gewicht += g;
      summe += kapitelStand(kap).anteil * g;
    });
    return gewicht ? summe / gewicht : 0;
  }

  /* ---------- Export / Import ---------- */

  function alsText() {
    return JSON.stringify({
      art: 'kanti-lernpfad-stand',
      version: LP.version,
      profil: aktiv(),
      stand: stand
    }, null, 2);
  }

  function ausText(roh) {
    var daten = JSON.parse(roh);
    if (!daten || daten.art !== 'kanti-lernpfad-stand') throw new Error('Das ist keine Lernpfad-Datei.');
    var p = neuesProfil((daten.profil && daten.profil.name || 'Import') + ' (Import)',
                        daten.profil && daten.profil.avatar);
    stand = Object.assign(kopie(leer), daten.stand || {});
    sichere();
    return p;
  }

  return {
    AVATARE: AVATARE,
    RAENGE: RAENGE,
    alleProfile: function () { return profile.slice(); },
    aktiv: aktiv,
    stand: function () { return stand; },
    neuesProfil: neuesProfil,
    waehle: waehle,
    loesche: loesche,
    sichere: sichere,
    tagMelden: tagMelden,
    rangZu: rangZu,
    naechsterRang: naechsterRang,
    xpGeben: xpGeben,
    levelStand: levelStand,
    levelSpeichern: levelSpeichern,
    levelOffen: levelOffen,
    kapitelOffen: kapitelOffen,
    kapitelStand: kapitelStand,
    theorieGelesen: theorieGelesen,
    fehlerMerken: fehlerMerken,
    fehlerLoeschen: fehlerLoeschen,
    pruefungSpeichern: pruefungSpeichern,
    schreibtextSpeichern: schreibtextSpeichern,
    barometer: barometer,
    alsText: alsText,
    ausText: ausText
  };
})();
