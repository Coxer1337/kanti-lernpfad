LP.kapitel.push({
  id: 'zeitformen',
  nr: 7,
  titel: 'Zeitformen',
  bild: '⏳',
  gewicht: 7,
  kurz: 'Präsens, Präteritum, Perfekt, Plusquamperfekt und Futur bilden und erkennen.',
  pruefungsgewicht: '≈ 4–6 P.',
  inPruefung: 'In allen drei Prüfungen: «Setze die folgenden Sätze in die gewünschte Zeitform.» Je 1 Punkt pro korrekt geschriebene Verbform, ½ Punkt Abzug pro Rechtschreibfehler.',
  theorieKurz: 'Die fünf Zeitformen, ihre Bauweise und die Falle mit «sein» oder «haben».',

  theorie: [
    { titel: 'Die fünf Zeitformen auf einen Blick',
      html: [
        '<table>',
        '<tr><th>Zeitform</th><th>Bauweise</th><th>Beispiel</th></tr>',
        '<tr><td><b>Präsens</b></td><td>Personalform</td><td>sie <b>sieht</b></td></tr>',
        '<tr><td><b>Präteritum</b></td><td>Personalform mit Vergangenheitsform</td><td>sie <b>sah</b></td></tr>',
        '<tr><td><b>Perfekt</b></td><td>haben/sein (Präsens) + Partizip II</td><td>sie <b>hat gesehen</b></td></tr>',
        '<tr><td><b>Plusquamperfekt</b></td><td>haben/sein (Präteritum) + Partizip II</td><td>sie <b>hatte ',
        'gesehen</b></td></tr>',
        '<tr><td><b>Futur</b></td><td>werden + Infinitiv</td><td>sie <b>wird sehen</b></td></tr>',
        '</table>',
        '<div class="merksatz"><b>Der schnellste Weg:</b> Bilde zuerst das <b>Partizip II</b> ',
        '(<i>gesehen, gegangen, gemacht</i>). Damit hast du Perfekt <u>und</u> Plusquamperfekt – sie ',
        'unterscheiden sich nur im Hilfsverb: <i>hat</i> (Präsens) oder <i>hatte</i> (Präteritum).</div>'
      ].join('') },

    { titel: '«haben» oder «sein»?',
      html: [
        '<p>Beim Perfekt und beim Plusquamperfekt muss man wählen. Das ist der häufigste Fehler.</p>',
        '<table>',
        '<tr><th>mit <b>sein</b></th><th>mit <b>haben</b></th></tr>',
        '<tr><td>Bewegung von A nach B: <i>ist gegangen, ist gefahren, ist gereist</i></td>',
        '<td>alle übrigen Verben: <i>hat gelesen, hat gewartet</i></td></tr>',
        '<tr><td>Zustandsänderung: <i>ist eingeschlafen, ist gewachsen, ist geworden</i></td>',
        '<td>alle Verben mit Akkusativobjekt: <i>hat den Bus verpasst</i></td></tr>',
        '<tr><td>die drei Sonderfälle: <i>sein, bleiben, werden</i></td><td></td></tr>',
        '</table>',
        '<div class="beispiel"><b>Vorsicht:</b> «Philly <u>wird</u> wütend.» → Perfekt: «Philly <u>ist</u> wütend ',
        '<u>geworden</u>.» – nicht «hat geworden».</div>'
      ].join('') },

    { titel: 'Passiv in anderen Zeiten',
      html: [
        '<p>Steht der Satz im Passiv, kommt ein zusätzliches <i>werden</i> dazu. Das Partizip von <i>werden</i> ',
        'lautet im Passiv <b>worden</b> (nicht «geworden»).</p>',
        '<table>',
        '<tr><th>Zeitform</th><th>Passivsatz</th></tr>',
        '<tr><td>Präsens</td><td>Die Gäste <b>werden</b> begrüsst.</td></tr>',
        '<tr><td>Präteritum</td><td>Die Gäste <b>wurden</b> begrüsst.</td></tr>',
        '<tr><td>Perfekt</td><td>Die Gäste <b>sind</b> begrüsst <b>worden</b>.</td></tr>',
        '<tr><td>Plusquamperfekt</td><td>Die Gäste <b>waren</b> begrüsst <b>worden</b>.</td></tr>',
        '<tr><td>Futur</td><td>Die Gäste <b>werden</b> begrüsst <b>werden</b>.</td></tr>',
        '</table>',
        '<div class="merksatz"><b>Merksatz:</b> <i>worden</i> ohne «ge-» steht immer dann, wenn der Satz im ',
        'Passiv ist. <i>geworden</i> steht, wenn <i>werden</i> ein Vollverb ist.</div>'
      ].join('') },

    { titel: 'Zeitformen erkennen',
      html: [
        '<ol>',
        '<li>Suche <b>alle</b> Verbteile im Satz.</li>',
        '<li>Ein Teil? → Präsens oder Präteritum. Vergleiche: <i>sieht</i> (heute) vs. <i>sah</i> (damals).</li>',
        '<li>Zwei Teile mit <i>hat/ist</i> + Partizip? → Perfekt.</li>',
        '<li>Zwei Teile mit <i>hatte/war</i> + Partizip? → Plusquamperfekt.</li>',
        '<li><i>wird/werden</i> + Infinitiv? → Futur.</li>',
        '</ol>',
        '<div class="probe"><b>Kontrollsatz:</b> «Nachdem ich gegessen <u>hatte</u>, ging ich.» – Das ',
        'Plusquamperfekt zeigt an, dass etwas <u>vor</u> einer anderen Vergangenheit passiert ist. Es steht fast ',
        'immer zusammen mit <i>nachdem</i>.</div>'
      ].join('') }
  ],

  level: [
    {
      titel: 'Die fünf Zeiten', niveau: 'leicht', farbe: 'gruen', bild: '🌱', xpFaktor: 1,
      kurz: 'Zeitformen erkennen und einfache Formen bilden.',
      aufgaben: [
        {
          typ: 'zuordnung', punkteJe: 1,
          frage: 'In welcher Zeitform steht der Satz?',
          kurz: 'Zeitformen erkennen (leicht)',
          vorrat: ['Präsens', 'Präteritum', 'Perfekt', 'Plusquamperfekt', 'Futur'],
          zeilen: [
            { text: 'Nora rennt zur Haltestelle.', loesung: 0 },
            { text: 'Nora rannte zur Haltestelle.', loesung: 1 },
            { text: 'Nora ist zur Haltestelle gerannt.', loesung: 2 },
            { text: 'Nora war zur Haltestelle gerannt.', loesung: 3 },
            { text: 'Nora wird zur Haltestelle rennen.', loesung: 4 }
          ],
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        },
        {
          typ: 'luecke', punkteJe: 1,
          frage: 'Setze den Satz ins <b>Präteritum</b>.',
          kurz: 'Ins Präteritum setzen',
          luecken: [
            { vor: 'Der Bus (hält) ', loesungen: ['hielt'], nach: ' an der Kreuzung.' },
            { vor: 'Nora (sieht) ', loesungen: ['sah'], nach: ' auf das Display.' },
            { vor: 'Sie (zieht) ', loesungen: ['zog'], nach: ' die Jacke enger.' },
            { vor: 'Herr Kuster (fragt) ', loesungen: ['fragte'], nach: ' nach dem Training.' }
          ],
          punktregel: 'Je 1 Punkt pro korrekt geschriebene Verbform.'
        },
        {
          typ: 'text', punkteJe: 1,
          frage: 'Notiere das <b>Partizip II</b>.',
          anweisung: 'Also die Form, die nach «ich habe …» oder «ich bin …» steht.',
          kurz: 'Partizip II bilden',
          teile: [
            { frage: 'sehen → ich habe …', loesungen: ['gesehen'] },
            { frage: 'gehen → ich bin …', loesungen: ['gegangen'] },
            { frage: 'bringen → ich habe …', loesungen: ['gebracht'] },
            { frage: 'werden → ich bin …', loesungen: ['geworden'] },
            { frage: 'verlieren → ich habe …', loesungen: ['verloren'] }
          ],
          tipp: 'Verben mit Vormorphem (ver-, be-, ent-) bekommen <u>kein</u> «ge-»: verlieren → verloren.',
          punktregel: 'Je 1 Punkt pro korrekte Lösung. ½ Punkt Abzug für Rechtschreibfehler.'
        },
        {
          typ: 'single',
          frage: 'Welcher Satz steht im <b>Perfekt</b>?',
          kurz: 'Welcher Satz steht im Perfekt?',
          optionen: [
            'Sie hatte den Bus verpasst.',
            'Sie hat den Bus verpasst.',
            'Sie wird den Bus verpassen.',
            'Sie verpasste den Bus.'
          ],
          loesung: 1,
          erklaerung: 'Perfekt = <i>haben/sein im <u>Präsens</u></i> + Partizip II. Mit <i>hatte</i> wäre es Plusquamperfekt.'
        },
        {
          typ: 'luecke', punkteJe: 1,
          frage: 'Setze «haben» oder «sein» in der richtigen Form ein (Perfekt).',
          kurz: '«haben» oder «sein» im Perfekt',
          luecken: [
            { vor: 'Nora ', loesungen: ['ist'], nach: ' zur Haltestelle gerannt.' },
            { vor: 'Sie ', loesungen: ['hat'], nach: ' den Deckel verloren.' },
            { vor: 'Der Bus ', loesungen: ['ist'], nach: ' schon abgefahren.' },
            { vor: 'Philly ', loesungen: ['ist'], nach: ' sehr wütend geworden.' }
          ],
          erklaerung: 'Bewegung von A nach B (<i>rennen, abfahren</i>) und Zustandsänderung (<i>werden</i>) verlangen <i>sein</i>. <i>verlieren</i> hat ein Akkusativobjekt und verlangt <i>haben</i>.',
          punktregel: 'Je 1 Punkt pro korrekt geschriebene Verbform.'
        }
      ]
    },

    {
      titel: 'Umformen', niveau: 'mittel', farbe: '', bild: '🔎', xpFaktor: 1.2,
      kurz: 'Sätze von einer Zeitform in eine andere setzen.',
      aufgaben: [
        {
          typ: 'luecke', punkteJe: 1,
          frage: 'Setze die Sätze ins <b>Perfekt</b>.',
          kurz: 'Ins Perfekt setzen',
          luecken: [
            { vor: '«Philly wird sehr wütend.» → Philly ', loesungen: ['ist'], nach: ' sehr wütend ' },
            { vor: '', loesungen: ['geworden'], nach: '.' },
            { vor: '«Sie schreit mich an.» → Sie ', loesungen: ['hat'], nach: ' mich ' },
            { vor: '', loesungen: ['angeschrien'], nach: '.' }
          ],
          tipp: 'Das Partizip von Verben mit Verbzusatz: Das «ge-» rutscht in die Mitte – <i>anschreien → angeschrien</i>.',
          punktregel: 'Je 1 Punkt pro korrekt geschriebene Verbform.'
        },
        {
          typ: 'luecke', punkteJe: 1,
          frage: 'Setze die Sätze ins <b>Plusquamperfekt</b>.',
          kurz: 'Ins Plusquamperfekt setzen',
          luecken: [
            { vor: '«Die Männer überqueren den Fluss.» → Die Männer ', loesungen: ['hatten'], nach: ' den Fluss ' },
            { vor: '', loesungen: ['überquert', 'ueberquert'], nach: '.' },
            { vor: '«Ihre Mutter ist nervös.» → Ihre Mutter ', loesungen: ['war'], nach: ' nervös ' },
            { vor: '', loesungen: ['gewesen'], nach: '.' }
          ],
          erklaerung: 'Plusquamperfekt = <i>hatte/war</i> + Partizip II. Bei <i>sein</i> lautet das Partizip <i>gewesen</i>.',
          punktregel: 'Je 1 Punkt pro korrekt geschriebene Verbform.'
        },
        {
          typ: 'luecke', punkteJe: 1,
          frage: 'Setze die Sätze ins <b>Futur</b>.',
          kurz: 'Ins Futur setzen',
          luecken: [
            { vor: '«Das Publikum wurde begrüsst.» → Das Publikum ', loesungen: ['wird'], nach: ' begrüsst ' },
            { vor: '', loesungen: ['werden'], nach: '.' },
            { vor: '«Milan ging zum Arzt.» → Milan ', loesungen: ['wird'], nach: ' zum Arzt ' },
            { vor: '', loesungen: ['gehen'], nach: '.' }
          ],
          erklaerung: 'Im Passiv-Futur steht <i>werden</i> zweimal: einmal als Hilfsverb des Futurs, einmal als Passiv-Verb.',
          punktregel: 'Je 1 Punkt pro korrekt geschriebene Verbform.'
        },
        {
          typ: 'zuordnung', punkteJe: 1,
          frage: 'Bestimme die Zeitform.',
          kurz: 'Zeitformen bestimmen (mittel)',
          vorrat: ['Präsens', 'Präteritum', 'Perfekt', 'Plusquamperfekt', 'Futur'],
          zeilen: [
            { text: 'Die Gäste sind willkommen geheissen worden.', loesung: 2 },
            { text: 'Nachdem sie gegessen hatten, tranken sie Kaffee.', loesung: 3 },
            { text: 'Brazza wird nach Afrika reisen.', loesung: 4 },
            { text: 'Das Gepäck wurde auf Einbäume verladen.', loesung: 1 },
            { text: 'Die Kartoffeln kochen im Wasser.', loesung: 0 }
          ],
          tipp: 'Bei Satz 2: Welches Verb steht im Nebensatz mit «nachdem»? Das ist die gefragte Zeitform des Nebensatzes.',
          erklaerung: 'Satz 1: <i>sind … worden</i> = Perfekt Passiv. Satz 4: <i>wurde verladen</i> = Präteritum Passiv – nicht Futur, obwohl «wurde» von «werden» kommt.',
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        },
        {
          typ: 'text', punkteJe: 1,
          frage: 'Notiere die verlangte Form von <b>werden</b>.',
          kurz: '«geworden» oder «worden»?',
          teile: [
            { frage: 'Perfekt, Vollverb: «Sie ist nervös …»', loesungen: ['geworden'] },
            { frage: 'Perfekt Passiv: «Der Brief ist geschrieben …»', loesungen: ['worden'] },
            { frage: 'Plusquamperfekt Passiv: «Die Gäste waren begrüsst …»', loesungen: ['worden'] },
            { frage: 'Perfekt, Vollverb: «Es ist dunkel …»', loesungen: ['geworden'] }
          ],
          erklaerung: 'Im Passiv heisst es immer <b>worden</b> ohne «ge-». Nur wenn <i>werden</i> das Hauptverb ist, heisst es <b>geworden</b>.',
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        }
      ]
    },

    {
      titel: 'Prüfungsniveau', niveau: 'Prüfung', farbe: 'gold', bild: '🎯', xpFaktor: 1.5,
      kurz: 'Fünf Sätze, fünf Zeitformen – genau wie in der Prüfung.',
      aufgaben: [
        {
          typ: 'luecke', punkteJe: 1,
          frage: 'Setze die folgenden Sätze in die gewünschte Zeitform.',
          anweisung: 'Je 1 Punkt pro korrekt geschriebene Verbform.',
          kurz: 'Zeitformen umsetzen (Prüfung 2024)',
          luecken: [
            { vor: 'a) «Lena hat eine zweite Person gesehen.» → <b>Präsens:</b> Lena ', loesungen: ['sieht'], nach: ' eine zweite Person. ' },
            { vor: 'b) «Ihre Mutter ist nervös.» → <b>Plusquamperfekt:</b> Ihre Mutter ', loesungen: ['war'], nach: ' nervös ' },
            { vor: '', loesungen: ['gewesen'], nach: '. ' },
            { vor: 'c) «Lena wird innerlich leiden.» → <b>Präteritum:</b> Lena ', loesungen: ['litt'], nach: ' innerlich. ' },
            { vor: 'd) «Lena wurde überrascht.» → <b>Futur:</b> Lena ', loesungen: ['wird'], nach: ' überrascht ' },
            { vor: '', loesungen: ['werden'], nach: '. ' },
            { vor: 'e) «Die Gäste werden willkommen geheissen.» → <b>Perfekt:</b> Die Gäste ', loesungen: ['sind'], nach: ' willkommen geheissen ' },
            { vor: '', loesungen: ['worden'], nach: '.' }
          ],
          tipp: 'Bei d) und e) steht der Satz im Passiv – dort kommt ein zweites <i>werden</i> bzw. ein <i>worden</i> dazu.',
          punktregel: 'Je 1 Punkt pro korrekte Lösung. Die verbalen Teile müssen korrekt geschrieben sein.'
        },
        {
          typ: 'luecke', punkteJe: 1,
          frage: 'Setze die folgenden Sätze in die gewünschte Zeitform.',
          kurz: 'Zeitformen umsetzen (Prüfung 2022)',
          luecken: [
            { vor: 'a) «Die Männer überqueren den Fluss.» → <b>Plusquamperfekt:</b> Die Männer ', loesungen: ['hatten'], nach: ' den Fluss ' },
            { vor: '', loesungen: ['überquert', 'ueberquert'], nach: '. ' },
            { vor: 'b) «Das Gepäck wurde auf Einbäume verladen.» → <b>Futur:</b> Das Gepäck ', loesungen: ['wird'], nach: ' auf Einbäume verladen ' },
            { vor: '', loesungen: ['werden'], nach: '. ' },
            { vor: 'c) «Brazza wird nach Afrika reisen.» → <b>Perfekt:</b> Brazza ', loesungen: ['ist'], nach: ' nach Afrika ' },
            { vor: '', loesungen: ['gereist'], nach: '. ' },
            { vor: 'd) «Wohin wird er das Boot manövrieren?» → <b>Präsens:</b> Wohin ', loesungen: ['manövriert', 'manoevriert'], nach: ' er das Boot?' }
          ],
          erklaerung: 'Bei c) verlangt <i>reisen</i> das Hilfsverb <i>sein</i>, weil es eine Bewegung von A nach B beschreibt.',
          punktregel: 'Je 1 Punkt pro korrekt geschriebene Verbform. ½ Punkt Abzug pro Rechtschreibfehler. Mindestpunktzahl pro Satz ist 0.'
        },
        {
          typ: 'luecke', punkteJe: 1,
          frage: 'Setze die folgenden Sätze in die gewünschte Zeitform.',
          kurz: 'Zeitformen umsetzen (Prüfung 2023)',
          luecken: [
            { vor: 'a) «Philly wird sehr wütend.» → <b>Perfekt:</b> Philly ', loesungen: ['ist'], nach: ' sehr wütend ' },
            { vor: '', loesungen: ['geworden'], nach: '. ' },
            { vor: 'b) «Sie schreit mich an.» → <b>Plusquamperfekt:</b> Sie ', loesungen: ['hatte'], nach: ' mich ' },
            { vor: '', loesungen: ['angeschrien'], nach: '. ' },
            { vor: 'c) «Das Publikum wurde begrüsst.» → <b>Futur:</b> Das Publikum ', loesungen: ['wird'], nach: ' begrüsst ' },
            { vor: '', loesungen: ['werden'], nach: '. ' },
            { vor: 'd) «Der Clown pfeift vergnügt.» → <b>Präteritum:</b> Der Clown ', loesungen: ['pfiff'], nach: ' vergnügt.' }
          ],
          punktregel: 'Je 1 Punkt pro korrekt geschriebene Lösung.'
        },
        {
          typ: 'zuordnung', punkteJe: 1,
          frage: 'Bestimme die Zeitform dieser Sätze aus den Prüfungstexten.',
          kurz: 'Zeitformen bestimmen (Prüfungsniveau)',
          vorrat: ['Präsens', 'Präteritum', 'Perfekt', 'Plusquamperfekt', 'Futur'],
          zeilen: [
            { text: 'Sie hatte auf das Bitten ihrer Mutter hin nachgegeben.', loesung: 3 },
            { text: 'Man will es ja als Gast nicht verkehrt machen.', loesung: 0 },
            { text: 'Die Interessensgebiete waren abgesteckt worden.', loesung: 3 },
            { text: 'Sie wird die Mahlzeit auftischen.', loesung: 4 },
            { text: 'Er hat sich gestern den Kopf angestossen.', loesung: 2 },
            { text: 'Das Gepäck wurde auf Einbäume verladen.', loesung: 1 }
          ],
          erklaerung: 'Achtung bei Satz 3: <i>waren … worden</i> ist Plusquamperfekt Passiv, nicht Präteritum.',
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        },
        {
          typ: 'text', punkteJe: 2,
          frage: 'Bilde aus den vorgegebenen Wortketten je einen korrekten mehrteiligen Satz in der Vergangenheit.',
          anweisung: 'Verwende die notierten Subjekte und Satzanfänge. Es ereignete sich alles in der Vergangenheit.',
          kurz: 'Sätze aus Wortketten bilden (Prüfung 2022)',
          teile: [
            { frage: '<i>Während</i> … seine Zaubertricks präsentieren (Brazza) – gebannt zuschauen (die Einheimischen)',
              platzhalter: 'Während Brazza …',
              loesungen: [
                'Während Brazza seine Zaubertricks präsentierte, schauten die Einheimischen gebannt zu',
                'Während Brazza seine Zaubertricks präsentierte, schauten die Einheimischen gebannt zu.',
                'Während Brazza seine Zaubertricks präsentierte, schauten ihm die Einheimischen gebannt zu'
              ] },
            { frage: '<i>Nachdem</i> … die Vorführung beenden (Brazza) – von den Einheimischen gefeiert werden (er)',
              platzhalter: 'Nachdem Brazza …',
              loesungen: [
                'Nachdem Brazza die Vorführung beendet hatte, wurde er von den Einheimischen gefeiert',
                'Nachdem Brazza die Vorführung beendet hatte, wurde er von den Einheimischen gefeiert.'
              ] }
          ],
          tipp: 'Nach <i>nachdem</i> steht fast immer das Plusquamperfekt, im Hauptsatz dann das Präteritum.',
          punktregel: 'Je 1 Punkt pro korrekter Teilsatz.'
        }
      ]
    },

    {
      titel: 'Kanti-Challenge', niveau: 'darüber', farbe: 'rot', bild: '🏔️', xpFaktor: 2,
      kurz: 'Zeitenfolge, Futur II und die Tücken unregelmässiger Verben.',
      aufgaben: [
        {
          typ: 'luecke', punkteJe: 1,
          frage: 'Setze die Verben so ein, dass die <b>Zeitenfolge</b> stimmt.',
          anweisung: 'Was zuerst geschehen ist, steht im Plusquamperfekt.',
          kurz: 'Zeitenfolge richtig setzen',
          luecken: [
            { vor: 'Nachdem Nora den Bus (verpassen) ', loesungen: ['verpasst hatte', 'verpasst'], nach: ', setzte sie sich auf die Bank. ' },
            { vor: 'Als Herr Kuster hielt, (aufstehen) ', loesungen: ['stand sie auf', 'stand auf'], nach: ' sie trotzdem. ' },
            { vor: 'Sobald sie zu Hause (ankommen) ', loesungen: ['angekommen war', 'angekommen'], nach: ', wollte sie es ihrem Vater sagen.' }
          ],
          erklaerung: 'Die Konjunktionen <i>nachdem</i> und <i>sobald</i> verlangen in der Vergangenheit das Plusquamperfekt – das Geschehen im Nebensatz liegt vor dem im Hauptsatz.',
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        },
        {
          typ: 'luecke', punkteJe: 1,
          frage: 'Setze die Sätze ins <b>Futur II</b> (die Form, die ein Geschehen als bereits abgeschlossen in der Zukunft darstellt).',
          kurz: 'Futur II bilden',
          vorlage: '<b>Bauweise:</b> werden + Partizip II + haben/sein<br><i>Bis morgen wird er den Brief geschrieben haben.</i>',
          luecken: [
            { vor: 'Bis Samstag ', loesungen: ['wird'], nach: ' sie den Wettkampf ' },
            { vor: '', loesungen: ['bestritten'], nach: ' ' },
            { vor: '', loesungen: ['haben'], nach: '. ' },
            { vor: 'Bis zum Frühling ', loesungen: ['wird'], nach: ' der Nebel ' },
            { vor: '', loesungen: ['verschwunden'], nach: ' ' },
            { vor: '', loesungen: ['sein'], nach: '.' }
          ],
          erklaerung: 'Ob am Schluss <i>haben</i> oder <i>sein</i> steht, entscheidet dieselbe Regel wie beim Perfekt.',
          punktregel: 'Je 1 Punkt pro korrekt geschriebene Verbform.'
        },
        {
          typ: 'tabelle', punkteJe: 0.5,
          frage: 'Bilde die Stammformen dieser unregelmässigen Verben.',
          kurz: 'Stammformen unregelmässiger Verben',
          kopf: ['Infinitiv', 'Präteritum, 3. P. Sg.', 'Perfekt, 3. P. Sg.'],
          zeilen: [
            { fest: ['schwimmen'], felder: [{ loesungen: ['schwamm'] }, { loesungen: ['ist geschwommen', 'er ist geschwommen', 'geschwommen'] }] },
            { fest: ['gelingen'], felder: [{ loesungen: ['gelang'] }, { loesungen: ['ist gelungen', 'es ist gelungen', 'gelungen'] }] },
            { fest: ['verderben'], felder: [{ loesungen: ['verdarb'] }, { loesungen: ['ist verdorben', 'hat verdorben', 'verdorben'] }] },
            { fest: ['weichen'], felder: [{ loesungen: ['wich'] }, { loesungen: ['ist gewichen', 'gewichen'] }] }
          ],
          punktregel: 'Je ½ Punkt pro korrekte Lösung.'
        },
        {
          typ: 'markieren', punkteJe: 1, abzugModus: 'voll',
          was: 'falsche Verbformen',
          frage: 'In diesen Sätzen stehen vier <b>falsche</b> Verbformen. Markiere sie.',
          kurz: 'Falsche Verbformen finden',
          saetze: [
            { woerter: ['Nachdem', 'er', 'den', 'Brief', 'geschrieben', 'hat', ',', 'ging', 'er', 'zur', 'Post', '.'],
              loesung: [5] },
            { woerter: ['Das', 'Fenster', 'ist', 'von', 'ihm', 'geöffnet', 'geworden', '.'],
              loesung: [6] },
            { woerter: ['Sie', 'hat', 'gestern', 'nach', 'Hause', 'gegangen', '.'],
              loesung: [1] },
            { woerter: ['Er', 'hat', 'den', 'Fluss', 'überquert', 'gewesen', '.'],
              loesung: [5] }
          ],
          erklaerung: 'Richtig wäre: <i>geschrieben <b>hatte</b></i> (Zeitenfolge), <i>geöffnet <b>worden</b></i> (Passiv), <i><b>ist</b> gegangen</i> (Bewegung) und einfach <i>hat den Fluss überquert</i> – ohne <i>gewesen</i>.',
          punktregel: 'Je 1 Punkt Abzug pro fehlende oder falsche Lösung. Mindestpunktzahl 0.'
        },
        {
          typ: 'single',
          frage: 'In welchem Satz ist die Zeitenfolge <u>korrekt</u>?',
          kurz: 'Korrekte Zeitenfolge erkennen',
          optionen: [
            'Nachdem sie gegessen hat, ging sie zum Training.',
            'Nachdem sie gegessen hatte, ging sie zum Training.',
            'Nachdem sie ass, war sie zum Training gegangen.',
            'Nachdem sie gegessen hatte, geht sie zum Training.'
          ],
          loesung: 1,
          erklaerung: 'Die Regel lautet: Nebensatz im Plusquamperfekt, Hauptsatz im Präteritum. Die Zeiten müssen zusammenpassen.'
        }
      ]
    }
  ]
});
