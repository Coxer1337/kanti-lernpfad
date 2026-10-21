LP.kapitel.push({
  id: 'partikel',
  nr: 11,
  titel: 'Präpositionen & Konjunktionen',
  bild: '🔗',
  gewicht: 6,
  kurz: 'Die kleinen Wörter, die Satzteile verbinden – und der Unterschied zwischen ihnen.',
  pruefungsgewicht: '≈ 4–5 P.',
  inPruefung: '2022: Text mit Präpositionen ergänzen (5 P.). 2023: Präpositionen unterstreichen (4 P.). 2024: alle Präpositionen notieren (4 P.). Der Wegweiser nennt genau dies: «Bestimmung von Präpositionen und Konjunktionen».',
  theorieKurz: 'Präposition oder Konjunktion? Die Verbprobe entscheidet.',

  theorie: [
    { titel: 'Die Präposition',
      html: [
        '<p>Eine <b class="wort">Präposition</b> (Verhältniswort) steht <u>vor</u> einer Nomengruppe und ',
        'bestimmt deren Fall. Sie bildet mit ihr zusammen eine <b>Präpositionalgruppe</b>.</p>',
        '<div class="beispiel">«Nora setzte sich <b>auf die Bank</b>.» · «Er bog <b>in die Kantonsstrasse</b> ',
        'ein.» · «<b>Trotz des Regens</b> blieb er stehen.»</div>',
        '<table>',
        '<tr><th>Bereich</th><th>Präpositionen</th></tr>',
        '<tr><td>Ort</td><td>in, auf, unter, über, neben, zwischen, hinter, vor, bei, an, zu, nach, aus, ',
        'durch, um, gegenüber, jenseits, innerhalb</td></tr>',
        '<tr><td>Zeit</td><td>vor, nach, seit, bis, während, um, ab, binnen</td></tr>',
        '<tr><td>Grund</td><td>wegen, aufgrund, infolge, dank, dar, aus, vor</td></tr>',
        '<tr><td>Art</td><td>mit, ohne, statt, gemäss, laut, entgegen</td></tr>',
        '</table>',
        '<div class="merksatz"><b>Verschmolzene Präpositionen</b> zählen mit: <i>im</i> (in dem), <i>am</i> ',
        '(an dem), <i>zum</i> (zu dem), <i>beim</i> (bei dem), <i>vom</i> (von dem), <i>ins</i> (in das). Wer ',
        'sie beim Unterstreichen vergisst, verliert Punkte.</div>'
      ].join('') },

    { titel: 'Die Konjunktion',
      html: [
        '<p>Eine <b class="wort">Konjunktion</b> (Bindewort) verbindet Wörter, Satzteile oder ganze Sätze.</p>',
        '<table>',
        '<tr><th>Gruppe</th><th>Wörter</th><th>Wirkung</th></tr>',
        '<tr><td>nebenordnend</td><td>und, oder, aber, denn, sondern</td><td>verbindet Gleichrangiges; das ',
        'Verb bleibt an zweiter Stelle</td></tr>',
        '<tr><td>unterordnend</td><td>weil, dass, ob, wenn, als, während, obwohl, nachdem, damit, bevor, ',
        'sobald, obschon</td><td>macht einen Nebensatz; das Verb rutscht ans <b>Ende</b></td></tr>',
        '</table>',
        '<div class="beispiel">«Sie blieb, <b>obwohl</b> es regnete.» → Verb <i>regnete</i> am Ende ✓<br>',
        '«Es regnete, <b>aber</b> sie blieb.» → Verb <i>blieb</i> an zweiter Stelle ✓</div>'
      ].join('') },

    { titel: 'Die Verbprobe: Präposition oder Konjunktion?',
      html: [
        '<p>Viele Wörter können beides sein. Es gibt nur eine Frage, die entscheidet:</p>',
        '<div class="probe"><b>Folgt ein ganzer Satz mit einer Personalform?</b><br>',
        'Ja → <b>Konjunktion</b> · Nein (nur eine Nomengruppe) → <b>Präposition</b></div>',
        '<table>',
        '<tr><th>Wort</th><th>als Präposition</th><th>als Konjunktion</th></tr>',
        '<tr><td>während</td><td>während <i>des Essens</i></td><td>während <i>wir assen</i></td></tr>',
        '<tr><td>seit</td><td>seit <i>drei Wochen</i></td><td>seit <i>er fort ist</i></td></tr>',
        '<tr><td>bis</td><td>bis <i>Samstag</i></td><td>bis <i>es dunkel wurde</i></td></tr>',
        '<tr><td>statt</td><td>statt <i>eines Briefes</i></td><td>statt <i>dass er schrieb</i></td></tr>',
        '<tr><td>nach</td><td>nach <i>der Besprechung</i></td><td>(nur als <i>nachdem</i>)</td></tr>',
        '</table>',
        '<div class="merksatz">Diese Tabelle ist auch die Grundlage für das Kapitel <b>Satzbau</b>: Dort ',
        'formt man Sätze um, indem man eine Präposition durch eine Konjunktion ersetzt – und umgekehrt.</div>'
      ].join('') },

    { titel: 'Was keine Präposition ist',
      html: [
        '<p>Beim Unterstreichen gibt es Abzüge für falsche Lösungen. Diese drei Fallen sind die häufigsten:</p>',
        '<table>',
        '<tr><th>Falle</th><th>Beispiel</th><th>Warum nicht</th></tr>',
        '<tr><td><b>Verbzusatz</b></td><td>Er fing <u>an</u> zu pfeifen.</td><td>gehört zum Verb <i>anfangen</i></td></tr>',
        '<tr><td><b>Adverb</b></td><td>Sie kam <u>vorbei</u>.</td><td>steht allein, ohne Nomengruppe</td></tr>',
        '<tr><td><b>Konjunktion</b></td><td><u>Während</u> er sprach, …</td><td>es folgt ein ganzer Satz</td></tr>',
        '</table>',
        '<div class="probe"><b>Kontrolle:</b> Nach jeder markierten Präposition muss eine Nomengruppe stehen, ',
        'die man als Ganzes verschieben kann: <i>«<b>Über</b> dem Stadion hing ein Himmel»</i> → ',
        '<i>«Ein Himmel hing <b>über dem Stadion</b>.»</i> ✓</div>'
      ].join('') }
  ],

  level: [
    {
      titel: 'Erkennen', niveau: 'leicht', farbe: 'gruen', bild: '🌱', xpFaktor: 1,
      kurz: 'Präpositionen und Konjunktionen auseinanderhalten.',
      aufgaben: [
        {
          typ: 'zuordnung', punkteJe: 1,
          frage: 'Ist das unterstrichene Wort eine Präposition oder eine Konjunktion?',
          kurz: 'Präposition oder Konjunktion? (leicht)',
          vorrat: ['Präposition', 'Konjunktion'],
          zeilen: [
            { text: 'Sie sass <u>auf</u> der kalten Bank.', loesung: 0 },
            { text: 'Sie blieb, <u>weil</u> sie den Bus verpasst hatte.', loesung: 1 },
            { text: '<u>Trotz</u> der Kälte wartete sie.', loesung: 0 },
            { text: 'Er hielt an, <u>obwohl</u> dort keine Haltestelle war.', loesung: 1 },
            { text: 'Sie ging <u>zu</u> ihrem Haus.', loesung: 0 }
          ],
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        },
        {
          typ: 'markieren', punkteJe: 1, abzugModus: 'voll',
          was: 'Präpositionen',
          frage: 'Unterstreiche in den folgenden Sätzen die <b>Präpositionen</b>.',
          kurz: 'Präpositionen unterstreichen (leicht)',
          saetze: [
            { woerter: ['Sie', 'setzte', 'sich', 'auf', 'die', 'Bank', 'und', 'zog', 'die', 'Kapuze',
                        'über', 'den', 'Kopf', '.'],
              loesung: [3, 10] },
            { woerter: ['Der', 'Bus', 'hielt', 'zehn', 'Meter', 'vor', 'der', 'Haltestelle', '.'],
              loesung: [5] }
          ],
          punktregel: 'Je 1 Punkt Abzug pro fehlende oder falsche Lösung. Mindestpunktzahl 0.'
        },
        {
          typ: 'luecke', punkteJe: 0.5,
          frage: 'Ergänze die passende <b>Präposition</b>.',
          kurz: 'Präpositionen einsetzen (leicht)',
          luecken: [
            { vor: 'Sie wartete ', loesungen: ['auf'], nach: ' den Bus. ' },
            { vor: 'Er fuhr ', loesungen: ['ins', 'in das', 'zum'], nach: ' Depot. ' },
            { vor: 'Sie ging ', loesungen: ['zu'], nach: ' Fuss nach Hause. ' },
            { vor: 'Der Himmel hing ', loesungen: ['über'], nach: ' dem Stadion.' }
          ],
          punktregel: 'Je ½ Punkt pro korrekte und korrekt geschriebene Lösung.'
        },
        {
          typ: 'markieren', punkteJe: 1, abzugModus: 'voll',
          was: 'Konjunktionen',
          frage: 'Markiere alle <b>Konjunktionen</b>.',
          kurz: 'Konjunktionen markieren',
          saetze: [
            { woerter: ['Sie', 'rannte', ',', 'aber', 'der', 'Bus', 'war', 'weg', ',', 'und', 'niemand',
                        'stand', 'an', 'der', 'Haltestelle', '.'],
              loesung: [3, 9] },
            { woerter: ['Er', 'hielt', 'an', ',', 'obwohl', 'dort', 'keine', 'Haltestelle', 'war', ',',
                        'weil', 'er', 'sie', 'kannte', '.'],
              loesung: [4, 10] }
          ],
          erklaerung: '<i>an</i> in «hielt an» ist ein Verbzusatz von <i>anhalten</i>, keine Präposition und keine Konjunktion.',
          punktregel: 'Je 1 Punkt Abzug pro fehlende oder falsche Lösung. Mindestpunktzahl 0.'
        },
        {
          typ: 'single',
          frage: 'In welchem Satz ist <b>«bis»</b> eine <u>Konjunktion</u>?',
          kurz: '«bis» – Präposition oder Konjunktion?',
          optionen: [
            'Sie blieb bis Samstag.',
            'Er wartete, bis es dunkel wurde.',
            'Von Montag bis Freitag hat er Training.',
            'Bis zur Kreuzung sind es dreihundert Meter.'
          ],
          loesung: 1,
          erklaerung: 'Nur hier folgt ein ganzer Satz mit einer Personalform (<i>wurde</i>). In den anderen Sätzen steht nach <i>bis</i> nur eine Nomengruppe.'
        }
      ]
    },

    {
      titel: 'Genau hinsehen', niveau: 'mittel', farbe: '', bild: '🔎', xpFaktor: 1.2,
      kurz: 'Verschmolzene Formen, Verbzusätze und Doppelgänger.',
      aufgaben: [
        {
          typ: 'markieren', punkteJe: 1, abzugModus: 'voll',
          was: 'Präpositionen',
          frage: 'Unterstreiche alle <b>Präpositionen</b> – auch die verschmolzenen (<i>im, am, zum, beim, vom</i>).',
          kurz: 'Verschmolzene Präpositionen finden',
          saetze: [
            { woerter: ['Beim', 'Laufen', 'spürte', 'er', 'den', 'Stich', 'im', 'Knie', '.'],
              loesung: [0, 6] },
            { woerter: ['Vom', 'Stadion', 'aus', 'ging', 'sie', 'zum', 'Bahnhof', 'und', 'dann', 'nach',
                        'Hause', '.'],
              loesung: [0, 5, 9] }
          ],
          erklaerung: '<i>Beim</i> = bei dem, <i>im</i> = in dem, <i>Vom</i> = von dem, <i>zum</i> = zu dem. <i>aus</i> gehört hier zu «vom … aus» und wird meist mitgezählt; in dieser Übung zählt es nicht als Fehler.',
          punktregel: 'Je 1 Punkt Abzug pro fehlende oder falsche Lösung. Mindestpunktzahl 0.'
        },
        {
          typ: 'zuordnung', punkteJe: 1,
          frage: 'Ist das unterstrichene Wort eine Präposition, eine Konjunktion oder ein Verbzusatz?',
          kurz: 'Präposition, Konjunktion oder Verbzusatz?',
          vorrat: ['Präposition', 'Konjunktion', 'Verbzusatz'],
          zeilen: [
            { text: 'Er fing <u>an</u> zu pfeifen.', loesung: 2 },
            { text: 'Sie standen <u>an</u> der Haltestelle.', loesung: 0 },
            { text: '<u>Während</u> sie wartete, wurde es kalt.', loesung: 1 },
            { text: '<u>Während</u> des Wartens wurde es kalt.', loesung: 0 },
            { text: 'Dann fuhren sie <u>los</u>.', loesung: 2 },
            { text: 'Sie blieb, <u>bis</u> der Bus kam.', loesung: 1 }
          ],
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        },
        {
          typ: 'luecke', punkteJe: 0.5,
          frage: 'Ergänze den Text mit passenden <b>Präpositionen</b>.',
          kurz: 'Text mit Präpositionen ergänzen',
          luecken: [
            { vor: 'Brunner stieg ', loesungen: ['mit'], nach: ' zwanzig Kilo Gepäck ' },
            { vor: '', loesungen: ['auf'], nach: ' den Berg. ' },
            { vor: 'Alle hundert Höhenmeter blieb sie stehen und notierte die Werte ', loesungen: ['in'], nach: ' ihr Notizbuch. ' },
            { vor: 'Zweimal geriet sie ', loesungen: ['in'], nach: ' ein Gewitter. ' },
            { vor: 'Ihre Arbeit erschien 1937 ', loesungen: ['unter'], nach: ' fremdem Namen.' }
          ],
          punktregel: 'Je ½ Punkt pro korrekte und korrekt geschriebene Lösung.'
        },
        {
          typ: 'zuordnung', punkteJe: 1,
          frage: 'Welche Bedeutung stellt die Konjunktion her?',
          kurz: 'Bedeutung der Konjunktionen',
          vorrat: ['Grund', 'Gegensatz / Einräumung', 'Zeit', 'Bedingung', 'Ziel / Zweck'],
          zeilen: [
            { text: 'weil', loesung: 0 },
            { text: 'obwohl', loesung: 1 },
            { text: 'nachdem', loesung: 2 },
            { text: 'falls', loesung: 3 },
            { text: 'damit', loesung: 4 },
            { text: 'sobald', loesung: 2 }
          ],
          erklaerung: 'Diese Zuordnung brauchst du im Kapitel Satzbau: Dort musst du eine Präposition durch eine Konjunktion mit <u>derselben</u> Bedeutung ersetzen (<i>trotz</i> → <i>obwohl</i>, <i>wegen</i> → <i>weil</i>, <i>nach</i> → <i>nachdem</i>).',
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        },
        {
          typ: 'markieren', punkteJe: 1, abzugModus: 'voll',
          was: 'Präpositionen',
          frage: 'Vorsicht: In diesem Satz stehen auch Verbzusätze und Adverbien. Markiere nur die <b>Präpositionen</b>.',
          kurz: 'Nur die echten Präpositionen markieren',
          saetze: [
            { woerter: ['Er', 'stand', 'auf', ',', 'ging', 'an', 'ihr', 'vorbei', 'und', 'schaute',
                        'aus', 'dem', 'Fenster', '.'],
              loesung: [5, 10] }
          ],
          erklaerung: '<i>auf</i> gehört zu <i>aufstehen</i> (Verbzusatz), <i>vorbei</i> zu <i>vorbeigehen</i>. Echte Präpositionen sind <i>an</i> (an ihr) und <i>aus</i> (aus dem Fenster).',
          punktregel: 'Je 1 Punkt Abzug pro fehlende oder falsche Lösung. Mindestpunktzahl 0.'
        }
      ]
    },

    {
      titel: 'Prüfungsniveau', niveau: 'Prüfung', farbe: 'gold', bild: '🎯', xpFaktor: 1.5,
      kurz: 'Die drei Originalaufgaben: unterstreichen, notieren, ergänzen.',
      aufgaben: [
        {
          typ: 'markieren', punkteJe: 1, abzugModus: 'voll',
          was: 'Präpositionen',
          frage: 'Unterstreiche in den folgenden Sätzen die <b>Präpositionen</b>.',
          kurz: 'Präpositionen unterstreichen (Prüfung 2023)',
          saetze: [
            { woerter: ['Als', 'der', 'Clown', 'ungeschickt', 'ein', 'Rad', 'schlug', ',', 'schauten',
                        'ihm', 'viele', 'Leute', 'zu', '.'],
              loesung: [] },
            { woerter: ['Vor', 'unseren', 'Augen', 'stolperte', 'er', 'über', 'seine', 'ungeheuren',
                        'Schuhe', '.'],
              loesung: [0, 5] },
            { woerter: ['Er', 'stiess', 'ihn', 'bei', 'jedem', 'Versuch', ',', 'ihn', 'aufzuheben', ',',
                        'weiter', 'fort', '.'],
              loesung: [3] },
            { woerter: ['Doch', 'zu', 'unserer', 'grossen', 'Überraschung', 'liess', 'sich', 'der',
                        'Clown', 'nicht', 'verdriessen', '.'],
              loesung: [1] }
          ],
          erklaerung: 'Die Prüfungslösung lautete: <b>Vor, über, bei, zu</b>. Im ersten Satz ist <i>zu</i> in «schauten zu» ein Verbzusatz von <i>zuschauen</i> – keine Präposition.',
          punktregel: 'Je 1 Punkt Abzug pro fehlende oder falsche Lösung. Mindestpunktzahl 0.'
        },
        {
          typ: 'markieren', punkteJe: 1, abzugModus: 'voll',
          was: 'Präpositionen',
          frage: 'Notiere alle <b>Präpositionen</b> der folgenden Textstelle – markiere sie.',
          kurz: 'Präpositionen notieren (Prüfung 2024)',
          saetze: [
            { woerter: ['Anna', 'drehte', 'sich', 'um', '.', 'In', 'der', 'Küche', 'bereitete', 'sie',
                        'mit', 'umgebundener', 'Schürze', 'das', 'Fleisch', 'zu', '.'],
              loesung: [5, 10] },
            { woerter: ['Bereits', 'kamen', 'die', 'Gäste', 'an', '.', 'Während', 'sie', 'das',
                        'Treppenhaus', 'hochstiegen', ',', 'legte', 'Anna', 'ihre', 'Schürze', 'ab', '.'],
              loesung: [] },
            { woerter: ['Makarenkos', 'strahlendes', 'Gesicht', 'tauchte', 'über', 'dem', 'Treppenabsatz',
                        'auf', '.', 'Ich', 'habe', 'dich', 'bei', 'der', 'Eröffnung', 'schon', 'gesehen', '.'],
              loesung: [4, 12] }
          ],
          erklaerung: 'Die Prüfungslösung lautete: <b>in / mit / über / bei</b>. Keine Präpositionen sind <i>um</i> (drehte sich um), <i>zu</i> (bereitete zu), <i>an</i> (kamen an) und <i>auf</i> (tauchte auf) – alles Verbzusätze. <i>Während</i> ist hier eine Konjunktion, denn es folgt ein ganzer Satz.',
          punktregel: 'Je 1 Punkt pro korrekte Lösung, je 1 Punkt Abzug pro falsche Lösung. Mindestpunktzahl 0.'
        },
        {
          typ: 'luecke', punkteJe: 0.5,
          frage: 'Ergänze den folgenden Text mit passenden <b>Präpositionen</b>.',
          kurz: 'Text mit Präpositionen ergänzen (Prüfung 2022)',
          luecken: [
            { vor: 'Brazza war ', loesungen: ['mit'], nach: ' tapferen Männern unterwegs. ' },
            { vor: 'Als sie ', loesungen: ['an', 'bei'], nach: ' der Flussmündung ankamen, wussten sie, dass eine lange Reise ' },
            { vor: '', loesungen: ['vor'], nach: ' ihnen lag. ' },
            { vor: 'Oft wurde er ', loesungen: ['von'], nach: ' einheimischen Stämmen aufgehalten, ' },
            { vor: '', loesungen: ['von'], nach: ' denen er zuvor nie gehört hatte. ' },
            { vor: '', loesungen: ['Dank', 'Aufgrund', 'Infolge', 'Wegen'], nach: ' dieser Begegnungen wurde sein Wissen immer grösser.' }
          ],
          punktregel: 'Je ½ Punkt pro korrekte und korrekt geschriebene Lösung.'
        },
        {
          typ: 'markieren', punkteJe: 1, abzugModus: 'voll',
          was: 'Konjunktionen',
          frage: 'Markiere alle <b>Konjunktionen</b> in dieser Textstelle.',
          kurz: 'Konjunktionen in einer Textstelle',
          saetze: [
            { woerter: ['Obwohl', 'der', 'Spaten', 'auf', 'etwas', 'Weiches', 'stiess', ',', 'grub', 'der',
                        'Bauer', 'weiter', ',', 'denn', 'er', 'dachte', ',', 'dass', 'es', 'ein', 'Schaf',
                        'sei', '.'],
              loesung: [0, 13, 17] }
          ],
          erklaerung: '<i>Obwohl</i> und <i>dass</i> sind unterordnend (Verb am Ende), <i>denn</i> ist nebenordnend (Verb an zweiter Stelle). <i>auf</i> ist eine Präposition.',
          punktregel: 'Je 1 Punkt Abzug pro fehlende oder falsche Lösung. Mindestpunktzahl 0.'
        },
        {
          typ: 'zuordnung', punkteJe: 1,
          frage: 'Welchen <b>Fall</b> verlangt die Präposition in diesem Satz?',
          kurz: 'Fall nach der Präposition bestimmen',
          vorrat: ['Akkusativ', 'Dativ', 'Genitiv'],
          zeilen: [
            { text: 'Er stolperte <u>über</u> seine Schuhe.', loesung: 0 },
            { text: 'Sie sass <u>auf</u> der Bank.', loesung: 1 },
            { text: '<u>Trotz</u> des Gewitters stieg sie weiter.', loesung: 2 },
            { text: 'Sie ging <u>ohne</u> ihren Vater hin.', loesung: 0 },
            { text: 'Er sprach <u>mit</u> dem Trainer.', loesung: 1 }
          ],
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        }
      ]
    },

    {
      titel: 'Kanti-Challenge', niveau: 'darüber', farbe: 'rot', bild: '🏔️', xpFaktor: 2,
      kurz: 'Seltene Präpositionen, mehrteilige Konjunktionen und knifflige Grenzfälle.',
      aufgaben: [
        {
          typ: 'markieren', punkteJe: 1, abzugModus: 'voll',
          was: 'Präpositionen',
          frage: 'Markiere alle <b>Präpositionen</b>. Dieser Abschnitt enthält auch seltenere.',
          kurz: 'Seltenere Präpositionen erkennen',
          saetze: [
            { woerter: ['Innerhalb', 'weniger', 'Wochen', 'zersetzen', 'Bakterien', 'einen', 'Körper', ',',
                        'doch', 'im', 'Moor', 'arbeiten', 'sie', 'kaum', '.'],
              loesung: [0, 9] },
            { woerter: ['Laut', 'dem', 'Bericht', 'wurden', 'seit', '1850', 'neunzig', 'Prozent', 'der',
                        'Moore', 'entwässert', ',', 'meist', 'zwecks', 'Gewinnung', 'von', 'Ackerland', '.'],
              loesung: [0, 4, 13, 15] }
          ],
          erklaerung: '<i>Innerhalb</i>, <i>im</i>, <i>Laut</i>, <i>seit</i>, <i>zwecks</i> und <i>von</i> sind Präpositionen. <i>seit</i> ist hier eine Präposition, weil nur eine Zeitangabe folgt, kein ganzer Satz.',
          punktregel: 'Je 1 Punkt Abzug pro fehlende oder falsche Lösung. Mindestpunktzahl 0.'
        },
        {
          typ: 'zuordnung', punkteJe: 1,
          frage: 'Mehrteilige Konjunktionen: Welche Bedeutung stellen sie her?',
          kurz: 'Mehrteilige Konjunktionen',
          vorrat: ['Aufzählung (beides)', 'Ausschluss (nur eines)', 'Gegensatz (nicht A, sondern B)', 'Vergleich'],
          zeilen: [
            { text: 'sowohl … als auch …', loesung: 0 },
            { text: 'entweder … oder …', loesung: 1 },
            { text: 'nicht … sondern …', loesung: 2 },
            { text: 'je … desto …', loesung: 3 },
            { text: 'weder … noch …', loesung: 1 }
          ],
          erklaerung: '<i>weder … noch</i> schliesst beide Möglichkeiten aus – es ist die verneinte Form von «sowohl … als auch».',
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        },
        {
          typ: 'text', punkteJe: 1,
          frage: 'Präposition oder Konjunktion? Schreibe den Fachbegriff.',
          kurz: 'Grenzfälle bestimmen',
          teile: [
            { frage: '«<u>Statt</u> einer Antwort zog er ein Blatt hervor.»', loesungen: ['Präposition', 'Praeposition'] },
            { frage: '«<u>Statt</u> dass er antwortete, zog er ein Blatt hervor.»', loesungen: ['Konjunktion'] },
            { frage: '«Er schwieg, <u>wie</u> es seine Art war.»', loesungen: ['Konjunktion'] },
            { frage: '«Er lächelte <u>wie</u> ein Verkäufer.»', loesungen: ['Präposition', 'Praeposition', 'Vergleichspartikel', 'Konjunktion'] },
            { frage: '«Sie wartete, <u>seit</u> er gegangen war.»', loesungen: ['Konjunktion'] }
          ],
          erklaerung: 'Bei <i>wie</i> im Vergleich («wie ein Verkäufer») ist die Einordnung umstritten – man spricht von einer Vergleichspartikel. In der Prüfung wird dieser Fall darum nicht geprüft.',
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        },
        {
          typ: 'luecke', punkteJe: 1,
          frage: 'Setze die Präposition, die den <b>Genitiv</b> verlangt, und ergänze die richtige Endung.',
          kurz: 'Genitivpräpositionen anwenden',
          luecken: [
            { vor: '', loesungen: ['Wegen', 'Aufgrund', 'Infolge'], nach: ' d' },
            { vor: '', loesungen: ['es'], nach: ' schlechten Wetters blieb die Messung aus. ' },
            { vor: '', loesungen: ['Während', 'Waehrend'], nach: ' d' },
            { vor: '', loesungen: ['er'], nach: ' ganzen Besprechung sagte Jonas kein Wort. ' },
            { vor: '', loesungen: ['Innerhalb', 'Binnen'], nach: ' ein' },
            { vor: '', loesungen: ['er'], nach: ' Woche kam die Antwort.' }
          ],
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        },
        {
          typ: 'single',
          frage: 'Welcher Satz enthält <u>keine</u> Präposition?',
          kurz: 'Welcher Satz hat keine Präposition?',
          optionen: [
            'Er stand auf und ging hinaus.',
            'Sie wartete vor der Tür.',
            'Trotz allem blieb er ruhig.',
            'Er legte das Blatt auf den Tisch.'
          ],
          loesung: 0,
          erklaerung: 'In «stand auf» ist <i>auf</i> ein Verbzusatz von <i>aufstehen</i>, und <i>hinaus</i> ist ein Adverb. Keine der beiden steht vor einer Nomengruppe.'
        }
      ]
    }
  ]
});
