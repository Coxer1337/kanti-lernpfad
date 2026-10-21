LP.kapitel.push({
  id: 'verb',
  nr: 6,
  titel: 'Das Verb: Formen erkennen',
  bild: '🏃',
  gewicht: 8,
  kurz: 'Infinitiv und Personalform, Verbzusatz, Konjugation, Hilfs- und Modalverben.',
  pruefungsgewicht: '≈ 6–10 P.',
  inPruefung: '2022 und 2023: Personalformen notieren und Konjugationstabelle. 2022 zusätzlich Verben mit Verbzusatz. 2024: Infinitive notieren und Hilfsverben unterstreichen.',
  theorieKurz: 'Infinitiv vs. Personalform, Verbzusatz, Konjugation, Hilfs- und Modalverben.',

  theorie: [
    { titel: 'Infinitiv und Personalform',
      html: [
        '<p>Der <b class="wort">Infinitiv</b> ist die Grundform, wie sie im Wörterbuch steht: <i>laufen, sein, ',
        'rüsten</i>. Er endet fast immer auf <b>-en</b> (selten <b>-n</b>: <i>sammeln, ändern</i>).</p>',
        '<p>Die <b class="wort">Personalform</b> (auch: finite Form) ist an eine Person und eine Zeit ',
        'angepasst: <i>ich laufe, du läufst, sie lief</i>.</p>',
        '<div class="probe"><b>Die Personenprobe:</b> Setze <i>ich</i> davor und verändere die Person.<br>',
        '<i>ich <b>laufe</b> – du <b>läufst</b></i> → verändert sich → <b>Personalform</b><br>',
        '<i>ich laufen – du laufen</i> → verändert sich nicht → <b>Infinitiv</b></div>',
        '<div class="merksatz"><b>Jeder Satz hat genau eine Personalform pro Teilsatz.</b> Wenn du zwei ',
        'Personalformen findest, hast du zwei Teilsätze – das brauchst du später beim Satzbau und bei den ',
        'Kommas.</div>'
      ].join('') },

    { titel: 'Die Falle: mehrteilige Verbformen',
      html: [
        '<p>«Notiere die Personalformen» und «Notiere die Infinitive» klingen ähnlich, sind aber das Gegenteil. ',
        'In einer mehrteiligen Verbform steht beides nebeneinander:</p>',
        '<div class="beispiel">«Heute <b>wollen</b> die Besucher eine Aufführung <i>sehen</i>.»<br>',
        '→ <b>wollen</b> = Personalform (passt sich an: <i>ich will, du willst</i>)<br>',
        '→ <i>sehen</i> = Infinitiv</div>',
        '<div class="merksatz"><b>Stellungsregel im Hauptsatz:</b> Die Personalform steht an <u>zweiter</u> ',
        'Stelle. Alles, was hinten steht (Infinitiv, Partizip, Verbzusatz), gehört zur sogenannten Verbklammer. ',
        'Wer die Personalform sucht, schaut also vorn.</div>'
      ].join('') },

    { titel: 'Verben mit Verbzusatz',
      html: [
        '<p>Manche Verben haben einen <b class="wort">Verbzusatz</b> (früher: trennbare Vorsilbe), der im Satz ',
        'ans Ende wandert.</p>',
        '<div class="beispiel">«Der Gast trat nicht <b>ein</b>.» → Infinitiv: <b>eintreten</b><br>',
        '«Dann fuhren sie <b>los</b>.» → Infinitiv: <b>losfahren</b><br>',
        '«Kaum waren sie <b>angekommen</b> …» → Infinitiv: <b>ankommen</b></div>',
        '<div class="probe"><b>So findest du sie:</b> Suche am Satzende nach kleinen Wörtern wie <i>an, auf, ab, ',
        'aus, ein, los, mit, nach, vor, zu, zurück, weiter, herunter</i>. Setze sie dann vor den Infinitiv.</div>',
        '<div class="merksatz"><b>Nicht verwechseln:</b> In «Er ging <u>an</u> ihr vorbei» ist <i>an</i> eine ',
        'Präposition, die zu <i>ihr</i> gehört – kein Verbzusatz. Der Test: Ergibt «<i>angehen</i>» hier Sinn? ',
        'Nein. Also kein Verbzusatz.</div>'
      ].join('') },

    { titel: 'Hilfsverben und Modalverben',
      html: [
        '<table>',
        '<tr><th>Gruppe</th><th>Wörter</th><th>Erkennungszeichen</th></tr>',
        '<tr><td><b>Hilfsverben</b></td><td>sein, haben, werden</td><td>helfen, eine Zeitform oder das Passiv ',
        'zu bilden</td></tr>',
        '<tr><td><b>Modalverben</b></td><td>können, müssen, wollen, sollen, dürfen, mögen</td>',
        '<td>stehen mit einem Infinitiv ohne «zu»</td></tr>',
        '</table>',
        '<div class="merksatz"><b>Die wichtigste Unterscheidung der ganzen Prüfung:</b> <i>sein, haben, werden</i> ',
        'sind nur dann <u>Hilfs</u>verben, wenn sie tatsächlich <u>helfen</u> – also wenn im Satz noch ein ',
        'Partizip oder ein Infinitiv steht. Sonst sind sie Vollverben.</div>',
        '<table>',
        '<tr><th>Satz</th><th>Rolle von <i>sein/haben/werden</i></th></tr>',
        '<tr><td>Sie <b>hat</b> ihn <i>gehört</i>.</td><td>Hilfsverb (Perfekt)</td></tr>',
        '<tr><td>Sie <b>hat</b> ein neues Velo.</td><td>Vollverb (besitzen)</td></tr>',
        '<tr><td>Er <b>wird</b> gleich hier <i>sein</i>.</td><td>Hilfsverb (Futur)</td></tr>',
        '<tr><td>Anna <b>wird</b> nervös.</td><td>Vollverb (= sie gerät in diesen Zustand)</td></tr>',
        '<tr><td>Der Brief <b>wurde</b> <i>geschrieben</i>.</td><td>Hilfsverb (Passiv)</td></tr>',
        '</table>'
      ].join('') }
  ],

  level: [
    {
      titel: 'Grundform oder Personalform?', niveau: 'leicht', farbe: 'gruen', bild: '🌱', xpFaktor: 1,
      kurz: 'Die Personenprobe anwenden.',
      aufgaben: [
        {
          typ: 'zuordnung', punkteJe: 1,
          frage: 'Ist die unterstrichene Verbform ein Infinitiv oder eine Personalform?',
          kurz: 'Infinitiv oder Personalform?',
          vorrat: ['Infinitiv', 'Personalform'],
          zeilen: [
            { text: 'Nora <u>rannte</u> trotzdem.', loesung: 1 },
            { text: 'Sie wollte ihn nicht <u>anrufen</u>.', loesung: 0 },
            { text: 'Der Bus <u>hielt</u> an der Kreuzung.', loesung: 1 },
            { text: 'Er versuchte zu <u>bremsen</u>.', loesung: 0 },
            { text: 'Wir <u>müssen</u> noch warten.', loesung: 1 }
          ],
          tipp: 'Setze «ich» davor: Verändert sich die Form, ist es eine Personalform.',
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        },
        {
          typ: 'text', punkteJe: 1,
          frage: 'Notiere den Infinitiv zu dieser Personalform.',
          kurz: 'Infinitive bilden',
          teile: [
            { frage: 'sie lief', loesungen: ['laufen'] },
            { frage: 'du nimmst', loesungen: ['nehmen'] },
            { frage: 'er sass', loesungen: ['sitzen'] },
            { frage: 'wir wussten', loesungen: ['wissen'] },
            { frage: 'ihr halft', loesungen: ['helfen'] }
          ],
          punktregel: 'Je 1 Punkt pro korrekte Lösung. ½ Punkt Abzug für Rechtschreibfehler.'
        },
        {
          typ: 'markieren', punkteJe: 1, abzugModus: 'voll',
          was: 'Personalformen',
          frage: 'Markiere in jedem Satz die <b>Personalform</b>.',
          kurz: 'Personalformen markieren',
          saetze: [
            { woerter: ['Nora', 'wollte', 'den', 'Bus', 'noch', 'erreichen', '.'], loesung: [1] },
            { woerter: ['Der', 'Fahrer', 'hat', 'sie', 'trotzdem', 'mitgenommen', '.'], loesung: [2] },
            { woerter: ['Am', 'Samstag', 'findet', 'der', 'Wettkampf', 'statt', '.'], loesung: [2] }
          ],
          erklaerung: 'Im Hauptsatz steht die Personalform immer an zweiter Stelle. Der Rest der Verbform (<i>erreichen</i>, <i>mitgenommen</i>, <i>statt</i>) wandert ans Ende.',
          punktregel: 'Je 1 Punkt Abzug pro fehlende oder falsche Lösung. Mindestpunktzahl 0.'
        },
        {
          typ: 'text', punkteJe: 1,
          frage: 'Notiere den Infinitiv des Verbs mit <b>Verbzusatz</b>.',
          kurz: 'Verben mit Verbzusatz (leicht)',
          vorlage: '<b>Beispiel:</b> «Der Gast trat nicht <u>ein</u>.» → <i>eintreten</i>',
          teile: [
            { frage: '«Dann fuhren sie <u>los</u>.»', loesungen: ['losfahren'] },
            { frage: '«Sie stand früh <u>auf</u>.»', loesungen: ['aufstehen'] },
            { frage: '«Er hörte ihr nicht <u>zu</u>.»', loesungen: ['zuhören'] },
            { frage: '«Der Wettkampf findet am Samstag <u>statt</u>.»', loesungen: ['stattfinden'] }
          ],
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        },
        {
          typ: 'single',
          frage: 'In welchem Satz ist <b>«hat»</b> ein <u>Hilfsverb</u>?',
          kurz: 'Wann ist «hat» ein Hilfsverb?',
          optionen: [
            'Sie hat ein neues Velo.',
            'Sie hat den Bus verpasst.',
            'Er hat zwei Geschwister.',
            'Das Haus hat drei Stockwerke.'
          ],
          loesung: 1,
          erklaerung: 'Nur im zweiten Satz hilft <i>hat</i>, eine Zeitform zu bilden (Perfekt: <i>hat verpasst</i>). Sonst bedeutet es «besitzen» und ist ein Vollverb.'
        }
      ]
    },

    {
      titel: 'Konjugieren', niveau: 'mittel', farbe: '', bild: '🔎', xpFaktor: 1.2,
      kurz: 'Verbformen bilden und Hilfsverben von Vollverben unterscheiden.',
      aufgaben: [
        {
          typ: 'tabelle', punkteJe: 0.5,
          frage: 'Konjugation der Verben: Setze die folgenden Verben in die gewünschte Form.',
          kurz: 'Konjugationstabelle (mittel)',
          kopf: ['Infinitiv', 'Präsens, 2. Person Singular', 'Präteritum, 3. Person Singular'],
          zeilen: [
            { fest: ['sprechen'], felder: [{ loesungen: ['sprichst'] }, { loesungen: ['sprach'] }] },
            { fest: ['laufen'], felder: [{ loesungen: ['läufst', 'laeufst'] }, { loesungen: ['lief'] }] },
            { fest: ['geben'], felder: [{ loesungen: ['gibst'] }, { loesungen: ['gab'] }] },
            { fest: ['fallen'], felder: [{ loesungen: ['fällst', 'faellst'] }, { loesungen: ['fiel'] }] }
          ],
          tipp: 'In der 2. Person Singular Präsens ändern starke Verben oft den Stammvokal: e→i, a→ä, au→äu.',
          punktregel: 'Je ½ Punkt pro korrekte und korrekt geschriebene Lösung.'
        },
        {
          typ: 'markieren', punkteJe: 1, abzugModus: 'voll',
          was: 'Hilfsverben',
          frage: 'Unterstreiche in den folgenden Sätzen die <b>Hilfsverben</b>, sofern vorhanden.',
          anweisung: 'Vorsicht: <i>sein, haben, werden</i> sind nur dann Hilfsverben, wenn sie eine Zeitform oder das Passiv bilden helfen.',
          kurz: 'Hilfsverben erkennen',
          saetze: [
            { woerter: ['Nora', 'hat', 'den', 'Bus', 'verpasst', '.'], loesung: [1] },
            { woerter: ['Sie', 'hat', 'kein', 'Geld', 'dabei', '.'], loesung: [] },
            { woerter: ['Der', 'Wettkampf', 'wird', 'am', 'Samstag', 'stattfinden', '.'], loesung: [2] },
            { woerter: ['Anna', 'wird', 'schnell', 'nervös', '.'], loesung: [] }
          ],
          erklaerung: 'Satz 2: <i>hat</i> bedeutet «besitzen» – Vollverb. Satz 4: <i>wird</i> beschreibt eine Veränderung – Vollverb. In den Sätzen 1 und 3 steht noch ein Partizip bzw. ein Infinitiv, darum sind es Hilfsverben.',
          punktregel: 'Je 1 Punkt pro korrekte Lösung, je 1 Punkt Abzug pro falsche Lösung. Mindestpunktzahl 0.'
        },
        {
          typ: 'text', punkteJe: 1,
          frage: 'In jedem Satz steckt ein Verb mit Verbzusatz. Notiere es im <b>Infinitiv</b>.',
          kurz: 'Verbzusatz erkennen (mittel)',
          teile: [
            { frage: '«Brazza wollte verhindern, dass die Belgier ihm <u>zuvorkämen</u>.»', loesungen: ['zuvorkommen'] },
            { frage: '«Kaum waren die Männer an der Mündung <u>angekommen</u> …»', loesungen: ['ankommen'] },
            { frage: '«Er liess Einbäume <u>anfertigen</u>.»', loesungen: ['anfertigen'] },
            { frage: '«Dann fuhren sie <u>los</u>.»', loesungen: ['losfahren'] }
          ],
          punktregel: 'Je 1 Punkt pro korrekte Lösung. Bei mehr als vier Verben: 1 Punkt Abzug pro überzähliges Verb.'
        },
        {
          typ: 'markieren', punkteJe: 1, abzugModus: 'voll',
          was: 'Modalverben',
          frage: 'Markiere alle <b>Modalverben</b>.',
          kurz: 'Modalverben finden',
          saetze: [
            { woerter: ['Wir', 'müssen', 'uns', 'konzentrieren', ',', 'wenn', 'wir', 'gewinnen', 'wollen', '.'],
              loesung: [1, 8] },
            { woerter: ['Du', 'darfst', 'nicht', 'aufgeben', ',', 'auch', 'wenn', 'du', 'nicht', 'mehr',
                        'kannst', '.'],
              loesung: [1, 10] }
          ],
          erklaerung: 'Die sechs Modalverben sind: können, müssen, wollen, sollen, dürfen, mögen. Sie stehen fast immer mit einem Infinitiv ohne «zu».',
          punktregel: 'Je 1 Punkt Abzug pro fehlende oder falsche Lösung. Mindestpunktzahl 0.'
        },
        {
          typ: 'text', punkteJe: 1,
          frage: 'Notiere die <b>Personalform</b>, die in der Textstelle vorkommt.',
          anweisung: 'Schreibe sie genau so, wie sie im Satz steht.',
          kurz: 'Personalformen notieren',
          teile: [
            { frage: '«Heute <b>?</b> die Zirkusbesucher eine tolle Aufführung sehen.» (wollen)', loesungen: ['wollen'] },
            { frage: '«Ob die Artisten ihre Erwartungen erfüllen <b>?</b>» (können)', loesungen: ['können', 'koennen'] },
            { frage: '«Trotz Training <b>?</b> sie sich konzentrieren.» (müssen)', loesungen: ['müssen', 'muessen'] }
          ],
          erklaerung: 'In der 3. Person Plural sehen Personalform und Infinitiv gleich aus. Ob es eine Personalform ist, verrät die Personenprobe: <i>ich will, du willst</i> – die Form verändert sich, also Personalform.'
        }
      ]
    },

    {
      titel: 'Prüfungsniveau', niveau: 'Prüfung', farbe: 'gold', bild: '🎯', xpFaktor: 1.5,
      kurz: 'Die Originalaufgaben von 2022, 2023 und 2024.',
      aufgaben: [
        {
          typ: 'markieren', punkteJe: 1, abzugModus: 'voll',
          was: 'Personalformen',
          frage: 'Notiere die <b>Personalformen</b>, die in der folgenden Textstelle vorkommen – markiere sie.',
          kurz: 'Personalformen in einer Textstelle (Prüfung 2023)',
          saetze: [
            { woerter: ['Heute', 'wollen', 'die', 'Zirkusbesucher', 'eine', 'tolle', 'Aufführung', 'sehen', '.'],
              loesung: [1] },
            { woerter: ['Ob', 'die', 'Artisten', 'ihre', 'Erwartungen', 'erfüllen', 'können', '?'],
              loesung: [6] },
            { woerter: ['Trotz', 'intensivem', 'Training', 'müssen', 'sie', 'sich', 'voll', 'konzentrieren', '.'],
              loesung: [3] },
            { woerter: ['Tatsächlich', 'dürfen', 'sie', 'sich', 'keinerlei', 'Fehler', 'erlauben', '.'],
              loesung: [1] }
          ],
          erklaerung: 'Die Lösung lautet: <b>wollen, können, müssen, dürfen</b>. Die Infinitive <i>sehen, erfüllen, konzentrieren, erlauben</i> sind keine Personalformen.',
          punktregel: 'Je 1 Punkt Abzug pro fehlende oder falsche Lösung. Mindestpunktzahl 0.'
        },
        {
          typ: 'markieren', punkteJe: 1, abzugModus: 'voll',
          was: 'Infinitive',
          frage: 'Notiere die <b>Infinitive</b>, die in der folgenden Textstelle vorkommen – markiere sie.',
          kurz: 'Infinitive in einer Textstelle (Prüfung 2024)',
          saetze: [
            { woerter: ['Können', 'wir', 'bald', 'essen', '?', 'Ja', ',', 'aber', 'vorher', 'müssen', 'wir',
                        'noch', 'den', 'Salat', 'rüsten', '.'],
              loesung: [3, 14] },
            { woerter: ['Die', 'Kartoffeln', 'kochen', 'bereits', 'im', 'siedenden', 'Wasser', '.',
                        'So', 'haben', 'wir', 'noch', 'genug', 'Zeit', ',', 'uns', 'um', 'die', 'Sauce',
                        'zu', 'kümmern', '.'],
              loesung: [20] }
          ],
          erklaerung: 'Die Lösung lautet: <b>essen, rüsten, kümmern</b>. <i>Können, müssen, haben</i> und <i>kochen</i> sind Personalformen – auch <i>kochen</i>, denn es heisst «die Kartoffeln kochen» (sie tun es gerade).',
          punktregel: 'Je 1 Punkt pro korrekte Lösung, je 1 Punkt Abzug pro falsche Lösung. Mindestpunktzahl 0.'
        },
        {
          typ: 'markieren', punkteJe: 1, abzugModus: 'voll',
          was: 'Hilfsverben',
          frage: 'Unterstreiche in den folgenden Sätzen die <b>Hilfsverben</b>, sofern vorhanden.',
          kurz: 'Hilfsverben unterstreichen (Prüfung 2024)',
          saetze: [
            { woerter: ['Anna', 'wird', 'schnell', 'nervös', '.'], loesung: [] },
            { woerter: ['Da', 'bin', 'ich', 'schon', '.', 'Wie', 'kann', 'ich', 'helfen', '?'], loesung: [] },
            { woerter: ['Lena', 'hat', 'sie', 'schon', 'vorher', 'gehört', '.'], loesung: [1] },
            { woerter: ['Woher', 'hast', 'du', 'dieses', 'Parfüm', '?'], loesung: [] },
            { woerter: ['Viktor', 'wird', 'gleich', 'hier', 'sein', '.'], loesung: [1] },
            { woerter: ['Bist', 'du', 'mit', 'dem', 'Anbraten', 'fertig', 'geworden', '?'], loesung: [0] }
          ],
          tipp: 'Frage bei jedem <i>sein/haben/werden</i>: Steht im Satz noch ein Partizip oder ein Infinitiv, dem es hilft?',
          erklaerung: 'Hilfsverben sind nur <b>hat</b> (Perfekt: hat gehört), <b>wird</b> (Futur: wird sein) und <b>Bist</b> (Perfekt: bist geworden). <i>wird nervös</i>, <i>bin da</i>, <i>kann</i> und <i>hast</i> (= besitzen) sind Voll- bzw. Modalverben.',
          punktregel: 'Je 1 Punkt pro korrekte Lösung, je 1 Punkt Abzug pro falsche Lösung. Mindestpunktzahl 0.'
        },
        {
          typ: 'tabelle', punkteJe: 0.5,
          frage: 'Konjugation der Verben: Setze die folgenden Verben in die gewünschte Form.',
          kurz: 'Konjugationstabelle (Prüfungsniveau)',
          kopf: ['Infinitiv', 'Präsens, 2. Person Singular', 'Präteritum, 3. Person Singular'],
          zeilen: [
            { fest: ['empfehlen'], felder: [{ loesungen: ['empfiehlst'] }, { loesungen: ['empfahl'] }] },
            { fest: ['geniessen'], felder: [{ loesungen: ['geniesst', 'geniessest'] }, { loesungen: ['genoss'] }] },
            { fest: ['stehlen'], felder: [{ loesungen: ['stiehlst'] }, { loesungen: ['stahl'] }] },
            { fest: ['treffen'], felder: [{ loesungen: ['triffst'] }, { loesungen: ['traf'] }] },
            { fest: ['schlafen'], felder: [{ loesungen: ['schläfst', 'schlaefst'] }, { loesungen: ['schlief'] }] }
          ],
          punktregel: 'Je ½ Punkt pro korrekte und korrekt geschriebene Lösung.'
        },
        {
          typ: 'text', punkteJe: 1,
          frage: 'In den folgenden Sätzen hat es vier Verben mit Verbzusatz. Notiere diese Verben <u>im Infinitiv</u>.',
          anweisung: 'Reihenfolge wie im Text.',
          kurz: 'Vier Verben mit Verbzusatz (Prüfung 2022)',
          vorlage: '«Sie wollten unbedingt verhindern, dass ihnen die anderen <u>zuvorkommen</u> würden. Kaum waren sie an der Mündung <u>angekommen</u>, liess sie Einbäume <u>anfertigen</u>. Dann fuhren sie <u>los</u>.»',
          teile: [
            { frage: '1. Verb', loesungen: ['zuvorkommen'] },
            { frage: '2. Verb', loesungen: ['ankommen'] },
            { frage: '3. Verb', loesungen: ['anfertigen'] },
            { frage: '4. Verb', loesungen: ['losfahren'] }
          ],
          punktregel: 'Je 1 Punkt pro korrekte Lösung. Bei mehr als vier Verben: 1 Punkt Abzug pro überzähliges Verb. Mindestpunktzahl 0.'
        }
      ]
    },

    {
      titel: 'Kanti-Challenge', niveau: 'darüber', farbe: 'rot', bild: '🏔️', xpFaktor: 2,
      kurz: 'Mehrteilige Verbformen, Verbklammer und Grenzfälle.',
      aufgaben: [
        {
          typ: 'markieren', punkteJe: 1, abzugModus: 'voll',
          was: 'Teile der Verbform',
          frage: 'Markiere <b>alle</b> Teile der Verbform (Personalform, Infinitive, Partizipien, Verbzusätze).',
          kurz: 'Alle Teile einer mehrteiligen Verbform',
          saetze: [
            { woerter: ['Der', 'Vertrag', 'hätte', 'längst', 'geprüft', 'werden', 'müssen', '.'],
              loesung: [2, 4, 5, 6] },
            { woerter: ['Sie', 'wird', 'das', 'Schreiben', 'nicht', 'beantwortet', 'haben', '.'],
              loesung: [1, 5, 6] }
          ],
          erklaerung: 'Satz 1 besteht aus vier Verbteilen: <i>hätte … geprüft werden müssen</i> (Konjunktiv II, Passiv, Modalverb). Satz 2 ist Futur II: <i>wird … beantwortet haben</i>. <i>Schreiben</i> ist hier ein Nomen.',
          punktregel: 'Je 1 Punkt Abzug pro fehlende oder falsche Lösung. Mindestpunktzahl 0.'
        },
        {
          typ: 'zuordnung', punkteJe: 1,
          frage: 'Bestimme die Rolle des Verbs <b>werden</b> in jedem Satz.',
          kurz: 'Die drei Rollen von «werden»',
          vorrat: ['Vollverb (= in einen Zustand geraten)', 'Hilfsverb für das Futur', 'Hilfsverb für das Passiv'],
          zeilen: [
            { text: 'Die Zuschauer <u>werden</u> von der Direktorin begrüsst.', loesung: 2 },
            { text: 'Die Artisten <u>werden</u> ihre Kunststücke präsentieren.', loesung: 1 },
            { text: 'Ohne Jacke <u>wirst</u> du bestimmt krank.', loesung: 0 },
            { text: 'Das Gepäck <u>wird</u> auf Einbäume verladen.', loesung: 2 },
            { text: 'Es <u>wird</u> gleich dunkel.', loesung: 0 }
          ],
          tipp: 'Folgt ein Partizip II? → Passiv. Folgt ein Infinitiv? → Futur. Folgt ein Adjektiv? → Vollverb.',
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        },
        {
          typ: 'text', punkteJe: 1,
          frage: 'Vorsicht, Falle: Steckt in diesem Satz ein Verb mit Verbzusatz? Notiere den Infinitiv – oder schreibe <b>nein</b>.',
          kurz: 'Verbzusatz oder Präposition?',
          teile: [
            { frage: '«Er ging <u>an</u> ihr vorbei.»', loesungen: ['vorbeigehen'] },
            { frage: '«Sie wartete <u>auf</u> den Bus.»', loesungen: ['nein', 'keines', 'kein verbzusatz', 'kein'] },
            { frage: '«Der Bus hielt <u>an</u>.»', loesungen: ['anhalten'] },
            { frage: '«Er dachte <u>an</u> seine Tochter.»', loesungen: ['nein', 'keines', 'kein verbzusatz', 'kein'] }
          ],
          erklaerung: 'Gehört das kleine Wort zu einem Nomen dahinter («auf den Bus», «an seine Tochter»), ist es eine Präposition. Steht es allein am Satzende, ist es ein Verbzusatz. Bei «an ihr vorbei» ist <i>an</i> Präposition und <i>vorbei</i> der Verbzusatz von <i>vorbeigehen</i>.',
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        },
        {
          typ: 'tabelle', punkteJe: 0.5,
          frage: 'Bilde die verlangten Formen unregelmässiger Verben.',
          kurz: 'Unregelmässige Verben (Challenge)',
          kopf: ['Infinitiv', 'Präteritum, 3. P. Sg.', 'Partizip II'],
          zeilen: [
            { fest: ['erschrecken (= Angst bekommen)'], felder: [{ loesungen: ['erschrak'] }, { loesungen: ['erschrocken'] }] },
            { fest: ['wiegen (= Gewicht haben)'], felder: [{ loesungen: ['wog'] }, { loesungen: ['gewogen'] }] },
            { fest: ['schleifen (= schärfen)'], felder: [{ loesungen: ['schliff'] }, { loesungen: ['geschliffen'] }] },
            { fest: ['bewegen (= veranlassen)'], felder: [{ loesungen: ['bewog'] }, { loesungen: ['bewogen'] }] }
          ],
          erklaerung: 'Diese Verben haben je nach Bedeutung zwei verschiedene Formenreihen: <i>erschrecken</i> (jemanden) → erschreckte, erschreckt; <i>wiegen</i> (ein Kind) → wiegte, gewiegt; <i>schleifen</i> (einen Sack) → schleifte, geschleift; <i>bewegen</i> (etwas) → bewegte, bewegt.',
          punktregel: 'Je ½ Punkt pro korrekte Lösung.'
        },
        {
          typ: 'single',
          frage: 'Wie viele <u>Personalformen</u> stehen in diesem Satz?<br>«Als der Regen einsetzte, blieb Milan stehen und spürte, wie das Knie kalt wurde.»',
          kurz: 'Personalformen im Satzgefüge zählen',
          optionen: ['zwei', 'drei', 'vier', 'fünf'],
          loesung: 2,
          erklaerung: '<i>einsetzte</i>, <i>blieb</i>, <i>spürte</i>, <i>wurde</i> – vier Personalformen, also vier Teilsätze. <i>stehen</i> ist ein Infinitiv und gehört zu <i>blieb stehen</i>.'
        }
      ]
    }
  ]
});
