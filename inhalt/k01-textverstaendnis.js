LP.kapitel.push({
  id: 'textverstaendnis',
  nr: 1,
  titel: 'Textverständnis',
  bild: '📖',
  gewicht: 22,
  kurz: 'Einen Text lesen, verstehen und Antworten im Text belegen.',
  pruefungsgewicht: '≈ 20–25 P.',
  inPruefung: 'Jede Prüfung beginnt mit einem Lesetext und 6–10 Aufgaben dazu. Das ist rund ein Drittel der Sprachprüfung – der grösste einzelne Brocken.',
  theorieKurz: 'Lesestrategie, die drei Kreuze, Antworten in ganzen Sätzen, Belege mit Zeilenangabe.',

  theorie: [
    { titel: 'Was hier verlangt wird',
      html: [
        '<p>Der Lesetext ist entweder ein <b>literarischer Text</b> (Kurzgeschichte, Romanauszug) oder ein ',
        '<b>Sachtext</b>. Die Aufgaben dazu sind in allen Prüfungen ähnlich gebaut:</p>',
        '<table>',
        '<tr><th>Aufgabentyp</th><th>Was du tun musst</th></tr>',
        '<tr><td>richtig / falsch / kein Hinweis</td><td>Drei Kreuze unterscheiden – nicht zwei</td></tr>',
        '<tr><td>Fragen in ganzen Sätzen</td><td>Antworten, die ohne die Frage verständlich sind</td></tr>',
        '<tr><td>«Kreuze <u>alle</u> an»</td><td>Mehrere richtige Lösungen finden, falsche kosten Punkte</td></tr>',
        '<tr><td>Zuordnen</td><td>Personen, Aussagen oder Begriffe verbinden</td></tr>',
        '<tr><td>Belege notieren</td><td>Textstelle <b>mit Zeilenangabe</b> angeben</td></tr>',
        '<tr><td>Pronomen auflösen</td><td>«Wer oder was ist mit <i>sie</i> gemeint?»</td></tr>',
        '<tr><td>Mit eigenen Worten schildern</td><td>Nicht abschreiben, sondern umformulieren</td></tr>',
        '</table>'
      ].join('') },

    { titel: 'Dreimal lesen – und jedes Mal anders',
      html: [
        '<p><b>1. Durchgang – überfliegen.</b> Worum geht es? Wer kommt vor? Wo spielt das? Noch nichts ',
        'markieren.</p>',
        '<p><b>2. Durchgang – Fragen zuerst.</b> Lies die Aufgaben, <i>bevor</i> du genau liest. Dann weisst ',
        'du, worauf du achten musst, und liest nicht zweimal umsonst.</p>',
        '<p><b>3. Durchgang – suchen und markieren.</b> Jetzt gezielt die Stellen suchen, die du für die ',
        'Antworten brauchst, und die Zeilennummer gleich notieren.</p>',
        '<div class="merksatz"><b>Zeitrechnung:</b> Die Sprachprüfung dauert 40 Minuten für rund 20 Aufgaben. ',
        'Für den Text und die Textfragen hast du etwa 15 Minuten. Bleib bei einer Frage nie länger als eine ',
        'Minute hängen – mach ein Kreuz an den Rand und komm am Schluss zurück.</div>'
      ].join('') },

    { titel: 'Die drei Kreuze: richtig / falsch / kein Hinweis',
      html: [
        '<p>Das ist die Aufgabe, bei der am meisten Punkte verschenkt werden. Der Grund: Man kreuzt «falsch» ',
        'an, wo «kein Hinweis» richtig wäre.</p>',
        '<table>',
        '<tr><th>Kreuz</th><th>Bedeutung</th></tr>',
        '<tr><td><b>richtig</b></td><td>Der Text sagt es – direkt oder eindeutig erschliessbar.</td></tr>',
        '<tr><td><b>falsch</b></td><td>Der Text sagt <u>das Gegenteil</u>.</td></tr>',
        '<tr><td><b>kein Hinweis</b></td><td>Der Text sagt dazu <u>gar nichts</u>. Es mag stimmen oder nicht – ',
        'der Text schweigt.</td></tr>',
        '</table>',
        '<div class="probe"><b>Testfrage:</b> «Könnte ich die Stelle im Text mit dem Finger zeigen – entweder ',
        'die Aussage oder ihr Gegenteil?» Wenn nein, dann ist es <b>kein Hinweis</b>.</div>',
        '<div class="beispiel"><b>Beispiel.</b> Im Text steht: <i>«Nora stellte die Tasche ab.»</i><br>',
        '· «Nora hat eine Tasche dabei.» → <b>richtig</b><br>',
        '· «Nora trägt gar nichts bei sich.» → <b>falsch</b> (Gegenteil steht da)<br>',
        '· «Die Tasche ist blau.» → <b>kein Hinweis</b> (die Farbe kommt nicht vor)</div>'
      ].join('') },

    { titel: 'In ganzen Sätzen antworten',
      html: [
        '<p>Steht «Beantworte in ganzen Sätzen», dann zählt die Form mit. Deine Antwort muss auch verständlich ',
        'sein, wenn man die Frage nicht kennt.</p>',
        '<div class="beispiel"><b>Frage:</b> Warum ruft Nora ihren Vater nicht an?<br>',
        '✗ <i>weil er sauer wäre</i> — kein Satz, kein Subjekt<br>',
        '✓ <i>Sie ruft ihren Vater nicht an, weil er nichts vom Wettkampf weiss.</i></div>',
        '<p>In den Lösungen der echten Prüfungen steht oft: <i>«Teilsätze / Satzfragmente werden akzeptiert.»</i> ',
        'Verlass dich nicht darauf – mit ganzen Sätzen bist du immer auf der sicheren Seite.</p>',
        '<div class="merksatz"><b>Achtung:</b> «Achte bei all deinen Lösungen auf eine korrekte Rechtschreibung!» ',
        'steht in jeder Prüfung ganz oben. Für falsch geschriebene Wörter gibt es einen halben Punkt Abzug – ',
        'auch bei inhaltlich richtigen Antworten.</div>'
      ].join('') },

    { titel: 'Belege mit Zeilenangabe',
      html: [
        '<p>«Notiere zwei Textstellen, die das belegen (mit Zeilenangabe)» – hier gibt es für die fehlende ',
        'Zeilennummer <b>einen halben Punkt Abzug pro Beleg</b>. Das ist geschenktes Geld.</p>',
        '<div class="probe"><b>So schreibst du einen Beleg:</b><br>',
        'kurzes Zitat oder Umschreibung + Zeile in Klammern<br>',
        '<i>Nora will Herrn Kuster nichts verraten. (Z. 39)</i></div>',
        '<p>Eine Zeilenangabe darf auch einen Bereich nennen: <code>(Z. 14/15)</code> oder <code>(Z. 51–53)</code>.</p>'
      ].join('') },

    { titel: 'Pronomen zurückverfolgen',
      html: [
        '<p>«Wer oder was ist mit den folgenden Pronomen gemeint?» kam 2023 und 2024 vor. Das Verfahren ist ',
        'immer gleich:</p>',
        '<ol><li>Zeile aufschlagen und den <b>ganzen</b> Satz lesen.</li>',
        '<li>Ein bis zwei Sätze <b>davor</b> lesen – dort steht fast immer, worauf sich das Pronomen bezieht.</li>',
        '<li>Probe: das Pronomen durch deine Lösung ersetzen. Ergibt der Satz noch Sinn?</li></ol>',
        '<div class="beispiel"><b>Z. 4:</b> «Sie liess <u>ihn</u> liegen.» → Davor: <i>«… verlor sie den Deckel ',
        'ihrer Trinkflasche.»</i> → <b>ihn</b> = der Deckel. Probe: «Sie liess <i>den Deckel</i> liegen.» ✓</div>',
        '<div class="merksatz">Antworte mit dem <b>Nomen</b>, nicht mit einem anderen Pronomen. «Sie» als Antwort ',
        'auf «sie» gibt null Punkte.</div>'
      ].join('') }
  ],

  level: [
    /* ---------------- Stufe 1 ---------------- */
    {
      titel: 'Erstes Lesen', niveau: 'leicht', farbe: 'gruen', bild: '🌱', xpFaktor: 1,
      kurz: 'Der Text «Der Nachtbus» – Fragen, die direkt im Text stehen.',
      aufgaben: [
        {
          typ: 'rfk', text: 'nachtbus',
          frage: 'Sind die folgenden Aussagen richtig, falsch oder gibt der Text darüber keinen Hinweis?',
          anweisung: 'Denk an die Testfrage: Kann ich die Stelle mit dem Finger zeigen?',
          kurz: 'richtig / falsch / kein Hinweis zum «Nachtbus»',
          aussagen: [
            { text: 'Nora hat den letzten Bus verpasst.', loesung: 'r' },
            { text: 'Nora wohnt elf Kilometer von der Turnhalle entfernt.', loesung: 'r' },
            { text: 'Nora hat eine jüngere Schwester.', loesung: 'k' },
            { text: 'Herr Kuster lässt Nora an der Haltestelle stehen.', loesung: 'f' }
          ],
          tipp: 'Bei der dritten Aussage: Suche im Text nach einer Schwester. Wenn du nichts findest, ist das die Antwort.',
          erklaerung: 'Über Geschwister steht im ganzen Text kein Wort – also «kein Hinweis». Dass Herr Kuster sie mitnimmt, steht ab Zeile 21.',
          punktregel: 'Je 1 Punkt pro korrekte Antwort.'
        },
        {
          typ: 'single', text: 'nachtbus',
          frage: 'Warum ruft Nora ihren Vater nicht an?',
          kurz: 'Warum ruft Nora ihren Vater nicht an?',
          optionen: [
            'Ihr Handy ist leer.',
            'Er weiss nichts vom Wettkampf und davon, dass sie länger geblieben ist.',
            'Er ist auf einer Geschäftsreise.',
            'Sie hat sich mit ihm gestritten.'
          ],
          loesung: 1,
          erklaerung: 'In Zeile 17/18 steht, dass sie sich ohne ihren Vater angemeldet hat und er denkt, sie turne nur der Gesundheit wegen.'
        },
        {
          typ: 'text', text: 'nachtbus', punkteJe: 1,
          frage: 'Ergänze die folgenden Sätze mit den passenden Namen oder Begriffen aus der Geschichte.',
          anweisung: 'Ein Wort genügt.',
          kurz: 'Namen und Begriffe aus dem «Nachtbus» einsetzen',
          teile: [
            { frage: 'Noras Freundin heisst …', loesungen: ['Samira'] },
            { frage: 'Der Busfahrer heisst …', loesungen: ['Herr Kuster', 'Kuster'] },
            { frage: 'Am Samstag findet ein … statt.', loesungen: ['Wettkampf', 'Turnwettkampf'] },
            { frage: 'Noras Sportart heisst …', loesungen: ['Geräteturnen', 'Turnen'] }
          ],
          tipp: 'Die Sportart nennt Nora selbst, als Herr Kuster sie fragt.',
          punktregel: 'Je 1 Punkt für jede richtige Zeile. Keine halben Punkte.'
        },
        {
          typ: 'multi', text: 'nachtbus', proKreuz: 1, abzugJe: 1,
          frage: 'Was erfahren wir im Text über Herrn Kuster? Kreuze <u>alle</u> passenden Aussagen an.',
          kurz: 'Was erfahren wir über Herrn Kuster?',
          optionen: [
            'Er fährt seit neunzehn Jahren auf dieser Linie.',
            'Er lässt niemanden an der Haltestelle stehen.',
            'Er ist der Vater einer Mitschülerin von Nora.',
            'Er fährt leer ins Depot zurück.',
            'Er hat früher selbst geturnt.'
          ],
          loesung: [0, 1, 3],
          erklaerung: 'Z. 40/41 («seit neunzehn Jahren»), Z. 24–26 («nie jemanden stehen lassen») und Z. 28 («Ich fahre leer ins Depot»). Über seine Familie und seine Sportvergangenheit steht nichts.',
          punktregel: '1 Punkt pro korrektes Kreuz, 1 Punkt Abzug pro falsches Kreuz. Mindestpunktzahl 0.'
        },
        {
          typ: 'zuordnung', text: 'nachtbus', punkteJe: 1,
          frage: 'Wer sagt oder tut was? Ordne zu.',
          kurz: 'Aussagen den Personen zuordnen',
          vorrat: ['Nora', 'Samira', 'Herr Kuster', 'Noras Vater'],
          zeilen: [
            { text: 'rät, einfach den Vater anzurufen', loesung: 1 },
            { text: 'hält zehn Meter neben der Haltestelle an', loesung: 2 },
            { text: 'hält nichts vom Wettkampfsport', loesung: 3 },
            { text: 'hat sich ohne Erlaubnis für den Wettkampf angemeldet', loesung: 0 }
          ],
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        }
      ]
    },

    /* ---------------- Stufe 2 ---------------- */
    {
      titel: 'Genauer hinsehen', niveau: 'mittel', farbe: '', bild: '🔎', xpFaktor: 1.2,
      kurz: 'Antworten in ganzen Sätzen, Pronomen auflösen, Belege finden.',
      aufgaben: [
        {
          typ: 'rfk', text: 'nachtbus',
          frage: 'Sind die folgenden Aussagen richtig, falsch oder gibt der Text darüber keinen Hinweis?',
          kurz: 'Fünf Aussagen zum «Nachtbus» – jetzt schwieriger',
          aussagen: [
            { text: 'Nora bleibt freiwillig länger im Training.', loesung: 'r' },
            { text: 'Noras Vater weiss, dass sie zweimal pro Woche turnt.', loesung: 'r' },
            { text: 'Herr Kuster hält Noras Vater für einen strengen Mann.', loesung: 'k' },
            { text: 'Nora erzählt Herrn Kuster eine erfundene Geschichte.', loesung: 'f' },
            { text: 'Nora hat den Wettkampf bereits einmal gewonnen.', loesung: 'f' }
          ],
          tipp: 'Bei der letzten Aussage hilft Zeile 17: Es ist ihr erster Wettkampf.',
          erklaerung: 'Zu Herrn Kusters Meinung über den Vater sagt der Text nichts – er sagt nur, man lerne die Leute an der Haltestelle zu lesen (Z. 40/41).',
          punktregel: 'Je 1 Punkt pro korrekte Antwort.'
        },
        {
          typ: 'offen', text: 'nachtbus', punkteJe: 1,
          frage: 'Beantworte die folgenden Fragen in ganzen Sätzen.',
          kurz: 'Drei Fragen zum «Nachtbus» in ganzen Sätzen',
          teile: [
            { frage: 'Weshalb hat Nora den Bus verpasst?',
              musterloesung: 'Sie ist nach dem Training länger geblieben und hat ihre Sprünge noch einmal geübt. (Z. 14–16)',
              schluessel: [['länger geblieben', 'länger', 'weiter geübt'], ['Sprünge', 'Training', 'geübt']] },
            { frage: 'Warum ist Herr Kuster überhaupt noch unterwegs, obwohl der letzte Bus weg ist?',
              musterloesung: 'Er fährt den leeren Bus ins Depot zurück. (Z. 28)',
              schluessel: [['depot', 'leer']] },
            { frage: 'Welchen Rat gibt Herr Kuster Nora am Schluss?',
              musterloesung: 'Er rät ihr, es ihrem Vater vor dem Samstag zu sagen und nicht erst danach. (Z. 51)',
              schluessel: [['sagen', 'erzählen', 'reden'], ['vater'], ['vor dem samstag', 'vorher', 'vor dem wettkampf']] }
          ],
          punktregel: 'Je 1 Punkt für jede richtige Antwort (sinngemäss). Teilsätze werden akzeptiert.'
        },
        {
          typ: 'text', text: 'nachtbus', punkteJe: 1,
          frage: 'Wer oder was ist mit den folgenden Pronomen gemeint?',
          anweisung: 'Antworte mit einem Nomen oder einem Namen, nicht mit einem anderen Pronomen.',
          kurz: 'Pronomen im «Nachtbus» auflösen',
          teile: [
            { frage: '<b>ihn</b> (Z. 4)', loesungen: ['der Deckel', 'den Deckel', 'Deckel', 'der Deckel der Trinkflasche'] },
            { frage: '<b>Er</b> (Z. 18)', loesungen: ['Noras Vater', 'der Vater', 'Vater'] },
            { frage: '<b>ihm</b> (Z. 26)', loesungen: ['Herr Kuster', 'Herrn Kuster', 'Kuster', 'dem Busfahrer', 'der Busfahrer'] },
            { frage: '<b>das</b> (Z. 14)', loesungen: ['dass sie selbst schuld ist', 'ihre eigene Schuld', 'dass es ihre eigene Schuld ist', 'die Schuld'] }
          ],
          tipp: 'Lies jeweils den Satz davor. Dort steht fast immer, worauf sich das Pronomen bezieht.',
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        },
        {
          typ: 'text', text: 'nachtbus', punkteJe: 1,
          frage: 'Im Text gibt es Hinweise darauf, dass Nora ihrem Vater etwas verschweigt. Notiere zu jedem Hinweis die Zeilennummer.',
          anweisung: 'Es genügt die Zahl, z.&nbsp;B. <i>17</i> oder <i>Z. 17</i>.',
          kurz: 'Belege mit Zeilenangabe suchen',
          teile: [
            { frage: 'In welcher Zeile steht, dass sie sich <b>ohne ihren Vater zu fragen</b> angemeldet hat?',
              loesungen: ['17', 'Z. 17', 'Zeile 17', '17/18', 'Z. 17/18', '18', 'Z. 18'] },
            { frage: 'In welcher Zeile sagt Herr Kuster, dass ihr Vater nichts davon weiss?',
              loesungen: ['38', 'Z. 38', 'Zeile 38'] },
            { frage: 'In welcher Zeile soll Nora ihrem Vater eine Ausrede ausrichten?',
              loesungen: ['55', 'Z. 55', 'Zeile 55', '55/56', 'Z. 55/56', '56'] }
          ],
          erklaerung: 'In der Prüfung gibt es pro fehlende Zeilenangabe einen halben Punkt Abzug – auch wenn der Beleg sonst stimmt.',
          punktregel: 'Je ½ Punkt Abzug pro fehlende Zeilenangabe.'
        },
        {
          typ: 'multi', text: 'nachtbus', proKreuz: 0.5, abzugJe: 0.5,
          frage: 'Kreuze <u>alle</u> Aussagen an, die zu Noras Verhältnis zu ihrem Vater passen.',
          kurz: 'Noras Verhältnis zu ihrem Vater',
          optionen: [
            'Sie hat Angst vor seiner ruhigen Art.',
            'Sie verschweigt ihm den Wettkampf.',
            'Sie hat ihn am Abend bereits angerufen.',
            'Sie weiss, dass er den Wettkampfsport ablehnt.',
            'Sie lebt nicht mehr bei ihm.'
          ],
          loesung: [0, 1, 3],
          erklaerung: 'Z. 12/13 (die ruhige Stimme, «schlimmer als jedes Schreien»), Z. 17/18 und Z. 44/45. Angerufen hat sie ihn gerade nicht, und in Zeile 52/53 geht sie nach Hause – zu ihm.',
          punktregel: '½ Punkt pro korrektes Kreuz, ½ Punkt Abzug pro falsches Kreuz. Mindestpunktzahl 0.'
        },
        {
          typ: 'frei', text: 'nachtbus', punkte: 2,
          frage: 'Es gibt eine Stelle, an der Nora merkt, dass Herr Kuster mehr durchschaut, als ihr lieb ist. Schildere diese Situation mit eigenen Worten.',
          anweisung: 'Nicht abschreiben – umformulieren. Nenne die Zeile dazu.',
          kurz: 'Eine Situation mit eigenen Worten schildern',
          musterloesung: 'Herr Kuster sagt unvermittelt, ihr Vater wisse nichts vom Wettkampf. Nora erschrickt und fragt, wie er darauf komme (Z. 38/39). Er erklärt, dass sonst jemand mit dem Auto gekommen wäre.',
          schluessel: [['vater'], ['weiss nichts', 'nichts davon', 'durchschaut', 'errät', 'erraten'], ['erschrickt', 'fuhr zusammen', 'zusammen']],
          punktregel: '1 Punkt für die sinngemässe Beschreibung, 1 Punkt für die Zeilenangabe.'
        }
      ]
    },

    /* ---------------- Stufe 3 ---------------- */
    {
      titel: 'Prüfungsniveau: Sachtext', niveau: 'Prüfung', farbe: 'gold', bild: '🎯', xpFaktor: 1.5,
      kurz: 'Ein Sachtext wie 2022 – mit allen Aufgabentypen der echten Prüfung.',
      aufgaben: [
        {
          typ: 'rfk', text: 'vermessung',
          frage: 'Sind die folgenden Aussagen richtig, falsch oder gibt der Text darüber keinen Hinweis?',
          kurz: 'Fünf Aussagen zum Sachtext «Die Frau, die den Nebel vermass»',
          aussagen: [
            { text: 'Elsa Brunner fand nach dem Studium zuerst keine Anstellung.', loesung: 'r' },
            { text: 'Brunner stammte aus einer wohlhabenden Familie.', loesung: 'f' },
            { text: 'Ihre Messungen wurden zuerst unter einem fremden Namen veröffentlicht.', loesung: 'r' },
            { text: 'Brunner war verheiratet.', loesung: 'k' },
            { text: 'Die Nebelgrenze liegt heute tiefer als in den dreissiger Jahren.', loesung: 'f' }
          ],
          erklaerung: 'Zu Zeile 6: Sie war die Tochter eines Webers und brauchte ein Stipendium – also nicht wohlhabend. Über eine Ehe steht nichts im Text. Die Nebelgrenze liegt heute <i>höher</i> (Z. 38).',
          punktregel: 'Je 1 Punkt pro korrekte Antwort.'
        },
        {
          typ: 'offen', text: 'vermessung', punkteJe: 1,
          frage: 'Beantworte die folgenden Fragen in ganzen Sätzen.',
          kurz: 'Vier Fragen zum Sachtext in ganzen Sätzen',
          teile: [
            { frage: 'Aus welchem Grund bekam Brunner nach dem Studium keine Stelle?',
              musterloesung: 'Observatorien stellten damals keine Frauen ein. (Z. 4/5)',
              schluessel: [['frauen', 'frau'], ['nicht ein', 'keine', 'stellten']] },
            { frage: 'Wie ist Brunner auf ihr Forschungsthema gekommen?',
              musterloesung: 'Durch Zufall: Auf einer Wanderung sah sie, dass sich im Tal Nebel bildete, während es auf dem Grat sonnig blieb. (Z. 10/11)',
              schluessel: [['zufall', 'wanderung'], ['nebel'], ['tal', 'grat', 'sonnig']] },
            { frage: 'Was macht ihre Messreihen bis heute so wertvoll? Nenne zwei Gründe.',
              punkte: 2,
              musterloesung: '1. Ihr Alter – die Daten stammen aus den 1930er-Jahren. 2. Ihre Gleichmässigkeit: Immer am selben Ort, zur selben Zeit, mit denselben Geräten. (Z. 35–37)',
              schluessel: [['alter', 'alt', 'dreissiger'], ['gleichmäss', 'selben ort', 'selben zeit', 'selben geräten']] },
            { frage: 'Welchen Umweg wählte Brunner, um ihre Ergebnisse trotzdem zu veröffentlichen?',
              musterloesung: 'Sie schickte ihre Messreihen an einen Kollegen in München, der sie unter seinem eigenen Namen abdrucken liess. (Z. 26/27)',
              schluessel: [['kollege', 'münchen', 'mann'], ['seinem namen', 'unter seinem', 'fremden namen']] }
          ],
          punktregel: 'Je 1 Punkt für jede richtige Antwort (sinngemäss). Teilsätze werden akzeptiert.'
        },
        {
          typ: 'zuordnung', text: 'vermessung', punkteJe: 1,
          frage: 'Ordne jeder Jahreszahl das passende Ereignis zu.',
          kurz: 'Jahreszahlen und Ereignisse zuordnen',
          vorrat: [
            'erster Aufstieg auf den Säntis mit Messgeräten',
            'Veröffentlichung unter fremdem Namen',
            'erste feste Anstellung',
            'Tod in Herisau'
          ],
          zeilen: [
            { text: '1931', loesung: 0 },
            { text: '1937', loesung: 1 },
            { text: '1946', loesung: 2 },
            { text: '1992', loesung: 3 }
          ],
          punktregel: 'Je 1 Punkt pro richtige Antwort.'
        },
        {
          typ: 'multi', text: 'vermessung', proKreuz: 1, abzugJe: 1,
          frage: 'Kreuze <u>alle</u> Aussagen an, die der Text über den Hochnebel macht.',
          kurz: 'Was sagt der Text über den Hochnebel?',
          optionen: [
            'Er entsteht, wenn sich kalte Luft in einem Becken sammelt.',
            'Wärmere Luft liegt wie ein Deckel darüber.',
            'Er war in den 1930er-Jahren kaum erforscht.',
            'Er entsteht nur im Winter.',
            'Seine Obergrenze ist seit damals um rund 150 Meter gestiegen.'
          ],
          loesung: [0, 1, 2, 4],
          erklaerung: 'Z. 12–14 und Z. 38/39. Dass er nur im Winter entsteht, steht nirgends – der Text erwähnt nur die Zahl der Nebeltage pro Winter.',
          punktregel: '1 Punkt pro korrektes Kreuz, 1 Punkt Abzug pro falsches Kreuz. Mindestpunktzahl 0.'
        },
        {
          typ: 'text', text: 'vermessung', punkteJe: 1,
          frage: 'Wer oder was ist mit den folgenden Pronomen gemeint?',
          kurz: 'Pronomen im Sachtext auflösen',
          teile: [
            { frage: '<b>er</b> (Z. 8: «bis er einwilligte»)', loesungen: ['Brunners Vater', 'der Vater', 'Vater', 'ihr Vater'] },
            { frage: '<b>er</b> (Z. 12: «dass er entsteht»)', loesungen: ['der Hochnebel', 'Hochnebel', 'der Nebel', 'Nebel'] },
            { frage: '<b>sie</b> (Z. 31: «die sie zuvor … versorgt hatte»)', loesungen: ['Elsa Brunner', 'Brunner', 'Elsa'] }
          ],
          tipp: 'Setze dein Nomen probeweise in den Satz ein. Wenn er noch Sinn ergibt, stimmt es.',
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        },
        {
          typ: 'frei', text: 'vermessung', punkte: 2,
          frage: 'Der Grabstein von Elsa Brunner trägt statt einer Berufsbezeichnung eine Zahl. Erkläre mit eigenen Worten, warum gerade diese Zahl passt.',
          kurz: 'Die Zahl auf dem Grabstein erklären',
          musterloesung: '1180 ist die Nebelobergrenze, die in ihrem ersten Notizbuch steht (Z. 22, Z. 40/41). Die Zahl steht damit für ihr Lebenswerk: Sie hat den Nebel vermessen, obwohl sie dafür nie einen offiziellen Beruf hatte.',
          schluessel: [['1180'], ['notizbuch', 'erste messung', 'erstes notizbuch'], ['lebenswerk', 'arbeit', 'forschung', 'nebelgrenze', 'nebel']],
          punktregel: '1 Punkt für den Bezug zum Notizbuch, 1 Punkt für die Deutung.'
        }
      ]
    },

    /* ---------------- Stufe 4 ---------------- */
    {
      titel: 'Kanti-Challenge', niveau: 'darüber', farbe: 'rot', bild: '🏔️', xpFaktor: 2,
      kurz: 'Zwischen den Zeilen lesen: Was der Text andeutet, ohne es zu sagen.',
      aufgaben: [
        {
          typ: 'rfk', text: 'training',
          frage: 'Sind die folgenden Aussagen richtig, falsch oder gibt der Text darüber keinen Hinweis?',
          kurz: 'Fünf anspruchsvolle Aussagen zu «Das letzte Training»',
          aussagen: [
            { text: 'Milan verheimlicht seine Schmerzen aus Angst, die Saison zu verlieren.', loesung: 'r' },
            { text: 'Vogt glaubt Milan, als dieser sagt, das Drücken tue nicht weh.', loesung: 'f' },
            { text: 'Dario und Milan sind heute noch eng befreundet.', loesung: 'f' },
            { text: 'Lena hat im letzten Jahr einen Wettkampf verloren.', loesung: 'f' },
            { text: 'Milans Mutter hat ihm das Training verboten.', loesung: 'k' }
          ],
          tipp: 'Bei der zweiten Aussage: Was sagt Vogt direkt danach? Würde er das sagen, wenn er Milan glaubte?',
          erklaerung: 'Zu Dario: «war sein bester Freund <i>gewesen</i>» (Z. 36) – Vergangenheit. Lena gewann alle drei Rennen (Z. 50/51). Über ein Verbot der Mutter steht nichts, nur, dass sie ihn lieber im Schachklub gesehen hätte (Z. 6/7).',
          punktregel: 'Je 1 Punkt pro korrekte Antwort.'
        },
        {
          typ: 'offen', text: 'training', punkteJe: 1,
          frage: 'Beantworte die folgenden Fragen in ganzen Sätzen.',
          kurz: 'Vier Fragen, die Schlussfolgerungen verlangen',
          teile: [
            { frage: 'Woran merkt Vogt, dass mit Milan etwas nicht stimmt? Nenne zwei Beobachtungen.',
              punkte: 2,
              musterloesung: 'Milan läuft vier Sekunden langsamer als in der Vorwoche (Z. 15), und er drückt beim Laufen mit einem Bein nicht richtig ab (Z. 22).',
              schluessel: [['vier sekunden', 'langsamer', 'zeit'], ['abdrück', 'abdruck', 'bein', 'knie', 'lauf']] },
            { frage: 'Warum sagt Vogt nichts, als Milan durchs Ziel kommt – und warum ist das für Milan ein schlechtes Zeichen?',
              musterloesung: 'Vogt sagt bei einer guten Zeit immer etwas, meist etwas Unfreundliches. Sein Schweigen bedeutet deshalb, dass die Zeit schlecht war. (Z. 13/14)',
              schluessel: [['sagt immer etwas', 'immer etwas', 'unfreundlich'], ['schlecht', 'schweigen', 'schlechte zeit']] },
            { frage: 'Welche Rolle spielt Dario in diesem Gespräch, obwohl er gar nicht anwesend ist?',
              musterloesung: 'Dario ist das warnende Beispiel: Er hat seine Verletzung ebenfalls verschwiegen und sitzt seither seit vierzehn Monaten auf der Tribüne. (Z. 34/35)',
              schluessel: [['beispiel', 'warnung', 'abschreckend', 'gleiche', 'auch verschwiegen', 'gelogen'], ['tribüne', 'vierzehn monate', 'ausgefallen', 'nicht mehr']] },
            { frage: 'Weshalb erzählt Lena Milan von ihrem Ermüdungsbruch?',
              musterloesung: 'Sie will ihm zeigen, dass auch sie so gedacht hat – und dass sie nach drei gewonnenen Rennen vier Monate pausieren musste. Sie bestätigt damit Vogts Warnung aus eigener Erfahrung. (Z. 50/51)',
              schluessel: [['eigene erfahrung', 'selbst erlebt', 'auch sie', 'selber'], ['vier monate', 'pause', 'ausgefallen', 'rechne']] }
          ],
          punktregel: 'Je 1 Punkt für jede richtige Antwort (sinngemäss).'
        },
        {
          typ: 'multi', text: 'training', proKreuz: 1, abzugJe: 1,
          frage: 'Der letzte Satz lautet: «Es tat gut. Das war fast das Schlimmste daran.» Kreuze <u>alle</u> Deutungen an, die zum Text passen.',
          kurz: 'Den letzten Satz deuten',
          optionen: [
            'Die Kälte lindert den Schmerz – also ist der Schmerz echt und nicht eingebildet.',
            'Weil die Kühlung hilft, lässt sich die Verletzung nicht länger wegreden.',
            'Milan freut sich über den Regen, weil das Training abgesagt wird.',
            'Dass ihm die Kühlung guttut, beweist genau das, was er nicht wahrhaben will.',
            'Milan hat beschlossen, nie wieder zu laufen.'
          ],
          loesung: [0, 1, 3],
          erklaerung: 'Der Satz ist ein Widerspruch: Linderung wäre erfreulich, aber sie ist zugleich der Beweis für die Verletzung. Vom Regen ist Milan nicht begeistert, und einen endgültigen Entschluss fasst er nicht.',
          punktregel: '1 Punkt pro korrektes Kreuz, 1 Punkt Abzug pro falsches Kreuz. Mindestpunktzahl 0.'
        },
        {
          typ: 'text', text: 'training', punkteJe: 1,
          frage: 'Notiere die Zeile, in der die folgende Aussage belegt wird.',
          anweisung: 'Nur die Zahl, z.&nbsp;B. <i>14</i>.',
          kurz: 'Aussagen im Text belegen',
          teile: [
            { frage: 'Milan hat seine Schmerzen bisher niemandem erzählt.',
              loesungen: ['6', 'Z. 6', 'Zeile 6', '6/7', 'Z. 6/7'] },
            { frage: 'Milan belügt seinen Trainer ausdrücklich.',
              loesungen: ['29', 'Z. 29', 'Zeile 29'] },
            { frage: 'Vogt macht klar, dass Milans Laufbahn noch lange dauert.',
              loesungen: ['43', 'Z. 43', 'Zeile 43'] },
            { frage: 'Lena kündigt an, dass sie nachfragen wird.',
              loesungen: ['53', 'Z. 53', 'Zeile 53'] }
          ],
          punktregel: 'Je ½ Punkt Abzug pro fehlende Zeilenangabe.'
        },
        {
          typ: 'frei', text: 'training', punkte: 3,
          frage: 'Vogt sagt: «Ihr glaubt, Schmerz sei eine Verhandlungssache.» Erkläre, was er damit meint, und belege mit einer Stelle aus Milans Verhalten.',
          kurz: 'Vogts Satz über den Schmerz erklären',
          musterloesung: 'Vogt meint, Jugendliche hielten Schmerz für etwas, das nachgibt, wenn man nur hart genug ist – als könne man mit dem Körper verhandeln. Milan verhält sich genau so: Er spürt den Stich, beschleunigt aber trotzdem (Z. 10), und er behauptet, das Drücken tue nicht weh (Z. 28/29).',
          schluessel: [['hart', 'aushalten', 'durchbeissen', 'ignorieren', 'nachgeben'], ['körper', 'verletzung', 'schmerz'], ['beschleunigt', 'trotzdem', 'lügt', 'log', 'leugnet']],
          punktregel: '2 Punkte für die Erklärung, 1 Punkt für den Beleg mit Zeilenangabe.'
        },
        {
          typ: 'zuordnung', text: 'training', punkteJe: 1,
          frage: 'Welche Haltung steht hinter welcher Aussage? Ordne zu.',
          kurz: 'Haltungen hinter Aussagen erkennen',
          vorrat: [
            'verharmlost die eigene Lage',
            'stellt die Zukunft über den Moment',
            'spricht aus Erfahrung',
            'durchschaut die Ausrede sofort'
          ],
          zeilen: [
            { text: '«Es ist wirklich nicht schlimm.» (Milan, Z. 33)', loesung: 0 },
            { text: '«Eine Saison. Du hast noch ungefähr fünfzehn davon.» (Vogt, Z. 43)', loesung: 1 },
            { text: '«Ich bin letztes Jahr mit einem Ermüdungsbruch gelaufen.» (Lena, Z. 50)', loesung: 2 },
            { text: '«Das, auf dem du seit zwanzig Minuten nicht richtig abdrückst.» (Vogt, Z. 22)', loesung: 3 }
          ],
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        }
      ]
    }
  ]
});
