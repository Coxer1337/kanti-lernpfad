LP.kapitel.push({
  id: 'redewendungen',
  nr: 4,
  titel: 'Redewendungen',
  bild: '🗣️',
  gewicht: 6,
  kurz: 'Feste Wendungen kennen, ergänzen und erklären.',
  pruefungsgewicht: '≈ 3–7 P.',
  inPruefung: '2022: Redewendungen mit einem Nahrungsmittel ergänzen. 2023: Redewendungen den Aussagen zuordnen (7 Punkte!). 2024: eine Redewendung erklären und Redewendungen mit einem Körperteil ergänzen.',
  theorieKurz: 'Was eine Redewendung ist, die wichtigsten Gruppen und wie man sie erklärt.',

  theorie: [
    { titel: 'Was eine Redewendung ist',
      html: [
        '<p>Eine <b class="wort">Redewendung</b> ist eine feste Wortverbindung, deren Bedeutung man nicht aus ',
        'den einzelnen Wörtern erschliessen kann.</p>',
        '<div class="beispiel"><i>«kalte Füsse bekommen»</i> hat nichts mit kalten Füssen zu tun. Es heisst: ',
        '<b>unsicher werden, einen Plan doch nicht ausführen</b>.</div>',
        '<p>Weil die Bedeutung nicht aus den Wörtern folgt, kann man Redewendungen nicht herleiten – man muss ',
        'sie kennen. Das ist die gute Nachricht: Diese Punkte sind reines Lernen, und dieses Kapitel ist die ',
        'Lernkartei dazu.</p>',
        '<div class="merksatz">Im Wegweiser stehen Redewendungen unter den <b>zusätzlichen Stoffzielen der ',
        '3. Sek</b>. Trotzdem kamen sie in allen drei Prüfungen aus der 2. Sek vor – 2023 sogar mit 7 Punkten. ',
        'Dieses Kapitel liegt also absichtlich leicht über dem offiziellen Stoff.</div>'
      ].join('') },

    { titel: 'Die drei Aufgabenformen',
      html: [
        '<table>',
        '<tr><th>Form</th><th>Beispiel aus der Prüfung</th></tr>',
        '<tr><td><b>Ergänzen</b></td><td>«etwas / jemanden loswerden: sich etwas vom ______ schaffen» ',
        '→ <i>Hals</i></td></tr>',
        '<tr><td><b>Zuordnen</b></td><td>Zwölf Redewendungen sind nummeriert, du schreibst die Ziffer hinter ',
        'die passende Aussage.</td></tr>',
        '<tr><td><b>Erklären</b></td><td>«Erkläre die Bedeutung dieser Redewendung (unabhängig vom Text).»</td></tr>',
        '</table>',
        '<div class="probe"><b>Beim Ergänzen gilt der Hinweis in der Aufgabe!</b> «In allen kommt ein Körperteil ',
        'vor» oder «ein Nahrungsmittel» schränkt die Suche stark ein. Lies ihn, bevor du anfängst.</div>'
      ].join('') },

    { titel: 'Wie man eine Redewendung erklärt',
      html: [
        '<p>Eine gute Erklärung ist <b>allgemein</b> und nicht auf den Text bezogen. Sie beschreibt, was ein ',
        'Mensch tut oder fühlt – ohne die Bilder der Redewendung zu wiederholen.</p>',
        '<div class="beispiel"><b>«über seinen eigenen Schatten springen»</b><br>',
        '✗ <i>Man springt über seinen Schatten.</i> — nur wiederholt<br>',
        '✗ <i>Lena hilft ihrer Mutter beim Salat.</i> — nur der Text, nicht die Bedeutung<br>',
        '✓ <i>sich überwinden; etwas tun, obwohl es der eigenen Überzeugung widerspricht</i></div>',
        '<div class="merksatz"><b>Formel:</b> Schreibe eine Erklärung, die mit «sich …», «jemanden …» oder ',
        '«etwas …» beginnt und ein <u>anderes</u> Bild verwendet als die Redewendung selbst.</div>'
      ].join('') },

    { titel: 'Nach Gruppen lernen',
      html: [
        '<p>Redewendungen lassen sich nach ihrem Bildspender sortieren. Genau danach fragt die Prüfung:</p>',
        '<table>',
        '<tr><th>Gruppe</th><th>Beispiele</th></tr>',
        '<tr><td><b>Körperteile</b></td><td>die Nase voll haben · kein Blatt vor den Mund nehmen · jemanden um ',
        'den Finger wickeln · kalte Füsse bekommen · den Kopf verlieren · Hals über Kopf</td></tr>',
        '<tr><td><b>Essen</b></td><td>die Suppe auslöffeln · seinen Senf dazugeben · eine harte Nuss · ',
        'das ist nicht mein Bier · Tomaten auf den Augen haben · Rosinen picken</td></tr>',
        '<tr><td><b>Tiere</b></td><td>die Katze im Sack kaufen · auf den Hund kommen · einen Vogel haben · ',
        'Schwein haben · Schmetterlinge im Bauch</td></tr>',
        '<tr><td><b>Handwerk</b></td><td>den Nagel auf den Kopf treffen · ins Wasser fallen · Öl ins Feuer ',
        'giessen · alle Hebel in Bewegung setzen</td></tr>',
        '</table>'
      ].join('') }
  ],

  level: [
    {
      titel: 'Bekannte Wendungen', niveau: 'leicht', farbe: 'gruen', bild: '🌱', xpFaktor: 1,
      kurz: 'Die häufigsten Redewendungen und ihre Bedeutung.',
      aufgaben: [
        {
          typ: 'zuordnung', punkteJe: 1,
          frage: 'Ordne jeder Redewendung die passende Bedeutung zu.',
          kurz: 'Redewendungen und ihre Bedeutung',
          vorrat: [
            'endgültig genug haben',
            'unsicher werden und zurückziehen',
            'offen die Meinung sagen',
            'etwas sehr Offensichtliches übersehen',
            'ein Problem lösen, das man selbst verursacht hat'
          ],
          zeilen: [
            { text: 'die Nase voll haben', loesung: 0 },
            { text: 'kalte Füsse bekommen', loesung: 1 },
            { text: 'kein Blatt vor den Mund nehmen', loesung: 2 },
            { text: 'Tomaten auf den Augen haben', loesung: 3 },
            { text: 'die Suppe auslöffeln müssen', loesung: 4 }
          ],
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        },
        {
          typ: 'single',
          frage: 'Was bedeutet «<b>jemandem einen Bären aufbinden</b>»?',
          kurz: 'Bedeutung von «einen Bären aufbinden»',
          optionen: [
            'jemandem eine schwere Aufgabe geben',
            'jemandem etwas Unwahres erzählen, das er glaubt',
            'jemanden beschützen',
            'jemandem eine Last abnehmen'
          ],
          loesung: 1,
          erklaerung: 'Man erzählt jemandem eine erfundene Geschichte – und der andere glaubt sie.'
        },
        {
          typ: 'single',
          frage: 'Was bedeutet «<b>ins Fettnäpfchen treten</b>»?',
          kurz: 'Bedeutung von «ins Fettnäpfchen treten»',
          optionen: [
            'unabsichtlich etwas Unpassendes sagen oder tun',
            'Glück haben',
            'sich schmutzig machen',
            'zu viel essen'
          ],
          loesung: 0,
          erklaerung: 'Man sagt etwas, das peinlich ist oder jemanden verletzt – ohne es zu wollen.'
        },
        {
          typ: 'text', punkteJe: 0.5,
          frage: 'Ergänze die Redewendung mit dem fehlenden <b>Körperteil</b>.',
          kurz: 'Redewendungen mit Körperteil ergänzen (leicht)',
          teile: [
            { frage: 'endgültig genug haben von etwas: die ______ voll haben', loesungen: ['Nase', 'Schnauze'] },
            { frage: 'unsicher werden, einen Plan aufgeben: kalte ______ bekommen', loesungen: ['Füsse', 'Fuesse'] },
            { frage: 'direkt seine Meinung sagen: kein Blatt vor den ______ nehmen', loesungen: ['Mund'] },
            { frage: 'jemanden verführen, beeinflussen: jemanden um den (kleinen) ______ wickeln', loesungen: ['Finger'] }
          ],
          punktregel: 'Je ½ Punkt pro richtige Lösung.'
        },
        {
          typ: 'multi', proKreuz: 1, abzugJe: 1,
          frage: 'Kreuze <u>alle</u> richtigen Erklärungen für «<b>jemandem auf den Zahn fühlen</b>» an.',
          kurz: 'Erklärungen für «auf den Zahn fühlen»',
          optionen: [
            'jemanden gründlich ausfragen',
            'herausfinden wollen, was jemand wirklich denkt',
            'jemandem wehtun',
            'jemanden zum Zahnarzt begleiten'
          ],
          loesung: [0, 1],
          erklaerung: 'Die Redewendung stammt zwar vom Zahnarzt, bedeutet aber «jemanden ausfragen, um die Wahrheit herauszufinden».',
          punktregel: 'Je 1 Punkt pro richtig gesetztes Kreuz, 1 Punkt Abzug für falsche Lösung. Mindestpunktzahl 0.'
        }
      ]
    },

    {
      titel: 'Ergänzen und erklären', niveau: 'mittel', farbe: '', bild: '🔎', xpFaktor: 1.2,
      kurz: 'Lücken füllen und Bedeutungen in eigenen Worten beschreiben.',
      aufgaben: [
        {
          typ: 'text', punkteJe: 0.5,
          frage: 'Ergänze die folgenden Redewendungen. In allen kommt ein <b>Körperteil</b> vor (im Singular oder im Plural).',
          kurz: 'Redewendungen mit Körperteil (Prüfungsform)',
          teile: [
            { frage: 'etwas / jemanden loswerden: sich etwas vom ______ schaffen', loesungen: ['Hals'] },
            { frage: 'alles durcheinanderbringen: alles auf den ______ stellen', loesungen: ['Kopf'] },
            { frage: 'etwas genau treffen: den Nagel auf den ______ treffen', loesungen: ['Kopf'] },
            { frage: 'sich sehr anstrengen: sich ein ______ ausreissen', loesungen: ['Bein'] },
            { frage: 'eine Sache nicht ernst nehmen: auf die leichte ______ nehmen', loesungen: ['Schulter'] },
            { frage: 'beleidigt sein: eingeschnappt sein / die ______ hängen lassen', loesungen: ['Ohren', 'Flügel', 'Nase'] }
          ],
          punktregel: 'Je ½ Punkt pro richtige Lösung.'
        },
        {
          typ: 'frei', punkte: 2,
          frage: 'Erkläre die Bedeutung von «<b>über seinen eigenen Schatten springen</b>» – unabhängig von einem Text.',
          anweisung: 'Verwende ein anderes Bild als die Redewendung selbst.',
          kurz: '«Über seinen Schatten springen» erklären',
          musterloesung: 'sich überwinden; etwas tun, obwohl es den eigenen Überzeugungen oder dem eigenen Charakter widerspricht',
          schluessel: [['überwinden', 'uberwinden', 'zwingen', 'trotzdem'], ['überzeugung', 'charakter', 'eigentlich nicht', 'widerspricht', 'gewohnheit']],
          punktregel: '1 Punkt für die korrekte Erklärung (sinngemäss).'
        },
        {
          typ: 'multi', proKreuz: 1, abzugJe: 1,
          frage: 'Kreuze <u>alle</u> richtigen Erklärungen für «<b>nicht mit der Wimper zucken</b>» an.',
          kurz: 'Erklärungen für «nicht mit der Wimper zucken»',
          optionen: [
            'sich eine Gefühlsregung nicht anmerken lassen',
            'keine Reaktion zeigen',
            'nicht blinzeln',
            'lügen',
            'völlig ruhig bleiben'
          ],
          loesung: [0, 1, 4],
          erklaerung: '«Nicht blinzeln» ist die wörtliche, nicht die übertragene Bedeutung. «Lügen» passt nur im Zusammenhang, nicht als Erklärung der Redewendung.',
          punktregel: 'Je 1 Punkt pro richtig gesetztes Kreuz, je 1 Punkt Abzug für falsche Lösung. Mindestpunktzahl 0.'
        },
        {
          typ: 'zuordnung', punkteJe: 1,
          frage: 'Suche zu den folgenden Aussagen die entsprechende Redewendung.',
          kurz: 'Aussagen Redewendungen zuordnen',
          vorrat: [
            'sich in die Haare geraten',
            'sich aus dem Staub machen',
            'jemandem den Kopf waschen',
            'aus der Haut fahren',
            'sich am Riemen reissen',
            'die Katze im Sack kaufen'
          ],
          zeilen: [
            { text: 'Zwei Personen haben Streit bekommen.', loesung: 0 },
            { text: 'Jemand möchte am liebsten unbemerkt verschwinden.', loesung: 1 },
            { text: 'Jemand weist eine andere Person scharf zurecht.', loesung: 2 },
            { text: 'Jemand verliert vor Wut die Beherrschung.', loesung: 3 },
            { text: 'Jemand muss sich sehr zusammennehmen.', loesung: 4 },
            { text: 'Jemand kauft etwas, ohne es vorher geprüft zu haben.', loesung: 5 }
          ],
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        },
        {
          typ: 'text', punkteJe: 0.5,
          frage: 'Ergänze die Redewendung mit dem fehlenden <b>Tier</b>.',
          kurz: 'Redewendungen mit Tieren',
          teile: [
            { frage: 'grosses Glück haben: ______ haben', loesungen: ['Schwein'] },
            { frage: 'etwas ungeprüft übernehmen: die ______ im Sack kaufen', loesungen: ['Katze'] },
            { frage: 'wirtschaftlich oder gesundheitlich herunterkommen: auf den ______ kommen', loesungen: ['Hund'] },
            { frage: 'verrückt sein: einen ______ haben', loesungen: ['Vogel'] }
          ],
          punktregel: 'Je ½ Punkt pro richtige Lösung.'
        }
      ]
    },

    {
      titel: 'Prüfungsniveau', niveau: 'Prüfung', farbe: 'gold', bild: '🎯', xpFaktor: 1.5,
      kurz: 'Alle drei Prüfungsformen nacheinander – wie 2022, 2023 und 2024.',
      aufgaben: [
        {
          typ: 'text', punkteJe: 0.5,
          frage: 'Ergänze die folgenden Redewendungen. In allen kommt ein <b>Nahrungsmittel</b> (im Singular oder im Plural) vor.',
          kurz: 'Redewendungen mit Nahrungsmitteln (Prüfung 2022)',
          teile: [
            { frage: 'ein Problem lösen, das man selber verursacht hat: die ______ auslöffeln müssen', loesungen: ['Suppe'] },
            { frage: 'sich ungefragt einmischen: seinen ______ dazugeben', loesungen: ['Senf'] },
            { frage: 'nur das Beste für sich nehmen: sich die ______ aus dem Kuchen picken', loesungen: ['Rosinen'] },
            { frage: 'eine schwierige Aufgabe zu lösen haben: eine harte ______ zu knacken haben', loesungen: ['Nuss'] },
            { frage: 'verschwinden und nicht wiederkehren: bleiben, wo der ______ wächst', loesungen: ['Pfeffer'] },
            { frage: 'etwas Offensichtliches übersehen: ______ auf den Augen haben', loesungen: ['Tomaten'] }
          ],
          punktregel: 'Je ½ Punkt pro richtige Lösung.'
        },
        {
          typ: 'zuordnung', punkteJe: 1,
          frage: 'Suche zu den folgenden Aussagen die entsprechende Redewendung aus der Liste.',
          anweisung: 'Nicht alle Redewendungen aus der Liste werden gebraucht.',
          kurz: 'Zwölf Redewendungen zuordnen (Prüfung 2023)',
          vorrat: [
            'sich in die Haare geraten',
            'die Nase voll haben',
            'das Geld zum Fenster hinauswerfen',
            'sich am Riemen reissen',
            'sich aus dem Staub machen',
            'einen Korb bekommen',
            'auf eigenen Beinen stehen',
            'nicht alle Tassen im Schrank haben',
            'jemandem den Kopf waschen',
            'von etwas Wind bekommen',
            'den Braten riechen',
            'aus der Haut fahren'
          ],
          zeilen: [
            { text: 'Der Vater <u>hat endgültig genug</u> von Phillys Verhalten.', loesung: 1 },
            { text: 'Er findet, sie <u>sei verrückt</u>.', loesung: 7 },
            { text: 'Philly würde am liebsten <u>verschwinden</u>.', loesung: 4 },
            { text: 'Der Vater muss <u>sich sehr zusammennehmen</u>, um nicht <u>auszurasten</u>.', loesung: 3 },
            { text: 'Der Vater <u>weist</u> Philly <u>scharf zurecht</u>.', loesung: 8 },
            { text: 'Philly und ihr Vater <u>haben Streit bekommen</u>.', loesung: 0 },
            { text: 'Sie <u>hatte heimlich davon erfahren</u>.', loesung: 9 }
          ],
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        },
        {
          typ: 'frei', punkte: 2,
          frage: 'Erkläre die Bedeutung der Redewendung «<b>jemandem reinen Wein einschenken</b>» (unabhängig von einem Text).',
          kurz: '«Reinen Wein einschenken» erklären',
          musterloesung: 'jemandem die unangenehme Wahrheit sagen; offen zugeben, wie die Lage wirklich ist',
          schluessel: [['wahrheit', 'ehrlich', 'offen'], ['sagen', 'gestehen', 'zugeben', 'mitteilen', 'eingestehen']],
          punktregel: '1 Punkt für die korrekte Erklärung (sinngemäss).'
        },
        {
          typ: 'multi', proKreuz: 1, abzugJe: 1,
          frage: 'Kreuze <u>alle</u> richtigen Erklärungen für «<b>jemandem die Stange halten</b>» an.',
          kurz: 'Erklärungen für «jemandem die Stange halten»',
          optionen: [
            'jemanden unterstützen',
            'zu jemandem halten, auch wenn andere gegen ihn sind',
            'jemanden festhalten',
            'jemanden verteidigen',
            'jemandem etwas geben'
          ],
          loesung: [0, 1, 3],
          erklaerung: 'Die Redewendung stammt aus dem mittelalterlichen Zweikampf: Ein Helfer durfte die Stange des Kämpfers halten. Heute heisst sie «jemanden unterstützen und verteidigen».',
          punktregel: 'Je 1 Punkt pro richtig gesetztes Kreuz, je 1 Punkt Abzug für falsche Lösung. Mindestpunktzahl 0.'
        },
        {
          typ: 'text', punkteJe: 0.5,
          frage: 'Ergänze die Redewendung. In allen kommt ein <b>Körperteil</b> vor.',
          kurz: 'Körperteil-Redewendungen (Prüfung 2024)',
          teile: [
            { frage: 'etwas / jemanden loswerden: sich etwas vom ______ schaffen', loesungen: ['Hals'] },
            { frage: 'jemanden verführen, beeinflussen: jemanden um den (kleinen) ______ wickeln', loesungen: ['Finger'] },
            { frage: 'alles durcheinanderbringen: alles auf den ______ stellen', loesungen: ['Kopf'] },
            { frage: 'endgültig genug haben von etwas: die ______ voll haben', loesungen: ['Nase', 'Schnauze'] },
            { frage: 'direkt seine Meinung mitteilen: kein Blatt vor den ______ nehmen', loesungen: ['Mund'] },
            { frage: 'unsicher werden, sich feige verhalten: kalte ______ bekommen', loesungen: ['Füsse', 'Fuesse'] }
          ],
          punktregel: 'Je ½ Punkt pro richtige Lösung.'
        }
      ]
    },

    {
      titel: 'Kanti-Challenge', niveau: 'darüber', farbe: 'rot', bild: '🏔️', xpFaktor: 2,
      kurz: 'Seltenere Wendungen, Herkunft und Anwendung im eigenen Satz.',
      aufgaben: [
        {
          typ: 'zuordnung', punkteJe: 1,
          frage: 'Ordne diesen selteneren Redewendungen die passende Bedeutung zu.',
          kurz: 'Seltenere Redewendungen',
          vorrat: [
            'eine Sache endgültig und ohne Rücksicht entscheiden',
            'in grosser Eile und ohne Vorbereitung',
            'jemanden hinhalten und mit leeren Versprechen abspeisen',
            'bei einer Sache das Wichtigste übersehen',
            'etwas vorschnell als sicher betrachten'
          ],
          zeilen: [
            { text: 'den gordischen Knoten durchschlagen', loesung: 0 },
            { text: 'Hals über Kopf', loesung: 1 },
            { text: 'jemanden auf die Folter spannen', loesung: 2 },
            { text: 'den Wald vor lauter Bäumen nicht sehen', loesung: 3 },
            { text: 'die Rechnung ohne den Wirt machen', loesung: 4 }
          ],
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        },
        {
          typ: 'text', punkteJe: 0.5,
          frage: 'Ergänze die Redewendung. Das fehlende Wort bezeichnet jeweils einen <b>Gegenstand</b>.',
          kurz: 'Redewendungen mit Gegenständen',
          teile: [
            { frage: 'eine Sache sehr genau nehmen: jedes Wort auf die ______ legen', loesungen: ['Goldwaage', 'Waage'] },
            { frage: 'eine Auseinandersetzung verschärfen: Öl ins ______ giessen', loesungen: ['Feuer'] },
            { frage: 'scheitern, nicht stattfinden: ins ______ fallen', loesungen: ['Wasser'] },
            { frage: 'alles Mögliche versuchen: alle ______ in Bewegung setzen', loesungen: ['Hebel'] },
            { frage: 'etwas aufschieben, bis es zu spät ist: etwas auf die lange ______ schieben', loesungen: ['Bank'] }
          ],
          punktregel: 'Je ½ Punkt pro richtige Lösung.'
        },
        {
          typ: 'frei', punkte: 3,
          frage: 'Erkläre die beiden folgenden Redewendungen und zeige den Unterschied auf:<br>«<b>jemandem auf den Zahn fühlen</b>» und «<b>jemandem auf den Zeh treten</b>».',
          kurz: 'Zwei ähnliche Redewendungen unterscheiden',
          musterloesung: '«Jemandem auf den Zahn fühlen» heisst, jemanden gründlich auszufragen, um herauszufinden, was er wirklich denkt oder weiss. «Jemandem auf den Zeh treten» heisst dagegen, jemanden (meist unabsichtlich) zu kränken oder zu beleidigen. Die erste Wendung zielt auf Information, die zweite auf eine Verletzung von Gefühlen.',
          schluessel: [['ausfragen', 'prüfen', 'herausfinden', 'wahrheit'], ['kränken', 'beleidigen', 'verletzen', 'auf die füsse']],
          punktregel: '1 Punkt pro Erklärung, 1 Punkt für den Unterschied.'
        },
        {
          typ: 'single',
          frage: 'Welche Redewendung passt in diesen Satz?<br>«Nach dem verlorenen Spiel wollte niemand mehr über die Taktik reden – alle ______.»',
          kurz: 'Passende Redewendung im Satz finden',
          optionen: [
            'hatten die Nase voll',
            'schlugen über die Stränge',
            'hatten Tomaten auf den Augen',
            'nahmen kein Blatt vor den Mund'
          ],
          loesung: 0,
          erklaerung: 'Nur «die Nase voll haben» passt zur beschriebenen Erschöpfung und Unlust. «Kein Blatt vor den Mund nehmen» würde das Gegenteil bedeuten: Alle würden offen reden.'
        },
        {
          typ: 'multi', proKreuz: 1, abzugJe: 1,
          frage: 'Kreuze <u>alle</u> Redewendungen an, die bedeuten, dass jemand <b>etwas verheimlicht oder beschönigt</b>.',
          kurz: 'Redewendungen zum Thema «verheimlichen»',
          optionen: [
            'etwas unter den Teppich kehren',
            'um den heissen Brei herumreden',
            'reinen Wein einschenken',
            'ein Blatt vor den Mund nehmen',
            'den Nagel auf den Kopf treffen'
          ],
          loesung: [0, 1, 3],
          erklaerung: '«Reinen Wein einschenken» und «den Nagel auf den Kopf treffen» bedeuten das Gegenteil: offen und genau sprechen.',
          punktregel: 'Je 1 Punkt pro richtig gesetztes Kreuz, je 1 Punkt Abzug für falsche Lösung. Mindestpunktzahl 0.'
        }
      ]
    }
  ]
});
