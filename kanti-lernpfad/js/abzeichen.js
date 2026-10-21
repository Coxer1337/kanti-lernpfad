/* Abzeichen. Sie werden nach jedem abgeschlossenen Level geprüft; jedes
   Abzeichen weiss selbst, wann es verdient ist. */

LP.abzeichen = (function () {

  var liste = [
    { id: 'erster-schritt', bild: '👣', name: 'Erster Schritt', wie: 'Erstes Level geschafft',
      pruef: function (s) { return Object.keys(s.level).length >= 1; } },
    { id: 'fleissig', bild: '📚', name: 'Fleissig', wie: '10 Level geschafft',
      pruef: function (s) { return Object.keys(s.level).length >= 10; } },
    { id: 'ausdauernd', bild: '🧗', name: 'Ausdauernd', wie: '30 Level geschafft',
      pruef: function (s) { return Object.keys(s.level).length >= 30; } },
    { id: 'volle-punktzahl', bild: '💯', name: 'Voll dabei', wie: 'Ein Level ohne Fehler',
      pruef: function (s) { return werte(s.level).some(function (l) { return l.max > 0 && l.punkte >= l.max; }); } },
    { id: 'drei-sterne', bild: '⭐', name: 'Drei Sterne', wie: 'Erstes Level mit 3 Sternen',
      pruef: function (s) { return werte(s.level).some(function (l) { return l.sterne >= 3; }); } },
    { id: 'sternenhimmel', bild: '🌟', name: 'Sternenhimmel', wie: '25 Sterne gesammelt',
      pruef: function (s) { return sterne(s) >= 25; } },
    { id: 'sternenmeer', bild: '✨', name: 'Sternenmeer', wie: '100 Sterne gesammelt',
      pruef: function (s) { return sterne(s) >= 100; } },
    { id: 'streak3', bild: '🔥', name: 'Dranbleiber:in', wie: '3 Tage hintereinander geübt',
      pruef: function (s) { return s.streakTage >= 3; } },
    { id: 'streak7', bild: '🚀', name: 'Eine Woche', wie: '7 Tage hintereinander geübt',
      pruef: function (s) { return s.streakTage >= 7; } },
    { id: 'streak21', bild: '🏅', name: 'Gewohnheit', wie: '21 Tage hintereinander geübt',
      pruef: function (s) { return s.streakTage >= 21; } },

    { id: 'leser', bild: '📖', name: 'Textversteher:in', wie: 'Kapitel Textverständnis abgeschlossen',
      pruef: function (s) { return kapitelFertig(s, 'textverstaendnis'); } },
    { id: 'wortschatz', bild: '🔤', name: 'Wortschatz-Sammler:in', wie: 'Kapitel Synonyme abgeschlossen',
      pruef: function (s) { return kapitelFertig(s, 'synonyme'); } },
    { id: 'redensart', bild: '🗣️', name: 'Redewendungs-Profi', wie: 'Kapitel Redewendungen abgeschlossen',
      pruef: function (s) { return kapitelFertig(s, 'redewendungen'); } },
    { id: 'zeitreise', bild: '⏳', name: 'Zeitreisende:r', wie: 'Kapitel Zeitformen abgeschlossen',
      pruef: function (s) { return kapitelFertig(s, 'zeitformen'); } },
    { id: 'satzglied', bild: '🧩', name: 'Satzglied-Profi', wie: 'Kapitel Satzglieder abgeschlossen',
      pruef: function (s) { return kapitelFertig(s, 'satzglieder'); } },
    { id: 'komma', bild: '✒️', name: 'Komma-König:in', wie: 'Kapitel Zeichensetzung abgeschlossen',
      pruef: function (s) { return kapitelFertig(s, 'zeichensetzung'); } },
    { id: 'schreiber', bild: '✍️', name: 'Schreiber:in', wie: 'Erste vollständige Schreibaufgabe',
      pruef: function (s) { return Object.keys(s.schreibtexte || {}).length >= 1; } },

    { id: 'kanti-challenge', bild: '🏔️', name: 'Über dem Niveau', wie: 'Erste Kanti-Challenge mit 3 Sternen',
      pruef: function (s) {
        return Object.keys(s.level).some(function (k) {
          return k.split('.')[1] === '4' && s.level[k].sterne >= 3;
        });
      } },
    { id: 'probelauf', bild: '📝', name: 'Probelauf', wie: 'Erste Prüfungssimulation gelöst',
      pruef: function (s) { return Object.keys(s.pruefungen || {}).length >= 1; } },
    { id: 'bestanden', bild: '🎓', name: 'Bestanden', wie: 'Eine Prüfungssimulation mit Note 4 oder besser',
      pruef: function (s) {
        return werte(s.pruefungen || {}).some(function (p) { return p.note >= 4; });
      } },
    { id: 'glanzleistung', bild: '🏆', name: 'Glanzleistung', wie: 'Eine Prüfungssimulation mit Note 5,5 oder besser',
      pruef: function (s) {
        return werte(s.pruefungen || {}).some(function (p) { return p.note >= 5.5; });
      } },
    { id: 'aufgeraeumt', bild: '🧹', name: 'Aufgeräumt', wie: 'Fehlerheft einmal ganz geleert',
      pruef: function (s) { return s.fehlerJeLeer === true; } },
    { id: 'alles-gelesen', bild: '🧠', name: 'Theoretiker:in', wie: 'Alle Theorieseiten gelesen',
      pruef: function (s) {
        return LP.kapitel.length > 0 && LP.kapitel.every(function (k) { return s.theorie[k.id]; });
      } },
    { id: 'vollendet', bild: '👑', name: 'Lernpfad vollendet',
      wie: 'Jedes Kapitel mit mindestens 2 Sternen pro Level',
      pruef: function (s) {
        return LP.kapitel.length > 0 && LP.kapitel.every(function (kap) {
          return kap.level.every(function (lv, i) {
            var st = s.level[kap.id + '.' + (i + 1)];
            return st && st.sterne >= 2;
          });
        });
      } }
  ];

  function werte(o) { return Object.keys(o || {}).map(function (k) { return o[k]; }); }
  function sterne(s) { return werte(s.level).reduce(function (a, l) { return a + l.sterne; }, 0); }
  function kapitelFertig(s, kapId) {
    var kap = LP.kapitel.filter(function (k) { return k.id === kapId; })[0];
    if (!kap) return false;
    return kap.level.every(function (lv, i) { return !!s.level[kap.id + '.' + (i + 1)]; });
  }

  /* Gibt die neu verdienten Abzeichen zurück. */
  function pruefen() {
    var s = LP.fortschritt.stand();
    if (!s) return [];
    var neu = [];
    liste.forEach(function (a) {
      if (s.abzeichen[a.id]) return;
      var hat = false;
      try { hat = a.pruef(s); } catch (e) { hat = false; }
      if (hat) { s.abzeichen[a.id] = LP.heute(); neu.push(a); }
    });
    if (neu.length) LP.fortschritt.sichere();
    return neu;
  }

  return { liste: liste, pruefen: pruefen };
})();
