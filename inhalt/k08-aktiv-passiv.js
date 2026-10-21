LP.kapitel.push({
  id: 'aktiv-passiv',
  nr: 8,
  titel: 'Aktiv, Passiv & Modalformen',
  bild: '🔄',
  gewicht: 5,
  kurz: 'Wer tut etwas – und wer lässt es mit sich geschehen? Dazu Imperativ und Konjunktiv.',
  pruefungsgewicht: '≈ 2–4 P.',
  inPruefung: 'In allen drei Prüfungen: «Notiere, ob die folgenden Sätze im Aktiv (A) oder Passiv (P) sind.» Je ½ Punkt. Modalformen stehen im Wegweiser bei der 3. Sek – darum hier als Zusatz.',
  theorieKurz: 'Die Passivprobe, die Passivfalle und die vier Modalformen.',

  theorie: [
    { titel: 'Aktiv und Passiv',
      html: [
        '<p><b class="wort">Aktiv:</b> Das Subjekt tut etwas. <i>Die Direktorin begrüsst die Zuschauer.</i><br>',
        '<b class="wort">Passiv:</b> Mit dem Subjekt geschieht etwas. <i>Die Zuschauer werden begrüsst.</i></p>',
        '<div class="probe"><b>Die Passivprobe – und nur sie:</b><br>',
        'Ein Satz ist im Passiv, wenn er eine Form von <b>werden</b> <u>plus</u> ein <b>Partizip II</b> enthält.<br>',
        '<i>wird begrüsst · wurde verladen · ist begrüsst worden · war verladen worden · wird verladen werden</i></div>',
        '<div class="merksatz"><b>Die grosse Falle:</b> Nicht jedes <i>werden</i> macht ein Passiv! Fehlt das ',
        'Partizip II, ist der Satz im Aktiv:<br>',
        '· «Anna <b>wird</b> nervös.» → Aktiv (kein Partizip)<br>',
        '· «Die Suppe <b>ist</b> kalt <b>geworden</b>.» → Aktiv (<i>geworden</i>, nicht <i>worden</i>)<br>',
        '· «Brazza <b>wurde</b> ein reicher Mann.» → Aktiv<br>',
        '· «Die Zuschauer <b>werden begrüsst</b>.» → Passiv ✓</div>'
      ].join('') },

    { titel: 'Vom Aktiv ins Passiv',
      html: [
        '<ol>',
        '<li>Das <b>Akkusativobjekt</b> des Aktivsatzes wird zum <b>Subjekt</b> des Passivsatzes.</li>',
        '<li>Das Verb wird zu <i>werden</i> + Partizip II.</li>',
        '<li>Das alte Subjekt kommt mit <i>von</i> dazu – oder fällt weg.</li>',
        '</ol>',
        '<div class="beispiel"><b>Aktiv:</b> <u>Die Zirkusangestellten</u> verkauften <u>gebrannte Mandeln</u>.<br>',
        '<b>Passiv:</b> <u>Gebrannte Mandeln</u> wurden (<i>von den Zirkusangestellten</i>) verkauft.</div>',
        '<div class="merksatz">Ein Satz ohne Akkusativobjekt lässt sich meist nicht ins persönliche Passiv ',
        'setzen. «Sie schläft» hat kein Passiv – «Es wird geschlafen» ist ein unpersönliches Passiv und klingt ',
        'absichtlich seltsam.</div>'
      ].join('') },

    { titel: 'Die vier Modalformen',
      html: [
        '<p>Die <b class="wort">Modalform</b> sagt, wie die Aussage gemeint ist. Der Wegweiser verlangt sie ',
        'für die 3. Sek – in der Prüfung aus der 2. Sek wurde bisher nur das <b>Erkennen</b> gefragt.</p>',
        '<table>',
        '<tr><th>Form</th><th>Bedeutung</th><th>Beispiel</th></tr>',
        '<tr><td><b>Indikativ</b></td><td>Wirklichkeitsform – so ist es</td><td>Er <b>kommt</b> morgen.</td></tr>',
        '<tr><td><b>Imperativ</b></td><td>Befehlsform – tu das</td><td><b>Komm</b> morgen! <b>Kommt</b> morgen!</td></tr>',
        '<tr><td><b>Konjunktiv I</b></td><td>indirekte Rede – er sagt, dass …</td><td>Er sagte, er <b>komme</b> ',
        'morgen.</td></tr>',
        '<tr><td><b>Konjunktiv II</b></td><td>Möglichkeit, Wunsch, Unwirkliches</td><td>Er <b>käme</b> morgen, ',
        'wenn er Zeit <b>hätte</b>.</td></tr>',
        '</table>',
        '<div class="probe"><b>Konjunktiv I oder II?</b> Konjunktiv I steht fast nur in der <u>indirekten ',
        'Rede</u> und hat die Endung <i>-e</i> in der 3. Person Singular: <i>er komme, sie habe, er sei</i>. ',
        'Konjunktiv II hat oft einen <b>Umlaut</b>: <i>käme, hätte, wäre, ginge, würde</i>.</div>'
      ].join('') }
  ],

  level: [
    {
      titel: 'Aktiv oder Passiv?', niveau: 'leicht', farbe: 'gruen', bild: '🌱', xpFaktor: 1,
      kurz: 'Die Passivprobe anwenden.',
      aufgaben: [
        {
          typ: 'zuordnung', punkteJe: 1,
          frage: 'Steht der Satz im Aktiv oder im Passiv?',
          kurz: 'Aktiv oder Passiv? (leicht)',
          vorrat: ['Aktiv', 'Passiv'],
          zeilen: [
            { text: 'Die Direktorin begrüsst die Zuschauer.', loesung: 0 },
            { text: 'Die Zuschauer werden begrüsst.', loesung: 1 },
            { text: 'Der Bus fährt ins Depot.', loesung: 0 },
            { text: 'Das Gepäck wurde verladen.', loesung: 1 },
            { text: 'Nora rannte zur Haltestelle.', loesung: 0 }
          ],
          tipp: 'Suche eine Form von <i>werden</i> zusammen mit einem Partizip II.',
          punktregel: 'Je ½ Punkt pro korrekte Lösung.'
        },
        {
          typ: 'single',
          frage: 'Welcher Satz steht im <b>Passiv</b>?',
          kurz: 'Welcher Satz steht im Passiv?',
          optionen: [
            'Anna wird schnell nervös.',
            'Die Suppe ist kalt geworden.',
            'Die Mandeln wurden verkauft.',
            'Er wird ein grosser Künstler.'
          ],
          loesung: 2,
          erklaerung: 'Nur hier steht <i>werden</i> zusammen mit einem Partizip II (<i>verkauft</i>). In den anderen Sätzen ist <i>werden</i> das Hauptverb.'
        },
        {
          typ: 'markieren', punkteJe: 1, abzugModus: 'voll',
          was: 'Passivsätze',
          frage: 'Markiere in jedem Satz die <b>Partizipien II</b>, die zum Passiv gehören.',
          kurz: 'Partizipien im Passiv markieren',
          saetze: [
            { woerter: ['Die', 'Gäste', 'wurden', 'herzlich', 'empfangen', '.'], loesung: [4] },
            { woerter: ['Das', 'Programm', 'wird', 'morgen', 'vorgestellt', '.'], loesung: [4] },
            { woerter: ['Der', 'Vertrag', 'ist', 'nie', 'unterschrieben', 'worden', '.'], loesung: [4] }
          ],
          erklaerung: 'Im dritten Satz gehört auch <i>worden</i> zur Passivform, aber das eigentliche Partizip des Hauptverbs ist <i>unterschrieben</i>.',
          punktregel: 'Je 1 Punkt Abzug pro fehlende oder falsche Lösung. Mindestpunktzahl 0.'
        },
        {
          typ: 'luecke', punkteJe: 1,
          frage: 'Setze die Sätze ins <b>Passiv</b>.',
          kurz: 'Passiv bilden (leicht)',
          luecken: [
            { vor: '«Die Angestellten verkaufen Mandeln.» → Mandeln ', loesungen: ['werden'], nach: ' ' },
            { vor: '', loesungen: ['verkauft'], nach: '. ' },
            { vor: '«Der Trainer stoppte die Zeit.» → Die Zeit ', loesungen: ['wurde'], nach: ' ' },
            { vor: '', loesungen: ['gestoppt'], nach: '.' }
          ],
          erklaerung: 'Das Akkusativobjekt (<i>Mandeln</i>, <i>die Zeit</i>) wird zum Subjekt des Passivsatzes.',
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        },
        {
          typ: 'zuordnung', punkteJe: 1,
          frage: 'Welche Modalform liegt vor?',
          kurz: 'Modalformen erkennen (leicht)',
          vorrat: ['Indikativ', 'Imperativ', 'Konjunktiv'],
          zeilen: [
            { text: 'Du kommst morgen.', loesung: 0 },
            { text: 'Komm morgen!', loesung: 1 },
            { text: 'Er käme morgen, wenn er Zeit hätte.', loesung: 2 },
            { text: 'Räum bitte den Tisch ab!', loesung: 1 }
          ],
          punktregel: 'Je ½ Punkt pro korrekte Lösung.'
        }
      ]
    },

    {
      titel: 'Umformen und erkennen', niveau: 'mittel', farbe: '', bild: '🔎', xpFaktor: 1.2,
      kurz: 'Passiv in verschiedenen Zeiten, Konjunktiv I und II unterscheiden.',
      aufgaben: [
        {
          typ: 'zuordnung', punkteJe: 1,
          frage: 'Aktiv (A) oder Passiv (P)? Achtung, hier sind Fallen eingebaut.',
          kurz: 'Aktiv oder Passiv? (mit Fallen)',
          vorrat: ['Aktiv', 'Passiv'],
          zeilen: [
            { text: 'Lenas Mutter war ziemlich angespannt.', loesung: 0 },
            { text: 'Bei den Vorbereitungen ist nichts vergessen worden.', loesung: 1 },
            { text: 'Anna wird die Mahlzeit auftischen.', loesung: 0 },
            { text: 'Dummerweise ist die Suppe kalt geworden.', loesung: 0 },
            { text: 'Ohne Jacke wirst du bestimmt krank werden.', loesung: 0 },
            { text: 'Die Belgier wurden durch das Handeln der Franzosen überrascht.', loesung: 1 }
          ],
          tipp: 'Zwei Fallen: <i>geworden</i> (nicht <i>worden</i>) ist immer Aktiv, und <i>wird … auftischen</i> ist Futur, nicht Passiv.',
          punktregel: 'Je ½ Punkt pro korrekte Lösung.'
        },
        {
          typ: 'luecke', punkteJe: 1,
          frage: 'Setze diesen Passivsatz in die verlangten Zeitformen: «Die Gäste <b>werden begrüsst</b>.»',
          kurz: 'Passiv in verschiedenen Zeiten',
          luecken: [
            { vor: '<b>Präteritum:</b> Die Gäste ', loesungen: ['wurden'], nach: ' begrüsst. ' },
            { vor: '<b>Perfekt:</b> Die Gäste ', loesungen: ['sind'], nach: ' begrüsst ' },
            { vor: '', loesungen: ['worden'], nach: '. ' },
            { vor: '<b>Plusquamperfekt:</b> Die Gäste ', loesungen: ['waren'], nach: ' begrüsst worden. ' },
            { vor: '<b>Futur:</b> Die Gäste ', loesungen: ['werden'], nach: ' begrüsst ' },
            { vor: '', loesungen: ['werden'], nach: '.' }
          ],
          punktregel: 'Je 1 Punkt pro korrekt geschriebene Verbform.'
        },
        {
          typ: 'text', punkteJe: 1,
          frage: 'Forme den Aktivsatz ins Passiv um. Schreibe den ganzen Satz.',
          anweisung: 'Lass das Subjekt des Aktivsatzes weg.',
          kurz: 'Aktivsätze ins Passiv umformen',
          teile: [
            { frage: '«Die Zirkusangestellten verkauften gebrannte Mandeln.»',
              loesungen: ['Gebrannte Mandeln wurden verkauft', 'Gebrannte Mandeln wurden verkauft.'] },
            { frage: '«Der Bauer fand eine Moorleiche.»',
              loesungen: ['Eine Moorleiche wurde gefunden', 'Eine Moorleiche wurde gefunden.'] }
          ],
          erklaerung: 'Das Akkusativobjekt rückt an den Satzanfang und wird zum Subjekt. Wer gehandelt hat, muss nicht genannt werden – genau das macht das Passiv oft nützlich.',
          punktregel: 'Je 1 Punkt pro korrekte Umformung.'
        },
        {
          typ: 'zuordnung', punkteJe: 1,
          frage: 'Konjunktiv I oder Konjunktiv II?',
          kurz: 'Konjunktiv I oder II?',
          vorrat: ['Konjunktiv I (indirekte Rede)', 'Konjunktiv II (Möglichkeit, Wunsch)'],
          zeilen: [
            { text: 'Er sagte, er komme später.', loesung: 0 },
            { text: 'Wenn er Zeit hätte, käme er.', loesung: 1 },
            { text: 'Sie behauptete, sie sei nicht dort gewesen.', loesung: 0 },
            { text: 'Ich wünschte, ich wäre schon fertig.', loesung: 1 },
            { text: 'Der Trainer meinte, Milan habe Schmerzen.', loesung: 0 }
          ],
          tipp: 'Umlaut (<i>käme, hätte, wäre</i>) deutet auf Konjunktiv II. Endung <i>-e</i> ohne Umlaut (<i>komme, habe, sei</i>) auf Konjunktiv I.',
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        },
        {
          typ: 'luecke', punkteJe: 1,
          frage: 'Setze die direkte Rede in die <b>indirekte Rede</b> (Konjunktiv I).',
          kurz: 'Indirekte Rede bilden',
          luecken: [
            { vor: '«Ich komme gleich», sagte Lena. → Lena sagte, sie ', loesungen: ['komme'], nach: ' gleich. ' },
            { vor: '«Ich habe nichts unterschrieben», sagte sie. → Sie sagte, sie ', loesungen: ['habe'], nach: ' nichts unterschrieben. ' },
            { vor: '«Es ist nichts Schlimmes», sagte er. → Er sagte, es ', loesungen: ['sei'], nach: ' nichts Schlimmes.' }
          ],
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        }
      ]
    },

    {
      titel: 'Prüfungsniveau', niveau: 'Prüfung', farbe: 'gold', bild: '🎯', xpFaktor: 1.5,
      kurz: 'Die Originalaufgabe aus 2022, 2023 und 2024.',
      aufgaben: [
        {
          typ: 'zuordnung', punkteJe: 0.5,
          frage: 'Notiere, ob die folgenden Sätze im Aktiv (A) oder Passiv (P) sind.',
          kurz: 'Aktiv/Passiv (Prüfung 2024)',
          vorrat: ['A (Aktiv)', 'P (Passiv)'],
          zeilen: [
            { text: 'Lenas Mutter war ziemlich angespannt.', loesung: 0 },
            { text: 'Bei den Vorbereitungen ist nichts vergessen worden.', loesung: 1 },
            { text: 'Anna wird die Mahlzeit auftischen.', loesung: 0 },
            { text: 'Dummerweise ist die Suppe kalt geworden.', loesung: 0 }
          ],
          erklaerung: 'Satz 1: <i>war angespannt</i> – <i>angespannt</i> ist hier ein Adjektiv, kein Passiv. Satz 3: Futur. Satz 4: <i>geworden</i> statt <i>worden</i> – Vollverb, also Aktiv.',
          punktregel: 'Je ½ Punkt pro korrekte Lösung.'
        },
        {
          typ: 'zuordnung', punkteJe: 0.5,
          frage: 'Notiere, ob die folgenden Sätze im Aktiv (A) oder Passiv (P) sind.',
          kurz: 'Aktiv/Passiv (Prüfung 2022/2023)',
          vorrat: ['A (Aktiv)', 'P (Passiv)'],
          zeilen: [
            { text: 'Die Zuschauer werden von der Zirkusdirektorin begrüsst.', loesung: 1 },
            { text: 'Die Artisten werden ihre Kunststücke präsentieren.', loesung: 0 },
            { text: 'Ohne entsprechende Kleidung wirst du bestimmt krank werden.', loesung: 0 },
            { text: 'Nach viel Training wurde unsere Show noch besser.', loesung: 0 },
            { text: 'Wenn möglich werden Verträge abgeschlossen werden.', loesung: 1 },
            { text: 'Brazza wurde ein sehr bekannter und reicher Mann.', loesung: 0 }
          ],
          tipp: 'Satz 5 ist Futur <u>und</u> Passiv zugleich – deshalb zweimal «werden».',
          punktregel: 'Je ½ Punkt pro korrekte Lösung.'
        },
        {
          typ: 'text', punkteJe: 1,
          frage: 'Forme die folgenden Sätze ins Passiv um. Nenne den Täter nicht.',
          kurz: 'Passiv bilden (Prüfungsniveau)',
          teile: [
            { frage: '«Die lokalen Anhänger verkauften Stanleys Männern keinen Proviant.»',
              loesungen: ['Stanleys Männern wurde kein Proviant verkauft', 'Stanleys Männern wurde kein Proviant verkauft.',
                          'Kein Proviant wurde Stanleys Männern verkauft', 'Kein Proviant wurde Stanleys Männern verkauft.'] },
            { frage: '«Brazza schloss einen Vertrag mit einem lokalen Herrscher.»',
              loesungen: ['Ein Vertrag wurde mit einem lokalen Herrscher geschlossen', 'Ein Vertrag wurde mit einem lokalen Herrscher geschlossen.',
                          'Ein Vertrag mit einem lokalen Herrscher wurde geschlossen', 'Ein Vertrag mit einem lokalen Herrscher wurde geschlossen.',
                          'Ein Vertrag wurde mit einem lokalen Herrscher abgeschlossen', 'Ein Vertrag wurde mit einem lokalen Herrscher abgeschlossen.'] }
          ],
          erklaerung: 'Achtung bei Satz 1: Das Dativobjekt (<i>Stanleys Männern</i>) bleibt im Dativ – zum Subjekt wird das Akkusativobjekt (<i>kein Proviant</i>).',
          punktregel: 'Je 1 Punkt pro korrekte Umformung.'
        },
        {
          typ: 'zuordnung', punkteJe: 1,
          frage: 'Bestimme die Modalform.',
          kurz: 'Modalformen bestimmen (Prüfungsniveau)',
          vorrat: ['Indikativ', 'Imperativ', 'Konjunktiv I', 'Konjunktiv II'],
          zeilen: [
            { text: 'Geh du schon mal!', loesung: 1 },
            { text: 'Makarenko behauptete, er habe keinen Wodka getrunken.', loesung: 2 },
            { text: 'Wenn er die Wahrheit sagte, wäre alles einfacher.', loesung: 3 },
            { text: 'Er küsste sie ein zweites Mal.', loesung: 0 },
            { text: 'Sergej sagte, er sei vom Stuhl gekippt.', loesung: 2 },
            { text: 'Würdest du bitte den Salat waschen?', loesung: 3 }
          ],
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        },
        {
          typ: 'single',
          frage: 'In welchem Satz ist <b>«wurde»</b> <u>kein</u> Passivsignal?',
          kurz: 'Wann ist «wurde» kein Passiv?',
          optionen: [
            'Das Gepäck wurde auf Einbäume verladen.',
            'Der Stützpunkt wurde «Brazzaville» getauft.',
            'Brazza wurde mit Ehrungen überschüttet.',
            'Nach viel Training wurde die Show noch besser.'
          ],
          loesung: 3,
          erklaerung: 'In den ersten drei Sätzen steht nach <i>wurde</i> ein Partizip II. Im letzten folgt ein Adjektiv (<i>besser</i>) – dort ist <i>werden</i> ein Vollverb und der Satz steht im Aktiv.'
        }
      ]
    },

    {
      titel: 'Kanti-Challenge', niveau: 'darüber', farbe: 'rot', bild: '🏔️', xpFaktor: 2,
      kurz: 'Zustandspassiv, unpersönliches Passiv und Konjunktiv in der indirekten Rede.',
      aufgaben: [
        {
          typ: 'zuordnung', punkteJe: 1,
          frage: 'Vorgangspassiv («werden»), Zustandspassiv («sein») oder Aktiv?',
          anweisung: 'Das Vorgangspassiv beschreibt, was <u>geschieht</u>; das Zustandspassiv, wie etwas <u>ist</u>.',
          kurz: 'Vorgangspassiv, Zustandspassiv oder Aktiv?',
          vorrat: ['Vorgangspassiv', 'Zustandspassiv', 'Aktiv'],
          zeilen: [
            { text: 'Das Fenster wird geöffnet.', loesung: 0 },
            { text: 'Das Fenster ist geöffnet.', loesung: 1 },
            { text: 'Das Fenster öffnet sich.', loesung: 2 },
            { text: 'Der Vertrag war unterschrieben.', loesung: 1 },
            { text: 'Der Vertrag wurde unterschrieben.', loesung: 0 }
          ],
          erklaerung: 'Das Zustandspassiv wird mit <i>sein</i> + Partizip II gebildet und beschreibt das Ergebnis. Das Vorgangspassiv mit <i>werden</i> + Partizip II beschreibt den Vorgang selbst.',
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        },
        {
          typ: 'single',
          frage: 'Welcher Satz lässt sich <u>nicht</u> ins persönliche Passiv setzen?',
          kurz: 'Welcher Satz hat kein Passiv?',
          optionen: [
            'Der Trainer stoppt die Zeit.',
            'Milan schläft schlecht.',
            'Lena bindet ihren Schuh.',
            'Vogt steckt die Stoppuhr ein.'
          ],
          loesung: 1,
          erklaerung: '<i>schlafen</i> hat kein Akkusativobjekt, das zum Subjekt werden könnte. Möglich wäre höchstens das unpersönliche Passiv «Es wird schlecht geschlafen» – das klingt aber absichtlich schief.'
        },
        {
          typ: 'luecke', punkteJe: 1,
          frage: 'Setze die direkte Rede in die indirekte Rede. Verwende den <b>Konjunktiv I</b>, und wenn dieser nicht erkennbar ist, den <b>Konjunktiv II</b>.',
          anweisung: 'Beispiel: «Sie haben nichts gesagt.» → Er sagte, sie <b>hätten</b> nichts gesagt. (nicht «haben», das klingt wie Indikativ)',
          kurz: 'Konjunktiv I oder Ersatzform?',
          luecken: [
            { vor: '«Ich weiss es nicht.» → Er sagte, er ', loesungen: ['wisse'], nach: ' es nicht. ' },
            { vor: '«Wir wissen es nicht.» → Sie sagten, sie ', loesungen: ['wüssten', 'wuessten'], nach: ' es nicht. ' },
            { vor: '«Ich gehe nach Hause.» → Sie sagte, sie ', loesungen: ['gehe'], nach: ' nach Hause. ' },
            { vor: '«Wir gehen nach Hause.» → Sie sagten, sie ', loesungen: ['gingen', 'würden gehen', 'wuerden gehen'], nach: ' nach Hause.' }
          ],
          erklaerung: 'In der 1. und 3. Person Plural sieht der Konjunktiv I gleich aus wie der Indikativ (<i>wir wissen – sie wissen</i>). Dann weicht man auf den Konjunktiv II aus: <i>wüssten, gingen</i>.',
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        },
        {
          typ: 'markieren', punkteJe: 1, abzugModus: 'voll',
          was: 'Passivsätze',
          frage: 'Markiere alle <b>Verbformen</b>, die zu einem echten Passiv gehören.',
          kurz: 'Echte Passivformen im Text finden',
          saetze: [
            { woerter: ['Die', 'Moore', 'sind', 'seit', '1987', 'geschützt', ',', 'weil', 'damals', 'eine',
                        'Abstimmung', 'gewonnen', 'wurde', '.'],
              loesung: [12] },
            { woerter: ['Seit', 'dem', 'Entscheid', 'werden', 'keine', 'Moore', 'mehr', 'entwässert', ',',
                        'und', 'die', 'Funde', 'bleiben', 'erhalten', '.'],
              loesung: [3, 7] }
          ],
          erklaerung: 'Satz 1: <i>sind geschützt</i> ist ein Zustandspassiv und wird in der Prüfung meist nicht als Passiv gewertet; <i>gewonnen wurde</i> dagegen ist ein echtes Vorgangspassiv. Satz 2: <i>werden entwässert</i> ist Passiv, <i>bleiben erhalten</i> nicht.',
          punktregel: 'Je 1 Punkt Abzug pro fehlende oder falsche Lösung. Mindestpunktzahl 0.'
        },
        {
          typ: 'text', punkteJe: 2,
          frage: 'Warum verwenden Sachtexte so oft das Passiv? Nenne zwei Gründe.',
          anweisung: 'Denk an den Moor-Text: «In der Schweiz sind rund neunzig Prozent der Moorflächen entwässert worden.»',
          kurz: 'Warum Sachtexte das Passiv brauchen',
          teile: [
            { frage: '1. Grund (Stichwort genügt)',
              loesungen: ['Täter unbekannt', 'Täter unwichtig', 'wer handelt ist unbekannt', 'Urheber unbekannt',
                          'man weiss nicht wer', 'Handelnder unbekannt', 'Täter nicht genannt', 'niemand bestimmtes'] },
            { frage: '2. Grund (Stichwort genügt)',
              loesungen: ['Vorgang wichtiger', 'Sache im Mittelpunkt', 'Handlung wichtiger', 'sachlich', 'neutral',
                          'objektiv', 'Vorgang im Zentrum', 'Ergebnis wichtiger'] }
          ],
          erklaerung: 'Im Passiv rückt das Geschehen in den Mittelpunkt, und man muss niemanden benennen. Darum klingen Sachtexte im Passiv sachlicher – und darum wirken Aufsätze langweilig, wenn man es übertreibt.'
        }
      ]
    }
  ]
});
