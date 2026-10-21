LP.kapitel.push({
  id: 'nomen',
  nr: 9,
  titel: 'Nomen: Fälle & Formen',
  bild: '📦',
  gewicht: 5,
  kurz: 'Die vier Fälle mit der Maskulinprobe bestimmen, Plural und Nominalisierung.',
  pruefungsgewicht: '≈ 3–5 P.',
  inPruefung: '2022: «Setze die Ausdrücke in Klammer in den richtigen Fall.» Die Fälle brauchst du ausserdem bei den Satzgliedern – dort geht es um die Hälfte aller Grammatikpunkte.',
  theorieKurz: 'Die vier Fälle, die Maskulinprobe, Pluralformen und die Nominalisierung von Adjektiven.',

  theorie: [
    { titel: 'Die vier Fälle',
      html: [
        '<table>',
        '<tr><th>Fall</th><th>Frage</th><th>Beispiel</th></tr>',
        '<tr><td><b>1. Nominativ</b></td><td>Wer oder was?</td><td><b>der Busfahrer</b> wartet</td></tr>',
        '<tr><td><b>2. Genitiv</b></td><td>Wessen?</td><td>die Tasche <b>des Busfahrers</b></td></tr>',
        '<tr><td><b>3. Dativ</b></td><td>Wem?</td><td>sie dankt <b>dem Busfahrer</b></td></tr>',
        '<tr><td><b>4. Akkusativ</b></td><td>Wen oder was?</td><td>sie sieht <b>den Busfahrer</b></td></tr>',
        '</table>',
        '<div class="merksatz">Im Schweizer Lehrmittel «Die Sprachstarken» heissen die Fälle oft anders: ',
        '<i>Nominalgruppe im Nominativ / Akkusativ / Dativ / Genitiv</i>. Beide Bezeichnungen sind in der ',
        'Prüfung richtig.</div>'
      ].join('') },

    { titel: 'Die Maskulinprobe – dein wichtigstes Werkzeug',
      html: [
        '<p>Der Wegweiser nennt sie ausdrücklich: Bestimmung der vier Fälle <b>mithilfe der Ersatzprobe / ',
        'Maskulinprobe</b>. Sie funktioniert so:</p>',
        '<div class="probe"><b>Ersetze die Nomengruppe durch «der Mann».</b> An der Form von «der Mann» ',
        'siehst du den Fall – bei männlichen Nomen sind alle vier Fälle verschieden.<br><br>',
        '<i>der Mann</i> → Nominativ<br>',
        '<i>des Mannes</i> → Genitiv<br>',
        '<i>dem Mann</i> → Dativ<br>',
        '<i>den Mann</i> → Akkusativ</div>',
        '<div class="beispiel"><b>Beispiel.</b> «Die Angestellten verkauften <u>den Zuschauern</u> Mandeln.»<br>',
        '→ «Die Angestellten verkauften <b>dem Mann</b> Mandeln.» → <b>Dativ</b></div>',
        '<p>Warum das besser ist als die Frageprobe: Bei <i>die Frau</i>, <i>das Kind</i> oder im Plural sehen ',
        'Nominativ und Akkusativ gleich aus. «Der Mann» macht den Unterschied sichtbar.</p>'
      ].join('') },

    { titel: 'Welcher Fall nach welchem Wort?',
      html: [
        '<p>Oft bestimmt nicht das Verb den Fall, sondern eine Präposition davor:</p>',
        '<table>',
        '<tr><th>Fall</th><th>Präpositionen</th></tr>',
        '<tr><td><b>Akkusativ</b></td><td>durch, für, gegen, ohne, um, bis</td></tr>',
        '<tr><td><b>Dativ</b></td><td>aus, bei, mit, nach, seit, von, zu, gegenüber</td></tr>',
        '<tr><td><b>Genitiv</b></td><td>wegen, trotz, während, statt, jenseits, innerhalb, aufgrund, infolge</td></tr>',
        '<tr><td><b>Dativ oder Akkusativ</b></td><td>an, auf, hinter, in, neben, über, unter, vor, zwischen</td></tr>',
        '</table>',
        '<div class="probe"><b>Wechselpräpositionen:</b> <i>Wo?</i> → Dativ. <i>Wohin?</i> → Akkusativ.<br>',
        '«Sie sitzt auf <b>der</b> Bank.» (wo? Dativ) · «Sie setzt sich auf <b>die</b> Bank.» (wohin? ',
        'Akkusativ)</div>'
      ].join('') },

    { titel: 'Nominalisierte Adjektive',
      html: [
        '<p>Der Wegweiser verlangt bei den Adjektiven nur eines: die <b class="wort">Nominalisierung</b>.</p>',
        '<div class="beispiel">etwas <b>Schönes</b> · nichts <b>Neues</b> · das <b>Beste</b> · ',
        'viel <b>Gutes</b> · alles <b>Wichtige</b> · die <b>Kleine</b></div>',
        '<div class="merksatz"><b>Signalwörter:</b> nach <i>etwas, nichts, alles, viel, wenig, allerlei</i> ',
        'und nach <i>das, dem, ein</i> wird das Adjektiv zum Nomen – und gross geschrieben.<br>',
        'Gegenprobe: Steht ein Nomen dahinter, bleibt das Adjektiv klein: «etwas <u>schöne</u> Musik».</div>'
      ].join('') }
  ],

  level: [
    {
      titel: 'Die vier Fälle', niveau: 'leicht', farbe: 'gruen', bild: '🌱', xpFaktor: 1,
      kurz: 'Fälle bestimmen mit der Maskulinprobe.',
      aufgaben: [
        {
          typ: 'zuordnung', punkteJe: 1,
          frage: 'In welchem Fall steht die <u>unterstrichene</u> Nomengruppe?',
          anweisung: 'Setze probeweise «der Mann» ein.',
          kurz: 'Fälle bestimmen (leicht)',
          vorrat: ['Nominativ', 'Genitiv', 'Dativ', 'Akkusativ'],
          zeilen: [
            { text: '<u>Der Busfahrer</u> wartete an der Kreuzung.', loesung: 0 },
            { text: 'Nora dankte <u>dem Busfahrer</u>.', loesung: 2 },
            { text: 'Sie sah <u>den Busfahrer</u> nicht sofort.', loesung: 3 },
            { text: 'Die Tasche <u>des Busfahrers</u> lag auf dem Sitz.', loesung: 1 }
          ],
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        },
        {
          typ: 'zuordnung', punkteJe: 1,
          frage: 'Hier sind die Nomen weiblich oder sächlich – die Maskulinprobe hilft. In welchem Fall stehen sie?',
          kurz: 'Fälle bestimmen mit der Maskulinprobe',
          vorrat: ['Nominativ', 'Genitiv', 'Dativ', 'Akkusativ'],
          zeilen: [
            { text: 'Nora wusch <u>den Salat</u>.', loesung: 3 },
            { text: 'Sie half <u>ihrer Mutter</u>.', loesung: 2 },
            { text: '<u>Die Haltestelle</u> lag im Dunkeln.', loesung: 0 },
            { text: 'Er zeigte <u>das Dokument</u>.', loesung: 3 },
            { text: 'Der Deckel <u>der Flasche</u> fehlte.', loesung: 1 }
          ],
          tipp: 'Bei «die Haltestelle» und «das Dokument» sehen Nominativ und Akkusativ gleich aus – ersetze sie durch «der Mann» bzw. «den Mann».',
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        },
        {
          typ: 'text', punkteJe: 1,
          frage: 'Notiere den <b>Plural</b> mit Artikel.',
          kurz: 'Pluralformen bilden',
          teile: [
            { frage: 'das Ergebnis →', loesungen: ['die Ergebnisse', 'Ergebnisse'] },
            { frage: 'der Bus →', loesungen: ['die Busse', 'Busse'] },
            { frage: 'das Kabel →', loesungen: ['die Kabel', 'Kabel'] },
            { frage: 'die Kenntnis →', loesungen: ['die Kenntnisse', 'Kenntnisse'] }
          ],
          punktregel: 'Je 1 Punkt pro korrekte Lösung. ½ Punkt Abzug für Rechtschreibfehler.'
        },
        {
          typ: 'luecke', punkteJe: 1,
          frage: 'Setze den Artikel in den richtigen Fall.',
          kurz: 'Artikel in den richtigen Fall setzen',
          luecken: [
            { vor: 'Sie wartete auf ', loesungen: ['den'], nach: ' Bus. (wohin? Akkusativ) ' },
            { vor: 'Sie sass auf ', loesungen: ['der'], nach: ' Bank. (wo? Dativ) ' },
            { vor: 'Wegen ', loesungen: ['des'], nach: ' Regens blieb er stehen. (Genitiv) ' },
            { vor: 'Er ging mit ', loesungen: ['dem'], nach: ' Trainer zur Garderobe. (Dativ)' }
          ],
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        },
        {
          typ: 'markieren', punkteJe: 1, abzugModus: 'voll',
          was: 'nominalisierte Adjektive',
          frage: 'Markiere die Adjektive, die hier <b>nominalisiert</b> sind (also gross geschrieben werden müssen).',
          kurz: 'Nominalisierte Adjektive finden',
          saetze: [
            { woerter: ['Er', 'hatte', 'nichts', 'besseres', 'zu', 'tun', ',', 'als', 'das', 'alte',
                        'Fahrrad', 'zu', 'reparieren', '.'],
              loesung: [3] },
            { woerter: ['Für', 'solche', 'Gäste', 'ist', 'nur', 'das', 'beste', 'gut', 'genug', '.'],
              loesung: [6] }
          ],
          erklaerung: '<i>besseres</i> steht nach <i>nichts</i> und <i>beste</i> nach <i>das</i> – beide sind nominalisiert. <i>alte</i> steht vor dem Nomen <i>Fahrrad</i> und bleibt klein.',
          punktregel: 'Je 1 Punkt Abzug pro fehlende oder falsche Lösung. Mindestpunktzahl 0.'
        }
      ]
    },

    {
      titel: 'Fälle anwenden', niveau: 'mittel', farbe: '', bild: '🔎', xpFaktor: 1.2,
      kurz: 'Fälle bilden, Wechselpräpositionen und Genitivformen.',
      aufgaben: [
        {
          typ: 'text', punkteJe: 1,
          frage: 'Setze den Ausdruck in Klammern in den verlangten Fall.',
          kurz: 'Nomengruppen in den richtigen Fall setzen',
          teile: [
            { frage: 'Jenseits ______ (der grosse Fluss) lag das Gebiet der Belgier. <i>(Genitiv)</i>',
              loesungen: ['des grossen Flusses', 'des grossen Flusses', 'vom grossen Fluss', 'von dem grossen Fluss'] },
            { frage: 'Stanley stiess auf ______ (hartnäckiger Widerstand). <i>(Akkusativ)</i>',
              loesungen: ['hartnäckigen Widerstand', 'hartnaeckigen Widerstand'] },
            { frage: 'Gegenüber ______ (der weisse Franzose) hatten sie Respekt. <i>(Dativ)</i>',
              loesungen: ['dem weissen Franzosen'] }
          ],
          tipp: 'Achte auch auf die Endung des Adjektivs – sie verändert sich mit dem Fall.',
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        },
        {
          typ: 'luecke', punkteJe: 1,
          frage: 'Wechselpräposition: Dativ oder Akkusativ? Setze den richtigen Artikel ein.',
          anweisung: '<i>Wo?</i> → Dativ · <i>Wohin?</i> → Akkusativ',
          kurz: 'Wechselpräpositionen: wo oder wohin?',
          luecken: [
            { vor: 'Der Mantel hing an ', loesungen: ['der'], nach: ' Garderobe. ' },
            { vor: 'Er hängte den Mantel an ', loesungen: ['die'], nach: ' Garderobe. ' },
            { vor: 'Das Blatt lag auf ', loesungen: ['dem'], nach: ' Tisch. ' },
            { vor: 'Er legte das Blatt auf ', loesungen: ['den'], nach: ' Tisch. ' },
            { vor: 'Sie stand in ', loesungen: ['der'], nach: ' Küchentür. ' },
            { vor: 'Sie trat in ', loesungen: ['die'], nach: ' Küche.' }
          ],
          erklaerung: 'Verben der Ruhe (hängen, liegen, stehen, sitzen) verlangen den Dativ, Verben der Bewegung (hängen, legen, stellen, setzen, treten) den Akkusativ.',
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        },
        {
          typ: 'zuordnung', punkteJe: 1,
          frage: 'Welchen Fall verlangt die Präposition?',
          kurz: 'Präpositionen und ihre Fälle',
          vorrat: ['Akkusativ', 'Dativ', 'Genitiv'],
          zeilen: [
            { text: 'ohne …', loesung: 0 },
            { text: 'seit …', loesung: 1 },
            { text: 'trotz …', loesung: 2 },
            { text: 'gegen …', loesung: 0 },
            { text: 'aus …', loesung: 1 },
            { text: 'während …', loesung: 2 }
          ],
          tipp: 'Merkvers für den Dativ: «aus bei mit nach seit von zu».',
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        },
        {
          typ: 'text', punkteJe: 1,
          frage: 'Bilde den <b>Genitiv Singular</b> mit bestimmtem Artikel.',
          kurz: 'Genitivformen bilden',
          teile: [
            { frage: 'der Fluss →', loesungen: ['des Flusses'] },
            { frage: 'das Haus →', loesungen: ['des Hauses'] },
            { frage: 'der Student →', loesungen: ['des Studenten'] },
            { frage: 'die Mutter →', loesungen: ['der Mutter'] },
            { frage: 'der Name →', loesungen: ['des Namens'] }
          ],
          erklaerung: 'Männliche und sächliche Nomen bekommen im Genitiv <i>-s</i> oder <i>-es</i>. Bei <i>Student</i> und <i>Name</i> ändert sich zusätzlich die Endung – solche Nomen nennt man schwach bzw. gemischt.',
          punktregel: 'Je 1 Punkt pro korrekte Lösung. ½ Punkt Abzug für Rechtschreibfehler.'
        },
        {
          typ: 'single',
          frage: 'In welchem Satz steht die unterstrichene Gruppe im <b>Dativ</b>?',
          kurz: 'Welcher Satz enthält einen Dativ?',
          optionen: [
            'Anna wies <u>spezielle Plätze</u> zu.',
            'Anna wies <u>den Gästen</u> Plätze zu.',
            '<u>Die Gäste</u> setzten sich.',
            'Sie vergass <u>den Salat</u>.'
          ],
          loesung: 1,
          erklaerung: 'Maskulinprobe: «Anna wies <i>dem Mann</i> Plätze zu» – Dativ. Die übrigen Gruppen stehen im Akkusativ bzw. Nominativ.'
        }
      ]
    },

    {
      titel: 'Prüfungsniveau', niveau: 'Prüfung', farbe: 'gold', bild: '🎯', xpFaktor: 1.5,
      kurz: 'Fälle setzen und bestimmen wie in der Prüfung 2022.',
      aufgaben: [
        {
          typ: 'text', punkteJe: 1,
          frage: 'Setze die Ausdrücke in Klammern in den richtigen Fall.',
          kurz: 'Fälle setzen (Prüfung 2022)',
          teile: [
            { frage: 'Jenseits ______ (der grosse Fluss) war das Hoheitsgebiet der Belgier.',
              loesungen: ['des grossen Flusses', 'vom grossen Fluss', 'von dem grossen Flusse', 'des grossen Flusse'] },
            { frage: 'Stanley stiess auf ______ (hartnäckiger Widerstand).',
              loesungen: ['hartnäckigen Widerstand', 'hartnaeckigen Widerstand'] },
            { frage: 'Gegenüber Brazza, ______ (der weisse Franzose), hatten die Einheimischen grossen Respekt.',
              loesungen: ['dem weissen Franzosen'] },
            { frage: 'Trotz ______ (die unruhigen Wasser) setzte er die Fahrt fort.',
              loesungen: ['der unruhigen Wasser', 'den unruhigen Wassern'] }
          ],
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        },
        {
          typ: 'zuordnung', punkteJe: 1,
          frage: 'Bestimme den Fall der unterstrichenen Nomengruppe. Verwende die Maskulinprobe.',
          kurz: 'Fälle bestimmen (Prüfungsniveau)',
          vorrat: ['Nominativ', 'Genitiv', 'Dativ', 'Akkusativ'],
          zeilen: [
            { text: 'Die lokalen Anhänger verkauften <u>Stanleys Männern</u> keinen Proviant.', loesung: 2 },
            { text: 'Um <u>ein paar dieser weissen Flecken</u> zu erkunden, wollte Brazza hinauffahren.', loesung: 3 },
            { text: 'Offenbar löste <u>das alles</u> grosses Erstaunen aus.', loesung: 0 },
            { text: 'Die Einbäume wurden mithilfe <u>einer afrikanischen Mannschaft</u> manövriert.', loesung: 1 },
            { text: 'Brazza gab <u>den Einheimischen</u> Zauberkunststücke zum Besten.', loesung: 2 }
          ],
          punktregel: 'Je 1 Punkt pro korrekte Lösung. ½ Punkt Abzug bei falscher Rechtschreibung.'
        },
        {
          typ: 'luecke', punkteJe: 0.5,
          frage: 'Ergänze die fehlenden Endungen.',
          anweisung: 'Schreibe nur die Endung, zum Beispiel <i>en</i>. Wenn keine Endung nötig ist, schreibe einen Strich <b>–</b>.',
          kurz: 'Fallendungen ergänzen',
          luecken: [
            { vor: 'Wegen d', loesungen: ['es'], nach: ' schlecht' },
            { vor: '', loesungen: ['en'], nach: ' Wetters blieb sie zu Hause. ' },
            { vor: 'Er dankte d', loesungen: ['em'], nach: ' alt' },
            { vor: '', loesungen: ['en'], nach: ' Busfahrer. ' },
            { vor: 'Sie sah d', loesungen: ['en'], nach: ' zweit' },
            { vor: '', loesungen: ['en'], nach: ' Mann erst spät.' }
          ],
          erklaerung: 'Nach einem bestimmten Artikel endet das Adjektiv im Genitiv, Dativ und Akkusativ Singular (männlich) immer auf <i>-en</i>.',
          punktregel: 'Je ½ Punkt pro korrekte Lösung.'
        },
        {
          typ: 'markieren', punkteJe: 1, abzugModus: 'voll',
          was: 'falsch geschriebene Wörter',
          frage: 'In diesen Sätzen sind drei nominalisierte Adjektive falsch kleingeschrieben. Markiere sie.',
          kurz: 'Falsch kleingeschriebene Adjektive finden',
          saetze: [
            { woerter: ['Er', 'hatte', 'alles', 'wichtige', 'notiert', 'und', 'nichts', 'wesentliches',
                        'vergessen', '.'],
              loesung: [3, 7] },
            { woerter: ['Für', 'solche', 'Gäste', 'ist', 'nur', 'das', 'beste', 'gut', 'genug', '.'],
              loesung: [6] }
          ],
          erklaerung: 'Nach <i>alles</i>, <i>nichts</i> und <i>das</i> wird das Adjektiv zum Nomen: <b>Wichtige, Wesentliches, Beste</b>.',
          punktregel: 'Je 1 Punkt Abzug pro fehlende oder falsche Lösung. Mindestpunktzahl 0.'
        },
        {
          typ: 'text', punkteJe: 1,
          frage: 'Notiere Singular oder Plural mit Artikel.',
          kurz: 'Singular und Plural (Prüfungsniveau)',
          teile: [
            { frage: 'Plural von «das Verhältnis»', loesungen: ['die Verhältnisse', 'Verhältnisse', 'die Verhaeltnisse'] },
            { frage: 'Plural von «der Atlas»', loesungen: ['die Atlanten', 'Atlanten', 'die Atlasse', 'Atlasse'] },
            { frage: 'Singular von «die Museen»', loesungen: ['das Museum', 'Museum'] },
            { frage: 'Singular von «die Themen»', loesungen: ['das Thema', 'Thema'] }
          ],
          punktregel: 'Je 1 Punkt pro korrekte Lösung. ½ Punkt Abzug für Rechtschreibfehler.'
        }
      ]
    },

    {
      titel: 'Kanti-Challenge', niveau: 'darüber', farbe: 'rot', bild: '🏔️', xpFaktor: 2,
      kurz: 'Genitivfallen, schwache Nomen und Apposition.',
      aufgaben: [
        {
          typ: 'text', punkteJe: 1,
          frage: 'Setze die Nomengruppe in den verlangten Fall. Vorsicht: Diese Nomen verändern sich stärker als gewöhnlich.',
          kurz: 'Schwache Nomen in den richtigen Fall setzen',
          teile: [
            { frage: 'Er sprach mit ______ (der Präsident). <i>(Dativ)</i>', loesungen: ['dem Präsidenten', 'dem Praesidenten'] },
            { frage: 'Die Antwort ______ (der Zeuge) überraschte alle. <i>(Genitiv)</i>', loesungen: ['des Zeugen'] },
            { frage: 'Sie suchten ______ (der Nachbar). <i>(Akkusativ)</i>', loesungen: ['den Nachbarn', 'den Nachbar'] },
            { frage: 'Das war die Idee ______ (der Junge). <i>(Genitiv)</i>', loesungen: ['des Jungen'] }
          ],
          erklaerung: 'Diese sogenannten schwachen Nomen hängen in allen Fällen ausser dem Nominativ ein <i>-n</i> oder <i>-en</i> an: <i>der Präsident – des Präsidenten – dem Präsidenten – den Präsidenten</i>.',
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        },
        {
          typ: 'single',
          frage: 'In welchem Satz ist der Fall <u>falsch</u> gesetzt?',
          kurz: 'Welcher Fall ist falsch gesetzt?',
          optionen: [
            'Wegen des schlechten Wetters blieb sie daheim.',
            'Trotz dem Regen ging er hinaus.',
            'Während dem Essen schwieg er.',
            'Innerhalb einer Woche kam die Antwort.'
          ],
          loesung: 2,
          erklaerung: '<i>während</i> verlangt in der Standardsprache den Genitiv: «Während <b>des Essens</b>». Bei <i>trotz</i> ist der Dativ in der Schweiz üblich und gilt als korrekt.'
        },
        {
          typ: 'zuordnung', punkteJe: 1,
          frage: 'Bestimme den Fall der unterstrichenen Gruppe in diesen anspruchsvollen Sätzen.',
          kurz: 'Fälle in anspruchsvollen Sätzen',
          vorrat: ['Nominativ', 'Genitiv', 'Dativ', 'Akkusativ'],
          zeilen: [
            { text: '<u>Dem Mann aus dem Moor</u> fehlten die Schwielen an den Händen.', loesung: 2 },
            { text: 'Die Säure, die Haut und Haare bewahrt, löst <u>die Knochen</u> auf.', loesung: 3 },
            { text: 'Der Preis <u>dieser Konservierung</u> ist hoch.', loesung: 1 },
            { text: '<u>Rund tausend bekannte Funde</u> gibt es in Nordeuropa.', loesung: 0 },
            { text: 'Man konnte <u>einem Fund in Dänemark</u> die Fingerabdrücke abnehmen.', loesung: 2 }
          ],
          tipp: 'Bei Satz 4 hilft die Probe: «Rund tausend Funde gibt es» – wer oder was gibt es? Nominativ.',
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        },
        {
          typ: 'luecke', punkteJe: 1,
          frage: 'Eine <b>Apposition</b> (nachgestellte Erklärung) steht im selben Fall wie das Nomen davor. Setze sie richtig ein.',
          kurz: 'Appositionen in den richtigen Fall setzen',
          luecken: [
            { vor: 'Sie sprach mit Sergej, ', loesungen: ['dem'], nach: ' Bodyguard von Makarenko. ' },
            { vor: 'Er kannte Vogt, ', loesungen: ['den'], nach: ' Trainer der Mannschaft, seit Jahren. ' },
            { vor: 'Elsa Brunner, ', loesungen: ['die'], nach: ' Tochter eines Webers, studierte Physik.' }
          ],
          erklaerung: 'Die Apposition übernimmt den Fall des Bezugsworts: <i>mit Sergej</i> steht im Dativ, also auch <i>dem Bodyguard</i>.',
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        },
        {
          typ: 'markieren', punkteJe: 1, abzugModus: 'voll',
          was: 'Nomengruppen im Genitiv',
          frage: 'Markiere die Wörter, die zu einer Nomengruppe im <b>Genitiv</b> gehören.',
          kurz: 'Genitivgruppen im Satz finden',
          saetze: [
            { woerter: ['Trotz', 'des', 'heftigen', 'Gewitters', 'setzte', 'sie', 'die', 'Messung', 'fort', '.'],
              loesung: [1, 2, 3] },
            { woerter: ['Der', 'Deckel', 'der', 'Trinkflasche', 'lag', 'auf', 'dem', 'Asphalt', '.'],
              loesung: [2, 3] }
          ],
          erklaerung: 'Im ersten Satz verlangt die Präposition <i>trotz</i> den Genitiv. Im zweiten zeigt der Genitiv die Zugehörigkeit an: der Deckel <i>wessen?</i> – der Trinkflasche.',
          punktregel: 'Je 1 Punkt Abzug pro fehlende oder falsche Lösung. Mindestpunktzahl 0.'
        }
      ]
    }
  ]
});
