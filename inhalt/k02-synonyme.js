LP.kapitel.push({
  id: 'synonyme',
  nr: 2,
  titel: 'Wortschatz: Synonyme & Wortbedeutung',
  bild: '🔤',
  gewicht: 7,
  kurz: 'Ein Wort durch ein gleichbedeutendes ersetzen – und feine Unterschiede erkennen.',
  pruefungsgewicht: '≈ 5–8 P.',
  inPruefung: 'In allen drei Prüfungen: Synonyme einsetzen. 2023 zusätzlich «Welche Wörter passen als Ersatz?», 2024 «Streiche den Begriff durch, der am wenigsten passt».',
  theorieKurz: 'Synonyme, Wortfelder und die Ersatzprobe im Satz.',

  theorie: [
    { titel: 'Was ein Synonym ist',
      html: [
        '<p>Ein <b class="wort">Synonym</b> ist ein Wort mit (fast) gleicher Bedeutung. <i>schnell – rasch – ',
        'flink – zügig</i>. Alle Wörter mit verwandter Bedeutung zusammen bilden ein <b class="wort">Wortfeld</b>.</p>',
        '<div class="merksatz"><b>Das Wichtigste:</b> Ein Synonym muss <u>in diesem Satz</u> passen, nicht nur ',
        'ungefähr dasselbe bedeuten. Deshalb heisst die Aufgabe in der Prüfung immer «<i>Ersetze in den folgenden ',
        'Sätzen …</i>» – und nicht «Nenne ein Synonym».</div>'
      ].join('') },

    { titel: 'Die Ersatzprobe',
      html: [
        '<p>So gehst du vor:</p>',
        '<ol>',
        '<li>Lies den <b>ganzen Satz</b>, nicht nur das Wort.</li>',
        '<li>Suche ein Ersatzwort.</li>',
        '<li>Setze es ein und lies den Satz laut (im Kopf). Klingt er richtig?</li>',
        '<li>Prüfe die <b>Wortart und die Form</b>: Für ein Verb muss ein Verb kommen, für ein Adjektiv ein ',
        'Adjektiv – und in derselben Endung.</li>',
        '</ol>',
        '<div class="beispiel"><b>Beispiel.</b> «Unterwegs hatte Brazza mehrfach <u>brenzlige</u> Situationen.»<br>',
        '✓ <i>heikle, gefährliche, bedrohliche, kritische</i> Situationen — Adjektiv, gleiche Endung<br>',
        '✗ <i>Gefahr</i> — das ist ein Nomen, passt grammatisch nicht</div>'
      ].join('') },

    { titel: 'Die häufigste Falle: die Endung',
      html: [
        '<p>Der häufigste Punkteverlust in dieser Aufgabe ist kein inhaltlicher Fehler, sondern eine falsche ',
        'Endung oder eine falsche Schreibweise.</p>',
        '<div class="probe"><b>Kontrolle vor dem Abgeben:</b> Lies deinen neuen Satz noch einmal ganz. ',
        'Stimmen Endung, Gross- und Kleinschreibung?</div>',
        '<p>In der Prüfung 2022 stand dazu: <i>«½ Punkt Abzug pro nicht korrekt geschriebenes Wort. Nominative ',
        '(Sg./Pl.) und Infinitive werden toleriert.»</i></p>'
      ].join('') },

    { titel: 'Feine Unterschiede: «am wenigsten passt»',
      html: [
        '<p>2024 kam eine härtere Variante: Vier Wörter sind angegeben, drei passen, eines nicht. Gefragt ist ',
        'also nicht, was ähnlich ist, sondern was <b>am weitesten weg</b> ist.</p>',
        '<div class="beispiel"><b>Beispiel.</b> «Widerwillig <u>schlurfte</u> sie zur Haustür.»<br>',
        'latschte · trottete · <b>hinkte</b> · schlenderte<br>',
        '→ <i>hinken</i> heisst «wegen einer Verletzung ungleichmässig gehen» und sagt nichts über die ',
        'Unlust aus. Die anderen drei beschreiben alle ein lustloses, schleppendes Gehen.</div>',
        '<div class="merksatz"><b>Vorsicht:</b> Es darf nur <u>ein</u> Wort durchgestrichen werden. Streichst du ',
        'mehrere, gibt es keinen Punkt – auch wenn das richtige dabei ist.</div>'
      ].join('') }
  ],

  level: [
    {
      titel: 'Wörter mit gleicher Bedeutung', niveau: 'leicht', farbe: 'gruen', bild: '🌱', xpFaktor: 1,
      kurz: 'Synonyme erkennen und zuordnen.',
      aufgaben: [
        {
          typ: 'zuordnung', punkteJe: 1,
          frage: 'Ordne jedem Wort das passende Synonym zu.',
          kurz: 'Synonyme zuordnen',
          vorrat: ['anstrengend', 'ängstlich', 'sorgfältig', 'wütend', 'mutig'],
          zeilen: [
            { text: 'zornig', loesung: 3 },
            { text: 'mühsam', loesung: 0 },
            { text: 'genau', loesung: 2 },
            { text: 'tapfer', loesung: 4 },
            { text: 'furchtsam', loesung: 1 }
          ],
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        },
        {
          typ: 'single',
          frage: 'Welches Wort passt <u>nicht</u> ins Wortfeld «gehen»?',
          kurz: 'Wortfeld «gehen» – welches Wort passt nicht?',
          optionen: ['schlendern', 'trotten', 'brüllen', 'marschieren'],
          loesung: 2,
          erklaerung: '<i>brüllen</i> gehört ins Wortfeld «sprechen/rufen», nicht ins Wortfeld «gehen».'
        },
        {
          typ: 'text', punkteJe: 1,
          frage: 'Ersetze das unterstrichene Wort durch ein gleichbedeutendes.',
          anweisung: 'Achte auf die Endung – der Satz muss weiterhin stimmen.',
          kurz: 'Einfache Synonyme im Satz ersetzen',
          teile: [
            { frage: 'Der Bus war <u>pünktlich</u>.',
              loesungen: ['rechtzeitig', 'fahrplanmässig', 'genau', 'exakt', 'termingerecht'] },
            { frage: 'Nora war sehr <u>müde</u>.',
              loesungen: ['erschöpft', 'erledigt', 'schläfrig', 'kaputt', 'matt', 'ermattet', 'abgekämpft'] },
            { frage: 'Die Halle war <u>kalt</u>.',
              loesungen: ['kühl', 'frostig', 'eisig', 'ungeheizt', 'unterkühlt'] },
            { frage: 'Er antwortete <u>freundlich</u>.',
              loesungen: ['nett', 'höflich', 'zuvorkommend', 'liebenswürdig', 'herzlich', 'wohlwollend'] }
          ],
          punktregel: 'Je 1 Punkt pro korrekte Antwort. ½ Punkt Abzug pro nicht korrekt geschriebenes Wort.'
        },
        {
          typ: 'multi', proKreuz: 0.5, abzugJe: 0.5,
          frage: 'Kreuze <u>alle</u> Wörter an, die als Ersatz für <b>«sagte»</b> im Satz «‹Komm herein›, sagte er» passen.',
          kurz: 'Ersatzwörter für «sagte» finden',
          optionen: ['erwiderte', 'meinte', 'schwieg', 'rief', 'dachte', 'forderte'],
          loesung: [0, 1, 3, 5],
          erklaerung: '<i>schweigen</i> ist das Gegenteil von sprechen, und <i>denken</i> passiert im Kopf – beides kann keine wörtliche Rede einleiten.',
          punktregel: '½ Punkt pro korrektes Kreuz, ½ Punkt Abzug pro falsches Kreuz. Mindestpunktzahl 0.'
        },
        {
          typ: 'single',
          frage: 'Welches Wort bedeutet <u>nicht</u> dasselbe wie «selten»?',
          kurz: 'Welches Wort bedeutet nicht «selten»?',
          optionen: ['rar', 'vereinzelt', 'häufig', 'ungewöhnlich'],
          loesung: 2,
          erklaerung: '<i>häufig</i> ist das Gegenteil (Antonym), kein Synonym.'
        }
      ]
    },

    {
      titel: 'Im Satz ersetzen', niveau: 'mittel', farbe: '', bild: '🔎', xpFaktor: 1.2,
      kurz: 'Synonyme im Satzzusammenhang, mit Blick auf Wortart und Endung.',
      aufgaben: [
        {
          typ: 'text', punkteJe: 1,
          frage: 'Ersetze in den folgenden Sätzen die unterstrichenen Wörter durch einen anderen, gleichbedeutenden Ausdruck (Synonym).',
          anweisung: 'Es genügt das Ersatzwort in der richtigen Form.',
          kurz: 'Synonyme im Satzzusammenhang',
          teile: [
            { frage: 'Herr Kuster nickte <u>langsam</u>.',
              loesungen: ['bedächtig', 'gemächlich', 'bedacht', 'behäbig', 'gemütlich'] },
            { frage: 'Nora <u>zögerte</u>.',
              loesungen: ['haderte', 'zauderte', 'wartete', 'schwankte', 'überlegte', 'stockte'] },
            { frage: 'Die Arbeit war <u>mühsam</u>.',
              loesungen: ['anstrengend', 'beschwerlich', 'strapaziös', 'zermürbend', 'hart', 'aufwendig', 'mühselig'] },
            { frage: 'Er beschrieb sie als <u>wortkarg</u>.',
              loesungen: ['schweigsam', 'einsilbig', 'verschlossen', 'still', 'zurückhaltend', 'maulfaul'] }
          ],
          tipp: 'Lies deinen neuen Satz laut im Kopf. Wenn er holprig klingt, stimmt die Endung nicht.',
          punktregel: 'Je 1 Punkt pro korrekte Antwort. ½ Punkt Abzug pro nicht korrekt geschriebenes Wort.'
        },
        {
          typ: 'multi', proKreuz: 0.5, abzugJe: 0.5,
          frage: 'Z. 19/20: «Zweimal <u>geriet</u> sie in ein Gewitter.» Kreuze alle Wörter an, die hier als Ersatz passen würden.',
          kurz: 'Ersatz für «geriet in»',
          optionen: ['kam', 'stolperte', 'rutschte', 'landete', 'fiel', 'sprang'],
          loesung: [0, 3, 4],
          erklaerung: '<i>kam in / landete in / fiel in</i> ein Gewitter sind möglich. <i>stolpern, rutschen, springen</i> beschreiben körperliche Bewegungen und passen nicht zu «Gewitter».',
          punktregel: '½ Punkt pro korrektes Kreuz, ½ Punkt Abzug pro falsches Kreuz. Mindestpunktzahl 0.'
        },
        {
          typ: 'single',
          frage: 'Streiche den Begriff durch, dessen Bedeutung dem unterstrichenen Wort <u>am wenigsten</u> entspricht:<br>«Die Lehrerin <u>setzte</u> ihrem Vater so lange <u>zu</u>, bis er einwilligte.»',
          kurz: 'Welcher Begriff passt am wenigsten zu «zusetzen»?',
          optionen: ['bedrängte', 'drängte', 'beschimpfte', 'bearbeitete'],
          loesung: 2,
          erklaerung: '<i>jemandem zusetzen</i> heisst «hartnäckig auf jemanden einreden». <i>beschimpfen</i> bedeutet, jemanden zu beleidigen – das ist etwas ganz anderes.',
          punktregel: 'Kein Punkt, falls mehrere Wörter durchgestrichen sind.'
        },
        {
          typ: 'single',
          frage: 'Streiche den Begriff durch, der <u>am wenigsten</u> passt:<br>«Er lächelte wie jemand, der gelernt hat, dass Lächeln <u>nützlich</u> ist.»',
          kurz: 'Welcher Begriff passt am wenigsten zu «nützlich»?',
          optionen: ['hilfreich', 'praktisch', 'vorteilhaft', 'freundlich'],
          loesung: 3,
          erklaerung: '<i>freundlich</i> beschreibt eine Haltung gegenüber anderen, <i>nützlich</i> dagegen den Nutzen für einen selbst. Genau darauf zielt der Satz.'
        },
        {
          typ: 'zuordnung', punkteJe: 1,
          frage: 'Ordne jedes Verb dem passenden Wortfeld zu.',
          kurz: 'Verben Wortfeldern zuordnen',
          vorrat: ['Wortfeld «sprechen»', 'Wortfeld «gehen»', 'Wortfeld «sehen»', 'Wortfeld «essen»'],
          zeilen: [
            { text: 'murmeln', loesung: 0 },
            { text: 'schlurfen', loesung: 1 },
            { text: 'starren', loesung: 2 },
            { text: 'schlingen', loesung: 3 },
            { text: 'mustern', loesung: 2 },
            { text: 'säuseln', loesung: 0 }
          ],
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        },
        {
          typ: 'text', punkteJe: 1,
          frage: 'Finde für jedes Wort ein <b>Gegenteil</b> (Antonym).',
          kurz: 'Gegenteile finden',
          teile: [
            { frage: 'grosszügig ↔', loesungen: ['geizig', 'knauserig', 'kleinlich', 'knickerig'] },
            { frage: 'gründlich ↔', loesungen: ['oberflächlich', 'schlampig', 'nachlässig', 'flüchtig'] },
            { frage: 'bescheiden ↔', loesungen: ['überheblich', 'eingebildet', 'arrogant', 'angeberisch', 'anmassend'] }
          ],
          erklaerung: 'In der Prüfung werden meist Synonyme verlangt – wer Gegenteile üben kann, findet Synonyme leichter, weil er das ganze Wortfeld überblickt.'
        }
      ]
    },

    {
      titel: 'Prüfungsniveau', niveau: 'Prüfung', farbe: 'gold', bild: '🎯', xpFaktor: 1.5,
      kurz: 'Genau wie in den Prüfungen 2022–2024 – mit Textstellen und Punkteregeln.',
      aufgaben: [
        {
          typ: 'text', text: 'vermessung', punkteJe: 1,
          frage: 'Wortschatz / Wortbedeutung: Ersetze in den folgenden Sätzen die unterstrichenen Wörter jeweils durch einen anderen, gleichbedeutenden Ausdruck (Synonym).',
          kurz: 'Synonyme im Sachtext ersetzen',
          teile: [
            { frage: '«Dass sie überhaupt studieren konnte, <u>verdankte</u> sie einem Stipendium.» (Z. 6/7)',
              loesungen: ['hatte sie zu verdanken', 'schuldete sie', 'lag an', 'war zurückzuführen auf', 'ermöglichte'] },
            { frage: '«… bis er <u>einwilligte</u>.» (Z. 8)',
              loesungen: ['zustimmte', 'nachgab', 'ja sagte', 'einverstanden war', 'zusagte', 'erlaubte'] },
            { frage: '«Die Arbeit war <u>mühsam</u> und manchmal gefährlich.» (Z. 19)',
              loesungen: ['anstrengend', 'beschwerlich', 'hart', 'strapaziös', 'aufwendig', 'mühselig', 'zermürbend'] },
            { frage: '«… <u>unerbittlich</u> gegenüber schlampigen Messungen.» (Z. 33)',
              loesungen: ['streng', 'kompromisslos', 'hart', 'gnadenlos', 'unnachgiebig', 'erbarmungslos'] },
            { frage: '«Brunner wählte deshalb einen <u>Umweg</u>.» (Z. 26)',
              loesungen: ['Ausweg', 'Schleichweg', 'Hintertür', 'anderen Weg', 'Trick', 'Kniff'] }
          ],
          punktregel: 'Je 1 Punkt pro korrekte Antwort. ½ Punkt Abzug pro nicht korrekt geschriebenes Wort.'
        },
        {
          typ: 'multi', text: 'vermessung', proKreuz: 0.5, abzugJe: 0.5,
          frage: 'Z. 32: «Kollegen beschrieben sie als <u>wortkarg</u>.» Kreuze diejenigen Wörter an, die im obenstehenden Satz als Ersatz für «wortkarg» passen würden.',
          kurz: 'Ersatzwörter für «wortkarg»',
          optionen: ['schweigsam', 'einsilbig', 'unfreundlich', 'verschlossen', 'sprachlos', 'maulfaul'],
          loesung: [0, 1, 3, 5],
          erklaerung: '<i>unfreundlich</i> sagt etwas über das Verhalten aus, nicht über die Menge der Worte. <i>sprachlos</i> bedeutet «vor Überraschung stumm» und beschreibt einen Moment, keine Eigenschaft.',
          punktregel: '½ Punkt für jedes korrekt gesetzte Kreuz, ½ Punkt Abzug pro falsches Kreuz. Mindestpunktzahl 0.'
        },
        {
          typ: 'single',
          frage: 'Streiche in folgendem Satz den Begriff durch, dessen Bedeutung dem unterstrichenen Wort <u>am wenigsten</u> entspricht:<br>«Die Forscherin notierte ihre Messungen <u>gewissenhaft</u>.»',
          kurz: '«gewissenhaft» – welches Wort passt am wenigsten?',
          optionen: ['sorgfältig', 'zuverlässig', 'peinlich genau', 'ängstlich'],
          loesung: 3,
          erklaerung: '<i>ängstlich</i> beschreibt ein Gefühl, <i>gewissenhaft</i> eine Arbeitsweise.',
          punktregel: '1 Punkt pro richtig durchgestrichenes Wort. Kein Punkt, falls mehrere Wörter durchgestrichen sind.'
        },
        {
          typ: 'single',
          frage: 'Streiche den Begriff durch, der <u>am wenigsten</u> passt:<br>«Die Zahnradbahn fuhr wegen Schnee nicht; sie musste eine Nacht in einer Scheune <u>verbringen</u>.»',
          kurz: '«verbringen» – welches Wort passt am wenigsten?',
          optionen: ['zubringen', 'überstehen', 'bleiben', 'vertreiben'],
          loesung: 3,
          erklaerung: '<i>die Zeit vertreiben</i> heisst «sich die Langeweile vertreiben» – das passt nicht in die Konstruktion «eine Nacht … verbringen».'
        },
        {
          typ: 'multi', text: 'vermessung', proKreuz: 1, abzugJe: 1,
          frage: 'Z. 1–5: Welche Adjektive beschreiben die Lage von Elsa Brunner nach dem Studium zutreffend? Kreuze alle passenden Lösungen an.',
          kurz: 'Adjektive zur Lage nach dem Studium',
          optionen: ['aussichtslos', 'hartnäckig', 'wohlhabend', 'benachteiligt', 'gleichgültig', 'entschlossen'],
          loesung: [0, 1, 3, 5],
          erklaerung: 'Sie findet keine Stelle (aussichtslos), steigt trotzdem jahrelang auf den Berg (hartnäckig, entschlossen) und wird als Frau nicht angestellt (benachteiligt). Wohlhabend war sie nicht, und gleichgültig schon gar nicht.',
          punktregel: '1 Punkt für jedes korrekt gesetzte Kreuz, 1 Punkt Abzug pro falsches Kreuz. Mindestpunktzahl 0.'
        },
        {
          typ: 'text', punkteJe: 1,
          frage: 'Ersetze das unterstrichene Wort durch ein Synonym, das in diesen Satz passt.',
          anweisung: 'Dasselbe Wort kann je nach Satz etwas anderes bedeuten – lies genau.',
          kurz: 'Dasselbe Wort, zwei Bedeutungen',
          teile: [
            { frage: 'Der Vertrag ist <u>gültig</u>.', loesungen: ['rechtskräftig', 'wirksam', 'in kraft', 'verbindlich', 'rechtsgültig'] },
            { frage: 'Seine Entschuldigung klang <u>hohl</u>.', loesungen: ['leer', 'unglaubwürdig', 'unecht', 'gespielt', 'falsch'] },
            { frage: 'Der Baum ist innen <u>hohl</u>.', loesungen: ['leer', 'ausgehöhlt', 'morsch', 'nicht massiv', 'ausgefault'] }
          ],
          erklaerung: 'Das Wort <i>hohl</i> bedeutet im zweiten Satz «ohne Inhalt» im übertragenen Sinn, im dritten wörtlich.'
        }
      ]
    },

    {
      titel: 'Kanti-Challenge', niveau: 'darüber', farbe: 'rot', bild: '🏔️', xpFaktor: 2,
      kurz: 'Gehobener Wortschatz und feine Bedeutungsunterschiede.',
      aufgaben: [
        {
          typ: 'text', punkteJe: 1,
          frage: 'Ersetze die unterstrichenen Wörter durch ein gleichbedeutendes Wort.',
          anweisung: 'Diese Wörter stammen aus dem gehobenen Wortschatz, wie er in Prüfungstexten vorkommt.',
          kurz: 'Gehobener Wortschatz: Synonyme finden',
          teile: [
            { frage: 'Sie sprach mit <u>beharrlicher</u> Stimme.',
              loesungen: ['hartnäckiger', 'ausdauernder', 'unnachgiebiger', 'standhafter', 'zäher', 'unbeirrbarer'] },
            { frage: 'Er hielt ihre Einwände für <u>belanglos</u>.',
              loesungen: ['unwichtig', 'nebensächlich', 'unbedeutend', 'bedeutungslos', 'nichtig', 'geringfügig'] },
            { frage: 'Die Nachricht traf ihn <u>unvermittelt</u>.',
              loesungen: ['plötzlich', 'unerwartet', 'abrupt', 'übergangslos', 'jäh', 'unversehens'] },
            { frage: 'Sein Bericht war <u>lückenhaft</u>.',
              loesungen: ['unvollständig', 'fehlerhaft', 'bruchstückhaft', 'ungenau', 'fragmentarisch', 'mangelhaft'] },
            { frage: 'Er reagierte <u>befremdet</u>.',
              loesungen: ['irritiert', 'verwundert', 'verstört', 'erstaunt', 'konsterniert', 'ungehalten', 'verunsichert'] }
          ],
          punktregel: 'Je 1 Punkt pro korrekte Antwort. ½ Punkt Abzug pro nicht korrekt geschriebenes Wort.'
        },
        {
          typ: 'zuordnung', punkteJe: 1,
          frage: 'Diese Wörter liegen im selben Wortfeld, bedeuten aber nicht dasselbe. Ordne jedem Wort die passende Erklärung zu.',
          kurz: 'Feine Unterschiede im Wortfeld «sprechen»',
          vorrat: [
            'leise und undeutlich sprechen',
            'übertrieben freundlich und schmeichelnd sprechen',
            'ständig über Abwesende reden',
            'laut und unbeherrscht sprechen',
            'jemandem etwas heimlich zuflüstern'
          ],
          zeilen: [
            { text: 'murmeln', loesung: 0 },
            { text: 'säuseln', loesung: 1 },
            { text: 'tratschen', loesung: 2 },
            { text: 'poltern', loesung: 3 },
            { text: 'soufflieren', loesung: 4 }
          ],
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        },
        {
          typ: 'multi', proKreuz: 1, abzugJe: 1,
          frage: '«Dr. Lenz lächelte wie jemand, der gelernt hat, dass Lächeln nützlich ist.» Kreuze <u>alle</u> Adjektive an, die diese Beschreibung treffen.',
          kurz: 'Ein berechnendes Lächeln beschreiben',
          optionen: ['berechnend', 'routiniert', 'herzlich', 'professionell', 'spontan', 'distanziert'],
          loesung: [0, 1, 3, 5],
          erklaerung: 'Das Lächeln ist eingeübt und zweckmässig – also berechnend, routiniert, professionell und innerlich distanziert. <i>Herzlich</i> und <i>spontan</i> wären genau das Gegenteil.',
          punktregel: '1 Punkt pro korrektes Kreuz, 1 Punkt Abzug pro falsches Kreuz. Mindestpunktzahl 0.'
        },
        {
          typ: 'single',
          frage: 'Welche Erklärung trifft den Unterschied zwischen <b>«verschweigen»</b> und <b>«lügen»</b> genau?',
          kurz: 'Unterschied «verschweigen» – «lügen»',
          optionen: [
            'Es gibt keinen Unterschied, beides ist dasselbe.',
            'Wer verschweigt, sagt etwas Falsches; wer lügt, sagt gar nichts.',
            'Wer verschweigt, sagt etwas Wahres nicht; wer lügt, behauptet aktiv etwas Falsches.',
            '«Lügen» ist die gehobene Form von «verschweigen».'
          ],
          loesung: 2,
          erklaerung: 'Nora <i>verschweigt</i> ihrem Vater den Wettkampf; Milan <i>lügt</i>, als er sagt, das Drücken tue nicht weh.'
        },
        {
          typ: 'text', punkteJe: 1,
          frage: 'Ersetze das Allerweltswort «machen» durch ein genaueres Verb.',
          anweisung: 'Je genauer das Verb, desto besser der Aufsatz. Diese Übung zahlt sich in Teil 2 der Prüfung aus.',
          kurz: '«machen» durch genauere Verben ersetzen',
          teile: [
            { frage: 'eine Prüfung <u>machen</u>', loesungen: ['ablegen', 'schreiben', 'absolvieren', 'bestehen'] },
            { frage: 'einen Fehler <u>machen</u>', loesungen: ['begehen', 'unterlaufen', 'verursachen'] },
            { frage: 'Musik <u>machen</u>', loesungen: ['spielen', 'musizieren'] },
            { frage: 'einen Vorschlag <u>machen</u>', loesungen: ['unterbreiten', 'einbringen', 'vorbringen', 'vorschlagen'] },
            { frage: 'sich Sorgen <u>machen</u>', loesungen: ['sorgen', 'beunruhigen', 'bangen', 'ängstigen', 'grämen'] }
          ],
          punktregel: 'Je 1 Punkt pro korrekte Antwort.'
        }
      ]
    }
  ]
});
