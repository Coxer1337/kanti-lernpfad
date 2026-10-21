/* Die Aufgabentypen. Jeder Typ kann sich selbst zeichnen und selbst
   auswerten – nach denselben Punkteregeln wie die echte Prüfung:
   halbe Punkte für Rechtschreibfehler, Abzüge für falsche Kreuze,
   Mindestpunktzahl 0. */

LP.aufgaben = (function () {

  var typen = {};

  /* ===================== Hilfen ===================== */

  function maxPunkte(a) {
    if (a.punkte) return a.punkte;
    var t = typen[a.typ];
    return t && t.max ? t.max(a) : 1;
  }

  function begrenze(p, max) { return Math.max(0, Math.min(max, Math.round(p * 4) / 4)); }

  function teilZeile(nummer, text, zusatz) {
    return LP.el('div', { klasse: 'teilaufgabe-text' }, [
      nummer ? LP.el('span', { klasse: 'marke', text: nummer }) : null,
      LP.el('span', { html: text }),
      zusatz || null
    ]);
  }

  function markeFuer(i) { return 'abcdefghijkl'.charAt(i) + ')'; }

  /* ===================== einfache Auswahl ===================== */

  typen.single = {
    max: function () { return 1; },
    bau: function (a, wurzel, z) {
      z.gewaehlt = -1;
      var kasten = LP.el('div', { klasse: 'wahl' });
      a.optionen.forEach(function (opt, i) {
        var k = LP.el('button', {
          klasse: 'wahl-knopf rund', type: 'button', 'aria-pressed': 'false',
          bei: { click: function () {
            z.gewaehlt = i;
            [].forEach.call(kasten.children, function (c, j) {
              c.setAttribute('aria-pressed', j === i ? 'true' : 'false');
            });
            z.bereit(true);
          } }
        }, [LP.el('span', { klasse: 'kasten', text: '✓' }), LP.el('span', { html: opt })]);
        kasten.appendChild(k);
      });
      wurzel.appendChild(kasten);
      z.knoepfe = kasten;
    },
    pruefe: function (a, z) {
      var richtig = z.gewaehlt === a.loesung;
      [].forEach.call(z.knoepfe.children, function (c, i) {
        c.disabled = true;
        if (i === a.loesung) c.classList.add('richtig');
        else if (i === z.gewaehlt) c.classList.add('falsch');
      });
      return { punkte: richtig ? 1 : 0, max: 1, loesungText: a.optionen[a.loesung] };
    }
  };

  /* ===================== Mehrfachauswahl ===================== */

  typen.multi = {
    max: function (a) { return a.loesung.length * (a.proKreuz || 1); },
    bau: function (a, wurzel, z) {
      z.gewaehlt = {};
      var kasten = LP.el('div', { klasse: 'wahl' });
      a.optionen.forEach(function (opt, i) {
        var k = LP.el('button', {
          klasse: 'wahl-knopf', type: 'button', 'aria-pressed': 'false',
          bei: { click: function () {
            z.gewaehlt[i] = !z.gewaehlt[i];
            k.setAttribute('aria-pressed', z.gewaehlt[i] ? 'true' : 'false');
            z.bereit(Object.keys(z.gewaehlt).some(function (s) { return z.gewaehlt[s]; }));
          } }
        }, [LP.el('span', { klasse: 'kasten', text: '✓' }), LP.el('span', { html: opt })]);
        kasten.appendChild(k);
      });
      wurzel.appendChild(kasten);
      z.knoepfe = kasten;
    },
    pruefe: function (a, z) {
      var proKreuz = a.proKreuz || 1, abzugJe = a.abzugJe || 0;
      var treffer = 0, daneben = 0;
      a.optionen.forEach(function (opt, i) {
        var soll = a.loesung.indexOf(i) >= 0, ist = !!z.gewaehlt[i];
        var k = z.knoepfe.children[i];
        k.disabled = true;
        if (soll && ist) { treffer++; k.classList.add('richtig'); }
        else if (!soll && ist) { daneben++; k.classList.add('falsch'); }
        else if (soll && !ist) { k.classList.add('verpasst'); }
      });
      var max = a.loesung.length * proKreuz;
      return {
        punkte: begrenze(treffer * proKreuz - daneben * abzugJe, max),
        max: max,
        loesungText: a.loesung.map(function (i) { return a.optionen[i]; }).join(' · ')
      };
    }
  };

  /* ===================== richtig / falsch / kein Hinweis ===================== */

  var RFK = [
    { wert: 'r', kurz: 'R', lang: 'richtig' },
    { wert: 'f', kurz: 'F', lang: 'falsch' },
    { wert: 'k', kurz: '–', lang: 'kein Hinweis im Text' }
  ];

  typen.rfk = {
    max: function (a) { return a.aussagen.length; },
    bau: function (a, wurzel, z) {
      z.gewaehlt = {};
      z.kugeln = [];
      var tabelle = LP.el('table', { klasse: 'rfk' });
      var kopf = LP.el('tr', {}, [LP.el('th', {})]);
      RFK.forEach(function (r) { kopf.appendChild(LP.el('th', { html: r.lang.replace(' ', '<br>') })); });
      tabelle.appendChild(LP.el('thead', {}, [kopf]));
      var koerper = LP.el('tbody');
      a.aussagen.forEach(function (aus, i) {
        var zeile = LP.el('tr', {}, [LP.el('td', { klasse: 'aussage', html: aus.text })]);
        z.kugeln[i] = {};
        RFK.forEach(function (r) {
          var k = LP.el('button', {
            klasse: 'kugel', type: 'button', 'aria-pressed': 'false',
            'aria-label': aus.text + ': ' + r.lang, text: r.kurz,
            bei: { click: function () {
              z.gewaehlt[i] = r.wert;
              RFK.forEach(function (rr) {
                z.kugeln[i][rr.wert].setAttribute('aria-pressed', rr.wert === r.wert ? 'true' : 'false');
              });
              z.bereit(Object.keys(z.gewaehlt).length === a.aussagen.length);
            } }
          });
          z.kugeln[i][r.wert] = k;
          zeile.appendChild(LP.el('td', {}, [k]));
        });
        koerper.appendChild(zeile);
      });
      tabelle.appendChild(koerper);
      wurzel.appendChild(tabelle);
    },
    pruefe: function (a, z) {
      var punkte = 0, offen = [];
      a.aussagen.forEach(function (aus, i) {
        var gut = z.gewaehlt[i] === aus.loesung;
        if (gut) punkte++; else offen.push(aus.text);
        RFK.forEach(function (r) {
          var k = z.kugeln[i][r.wert];
          k.disabled = true;
          if (r.wert === aus.loesung) k.classList.add(gut ? 'richtig' : 'verpasst');
          else if (r.wert === z.gewaehlt[i]) k.classList.add('falsch');
        });
      });
      return { punkte: punkte, max: a.aussagen.length, offen: offen };
    }
  };

  /* ===================== kurze Textantworten ===================== */

  typen.text = {
    max: function (a) { return a.teile.length * (a.punkteJe || 1); },
    bau: function (a, wurzel, z) {
      z.felder = [];
      a.teile.forEach(function (teil, i) {
        var block = LP.el('div', { klasse: 'teilaufgabe' });
        if (teil.frage) block.appendChild(teilZeile(a.teile.length > 1 ? markeFuer(i) : '', teil.frage));
        if (teil.vorgabe) block.appendChild(LP.el('div', { klasse: 'teilaufgabe-text vorgabe', html: teil.vorgabe }));
        var feld = LP.el('input', {
          klasse: 'feld', type: 'text', autocapitalize: 'sentences', autocomplete: 'off',
          spellcheck: 'false', placeholder: teil.platzhalter || 'Deine Antwort …',
          bei: { input: function () { z.bereit(z.felder.some(function (f) { return f.value.trim(); })); } }
        });
        z.felder.push(feld);
        block.appendChild(feld);
        wurzel.appendChild(block);
      });
    },
    pruefe: function (a, z) {
      var je = a.punkteJe || 1, punkte = 0, schreibfehler = 0, offen = [];
      a.teile.forEach(function (teil, i) {
        var urteil = LP.vergleiche(z.felder[i].value, teil.loesungen);
        z.felder[i].disabled = true;
        if (urteil === 'richtig') { punkte += je; z.felder[i].classList.add('richtig'); }
        else if (urteil === 'fast') { punkte += je / 2; schreibfehler++; z.felder[i].classList.add('richtig'); }
        else { z.felder[i].classList.add('falsch'); offen.push(teil.loesungen[0]); }
      });
      return {
        punkte: punkte, max: a.teile.length * je, schreibfehler: schreibfehler,
        loesungText: a.teile.map(function (t, i) {
          return (a.teile.length > 1 ? markeFuer(i) + ' ' : '') + [].concat(t.loesungen).join(' / ');
        }).join('<br>')
      };
    }
  };

  /* ===================== Lückentext ===================== */

  typen.luecke = {
    max: function (a) { return a.luecken.length * (a.punkteJe || 1); },
    bau: function (a, wurzel, z) {
      z.felder = [];
      var kasten = LP.el('div', { klasse: 'wortsatz' });
      a.luecken.forEach(function (l, i) {
        if (l.vor) kasten.appendChild(document.createTextNode(l.vor));
        var feld = LP.el('input', {
          klasse: 'feld inline', type: 'text', autocomplete: 'off', spellcheck: 'false',
          size: String(Math.max(6, (l.loesungen[0] || '').length + 2)),
          'aria-label': 'Lücke ' + (i + 1),
          bei: { input: function () { z.bereit(z.felder.some(function (f) { return f.value.trim(); })); } }
        });
        z.felder.push(feld);
        kasten.appendChild(feld);
        if (l.nach) kasten.appendChild(document.createTextNode(l.nach));
      });
      wurzel.appendChild(kasten);
    },
    pruefe: function (a, z) {
      var je = a.punkteJe || 1, punkte = 0, schreibfehler = 0;
      a.luecken.forEach(function (l, i) {
        var urteil = LP.vergleiche(z.felder[i].value, l.loesungen);
        z.felder[i].disabled = true;
        if (urteil === 'richtig') { punkte += je; z.felder[i].classList.add('richtig'); }
        else if (urteil === 'fast') { punkte += je / 2; schreibfehler++; z.felder[i].classList.add('richtig'); }
        else { z.felder[i].classList.add('falsch'); }
      });
      return {
        punkte: punkte, max: a.luecken.length * je, schreibfehler: schreibfehler,
        loesungText: a.luecken.map(function (l) { return [].concat(l.loesungen).join(' / '); }).join(' · ')
      };
    }
  };

  /* ===================== Tabelle (Konjugation) ===================== */

  typen.tabelle = {
    max: function (a) {
      var n = 0;
      a.zeilen.forEach(function (zl) { n += zl.felder.length; });
      return n * (a.punkteJe || 1);
    },
    bau: function (a, wurzel, z) {
      z.felder = [];
      var tab = LP.el('table', { klasse: 'tabelle-raster' });
      var kopf = LP.el('tr');
      a.kopf.forEach(function (k) { kopf.appendChild(LP.el('th', { html: k })); });
      tab.appendChild(LP.el('thead', {}, [kopf]));
      var koerper = LP.el('tbody');
      a.zeilen.forEach(function (zl, zi) {
        var tr = LP.el('tr');
        (zl.fest || []).forEach(function (f) { tr.appendChild(LP.el('td', { html: f })); });
        zl.felder.forEach(function (f, fi) {
          var feld = LP.el('input', {
            klasse: 'feld', type: 'text', autocomplete: 'off', spellcheck: 'false',
            'aria-label': (zl.fest && zl.fest[0] || '') + ' ' + (a.kopf[(zl.fest || []).length + fi] || ''),
            bei: { input: function () { z.bereit(z.felder.some(function (x) { return x.feld.value.trim(); })); } }
          });
          z.felder.push({ feld: feld, loesungen: f.loesungen });
          tr.appendChild(LP.el('td', {}, [feld]));
        });
        koerper.appendChild(tr);
      });
      tab.appendChild(koerper);
      wurzel.appendChild(tab);
    },
    pruefe: function (a, z) {
      var je = a.punkteJe || 1, punkte = 0, schreibfehler = 0;
      z.felder.forEach(function (f) {
        var urteil = LP.vergleiche(f.feld.value, f.loesungen);
        f.feld.disabled = true;
        if (urteil === 'richtig') { punkte += je; f.feld.classList.add('richtig'); }
        else if (urteil === 'fast') { punkte += je / 2; schreibfehler++; f.feld.classList.add('richtig'); }
        else { f.feld.classList.add('falsch'); }
      });
      return {
        punkte: punkte, max: z.felder.length * je, schreibfehler: schreibfehler,
        loesungText: z.felder.map(function (f) { return [].concat(f.loesungen)[0]; }).join(' · ')
      };
    }
  };

  /* ===================== Zuordnung ===================== */

  typen.zuordnung = {
    max: function (a) { return a.zeilen.length * (a.punkteJe || 1); },
    bau: function (a, wurzel, z) {
      z.wahlen = [];
      if (a.vorrat) {
        var v = LP.el('div', { klasse: 'vorrat' });
        var liste = LP.el('ol');
        a.vorrat.forEach(function (p) { liste.appendChild(LP.el('li', { html: p })); });
        v.appendChild(liste);
        wurzel.appendChild(v);
      }
      var kasten = LP.el('div', { klasse: 'zuordnung' });
      a.zeilen.forEach(function (zl, i) {
        var auswahl = LP.el('select', { klasse: 'feld', 'aria-label': 'Zuordnung für: ' + zl.text,
          bei: { change: function () {
            z.bereit(z.wahlen.some(function (w) { return w.value !== ''; }));
          } } });
        auswahl.appendChild(LP.el('option', { value: '', text: a.wahlText || 'bitte wählen …' }));
        (a.vorrat || a.optionen).forEach(function (p, j) {
          auswahl.appendChild(LP.el('option', { value: String(j), text: (a.vorrat ? (j + 1) + '. ' : '') + strip(p) }));
        });
        z.wahlen.push(auswahl);
        kasten.appendChild(LP.el('div', { klasse: 'zuordnung-zeile' }, [
          LP.el('div', { klasse: 'text', html: (a.zeilen.length > 1 ? '<b>' + markeFuer(i) + '</b> ' : '') + zl.text }),
          auswahl
        ]));
      });
      wurzel.appendChild(kasten);
    },
    pruefe: function (a, z) {
      var je = a.punkteJe || 1, punkte = 0, quelle = a.vorrat || a.optionen;
      a.zeilen.forEach(function (zl, i) {
        var gut = String(zl.loesung) === z.wahlen[i].value;
        z.wahlen[i].disabled = true;
        z.wahlen[i].classList.add(gut ? 'richtig' : 'falsch');
        if (gut) punkte += je;
      });
      return {
        punkte: punkte, max: a.zeilen.length * je,
        loesungText: a.zeilen.map(function (zl, i) {
          return markeFuer(i) + ' ' + strip(quelle[zl.loesung]);
        }).join('<br>')
      };
    }
  };

  function strip(html) { return String(html).replace(/<[^>]+>/g, ''); }

  /* ===================== Wörter markieren ===================== */

  typen.markieren = {
    max: function (a) {
      var n = 0;
      a.saetze.forEach(function (s) { n += s.loesung.length; });
      return n * (a.punkteJe || 1);
    },
    bau: function (a, wurzel, z) {
      z.satzKnoepfe = [];
      z.gewaehlt = [];
      a.saetze.forEach(function (satz, si) {
        var kasten = LP.el('div', { klasse: 'wortsatz' });
        z.satzKnoepfe[si] = [];
        z.gewaehlt[si] = {};
        satz.woerter.forEach(function (wort, wi) {
          if (/^[.,;:!?»«"]$/.test(wort)) { kasten.appendChild(document.createTextNode(wort + ' ')); return; }
          var k = LP.el('button', {
            klasse: 'wort-knopf', type: 'button', 'aria-pressed': 'false', text: wort,
            bei: { click: function () {
              z.gewaehlt[si][wi] = !z.gewaehlt[si][wi];
              k.setAttribute('aria-pressed', z.gewaehlt[si][wi] ? 'true' : 'false');
              z.bereit(z.gewaehlt.some(function (g) {
                return Object.keys(g).some(function (x) { return g[x]; });
              }));
            } }
          });
          z.satzKnoepfe[si][wi] = k;
          kasten.appendChild(k);
          kasten.appendChild(document.createTextNode(' '));
        });
        wurzel.appendChild(kasten);
      });
    },
    pruefe: function (a, z) {
      var je = a.punkteJe || 1, treffer = 0, daneben = 0, verpasst = 0, loesung = [];
      a.saetze.forEach(function (satz, si) {
        satz.woerter.forEach(function (wort, wi) {
          var k = z.satzKnoepfe[si][wi];
          if (!k) return;
          k.disabled = true;
          var soll = satz.loesung.indexOf(wi) >= 0, ist = !!z.gewaehlt[si][wi];
          if (soll) loesung.push(wort);
          if (soll && ist) { treffer++; k.classList.add('richtig'); }
          else if (!soll && ist) { daneben++; k.classList.add('falsch'); }
          else if (soll && !ist) { verpasst++; k.classList.add('verpasst'); }
        });
      });
      var max = (treffer + verpasst) * je;
      // Prüfungsregel: je ein Punkt Abzug pro fehlende oder falsche Lösung.
      var punkte = a.abzugModus === 'voll'
        ? begrenze(max - (daneben + verpasst) * je, max)
        : begrenze(treffer * je - daneben * (a.abzugJe || 0), max);
      return { punkte: punkte, max: max, loesungText: loesung.join(' · '), daneben: daneben, verpasst: verpasst };
    }
  };

  /* ===================== Striche setzen (Satzglieder / Kommas) ===================== */

  typen.trennen = {
    max: function (a) { return a.loesung.length * (a.punkteJe || 1); },
    bau: function (a, wurzel, z) {
      z.stellen = [];
      z.gesetzt = {};
      var komma = a.art === 'komma';
      var kasten = LP.el('div', { klasse: 'strichsatz' });
      a.woerter.forEach(function (wort, i) {
        kasten.appendChild(document.createTextNode(wort));
        if (i < a.woerter.length - 1) {
          var k = LP.el('button', {
            klasse: 'strich-stelle' + (komma ? ' komma' : ''), type: 'button',
            'aria-pressed': 'false',
            'aria-label': (komma ? 'Komma' : 'Strich') + ' nach «' + wort + '»',
            bei: { click: function () {
              z.gesetzt[i] = !z.gesetzt[i];
              k.setAttribute('aria-pressed', z.gesetzt[i] ? 'true' : 'false');
              z.bereit(true);
            } }
          });
          z.stellen[i] = k;
          kasten.appendChild(k);
        }
        kasten.appendChild(document.createTextNode(' '));
      });
      wurzel.appendChild(kasten);
      z.bereit(true);   // auch «gar kein Strich» ist eine Antwort
    },
    pruefe: function (a, z) {
      var je = a.punkteJe || 1, treffer = 0, daneben = 0, verpasst = 0;
      a.woerter.forEach(function (wort, i) {
        var k = z.stellen[i];
        if (!k) return;
        k.disabled = true;
        var soll = a.loesung.indexOf(i) >= 0, ist = !!z.gesetzt[i];
        if (soll && ist) { treffer++; k.classList.add('richtig'); }
        else if (!soll && ist) { daneben++; k.classList.add('falsch'); }
        else if (soll && !ist) { verpasst++; k.classList.add('verpasst'); }
      });
      var max = a.loesung.length * je;
      var abzug = a.abzugJe === undefined ? je : a.abzugJe;
      return {
        punkte: begrenze(max - (daneben + verpasst) * abzug, max),
        max: max, daneben: daneben, verpasst: verpasst,
        loesungText: a.loesungText || a.woerter.map(function (w, i) {
          return w + (a.loesung.indexOf(i) >= 0 ? (a.art === 'komma' ? ',' : ' |') : '');
        }).join(' ')
      };
    }
  };

  /* ===================== freie Antwort / Schreibaufgabe ===================== */

  function woerter(s) {
    var t = String(s).trim();
    return t ? t.split(/\s+/).length : 0;
  }

  typen.frei = {
    max: function (a) {
      if (a.raster) return a.raster.reduce(function (s, r) { return s + r.punkte; }, 0);
      return a.punkte || 2;
    },
    bau: function (a, wurzel, z) {
      var zaehler = null;
      var feld = LP.el('textarea', {
        klasse: 'feld', rows: a.gross ? '14' : '4',
        placeholder: a.platzhalter || 'Schreibe in ganzen Sätzen …',
        bei: { input: function () {
          z.bereit(feld.value.trim().length >= (a.minZeichen || 10));
          if (zaehler) zaehler.textContent = woerter(feld.value) + ' Wörter';
        } }
      });
      if (a.gross) feld.style.minHeight = '320px';
      z.feld = feld;
      wurzel.appendChild(feld);
      if (a.gross) {
        zaehler = LP.el('div', { klasse: 'hinweis abstand', text: '0 Wörter' });
        wurzel.appendChild(zaehler);
      }
    },
    pruefe: function (a, z) {
      z.feld.disabled = true;
      /* Eine Schreibaufgabe wird nicht «richtig» oder «falsch», sondern nach
         den vier Kriterien der Prüfung beurteilt. Dann steht ein Raster da. */
      var abschnitte = a.raster
        ? a.raster.map(function (r) {
            return {
              frage: r.titel, label: 'Daran wird es gemessen:',
              max: r.punkte, musterloesung: r.beschreibung,
              treffer: [], anzahlSchluessel: 0
            };
          })
        : [{
            frage: null,
            max: maxPunkte(a),
            musterloesung: a.musterloesung,
            kriterien: a.kriterien,
            treffer: LP.schluesselTreffer(z.feld.value, a.schluessel || []),
            anzahlSchluessel: (a.schluessel || []).length
          }];
      return {
        punkte: null,                 // kommt aus der Selbsteinschätzung
        max: maxPunkte(a),
        selbstcheck: true,
        eigenerText: z.feld.value,
        abschnitte: abschnitte
      };
    },
    maxRaster: function (a) {
      return a.raster.reduce(function (s, r) { return s + r.punkte; }, 0);
    }
  };

  /* Mehrere offene Fragen zum Text – der häufigste Prüfungstyp überhaupt
     («Beantworte die folgenden Fragen in ganzen Sätzen»). */
  typen.offen = {
    max: function (a) {
      return a.teile.reduce(function (s, t) { return s + (t.punkte || a.punkteJe || 1); }, 0);
    },
    bau: function (a, wurzel, z) {
      z.felder = [];
      a.teile.forEach(function (teil, i) {
        var block = LP.el('div', { klasse: 'teilaufgabe' });
        block.appendChild(teilZeile(a.teile.length > 1 ? markeFuer(i) : '', teil.frage));
        var feld = LP.el('textarea', {
          klasse: 'feld', rows: teil.zeilen || '2',
          placeholder: 'In einem ganzen Satz antworten …',
          bei: { input: function () {
            z.bereit(z.felder.some(function (f) { return f.value.trim().length >= 5; }));
          } }
        });
        feld.style.minHeight = '64px';
        z.felder.push(feld);
        block.appendChild(feld);
        wurzel.appendChild(block);
      });
    },
    pruefe: function (a, z) {
      var abschnitte = a.teile.map(function (teil, i) {
        return {
          frage: markeFuer(i) + ' ' + teil.frage,
          eigenerText: z.felder[i].value,
          max: teil.punkte || a.punkteJe || 1,
          musterloesung: teil.musterloesung,
          treffer: LP.schluesselTreffer(z.felder[i].value, teil.schluessel || []),
          anzahlSchluessel: (teil.schluessel || []).length
        };
      });
      z.felder.forEach(function (f) { f.disabled = true; });
      return { punkte: null, max: maxPunkte(a), selbstcheck: true, abschnitte: abschnitte };
    }
  };

  /* ===================== Zeichnen und Auswerten ===================== */

  /* Baut eine Aufgabe in `wurzel` und liefert eine Steuerung zurück. */
  function zeichne(a, wurzel, aufBereit) {
    var typ = typen[a.typ];
    if (!typ) throw new Error('Unbekannter Aufgabentyp: ' + a.typ);
    var z = { bereit: aufBereit || function () {} };

    if (a.frage) wurzel.appendChild(LP.el('div', { klasse: 'aufgabe-frage', html: a.frage }));
    if (a.anweisung) wurzel.appendChild(LP.el('div', { klasse: 'aufgabe-anweisung', html: a.anweisung }));
    if (a.vorlage) wurzel.appendChild(LP.el('div', { klasse: 'beispiel', html: a.vorlage }));

    typ.bau(a, wurzel, z);
    return {
      pruefe: function () {
        var e = typ.pruefe(a, z);
        e.max = e.max === undefined ? maxPunkte(a) : e.max;
        return e;
      },
      zustand: z
    };
  }

  return { zeichne: zeichne, maxPunkte: maxPunkte, typen: typen };
})();
