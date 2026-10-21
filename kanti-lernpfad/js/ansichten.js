/* Die Ansichten. Eine Bühne, ein Hash in der Adresszeile – so funktioniert
   auf dem iPad auch die Zurück-Geste. */

LP.ansichten = (function () {

  var buehne, kopf, kopfTitel, kopfUnter, zurueck;

  function start() {
    buehne = document.getElementById('buehne');
    kopf = document.getElementById('kopf');
    kopfTitel = document.getElementById('kopf-titel');
    kopfUnter = document.getElementById('kopf-unter');
    zurueck = document.getElementById('zurueck');
    zurueck.addEventListener('click', function () { history.back(); });
    document.getElementById('kopf-profil').addEventListener('click', function () { gehe('#/profil'); });
  }

  function gehe(hash) { location.hash = hash; }

  function setzeKopf(titel, unter, mitZurueck) {
    kopf.hidden = false;
    kopfTitel.textContent = titel;
    kopfUnter.textContent = unter || '';
    zurueck.hidden = !mitZurueck;
    var p = LP.fortschritt.aktiv(), s = LP.fortschritt.stand();
    document.getElementById('kopf-avatar').textContent = p ? p.avatar : '🙂';
    document.getElementById('kopf-xp').textContent = s ? (s.xp + ' XP') : '–';
  }

  function neueBuehne() { LP.leeren(buehne); window.scrollTo(0, 0); return buehne; }

  /* ===================== Bausteine ===================== */

  function balken(anteil, gruen) {
    return LP.el('span', { klasse: 'balken' + (gruen ? ' gruen' : '') }, [
      LP.el('i', { stil: { width: Math.round(Math.max(0, Math.min(1, anteil)) * 100) + '%' } })
    ]);
  }

  function sterneText(hat, max) {
    var s = '', i;
    for (i = 0; i < max; i++) s += i < hat ? '★' : '☆';
    return s;
  }

  function kachel(zahl, beschriftung) {
    return LP.el('div', { klasse: 'kachel' }, [
      LP.el('b', { text: String(zahl) }), LP.el('span', { text: beschriftung })
    ]);
  }

  function lesetext(id, zugeklappt) {
    var t = LP.texte[id];
    if (!t) return null;
    var kasten = LP.el('div', { klasse: 'lesetext' + (zugeklappt ? ' zu' : '') });
    kasten.appendChild(LP.el('h4', { html: t.titel + (t.art ? ' <span class="etikett grau">' + t.art + '</span>' : '') }));
    t.zeilen.forEach(function (zeile, i) {
      var nr = (i + 1) % 5 === 0 ? String(i + 1) : '';
      kasten.appendChild(LP.el('div', { klasse: 'zeile' }, [
        LP.el('span', { klasse: 'nr', text: nr }),
        LP.el('span', { html: zeile })
      ]));
    });
    if (t.quelle) kasten.appendChild(LP.el('p', { klasse: 'hinweis', stil: { marginTop: '10px' }, html: t.quelle }));
    var huelle = LP.el('div', {}, [kasten]);
    var schalter = LP.el('button', {
      klasse: 'text-schalter', type: 'button',
      text: zugeklappt ? '▾ Text ganz anzeigen' : '▴ Text einklappen',
      bei: { click: function () {
        var zu = kasten.classList.toggle('zu');
        schalter.textContent = zu ? '▾ Text ganz anzeigen' : '▴ Text einklappen';
      } }
    });
    huelle.appendChild(schalter);
    return huelle;
  }

  /* ===================== Startseite: der Lernpfad ===================== */

  function startseite() {
    var s = LP.fortschritt.stand();
    var p = LP.fortschritt.aktiv();
    setzeKopf('Kanti-Lernpfad', 'Deutsch · Aufnahmeprüfung aus der 2. Sek', false);
    var b = neueBuehne();

    var rang = LP.fortschritt.rangZu(s.xp);
    var naechst = LP.fortschritt.naechsterRang(s.xp);
    var barometer = LP.fortschritt.barometer();

    var held = LP.el('div', { klasse: 'held' }, [
      LP.el('h1', { text: 'Hallo ' + p.name + '!' }),
      LP.el('p', { text: rang.bild + ' ' + rang.name })
    ]);
    held.appendChild(LP.el('div', { klasse: 'held-zeile' }, [
      LP.el('div', { klasse: 'held-zahl' }, [LP.el('b', { text: String(s.xp) }), LP.el('span', { text: 'XP' })]),
      LP.el('div', { klasse: 'held-zahl' }, [LP.el('b', { text: '🔥 ' + s.streakTage }), LP.el('span', { text: s.streakTage === 1 ? 'Tag in Folge' : 'Tage in Folge' })]),
      LP.el('div', { klasse: 'held-zahl' }, [LP.el('b', { text: String(sterneGesamt(s)) }), LP.el('span', { text: 'Sterne' })]),
      LP.el('div', { klasse: 'held-zahl' }, [LP.el('b', { text: Math.round(barometer * 100) + '%' }), LP.el('span', { text: 'Prüfungsbarometer' })])
    ]));
    if (naechst) {
      var vorher = LP.fortschritt.rangZu(s.xp).ab;
      held.appendChild(LP.el('div', { klasse: 'rangleiste' }, [
        balken((s.xp - vorher) / (naechst.ab - vorher)),
        LP.el('p', { stil: { fontSize: '.78rem', marginTop: '6px' },
          text: 'Noch ' + (naechst.ab - s.xp) + ' XP bis ' + naechst.bild + ' ' + naechst.name })
      ]));
    }
    b.appendChild(held);

    /* Schnellzugriffe */
    var schnell = LP.el('div', { klasse: 'knopfreihe', stil: { marginBottom: '18px' } }, [
      LP.el('button', { klasse: 'knopf klein weich', text: '🏆 Abzeichen', bei: { click: function () { gehe('#/abzeichen'); } } }),
      LP.el('button', { klasse: 'knopf klein weich', text: '📕 Fehlerheft' + (s.fehler.length ? ' (' + s.fehler.length + ')' : ''), bei: { click: function () { gehe('#/fehlerheft'); } } }),
      LP.el('button', { klasse: 'knopf klein weich', text: '📝 Prüfung üben', bei: { click: function () { gehe('#/pruefungen'); } } }),
      LP.el('button', { klasse: 'knopf klein rand', text: 'ℹ️ Info', bei: { click: function () { gehe('#/info'); } } })
    ]);
    b.appendChild(schnell);

    /* Der Pfad */
    b.appendChild(LP.el('h2', { text: 'Dein Lernpfad' }));
    b.appendChild(LP.el('p', { klasse: 'hinweis', stil: { marginBottom: '16px' },
      text: 'Jedes Kapitel beginnt mit der Theorie und führt über drei Trainingsstufen bis auf Prüfungsniveau – und ein Stück darüber hinaus.' }));

    var pfad = LP.el('div', { klasse: 'pfad' });
    LP.kapitel.forEach(function (kap, i) {
      var st = LP.fortschritt.kapitelStand(kap);
      var offen = LP.fortschritt.kapitelOffen(i);
      var fertig = st.fertigeLevel === st.anzahlLevel;
      var zustand = fertig ? 'fertig' : offen ? 'offen' : 'zu';

      function oeffne() {
        if (offen) return gehe('#/kapitel/' + kap.id);
        /* Das Schloss zeigt den empfohlenen Weg an – es sperrt niemanden aus.
           Wer gezielt ein Thema üben will (oder die Lehrperson), kommt rein. */
        LP.bestaetige(
          'Kapitel ' + kap.nr + ' ist noch nicht an der Reihe',
          'Der Lernpfad empfiehlt, zuerst die früheren Kapitel zu üben. Du kannst «' + kap.titel +
          '» aber jederzeit trotzdem öffnen.',
          'Trotzdem öffnen',
          function () { gehe('#/kapitel/' + kap.id); }
        );
      }

      var karte = LP.el('div', {
        klasse: 'station-karte', role: 'button', tabindex: '0',
        bei: {
          click: oeffne,
          keydown: function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); oeffne(); } }
        }
      }, [
        LP.el('div', { klasse: 'station-kopf' }, [
          LP.el('span', { klasse: 'station-titel', text: kap.nr + '. ' + kap.titel }),
          LP.el('span', { klasse: 'station-meta', text: kap.pruefungsgewicht })
        ]),
        LP.el('div', { klasse: 'station-kurz', text: kap.kurz }),
        LP.el('div', { klasse: 'station-fuss' }, [
          LP.el('span', { klasse: 'sterne', text: '★ ' + st.sterne + '/' + st.maxSterne }),
          balken(st.anteil, fertig),
          LP.el('span', { text: st.fertigeLevel + '/' + st.anzahlLevel + ' Stufen' })
        ])
      ]);

      pfad.appendChild(LP.el('div', { klasse: 'station ' + zustand }, [
        LP.el('div', { klasse: 'station-kreis', text: offen ? kap.bild : '🔒',
          title: offen ? kap.titel : 'noch nicht an der Reihe – antippen geht trotzdem' }),
        karte
      ]));
    });
    b.appendChild(pfad);

    /* Prüfungen am Ende des Pfads */
    var alleFertig = LP.kapitel.every(function (kap) {
      return LP.fortschritt.kapitelStand(kap).fertigeLevel > 0;
    });
    b.appendChild(LP.el('div', { klasse: 'karte', stil: { marginTop: '18px' } }, [
      LP.el('h2', { text: '🎯 Die Zielgerade' }),
      LP.el('p', { klasse: 'hinweis', text: alleFertig
        ? 'Du hast in jedem Kapitel geübt. Jetzt die ganze Prüfung am Stück – 40 Minuten, wie im Ernstfall.'
        : 'Hier wartet die vollständige Sprachprüfung unter Zeitdruck. Du kannst jederzeit hineinschauen, am meisten bringt sie aber, wenn du die Kapitel geübt hast.' }),
      LP.el('button', { klasse: 'knopf breit', text: '📝 Prüfungssimulationen', bei: { click: function () { gehe('#/pruefungen'); } } })
    ]));
  }

  function sterneGesamt(s) {
    return Object.keys(s.level).reduce(function (a, k) { return a + s.level[k].sterne; }, 0);
  }

  /* ===================== Kapitelansicht ===================== */

  function kapitelAnsicht(kapId) {
    var kap = kapitelMit(kapId);
    if (!kap) return gehe('#/');
    var st = LP.fortschritt.kapitelStand(kap);
    setzeKopf(kap.nr + '. ' + kap.titel, kap.pruefungsgewicht, true);
    var b = neueBuehne();

    b.appendChild(LP.el('div', { klasse: 'karte' }, [
      LP.el('h1', { text: kap.bild + ' ' + kap.titel }),
      LP.el('p', { text: kap.kurz }),
      LP.el('p', { klasse: 'hinweis', html: '<b>In der Prüfung:</b> ' + kap.inPruefung }),
      LP.el('div', { klasse: 'station-fuss' }, [
        LP.el('span', { klasse: 'sterne', text: '★ ' + st.sterne + ' von ' + st.maxSterne + ' Sternen' }),
        balken(st.anteil, st.fertigeLevel === st.anzahlLevel)
      ])
    ]));

    /* Theoriestation */
    b.appendChild(LP.el('div', { klasse: 'station ' + (st.theorie ? 'fertig' : 'offen') }, [
      LP.el('div', { klasse: 'station-kreis', text: st.theorie ? '✓' : '💡' }),
      LP.el('div', {
        klasse: 'station-karte', role: 'button', tabindex: '0',
        bei: {
          click: function () { gehe('#/theorie/' + kap.id); },
          keydown: function (e) { if (e.key === 'Enter') gehe('#/theorie/' + kap.id); }
        }
      }, [
        LP.el('div', { klasse: 'station-kopf' }, [
          LP.el('span', { klasse: 'station-titel', text: 'Theorie: So geht das' }),
          LP.el('span', { klasse: 'station-meta', text: st.theorie ? 'gelesen' : 'Start hier' })
        ]),
        LP.el('div', { klasse: 'station-kurz', text: kap.theorieKurz || 'Alles, was du für dieses Kapitel wissen musst – kurz und mit Beispielen.' })
      ])
    ]));

    /* Levelstationen */
    kap.level.forEach(function (lv, i) {
      var nr = i + 1;
      var stand = LP.fortschritt.levelStand(kap.id, nr);
      var offen = LP.fortschritt.levelOffen(kap, nr);
      var zustand = stand ? 'fertig' : offen ? 'offen' : 'zu';
      var punkteGesamt = lv.aufgaben.reduce(function (a, x) { return a + LP.aufgaben.maxPunkte(x); }, 0);

      b.appendChild(LP.el('div', { klasse: 'station ' + zustand }, [
        LP.el('div', { klasse: 'station-kreis', text: offen ? lv.bild : '🔒' }),
        LP.el('div', {
          klasse: 'station-karte', role: 'button', tabindex: '0',
          bei: {
            click: function () { oeffneStufe(kap, lv, nr, offen); },
            keydown: function (e) { if (e.key === 'Enter') oeffneStufe(kap, lv, nr, offen); }
          }
        }, [
          LP.el('div', { klasse: 'station-kopf' }, [
            LP.el('span', { klasse: 'station-titel', text: 'Stufe ' + nr + ': ' + lv.titel }),
            LP.el('span', { klasse: 'etikett ' + lv.farbe, text: lv.niveau })
          ]),
          LP.el('div', { klasse: 'station-kurz', text: lv.kurz }),
          LP.el('div', { klasse: 'station-fuss' }, [
            LP.el('span', { klasse: 'sterne', text: sterneText(stand ? stand.sterne : 0, 3) }),
            LP.el('span', { text: lv.aufgaben.length + ' Aufgaben · ' + LP.punkteText(punkteGesamt) + ' Punkte' }),
            stand ? LP.el('span', { text: 'best: ' + LP.punkteText(stand.punkte) }) : null
          ])
        ])
      ]));
    });
  }

  function oeffneStufe(kap, lv, nr, offen) {
    if (offen) return gehe('#/level/' + kap.id + '/' + nr);
    LP.bestaetige(
      'Stufe ' + nr + ' ist noch nicht an der Reihe',
      'Diese Stufe baut auf der vorherigen auf. Öffnen kannst du sie trotzdem – zurück geht es jederzeit.',
      'Trotzdem öffnen',
      function () { gehe('#/level/' + kap.id + '/' + nr); }
    );
  }

  function kapitelMit(id) {
    return LP.kapitel.filter(function (k) { return k.id === id; })[0];
  }

  /* ===================== Theorie ===================== */

  function theorieAnsicht(kapId) {
    var kap = kapitelMit(kapId);
    if (!kap) return gehe('#/');
    setzeKopf('Theorie', kap.titel, true);
    var b = neueBuehne();
    var k = LP.el('div', { klasse: 'karte theorie schmal' });
    k.appendChild(LP.el('h1', { text: kap.bild + ' ' + kap.titel }));
    kap.theorie.forEach(function (block) {
      var teil = LP.el('div', { klasse: 'theorie-block' });
      if (block.titel) teil.appendChild(LP.el('h2', { text: block.titel }));
      teil.appendChild(LP.el('div', { html: block.html }));
      k.appendChild(teil);
    });
    b.appendChild(k);

    b.appendChild(LP.el('button', {
      klasse: 'knopf breit', text: 'Verstanden – los üben! →',
      bei: { click: function () {
        LP.fortschritt.theorieGelesen(kap.id);
        var neu = LP.abzeichen.pruefen();
        neu.forEach(function (a) { LP.toast(a.bild + ' Abzeichen: ' + a.name, 3000); });
        gehe('#/level/' + kap.id + '/1');
      } }
    }));
  }

  /* ===================== Level durchspielen ===================== */

  function levelAnsicht(kapId, levelNr) {
    var kap = kapitelMit(kapId);
    if (!kap) return gehe('#/');
    var lv = kap.level[levelNr - 1];
    if (!lv) return gehe('#/kapitel/' + kapId);
    laufLauf({
      titel: 'Stufe ' + levelNr + ': ' + lv.titel,
      unter: kap.titel,
      aufgaben: lv.aufgaben,
      sofortFeedback: true,
      kapId: kap.id,
      levelNr: levelNr,
      xpFaktor: lv.xpFaktor || 1,
      zurueckZu: '#/kapitel/' + kapId,
      fertig: function (ergebnis) { levelAuswertung(kap, levelNr, lv, ergebnis); }
    });
  }

  /* Der gemeinsame Ablauf für Level und Prüfung. */
  function laufLauf(auftrag) {
    var i = 0;
    var ergebnisse = [];
    var startZeit = Date.now();
    var tippsBenutzt = 0;

    function zeigeAufgabe() {
      var a = auftrag.aufgaben[i];
      setzeKopf(auftrag.titel, 'Aufgabe ' + (i + 1) + ' von ' + auftrag.aufgaben.length, true);
      var b = neueBuehne();

      var gesamt = auftrag.aufgaben.length;
      b.appendChild(LP.el('div', { klasse: 'fortschrittszeile' }, [
        LP.el('span', { text: (i + 1) + '/' + gesamt }),
        balken(i / gesamt),
        auftrag.uhr ? auftrag.uhr() : LP.el('span', { text: LP.punkteText(summe(ergebnisse)) + ' P.' })
      ]));

      if (a.text) {
        var lt = lesetext(a.text, i > 0 || a.textZu);
        if (lt) b.appendChild(lt);
      }

      var karte = LP.el('div', { klasse: 'karte' });
      karte.appendChild(LP.el('span', { klasse: 'aufgabe-punkte',
        text: LP.punkteText(LP.aufgaben.maxPunkte(a)) + (LP.aufgaben.maxPunkte(a) === 1 ? ' Punkt' : ' Punkte') }));
      karte.appendChild(LP.el('div', { klasse: 'aufgabe-nr', text: 'Aufgabe ' + (i + 1) }));
      var feld = LP.el('div');
      karte.appendChild(feld);
      b.appendChild(karte);

      var pruefKnopf = LP.el('button', { klasse: 'knopf', text: 'Prüfen', disabled: true });
      var tippKnopf = a.tipp ? LP.el('button', { klasse: 'knopf rand', text: '💡 Tipp' }) : null;
      var fuss = LP.el('div', { klasse: 'aufgaben-fuss' }, [tippKnopf, pruefKnopf].filter(Boolean));
      b.appendChild(fuss);

      var steuerung = LP.aufgaben.zeichne(a, feld, function (bereit) { pruefKnopf.disabled = !bereit; });

      if (tippKnopf) {
        tippKnopf.addEventListener('click', function () {
          tippKnopf.disabled = true;
          tippsBenutzt++;
          karte.appendChild(LP.el('div', { klasse: 'merksatz', html: '<b>Tipp:</b> ' + a.tipp }));
        });
      }

      pruefKnopf.addEventListener('click', function () {
        var e = steuerung.pruefe();
        e.aufgabe = a;
        e.index = i;
        pruefKnopf.disabled = true;

        if (e.selbstcheck) {
          selbstEinschaetzung(a, e, karte, fuss, weiter);
        } else {
          ergebnisse.push(e);
          if (auftrag.sofortFeedback) {
            zeigeRueckmeldung(a, e, karte);
            ersetzeFuss(fuss, weiter);
          } else {
            weiter();
          }
        }

        function weiter() {
          if (e.selbstcheck && ergebnisse.indexOf(e) < 0) ergebnisse.push(e);
          merkeFehler(auftrag, e);
          i++;
          if (i < auftrag.aufgaben.length) zeigeAufgabe();
          else auftrag.fertig({
            ergebnisse: ergebnisse,
            punkte: summe(ergebnisse),
            max: auftrag.aufgaben.reduce(function (s, x) { return s + LP.aufgaben.maxPunkte(x); }, 0),
            sekunden: Math.round((Date.now() - startZeit) / 1000),
            tipps: tippsBenutzt
          });
        }
      });
    }

    function ersetzeFuss(fuss, weiter) {
      LP.leeren(fuss);
      var k = LP.el('button', {
        klasse: 'knopf gruen',
        text: i + 1 < auftrag.aufgaben.length ? 'Weiter →' : 'Auswertung ansehen →',
        bei: { click: weiter }
      });
      fuss.appendChild(k);
      k.focus();
    }

    function selbstEinschaetzung(a, e, karte, fuss, weiter) {
      var offen = e.abschnitte.length;
      e.punkte = 0;

      var kasten = LP.el('div', { klasse: 'rueckmeldung halb' });
      kasten.appendChild(LP.el('div', { klasse: 'rueckmeldung-kopf', text: '✍️ Vergleiche selbst' }));
      kasten.appendChild(LP.el('p', { klasse: 'hinweis',
        text: 'Offene Antworten kann kein Programm zuverlässig beurteilen. Vergleiche deine Antwort mit der Musterlösung und sei ehrlich – nur so hilft dir die Auswertung weiter.' }));

      e.abschnitte.forEach(function (ab) {
        var teil = LP.el('div', { stil: { marginTop: '12px', paddingTop: '12px', borderTop: '1px dashed var(--karte-rand)' } });
        if (ab.frage) teil.appendChild(LP.el('p', { html: '<b>' + ab.frage + '</b>' }));
        if (ab.anzahlSchluessel) {
          teil.appendChild(LP.el('p', { klasse: 'hinweis',
            text: 'Schlüsselbegriffe gefunden: ' + ab.treffer.length + ' von ' + ab.anzahlSchluessel +
                  (ab.treffer.length ? ' (' + ab.treffer.join(', ') + ')' : '') }));
        }
        if (ab.musterloesung) {
          teil.appendChild(LP.el('p', { html: '<span class="loesung">' + (ab.label || 'Mögliche Lösung:') + '</span> ' + ab.musterloesung }));
        }
        if (ab.kriterien) {
          var liste = LP.el('ul');
          ab.kriterien.forEach(function (k) { liste.appendChild(LP.el('li', { html: k })); });
          teil.appendChild(LP.el('p', { html: '<b>Darauf kommt es an:</b>' }));
          teil.appendChild(liste);
        }
        var wahl = LP.el('div', { klasse: 'selbstcheck' });
        [{ t: '✅ Getroffen', f: 1 }, { t: '➗ Teilweise', f: .5 }, { t: '❌ Noch nicht', f: 0 }].forEach(function (o) {
          wahl.appendChild(LP.el('button', {
            klasse: 'knopf klein ' + (o.f === 1 ? 'gruen' : 'rand'), text: o.t,
            bei: { click: function () {
              e.punkte += Math.round(ab.max * o.f * 4) / 4;
              LP.leeren(wahl);
              wahl.appendChild(LP.el('span', { klasse: 'etikett',
                text: o.t + ' · ' + LP.punkteText(Math.round(ab.max * o.f * 4) / 4) + '/' + LP.punkteText(ab.max) }));
              offen--;
              if (offen === 0) {
                if (a.id) LP.fortschritt.schreibtextSpeichern(a.id, e.eigenerText || '');
                if (a.erklaerung) kasten.appendChild(LP.el('p', { html: a.erklaerung }));
                if (a.punktregel) kasten.appendChild(LP.el('div', { klasse: 'punktregel', html: '📋 Punkteregel der Prüfung: ' + a.punktregel }));
                ersetzeFuss(fuss, weiter);
              }
            } }
          }));
        });
        teil.appendChild(wahl);
        kasten.appendChild(teil);
      });

      karte.appendChild(kasten);
      kasten.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    zeigeAufgabe();
  }

  function summe(liste) {
    return liste.reduce(function (s, e) { return s + (e.punkte || 0); }, 0);
  }

  function merkeFehler(auftrag, e) {
    if (!auftrag.kapId) return;
    if (e.max > 0 && e.punkte < e.max * .6) LP.fortschritt.fehlerMerken(auftrag.kapId, auftrag.levelNr, e.index);
    else LP.fortschritt.fehlerLoeschen(auftrag.kapId, auftrag.levelNr, e.index);
  }

  /* ===================== Rückmeldung zu einer Aufgabe ===================== */

  function zeigeRueckmeldung(a, e, karte) {
    var anteil = e.max > 0 ? e.punkte / e.max : 0;
    var art = anteil >= .999 ? 'gut' : anteil > 0 ? 'halb' : 'schlecht';
    var titel = anteil >= .999 ? ['Richtig!', 'Genau so!', 'Sitzt!', 'Perfekt!'][Math.floor(Math.random() * 4)]
              : anteil > 0 ? 'Fast – teilweise richtig'
              : 'Noch nicht ganz';
    var zeichen = anteil >= .999 ? '✅' : anteil > 0 ? '➗' : '❌';

    var kasten = LP.el('div', { klasse: 'rueckmeldung ' + art });
    kasten.appendChild(LP.el('div', { klasse: 'rueckmeldung-kopf' }, [
      LP.el('span', { text: zeichen + ' ' + titel }),
      LP.el('span', { klasse: 'etikett ' + (art === 'gut' ? 'gruen' : art === 'halb' ? 'gold' : 'rot'),
        text: LP.punkteText(e.punkte) + ' / ' + LP.punkteText(e.max) })
    ]));

    if (e.schreibfehler) {
      kasten.appendChild(LP.el('p', { html: '<b>Achtung Rechtschreibung:</b> ' + e.schreibfehler +
        (e.schreibfehler === 1 ? ' Antwort war' : ' Antworten waren') +
        ' inhaltlich richtig, aber falsch geschrieben. In der Prüfung kostet das pro Wort einen halben Punkt.' }));
    }
    if (anteil < .999 && e.loesungText) {
      kasten.appendChild(LP.el('p', { html: '<span class="loesung">Lösung:</span> ' + e.loesungText }));
    }
    if (a.erklaerung) kasten.appendChild(LP.el('p', { html: a.erklaerung }));
    if (a.punktregel) {
      kasten.appendChild(LP.el('div', { klasse: 'punktregel', html: '📋 Punkteregel der Prüfung: ' + a.punktregel }));
    }
    karte.appendChild(kasten);
    kasten.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  /* ===================== Auswertung eines Levels ===================== */

  function levelAuswertung(kap, levelNr, lv, ergebnis) {
    var anteil = ergebnis.max > 0 ? ergebnis.punkte / ergebnis.max : 0;
    var gespeichert = LP.fortschritt.levelSpeichern(kap.id, levelNr, ergebnis.punkte, ergebnis.max);
    /* Gedeckelt, damit eine grosszügige Selbsteinschätzung keine XP-Quelle wird. */
    var xp = Math.round((20 + ergebnis.punkte * 6) * (lv.xpFaktor || 1) - ergebnis.tipps * 4);
    xp = Math.max(5, Math.min(140, xp));
    /* Wo alles selbst eingeschätzt wurde, ist eine Note nicht ehrlich. */
    var nurSelbstcheck = ergebnis.ergebnisse.every(function (e) { return e.selbstcheck; });
    var xpErgebnis = LP.fortschritt.xpGeben(xp);
    LP.fortschritt.tagMelden();
    var neueAbzeichen = LP.abzeichen.pruefen();

    setzeKopf('Auswertung', kap.titel + ' · Stufe ' + levelNr, true);
    var b = neueBuehne();

    var emoji = gespeichert.sterne === 3 ? '🎉' : gespeichert.sterne === 2 ? '😃' : gespeichert.sterne === 1 ? '🙂' : '💪';
    var spruch = gespeichert.sterne === 3 ? 'Spitze! Das sitzt.'
      : gespeichert.sterne === 2 ? 'Gut gemacht – fast alles richtig.'
      : gespeichert.sterne === 1 ? 'Solide. Noch einmal, dann sitzt es.'
      : 'Das war schwer. Schau nochmal in die Theorie und versuch es erneut – das ist normal.';

    b.appendChild(LP.el('div', { klasse: 'karte ergebnis' }, [
      LP.el('div', { klasse: 'emoji', text: emoji }),
      LP.el('div', { klasse: 'punkte', html: LP.punkteText(ergebnis.punkte) + ' <small>von ' + LP.punkteText(ergebnis.max) + ' Punkten</small>' }),
      LP.el('div', { klasse: 'sterne', text: sterneText(gespeichert.sterne, 3) }),
      LP.el('div', { klasse: 'note', text: nurSelbstcheck
        ? 'selbst eingeschätzt – eine Note ergibt hier keinen Sinn'
        : 'entspricht Note ' + LP.noteText(anteil) }),
      LP.el('p', { stil: { marginTop: '10px' }, text: nurSelbstcheck
        ? 'Lass deinen Text von jemandem gegenlesen, der dich nicht schont. Beim eigenen Aufsatz sieht man die Lücken am schlechtesten.'
        : spruch })
    ]));

    var belohnung = LP.el('div', { klasse: 'belohnung' }, [
      LP.el('div', { klasse: 'gewinn', text: '+' + xp + ' XP' })
    ]);
    if (gespeichert.besser && !gespeichert.neu) belohnung.appendChild(LP.el('div', { klasse: 'gewinn', text: '🔝 Neue Bestleistung' }));
    if (xpErgebnis.rangAuf) belohnung.appendChild(LP.el('div', { klasse: 'gewinn', text: xpErgebnis.rangAuf.bild + ' ' + xpErgebnis.rangAuf.name }));
    neueAbzeichen.forEach(function (a) { belohnung.appendChild(LP.el('div', { klasse: 'gewinn', text: a.bild + ' ' + a.name })); });
    b.appendChild(belohnung);

    b.appendChild(aufgabenRueckblick(ergebnis));

    var naechstesLevel = kap.level[levelNr];
    var naechstesKapitel = LP.kapitel[LP.kapitel.indexOf(kap) + 1];
    var reihe = LP.el('div', { klasse: 'knopfreihe abstand' });
    if (anteil < .75) {
      reihe.appendChild(LP.el('button', { klasse: 'knopf', text: '🔁 Stufe wiederholen',
        bei: { click: function () { levelAnsicht(kap.id, levelNr); } } }));
    }
    if (naechstesLevel) {
      reihe.appendChild(LP.el('button', { klasse: anteil < .75 ? 'knopf rand' : 'knopf', text: 'Nächste Stufe →',
        bei: { click: function () { gehe('#/level/' + kap.id + '/' + (levelNr + 1)); } } }));
    } else if (naechstesKapitel) {
      reihe.appendChild(LP.el('button', { klasse: 'knopf', text: 'Nächstes Kapitel: ' + naechstesKapitel.titel + ' →',
        bei: { click: function () { gehe('#/kapitel/' + naechstesKapitel.id); } } }));
    }
    reihe.appendChild(LP.el('button', { klasse: 'knopf rand', text: 'Zur Übersicht',
      bei: { click: function () { gehe('#/kapitel/' + kap.id); } } }));
    b.appendChild(reihe);
  }

  function aufgabenRueckblick(ergebnis) {
    var k = LP.el('div', { klasse: 'karte' });
    k.appendChild(LP.el('h2', { text: 'Aufgabe für Aufgabe' }));
    var liste = LP.el('div', { klasse: 'fehlerliste' });
    ergebnis.ergebnisse.forEach(function (e, i) {
      var anteil = e.max > 0 ? e.punkte / e.max : 0;
      var zeichen = anteil >= .999 ? '✅' : anteil > 0 ? '➗' : '❌';
      liste.appendChild(LP.el('div', { klasse: 'fehlerzeile' }, [
        LP.el('span', { klasse: 'zeichen', text: zeichen }),
        LP.el('div', { stil: { flex: '1' } }, [
          LP.el('div', { html: '<b>Aufgabe ' + (i + 1) + ':</b> ' + kurzTitel(e.aufgabe) }),
          anteil < .999 && e.loesungText
            ? LP.el('div', { klasse: 'hinweis', html: 'Lösung: ' + e.loesungText })
            : null
        ]),
        LP.el('span', { klasse: 'hinweis', text: LP.punkteText(e.punkte) + '/' + LP.punkteText(e.max) })
      ]));
    });
    k.appendChild(liste);
    return k;
  }

  function kurzTitel(a) {
    var t = (a.kurz || a.frage || a.anweisung || '').replace(/<[^>]+>/g, '');
    return t.length > 90 ? t.slice(0, 88) + '…' : t;
  }

  /* ===================== Prüfungen ===================== */

  function pruefungsListe() {
    setzeKopf('Prüfungssimulationen', 'Teil 1 · 40 Minuten', true);
    var b = neueBuehne();
    var s = LP.fortschritt.stand();

    b.appendChild(LP.el('div', { klasse: 'karte' }, [
      LP.el('h1', { text: '📝 Die ganze Prüfung' }),
      LP.el('p', { text: 'Jede Simulation ist nach demselben Bauplan gebaut wie die Aufnahmeprüfungen 2022 bis 2024: ein Lesetext, danach Aufgaben zu Textverständnis, Wortschatz, Grammatik und Satzbau.' }),
      LP.el('p', { klasse: 'hinweis', html: 'Hier gibt es <b>keine Rückmeldung zwischendurch</b> – wie im Ernstfall. Die Lösungen kommen alle am Schluss.' })
    ]));

    LP.pruefungen.forEach(function (pr) {
      var stand = s.pruefungen[pr.id];
      var max = pr.aufgaben.reduce(function (a, x) { return a + LP.aufgaben.maxPunkte(x); }, 0);
      b.appendChild(LP.el('div', { klasse: 'karte' }, [
        LP.el('div', { klasse: 'station-kopf' }, [
          LP.el('h2', { stil: { margin: '0' }, text: pr.titel }),
          LP.el('span', { klasse: 'etikett ' + (stand ? 'gruen' : 'grau'),
            text: stand ? 'Note ' + stand.note.toFixed(2).replace('.', ',') : 'noch offen' })
        ]),
        LP.el('p', { klasse: 'hinweis', text: pr.kurz }),
        LP.el('p', { klasse: 'hinweis', text: pr.aufgaben.length + ' Aufgaben · ' + LP.punkteText(max) + ' Punkte · ' + pr.minuten + ' Minuten' }),
        stand ? LP.el('p', { klasse: 'hinweis', text: 'Bestes Ergebnis: ' + LP.punkteText(stand.punkte) + '/' + LP.punkteText(stand.max) + ' am ' + stand.datum }) : null,
        LP.el('button', { klasse: 'knopf breit', text: stand ? 'Nochmals schreiben' : 'Prüfung starten',
          bei: { click: function () { gehe('#/pruefung/' + pr.id); } } })
      ]));
    });

    b.appendChild(LP.el('div', { klasse: 'karte' }, [
      LP.el('h2', { text: '✍️ Teil 2: die Schreibaufgabe' }),
      LP.el('p', { klasse: 'hinweis', html: 'Der Aufsatz zählt <b>zwei Drittel</b> der Deutschnote und dauert 75 Minuten. Er wird im Kapitel «Schreibaufgabe» geübt – mit Schreibplan, Checkliste und Beurteilungsraster.' }),
      LP.el('button', { klasse: 'knopf weich breit', text: 'Zum Schreib-Kapitel',
        bei: { click: function () { gehe('#/kapitel/schreibaufgabe'); } } })
    ]));
  }

  function pruefungAnsicht(id) {
    var pr = LP.pruefungen.filter(function (p) { return p.id === id; })[0];
    if (!pr) return gehe('#/pruefungen');

    var ende = Date.now() + pr.minuten * 60000;
    var uhrFeld = null;
    var ticker = setInterval(function () {
      if (!uhrFeld || !document.body.contains(uhrFeld)) return;
      var rest = Math.max(0, Math.round((ende - Date.now()) / 1000));
      uhrFeld.textContent = '⏱ ' + Math.floor(rest / 60) + ':' + ('0' + (rest % 60)).slice(-2);
      uhrFeld.style.color = rest < 300 ? 'var(--rot)' : '';
    }, 1000);

    laufLauf({
      titel: pr.titel,
      aufgaben: pr.aufgaben,
      sofortFeedback: false,
      uhr: function () {
        uhrFeld = LP.el('span', { stil: { fontWeight: '650' }, text: '⏱ ' + pr.minuten + ':00' });
        return uhrFeld;
      },
      fertig: function (ergebnis) {
        clearInterval(ticker);
        pruefungAuswertung(pr, ergebnis);
      }
    });
  }

  function pruefungAuswertung(pr, ergebnis) {
    var anteil = ergebnis.max > 0 ? ergebnis.punkte / ergebnis.max : 0;
    LP.fortschritt.pruefungSpeichern(pr.id, ergebnis.punkte, ergebnis.max);
    var xp = Math.round(60 + ergebnis.punkte * 4);
    var xpErgebnis = LP.fortschritt.xpGeben(xp);
    LP.fortschritt.tagMelden();
    var neueAbzeichen = LP.abzeichen.pruefen();

    setzeKopf('Prüfungsergebnis', pr.titel, true);
    var b = neueBuehne();
    var note = LP.note(anteil);

    b.appendChild(LP.el('div', { klasse: 'karte ergebnis' }, [
      LP.el('div', { klasse: 'emoji', text: note >= 5 ? '🏆' : note >= 4 ? '🎓' : '💪' }),
      LP.el('div', { klasse: 'punkte', html: LP.punkteText(ergebnis.punkte) + ' <small>von ' + LP.punkteText(ergebnis.max) + '</small>' }),
      LP.el('div', { stil: { fontSize: '1.6rem', fontWeight: '700', margin: '8px 0' },
        text: 'Note ' + LP.noteText(anteil) }),
      LP.el('div', { klasse: 'note', text: note >= 4 ? 'Das wäre bestanden.' : 'Das reicht noch nicht – aber dafür übst du ja.' }),
      LP.el('p', { klasse: 'hinweis', stil: { marginTop: '10px' },
        text: 'Gebraucht: ' + Math.floor(ergebnis.sekunden / 60) + ' Minuten von ' + pr.minuten + '.' })
    ]));

    var belohnung = LP.el('div', { klasse: 'belohnung' }, [LP.el('div', { klasse: 'gewinn', text: '+' + xp + ' XP' })]);
    if (xpErgebnis.rangAuf) belohnung.appendChild(LP.el('div', { klasse: 'gewinn', text: xpErgebnis.rangAuf.bild + ' ' + xpErgebnis.rangAuf.name }));
    neueAbzeichen.forEach(function (a) { belohnung.appendChild(LP.el('div', { klasse: 'gewinn', text: a.bild + ' ' + a.name })); });
    b.appendChild(belohnung);

    /* Welches Kapitel sollte ich nochmal anschauen? */
    var schwach = {};
    ergebnis.ergebnisse.forEach(function (e) {
      var kid = e.aufgabe.kapId;
      if (!kid) return;
      if (!schwach[kid]) schwach[kid] = { punkte: 0, max: 0 };
      schwach[kid].punkte += e.punkte || 0;
      schwach[kid].max += e.max;
    });
    var empfehlungen = Object.keys(schwach)
      .map(function (kid) {
        return { kap: kapitelMit(kid), anteil: schwach[kid].max ? schwach[kid].punkte / schwach[kid].max : 1 };
      })
      .filter(function (x) { return x.kap && x.anteil < .75; })
      .sort(function (a, b2) { return a.anteil - b2.anteil; });

    if (empfehlungen.length) {
      var k = LP.el('div', { klasse: 'karte' });
      k.appendChild(LP.el('h2', { text: '🎯 Daran lohnt es sich zu arbeiten' }));
      empfehlungen.slice(0, 4).forEach(function (x) {
        k.appendChild(LP.el('button', {
          klasse: 'knopf weich breit', stil: { marginBottom: '8px' },
          text: x.kap.bild + ' ' + x.kap.titel + ' (' + Math.round(x.anteil * 100) + '%)',
          bei: { click: function () { gehe('#/kapitel/' + x.kap.id); } }
        }));
      });
      b.appendChild(k);
    }

    b.appendChild(aufgabenRueckblick(ergebnis));
    b.appendChild(LP.el('div', { klasse: 'knopfreihe abstand' }, [
      LP.el('button', { klasse: 'knopf', text: 'Zur Übersicht', bei: { click: function () { gehe('#/'); } } }),
      LP.el('button', { klasse: 'knopf rand', text: 'Weitere Prüfung', bei: { click: function () { gehe('#/pruefungen'); } } })
    ]));
  }

  /* ===================== Fehlerheft ===================== */

  function fehlerheft() {
    setzeKopf('Fehlerheft', 'Was noch nicht sitzt', true);
    var b = neueBuehne();
    var s = LP.fortschritt.stand();

    if (!s.fehler.length) {
      b.appendChild(LP.el('div', { klasse: 'karte mitte' }, [
        LP.el('div', { stil: { fontSize: '52px' }, text: '🧹' }),
        LP.el('h2', { text: 'Nichts offen' }),
        LP.el('p', { klasse: 'hinweis', text: 'Hier sammeln sich Aufgaben, bei denen du weniger als 60 % erreicht hast. Im Moment ist das Heft leer.' })
      ]));
      if (Object.keys(s.level).length > 0 && !s.fehlerJeLeer) {
        s.fehlerJeLeer = true;
        LP.fortschritt.sichere();
        LP.abzeichen.pruefen().forEach(function (a) { LP.toast(a.bild + ' Abzeichen: ' + a.name, 3000); });
      }
      return;
    }

    b.appendChild(LP.el('div', { klasse: 'karte' }, [
      LP.el('h1', { text: '📕 Dein Fehlerheft' }),
      LP.el('p', { text: s.fehler.length + ' Aufgaben warten auf eine zweite Runde. Sie kommen aus allen Kapiteln gemischt – genau wie in der Prüfung.' }),
      LP.el('button', { klasse: 'knopf breit', text: '🔁 Alle nochmal üben',
        bei: { click: function () { fehlerUeben(); } } })
    ]));

    var nachKapitel = {};
    s.fehler.forEach(function (f) {
      if (!nachKapitel[f.kapId]) nachKapitel[f.kapId] = [];
      nachKapitel[f.kapId].push(f);
    });
    var liste = LP.el('div', { klasse: 'karte' });
    liste.appendChild(LP.el('h2', { text: 'Verteilung' }));
    var ul = LP.el('ul', { klasse: 'liste-leise' });
    Object.keys(nachKapitel).forEach(function (kid) {
      var kap = kapitelMit(kid);
      ul.appendChild(LP.el('li', {}, [
        LP.el('span', { text: (kap ? kap.bild + ' ' + kap.titel : kid) }),
        LP.el('span', { klasse: 'hinweis', text: nachKapitel[kid].length + ' Aufgaben' })
      ]));
    });
    liste.appendChild(ul);
    b.appendChild(liste);
  }

  function fehlerUeben() {
    var s = LP.fortschritt.stand();
    var aufgaben = [];
    s.fehler.forEach(function (f) {
      var kap = kapitelMit(f.kapId);
      if (!kap) return;
      var lv = kap.level[f.levelNr - 1];
      if (!lv || !lv.aufgaben[f.index]) return;
      var a = Object.assign({}, lv.aufgaben[f.index]);
      a.kapId = f.kapId;
      a._quelle = f;
      aufgaben.push(a);
    });
    if (!aufgaben.length) { LP.toast('Keine Aufgaben gefunden.'); return gehe('#/'); }
    aufgaben = LP.mischen(aufgaben).slice(0, 12);

    laufLauf({
      titel: 'Fehlerheft',
      aufgaben: aufgaben,
      sofortFeedback: true,
      fertig: function (ergebnis) {
        ergebnis.ergebnisse.forEach(function (e) {
          var q = e.aufgabe._quelle;
          if (!q) return;
          if (e.max > 0 && e.punkte >= e.max * .6) LP.fortschritt.fehlerLoeschen(q.kapId, q.levelNr, q.index);
        });
        var xp = Math.round(15 + ergebnis.punkte * 5);
        LP.fortschritt.xpGeben(xp);
        LP.fortschritt.tagMelden();
        LP.abzeichen.pruefen();

        setzeKopf('Fehlerheft', 'Auswertung', true);
        var b = neueBuehne();
        var s2 = LP.fortschritt.stand();
        b.appendChild(LP.el('div', { klasse: 'karte ergebnis' }, [
          LP.el('div', { klasse: 'emoji', text: '🧹' }),
          LP.el('div', { klasse: 'punkte', html: LP.punkteText(ergebnis.punkte) + ' <small>von ' + LP.punkteText(ergebnis.max) + '</small>' }),
          LP.el('p', { text: s2.fehler.length ? 'Noch ' + s2.fehler.length + ' Aufgaben im Heft.' : 'Heft leer – stark!' })
        ]));
        b.appendChild(LP.el('div', { klasse: 'belohnung' }, [LP.el('div', { klasse: 'gewinn', text: '+' + xp + ' XP' })]));
        b.appendChild(aufgabenRueckblick(ergebnis));
        b.appendChild(LP.el('button', { klasse: 'knopf breit abstand', text: 'Zur Übersicht',
          bei: { click: function () { gehe('#/'); } } }));
      }
    });
  }

  /* ===================== Abzeichen ===================== */

  function abzeichenAnsicht() {
    setzeKopf('Abzeichen', 'Was du schon geschafft hast', true);
    var b = neueBuehne();
    var s = LP.fortschritt.stand();
    var hat = Object.keys(s.abzeichen).length;

    b.appendChild(LP.el('div', { klasse: 'kachelgitter' }, [
      kachel(s.xp, 'XP'),
      kachel(sterneGesamt(s), 'Sterne'),
      kachel(hat + '/' + LP.abzeichen.liste.length, 'Abzeichen'),
      kachel('🔥 ' + s.streakTage, 'Tage in Folge')
    ]));

    var k = LP.el('div', { klasse: 'karte' });
    k.appendChild(LP.el('h2', { text: 'Sammlung' }));
    var gitter = LP.el('div', { klasse: 'abzeichen-gitter' });
    LP.abzeichen.liste.forEach(function (a) {
      gitter.appendChild(LP.el('div', { klasse: 'abzeichen' + (s.abzeichen[a.id] ? ' hat' : '') }, [
        LP.el('div', { klasse: 'bild', text: a.bild }),
        LP.el('div', { klasse: 'name', text: a.name }),
        LP.el('div', { klasse: 'wie', text: s.abzeichen[a.id] ? 'am ' + s.abzeichen[a.id] : a.wie })
      ]));
    });
    k.appendChild(gitter);
    b.appendChild(k);

    /* Rangliste der eigenen Ränge */
    var r = LP.el('div', { klasse: 'karte' });
    r.appendChild(LP.el('h2', { text: 'Ränge' }));
    var ul = LP.el('ul', { klasse: 'liste-leise' });
    LP.fortschritt.RAENGE.forEach(function (rg) {
      ul.appendChild(LP.el('li', {}, [
        LP.el('span', { text: (s.xp >= rg.ab ? rg.bild : '🔒') + ' ' + rg.name }),
        LP.el('span', { klasse: 'hinweis', text: rg.ab + ' XP' })
      ]));
    });
    r.appendChild(ul);
    b.appendChild(r);
  }

  /* ===================== Profil ===================== */

  function profilAnsicht() {
    setzeKopf('Profil', 'Wer übt hier?', true);
    var b = neueBuehne();
    var s = LP.fortschritt.stand();
    var aktiv = LP.fortschritt.aktiv();

    var k = LP.el('div', { klasse: 'karte' });
    k.appendChild(LP.el('h2', { text: 'Profile auf diesem Gerät' }));
    var liste = LP.el('div', { klasse: 'profilliste' });
    LP.fortschritt.alleProfile().forEach(function (p) {
      var standP = LP.speicher.lies('lernpfad.stand.' + p.id, { xp: 0 });
      liste.appendChild(LP.el('button', {
        klasse: 'profilzeile' + (p.id === aktiv.id ? ' aktiv' : ''),
        bei: { click: function () { LP.fortschritt.waehle(p.id); gehe('#/'); zeichneAktuelle(); } }
      }, [
        LP.el('span', { klasse: 'av', text: p.avatar }),
        LP.el('span', { klasse: 'nm', text: p.name }),
        LP.el('span', { klasse: 'xp', text: (standP.xp || 0) + ' XP' })
      ]));
    });
    k.appendChild(liste);
    k.appendChild(LP.el('div', { klasse: 'knopfreihe' }, [
      LP.el('button', { klasse: 'knopf klein weich', text: '+ Neues Profil', bei: { click: function () { profilDialog(); } } }),
      LP.el('button', { klasse: 'knopf klein rand', text: 'Dieses Profil löschen', bei: { click: function () {
        LP.bestaetige('Profil «' + aktiv.name + '» löschen?', 'Der ganze Fortschritt dieses Profils geht verloren. Das lässt sich nicht rückgängig machen.', 'Löschen', function () {
          LP.fortschritt.loesche(aktiv.id);
          location.hash = '#/';
          LP.start.neuLaden();
        });
      } } })
    ]));
    b.appendChild(k);

    var e = LP.el('div', { klasse: 'karte' });
    e.appendChild(LP.el('h2', { text: 'Fortschritt sichern' }));
    e.appendChild(LP.el('p', { klasse: 'hinweis', text: 'Der Fortschritt liegt nur auf diesem Gerät, in diesem Browser. Für die Lehrperson oder für den Wechsel auf ein anderes iPad kannst du ihn als Datei exportieren.' }));
    e.appendChild(LP.el('div', { klasse: 'knopfreihe' }, [
      LP.el('button', { klasse: 'knopf klein weich', text: '⬇ Exportieren', bei: { click: exportiere } }),
      LP.el('button', { klasse: 'knopf klein rand', text: '⬆ Importieren', bei: { click: importiere } })
    ]));
    b.appendChild(e);

    var st = LP.el('div', { klasse: 'karte' });
    st.appendChild(LP.el('h2', { text: 'Statistik' }));
    var ul = LP.el('ul', { klasse: 'liste-leise' });
    [
      ['Gelöste Level', Object.keys(s.level).length],
      ['Gesammelte Sterne', sterneGesamt(s)],
      ['Gelesene Theorieseiten', Object.keys(s.theorie).length + ' von ' + LP.kapitel.length],
      ['Prüfungen geschrieben', Object.keys(s.pruefungen).length],
      ['Aufgaben im Fehlerheft', s.fehler.length],
      ['Übungstage insgesamt', s.tageAktiv.length]
    ].forEach(function (zeile) {
      ul.appendChild(LP.el('li', {}, [LP.el('span', { text: zeile[0] }), LP.el('span', { klasse: 'hinweis', text: String(zeile[1]) })]));
    });
    st.appendChild(ul);
    b.appendChild(st);
  }

  function profilDialog(erstesMal) {
    LP.dialog(function (kasten, zu) {
      kasten.appendChild(LP.el('h2', { text: erstesMal ? 'Willkommen!' : 'Neues Profil' }));
      kasten.appendChild(LP.el('p', { klasse: 'hinweis', text: 'Wie heisst du? Der Name bleibt nur auf diesem Gerät.' }));
      var feld = LP.el('input', { klasse: 'feld', type: 'text', placeholder: 'Dein Name oder Spitzname', maxlength: '24' });
      kasten.appendChild(feld);
      var gewaehlt = LP.fortschritt.AVATARE[0];
      var wahl = LP.el('div', { klasse: 'avatarwahl' });
      LP.fortschritt.AVATARE.forEach(function (av, i) {
        var kn = LP.el('button', { type: 'button', text: av, 'aria-pressed': i === 0 ? 'true' : 'false',
          bei: { click: function () {
            gewaehlt = av;
            [].forEach.call(wahl.children, function (c) { c.setAttribute('aria-pressed', c === kn ? 'true' : 'false'); });
          } } });
        wahl.appendChild(kn);
      });
      kasten.appendChild(wahl);
      kasten.appendChild(LP.el('button', {
        klasse: 'knopf breit', text: 'Los geht’s',
        bei: { click: function () {
          LP.fortschritt.neuesProfil(feld.value.trim() || 'Ich', gewaehlt);
          zu();
          location.hash = '#/';
          LP.start.neuLaden();
        } }
      }));
      setTimeout(function () { feld.focus(); }, 60);
    });
  }

  function exportiere() {
    var daten = LP.fortschritt.alsText();
    var name = 'lernpfad-' + (LP.fortschritt.aktiv().name || 'stand').replace(/[^a-z0-9]+/gi, '-').toLowerCase() + '.json';
    try {
      var blob = new Blob([daten], { type: 'application/json' });
      var a = LP.el('a', { href: URL.createObjectURL(blob), download: name });
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      LP.toast('Datei gespeichert');
    } catch (e) {
      LP.dialog(function (kasten) {
        kasten.appendChild(LP.el('h2', { text: 'Fortschritt kopieren' }));
        var t = LP.el('textarea', { klasse: 'feld' });
        t.value = daten;
        kasten.appendChild(t);
        t.select();
      });
    }
  }

  function importiere() {
    var eingabe = LP.el('input', { type: 'file', accept: '.json,application/json', stil: { display: 'none' } });
    eingabe.addEventListener('change', function () {
      var datei = eingabe.files[0];
      if (!datei) return;
      var leser = new FileReader();
      leser.onload = function () {
        try {
          LP.fortschritt.ausText(leser.result);
          LP.toast('Fortschritt importiert');
          location.hash = '#/';
          LP.start.neuLaden();
        } catch (e) { LP.toast('Datei konnte nicht gelesen werden'); }
      };
      leser.readAsText(datei);
    });
    document.body.appendChild(eingabe);
    eingabe.click();
    setTimeout(function () { document.body.removeChild(eingabe); }, 1000);
  }

  /* ===================== Info ===================== */

  function infoAnsicht() {
    setzeKopf('Über den Lernpfad', '', true);
    var b = neueBuehne();
    b.appendChild(LP.el('div', { klasse: 'karte theorie schmal', html: LP.infoText }));
    b.appendChild(LP.el('div', { klasse: 'knopfreihe abstand' }, [
      LP.el('button', { klasse: 'knopf rand', text: 'Fortschritt dieses Profils zurücksetzen', bei: { click: function () {
        LP.bestaetige('Wirklich alles zurücksetzen?', 'XP, Sterne, Abzeichen und Fehlerheft dieses Profils werden gelöscht.', 'Zurücksetzen', function () {
          var p = LP.fortschritt.aktiv();
          LP.fortschritt.loesche(p.id);
          LP.fortschritt.neuesProfil(p.name, p.avatar);
          location.hash = '#/';
          LP.start.neuLaden();
        });
      } } })
    ]));
  }

  /* ===================== Verteiler ===================== */

  function zeichneAktuelle() {
    var teile = (location.hash || '#/').replace(/^#\/?/, '').split('/');
    if (!LP.fortschritt.aktiv()) {
      /* Ein zweiter Aufruf darf keinen zweiten Dialog stapeln. */
      if (!document.getElementById('dialog-raum').firstChild) { neueBuehne(); profilDialog(true); }
      return;
    }
    switch (teile[0]) {
      case '': case undefined: startseite(); break;
      case 'kapitel': kapitelAnsicht(teile[1]); break;
      case 'theorie': theorieAnsicht(teile[1]); break;
      case 'level': levelAnsicht(teile[1], parseInt(teile[2], 10) || 1); break;
      case 'pruefungen': pruefungsListe(); break;
      case 'pruefung': pruefungAnsicht(teile[1]); break;
      case 'fehlerheft': fehlerheft(); break;
      case 'abzeichen': abzeichenAnsicht(); break;
      case 'profil': profilAnsicht(); break;
      case 'info': infoAnsicht(); break;
      default: startseite();
    }
  }

  return { start: start, zeichneAktuelle: zeichneAktuelle, profilDialog: profilDialog, gehe: gehe };
})();
