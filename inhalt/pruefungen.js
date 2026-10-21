/* Drei vollständige Sprachprüfungen (Teil 1), gebaut nach dem Bauplan der
   Aufnahmeprüfungen 2022–2024: ein Lesetext, danach rund zwanzig Aufgaben zu
   Textverständnis, Wortschatz, Grammatik und Satzbau, 75–80 Punkte,
   40 Minuten. Jede Aufgabe trägt ihr Kapitel bei sich (kapId), damit die
   Auswertung sagen kann, woran noch zu arbeiten ist. */

LP.pruefungen.push({
  id: 'sim-a',
  titel: 'Simulation A – «Das letzte Training»',
  kurz: 'Literarischer Text, Bauplan der Prüfung 2024.',
  minuten: 40,
  aufgaben: [
    {
      kapId: 'textverstaendnis', typ: 'rfk', text: 'training',
      frage: 'Sind die folgenden Aussagen richtig, falsch oder gibt der Text darüber keinen Hinweis? Kreuze an.',
      kurz: 'richtig / falsch / kein Hinweis',
      aussagen: [
        { text: 'Milan hat seit Dienstag Schmerzen im Knie.', loesung: 'r' },
        { text: 'Milan hat seiner Mutter von den Schmerzen erzählt.', loesung: 'f' },
        { text: 'Lena ist schneller als Milan.', loesung: 'r' },
        { text: 'Dario spielt heute in einer anderen Mannschaft.', loesung: 'k' },
        { text: 'Vogt lässt Milan ohne Arztbesuch an der Qualifikation starten.', loesung: 'f' }
      ],
      punktregel: 'Je 1 Punkt pro korrekte Antwort.'
    },
    {
      kapId: 'textverstaendnis', typ: 'offen', text: 'training', punkteJe: 1,
      frage: 'Beantworte die folgenden Fragen in ganzen Sätzen.',
      kurz: 'Fragen in ganzen Sätzen',
      teile: [
        { frage: 'Warum läuft Milan vorne, obwohl ihm das Knie wehtut?',
          musterloesung: 'So sieht niemand, wie er das Gesicht verzieht. (Z. 3/4)',
          schluessel: [['niemand sieht', 'keiner sieht', 'gesicht', 'verzieht', 'nicht sehen']] },
        { frage: 'Woran merkt Milan, dass seine Zeit schlecht war, bevor Vogt etwas sagt?',
          musterloesung: 'Vogt sagt bei einer guten Zeit immer etwas, meist etwas Unfreundliches. Sein Schweigen ist deshalb ein schlechtes Zeichen. (Z. 13/14)',
          schluessel: [['schweigt', 'sagt nichts', 'schweigen', 'nichts'], ['immer etwas', 'sonst', 'sagt sonst']] },
        { frage: 'Weshalb erwähnt Vogt ausgerechnet Dario?',
          punkte: 2,
          musterloesung: 'Dario hat seine Verletzung ebenfalls verschwiegen und sitzt seit vierzehn Monaten auf der Tribüne. Vogt will Milan zeigen, was passiert, wenn man so weitermacht. (Z. 34/35)',
          schluessel: [['verschwiegen', 'gelogen', 'auch'], ['tribüne', 'vierzehn monate', 'warnung', 'beispiel']] },
        { frage: 'Welche Bedingung stellt Vogt, bevor er über die Qualifikation redet?',
          musterloesung: 'Milan muss am Montag zum Arzt gehen. (Z. 38)',
          schluessel: [['arzt'], ['montag']] }
      ],
      punktregel: 'Je 1 Punkt für jede richtige Antwort (sinngemäss). Teilsätze werden akzeptiert.'
    },
    {
      kapId: 'textverstaendnis', typ: 'multi', text: 'training', proKreuz: 1, abzugJe: 1,
      frage: 'Kreuze <u>alle</u> Aussagen an, die auf Lena zutreffen.',
      kurz: 'Aussagen über Lena',
      optionen: [
        'Sie hört das Gespräch absichtlich mit.',
        'Sie ist die Schnellste im Team.',
        'Sie erwähnt oft, dass sie schneller ist als Milan.',
        'Sie ist letztes Jahr mit einem Ermüdungsbruch gelaufen.',
        'Sie kündigt an, bei Milan nachzufragen.'
      ],
      loesung: [0, 1, 3, 4],
      erklaerung: 'Z. 23/24 (sie tut nur so, als binde sie den Schuh), Z. 24/25 (die Einzige, die schneller ist – und die es nie erwähnt), Z. 50/51 und Z. 53.',
      punktregel: '1 Punkt pro korrektes Kreuz, 1 Punkt Abzug pro falsches Kreuz. Mindestpunktzahl 0.'
    },
    {
      kapId: 'pronomen', typ: 'text', text: 'training', punkteJe: 1,
      frage: 'Wer oder was ist mit den folgenden Pronomen gemeint?',
      kurz: 'Pronomenbezug',
      teile: [
        { frage: '<b>es</b> (Z. 6: «Er hatte es niemandem gesagt.»)',
          loesungen: ['der Schmerz', 'die Schmerzen', 'das Knie', 'die Verletzung', 'dass das Knie wehtut', 'den Schmerz'] },
        { frage: '<b>Das</b> (Z. 22: «Das, auf dem du … nicht abdrückst.»)',
          loesungen: ['das Knie', 'Knie', 'das rechte Knie'] },
        { frage: '<b>der</b> (Z. 45: «bis der hinter der Tribüne verschwand»)',
          loesungen: ['Vogt', 'der Trainer', 'Trainer'] }
      ],
      punktregel: 'Je 1 Punkt pro korrekte Lösung.'
    },
    {
      kapId: 'textverstaendnis', typ: 'text', text: 'training', punkteJe: 1,
      frage: 'Notiere die Zeile, in der die folgende Aussage belegt wird.',
      anweisung: 'Nur die Zahl, z.&nbsp;B. <i>14</i>.',
      kurz: 'Belege mit Zeilenangabe',
      teile: [
        { frage: 'Milan sagt dem Trainer bewusst die Unwahrheit.', loesungen: ['29', 'Z. 29', 'Zeile 29'] },
        { frage: 'Vogt stellt Milans Laufbahn über diese eine Saison.', loesungen: ['43', 'Z. 43', 'Zeile 43'] }
      ],
      punktregel: 'Je ½ Punkt Abzug pro fehlende Zeilenangabe.'
    },
    {
      kapId: 'synonyme', typ: 'text', text: 'training', punkteJe: 1,
      frage: 'Wortschatz / Wortbedeutung: Ersetze die unterstrichenen Wörter durch einen anderen, gleichbedeutenden Ausdruck (Synonym).',
      kurz: 'Synonyme einsetzen',
      teile: [
        { frage: '«Milan <u>erstarrte</u>.» (Z. 21)',
          loesungen: ['versteinerte', 'erschrak', 'erstarb', 'verharrte', 'gefror', 'blieb starr', 'stockte'] },
        { frage: '«Die anderen <u>trotteten</u> Richtung Garderobe.» (Z. 23)',
          loesungen: ['schlurften', 'latschten', 'schlenderten', 'zockelten', 'gingen langsam', 'tappten'] },
        { frage: '«Der Name traf Milan <u>härter</u> als jede Strafrunde.» (Z. 36)',
          loesungen: ['schlimmer', 'heftiger', 'schwerer', 'stärker', 'empfindlicher'] },
        { frage: '«Es begann zu regnen, erst <u>zögerlich</u>.» (Z. 54)',
          loesungen: ['zaghaft', 'vorsichtig', 'langsam', 'verhalten', 'spärlich', 'schwach'] },
        { frage: '«Ihr glaubt, Schmerz sei eine <u>Verhandlungssache</u>.» (Z. 31/32)',
          loesungen: ['Ansichtssache', 'Willenssache', 'Frage des Willens', 'etwas Verhandelbares', 'Abmachung'] }
      ],
      punktregel: 'Je 1 Punkt pro korrekte Antwort. ½ Punkt Abzug pro nicht korrekt geschriebenes Wort.'
    },
    {
      kapId: 'synonyme', typ: 'single',
      frage: 'Streiche den Begriff durch, dessen Bedeutung dem unterstrichenen Wort <u>am wenigsten</u> entspricht:<br>«Vogt schaute ihn an, länger als <u>nötig</u>.»',
      kurz: 'Welcher Begriff passt am wenigsten?',
      optionen: ['erforderlich', 'notwendig', 'angebracht', 'dringend'],
      loesung: 3,
      erklaerung: '<i>dringend</i> sagt etwas über die Eile aus, <i>nötig</i> über die Notwendigkeit.',
      punktregel: 'Kein Punkt, falls mehrere Wörter durchgestrichen sind.'
    },
    {
      kapId: 'wortfamilien', typ: 'tabelle', punkteJe: 1,
      frage: 'Notiere ein Nomen der gleichen Wortfamilie mit möglichst ähnlicher Bedeutung. Verwende den vorgegebenen bestimmten Artikel. Nenne nicht die Person, die dies tut.',
      kurz: 'Verb → Nomen',
      kopf: ['Verb', 'Nomen'],
      zeilen: [
        { fest: ['laufen → <b>der</b>'], felder: [{ loesungen: ['Lauf', 'der Lauf'] }] },
        { fest: ['schlagen → <b>der</b>'], felder: [{ loesungen: ['Schlag', 'der Schlag'] }] },
        { fest: ['verlieren → <b>der</b>'], felder: [{ loesungen: ['Verlust', 'der Verlust'] }] },
        { fest: ['brechen → <b>der</b>'], felder: [{ loesungen: ['Bruch', 'der Bruch'] }] }
      ],
      punktregel: 'Je 1 Punkt pro korrekte Lösung. ½ Punkt Abzug für Rechtschreibfehler.'
    },
    {
      kapId: 'redewendungen', typ: 'text', punkteJe: 0.5,
      frage: 'Ergänze die folgenden Redewendungen. In allen kommt ein <b>Körperteil</b> vor.',
      kurz: 'Redewendungen ergänzen',
      teile: [
        { frage: 'sich sehr anstrengen: sich ein ______ ausreissen', loesungen: ['Bein'] },
        { frage: 'etwas nicht ernst nehmen: auf die leichte ______ nehmen', loesungen: ['Schulter'] },
        { frage: 'genau das Richtige treffen: den Nagel auf den ______ treffen', loesungen: ['Kopf'] },
        { frage: 'jemanden ausfragen: jemandem auf den ______ fühlen', loesungen: ['Zahn'] },
        { frage: 'unsicher werden: kalte ______ bekommen', loesungen: ['Füsse', 'Fuesse'] },
        { frage: 'etwas loswerden: sich etwas vom ______ schaffen', loesungen: ['Hals'] }
      ],
      punktregel: 'Je ½ Punkt pro richtige Lösung.'
    },
    {
      kapId: 'verb', typ: 'tabelle', punkteJe: 0.5,
      frage: 'Konjugation der Verben: Setze die folgenden Verben in die gewünschte Form.',
      kurz: 'Konjugationstabelle',
      kopf: ['Infinitiv', 'Präsens, 2. Person Singular', 'Präteritum, 3. Person Singular'],
      zeilen: [
        { fest: ['treffen'], felder: [{ loesungen: ['triffst'] }, { loesungen: ['traf'] }] },
        { fest: ['laufen'], felder: [{ loesungen: ['läufst', 'laeufst'] }, { loesungen: ['lief'] }] }
      ],
      punktregel: 'Je ½ Punkt pro korrekte und korrekt geschriebene Lösung.'
    },
    {
      kapId: 'zeitformen', typ: 'luecke', punkteJe: 1,
      frage: 'Setze die folgenden Sätze in die gewünschte Zeitform.',
      kurz: 'Zeitformen umsetzen',
      luecken: [
        { vor: 'a) «Milan log.» → <b>Perfekt:</b> Milan ', loesungen: ['hat'], nach: ' ' },
        { vor: '', loesungen: ['gelogen'], nach: '. ' },
        { vor: 'b) «Lena bindet ihren Schuh.» → <b>Plusquamperfekt:</b> Lena ', loesungen: ['hatte'], nach: ' ihren Schuh ' },
        { vor: '', loesungen: ['gebunden'], nach: '. ' },
        { vor: 'c) «Das Knie wurde kalt.» → <b>Futur:</b> Das Knie ', loesungen: ['wird'], nach: ' kalt ' },
        { vor: '', loesungen: ['werden'], nach: '.' }
      ],
      punktregel: 'Je 1 Punkt pro korrekt geschriebene Verbform.'
    },
    {
      kapId: 'verb', typ: 'markieren', punkteJe: 1, abzugModus: 'voll',
      was: 'Personalformen',
      frage: 'Notiere die <b>Personalformen</b>, die in der folgenden Textstelle vorkommen – markiere sie.',
      kurz: 'Personalformen markieren',
      saetze: [
        { woerter: ['Heute', 'wollen', 'die', 'Läufer', 'ihre', 'Zeiten', 'verbessern', '.'], loesung: [1] },
        { woerter: ['Ob', 'sie', 'die', 'Qualifikation', 'erreichen', 'können', '?'], loesung: [5] },
        { woerter: ['Trotz', 'der', 'Schmerzen', 'müssen', 'sie', 'sich', 'konzentrieren', '.'], loesung: [3] },
        { woerter: ['Danach', 'dürfen', 'sie', 'endlich', 'duschen', '.'], loesung: [1] }
      ],
      punktregel: 'Je 1 Punkt Abzug pro fehlende oder falsche Lösung. Mindestpunktzahl 0.'
    },
    {
      kapId: 'aktiv-passiv', typ: 'zuordnung', punkteJe: 0.5,
      frage: 'Notiere, ob die folgenden Sätze im Aktiv (A) oder Passiv (P) sind.',
      kurz: 'Aktiv oder Passiv',
      vorrat: ['A (Aktiv)', 'P (Passiv)'],
      zeilen: [
        { text: 'Die Zeiten wurden von Vogt gestoppt.', loesung: 1 },
        { text: 'Milan wird langsam nervös.', loesung: 0 },
        { text: 'Die Qualifikation wird nächste Woche stattfinden.', loesung: 0 },
        { text: 'Das Knie ist nie untersucht worden.', loesung: 1 }
      ],
      punktregel: 'Je ½ Punkt pro korrekte Lösung.'
    },
    {
      kapId: 'pronomen', typ: 'markieren', punkteJe: 1, abzugModus: 'voll',
      was: 'Pronomen',
      frage: 'Unterstreiche in den folgenden Sätzen die <b>Pronomen</b>.',
      kurz: 'Pronomen unterstreichen',
      saetze: [
        { woerter: ['Niemand', 'sagte', 'etwas', ',', 'und', 'alle', 'schauten', 'weg', '.'],
          loesung: [0, 2, 5] },
        { woerter: ['Man', 'konnte', 'sich', 'denken', ',', 'was', 'dieser', 'Blick', 'bedeutete', '.'],
          loesung: [0, 2, 5, 6] }
      ],
      punktregel: 'Je ½ Punkt Abzug pro fehlende oder falsche Lösung. Mindestpunktzahl 0.'
    },
    {
      kapId: 'pronomen', typ: 'luecke', punkteJe: 1,
      frage: 'Notiere die passenden Pronomen in die Lücken.',
      kurz: 'Relativpronomen einsetzen',
      luecken: [
        { vor: 'a) Der Trainer, ', loesungen: ['dessen'], nach: ' Narbe im Verein berühmt war, schwieg. ' },
        { vor: 'b) Milan log, ', loesungen: ['was'], nach: ' Vogt sofort bemerkte. ' },
        { vor: 'c) Lena, ', loesungen: ['deren'], nach: ' Rennen alle gewonnen waren, musste trotzdem pausieren.' }
      ],
      punktregel: 'Je 1 Punkt pro korrekt geschriebene Lösung.'
    },
    {
      kapId: 'partikel', typ: 'markieren', punkteJe: 1, abzugModus: 'voll',
      was: 'Präpositionen',
      frage: 'Unterstreiche in den folgenden Sätzen die <b>Präpositionen</b>.',
      kurz: 'Präpositionen unterstreichen',
      saetze: [
        { woerter: ['Über', 'dem', 'Stadion', 'hing', 'ein', 'grauer', 'Himmel', '.'], loesung: [0] },
        { woerter: ['Er', 'wischte', 'sich', 'die', 'Hände', 'an', 'der', 'Trainerhose', 'ab', '.'],
          loesung: [5] },
        { woerter: ['Die', 'anderen', 'trotteten', 'Richtung', 'Garderobe', 'und', 'schauten', 'nicht',
                    'zurück', '.'],
          loesung: [] },
        { woerter: ['Nach', 'dem', 'Training', 'blieb', 'Milan', 'auf', 'der', 'Bahn', 'stehen', '.'],
          loesung: [0, 5] }
      ],
      erklaerung: 'Vier Präpositionen: <b>Über, an, Nach, auf</b>. <i>ab</i> gehört zu <i>abwischen</i>, <i>zurück</i> zu <i>zurückschauen</i> – beides Verbzusätze. <i>Richtung</i> ist hier ein Nomen.',
      punktregel: 'Je 1 Punkt pro korrekte Lösung, je 1 Punkt Abzug pro falsche Lösung. Mindestpunktzahl 0.'
    },
    {
      kapId: 'wortarten', typ: 'text', punkteJe: 1,
      frage: 'Bestimme die Wortarten der im Text unterstrichenen Wörter. Verwende die vollständigen, möglichst genauen Fachbegriffe.',
      kurz: 'Wortarten bestimmen',
      vorlage: '«<u>Obwohl</u> (1) das Knie schmerzte, lief er <u>weiter</u> (2). <u>Niemand</u> (3) sollte etwas merken, denn <u>für</u> (4) <u>solche</u> (5) Schwächen hatte Vogt kein Verständnis.»',
      teile: [
        { frage: '<b>obwohl</b> (1)', loesungen: ['Konjunktion'] },
        { frage: '<b>weiter</b> (2)', loesungen: ['Adverb', 'Partikel', 'Verbzusatz'] },
        { frage: '<b>niemand</b> (3)', loesungen: ['Indefinitpronomen', 'Pronomen'] },
        { frage: '<b>für</b> (4)', loesungen: ['Präposition', 'Praeposition'] },
        { frage: '<b>solche</b> (5)', loesungen: ['Demonstrativpronomen', 'Pronomen'] }
      ],
      punktregel: 'Je 1 Punkt pro korrekte Lösung. ½ Punkt Abzug für Rechtschreibfehler.'
    },
    {
      kapId: 'satzglieder', typ: 'trennen', art: 'satzglied', punkteJe: 1,
      frage: 'Trenne im folgenden Satz die Satzglieder mit Senkrechtstrichen.',
      kurz: 'Satzglieder trennen',
      woerter: ['Nach', 'der', 'letzten', 'Runde', 'wischte', 'sich', 'der', 'Trainer', 'die', 'Hände',
                'an', 'der', 'Trainerhose', 'ab.'],
      loesung: [3, 4, 5, 7, 9],
      loesungText: 'Nach der letzten Runde | wischte | sich | der Trainer | die Hände | an der Trainerhose | ab.',
      punktregel: 'Je 1 Punkt Abzug für fehlende oder falsche Abtrennung. Mindestpunktzahl 0.'
    },
    {
      kapId: 'satzglieder', typ: 'text', punkteJe: 1,
      frage: 'Bestimme die unterstrichenen Satzglieder. Verwende die vollständigen, möglichst genauen Fachbegriffe.',
      kurz: 'Satzglieder bestimmen',
      teile: [
        { frage: 'Vogt steckte <u>die Stoppuhr</u> ein.',
          loesungen: ['Akkusativobjekt', 'Nominalgruppe im Akkusativ'] },
        { frage: 'Er zeigte <u>dem Trainer</u> das Knie.',
          loesungen: ['Dativobjekt', 'Nominalgruppe im Dativ'] },
        { frage: '<u>Lena</u> band ihren Schuh zum dritten Mal.',
          loesungen: ['Subjekt', 'Nominalgruppe im Nominativ'] },
        { frage: 'Milan blieb <u>auf der Bahn</u> stehen.',
          loesungen: ['Präpositionalgruppe', 'Präpositionalgefüge', 'Präpositionalglied', 'Präpositionalobjekt', 'Praepositionalgruppe'] }
      ],
      punktregel: 'Je 1 Punkt pro korrekte Lösung. ½ Punkt Abzug bei falscher Rechtschreibung.'
    },
    {
      kapId: 'zeichensetzung', typ: 'trennen', art: 'komma', punkteJe: 0.5, abzugJe: 0.5,
      frage: 'Setze im folgenden Text die fehlenden Kommas.',
      kurz: 'Kommas setzen',
      woerter: ['Obwohl', 'das', 'Knie', 'schmerzte', 'lief', 'Milan', 'weiter', ',', 'denn', 'er',
                'wusste', 'dass', 'Vogt', 'der', 'seit', 'Jahren', 'jede', 'Ausrede', 'kannte',
                'ihn', 'sonst', 'sperren', 'würde', '.'],
      loesung: [3, 10, 12, 18],
      loesungText: 'Obwohl das Knie schmerzte, lief Milan weiter, denn er wusste, dass Vogt, der seit Jahren jede Ausrede kannte, ihn sonst sperren würde.',
      punktregel: 'Je ½ Punkt Abzug für fehlendes oder an falscher Stelle gesetztes Komma. Mindestpunktzahl 0.'
    },
    {
      kapId: 'satzbau', typ: 'text', punkteJe: 2,
      frage: 'Satzbau: Forme die folgenden einteiligen Sätze in mehrteilige Sätze um, indem du die Präpositionen durch passende Konjunktionen ersetzt. Achte darauf, dass Sinn und Inhalt beibehalten werden.',
      kurz: 'Einteilig → mehrteilig',
      vorlage: '<b>Beispiel:</b> «Beim Erklingen der Musik klatschte das Publikum.» → «Als die Musik erklang, klatschte das Publikum.»',
      teile: [
        { frage: 'a) «Trotz seiner Schmerzen beschleunigte Milan.»',
          platzhalter: 'Obwohl …',
          loesungen: [
            'Obwohl er Schmerzen hatte, beschleunigte Milan',
            'Obwohl er Schmerzen hatte, beschleunigte Milan.',
            'Obwohl Milan Schmerzen hatte, beschleunigte er',
            'Obwohl Milan Schmerzen hatte, beschleunigte er.',
            'Milan beschleunigte, obwohl er Schmerzen hatte',
            'Milan beschleunigte, obwohl er Schmerzen hatte.',
            'Obschon er Schmerzen hatte, beschleunigte Milan'
          ] },
        { frage: 'b) «Nach dem Ende des Trainings sprach Lena mit ihm.»',
          platzhalter: 'Nachdem …',
          loesungen: [
            'Nachdem das Training geendet hatte, sprach Lena mit ihm',
            'Nachdem das Training geendet hatte, sprach Lena mit ihm.',
            'Nachdem das Training zu Ende war, sprach Lena mit ihm',
            'Nachdem das Training zu Ende war, sprach Lena mit ihm.',
            'Nachdem das Training beendet war, sprach Lena mit ihm',
            'Lena sprach mit ihm, nachdem das Training geendet hatte'
          ] }
      ],
      punktregel: 'Je 2 Punkte pro korrekte Umformung. 1 Punkt Abzug für fehlendes Komma, ½ Punkt pro Rechtschreibfehler.'
    }
  ]
});

LP.pruefungen.push({
  id: 'sim-b',
  titel: 'Simulation B – «Was das Moor behält»',
  kurz: 'Sachtext, Bauplan der Prüfung 2022.',
  minuten: 40,
  aufgaben: [
    {
      kapId: 'textverstaendnis', typ: 'rfk', text: 'moor',
      frage: 'Sind die folgenden Aussagen richtig, falsch oder gibt der Text darüber keinen Hinweis? Kreuze an.',
      kurz: 'richtig / falsch / kein Hinweis',
      aussagen: [
        { text: 'Der Bauer fand die Leiche beim Torfstechen.', loesung: 'r' },
        { text: 'Die Polizei klärte den Fall nach drei Tagen auf.', loesung: 'f' },
        { text: 'Moorleichen behalten ihre Knochen besonders gut.', loesung: 'f' },
        { text: 'Der Mann aus dem Seeland war vermutlich kein Handwerker.', loesung: 'r' },
        { text: 'Im Moor von Rothenthurm wurde ebenfalls eine Leiche gefunden.', loesung: 'k' }
      ],
      punktregel: 'Je 1 Punkt pro korrekte Antwort.'
    },
    {
      kapId: 'textverstaendnis', typ: 'offen', text: 'moor', punkteJe: 1,
      frage: 'Beantworte die folgenden Fragen in ganzen Sätzen.',
      kurz: 'Fragen in ganzen Sätzen',
      teile: [
        { frage: 'Warum stellte die Polizei die Ermittlungen ein?',
          musterloesung: 'Weil der Tote rund 2300 Jahre alt war – es gab also kein Verbrechen zu untersuchen. (Z. 4/5)',
          schluessel: [['2300', 'alt', 'jahre'], ['kein verbrechen', 'nicht mehr', 'zu alt']] },
        { frage: 'Aus welchen drei Gründen bleiben Körper im Hochmoor erhalten?',
          punkte: 2,
          musterloesung: 'Hochmoore sind sauerstoffarm, sauer und kalt; dazu kommt das Sphagnan des Torfmooses, das wie ein Gerbmittel wirkt. (Z. 7–10)',
          schluessel: [['sauerstoffarm', 'sauerstoff'], ['sauer', 'säure'], ['kalt']] },
        { frage: 'Was ist der «Preis» dafür, dass Haut und Haare erhalten bleiben?',
          musterloesung: 'Dieselbe Säure löst die Knochen auf, sodass oft nur eine Hülle ohne Skelett bleibt. (Z. 11/12)',
          schluessel: [['knochen', 'skelett'], ['löst', 'aufgelöst', 'verschwindet', 'zersetzt']] },
        { frage: 'Warum verschwinden Moorfunde, wenn man Moore trockenlegt?',
          musterloesung: 'Sobald Sauerstoff in den Torf gelangt, beginnt die Zersetzung – bei allem, was darin liegt. (Z. 29/30)',
          schluessel: [['sauerstoff'], ['zersetzung', 'zersetzt', 'verfault', 'verfällt']] }
      ],
      punktregel: 'Je 1 Punkt für jede richtige Antwort (sinngemäss).'
    },
    {
      kapId: 'textverstaendnis', typ: 'zuordnung', text: 'moor', punkteJe: 1,
      frage: 'Ordne jeder Jahreszahl das passende Ereignis zu.',
      kurz: 'Jahreszahlen zuordnen',
      vorrat: [
        'Ein Bauer stösst beim Torfstechen auf eine Leiche.',
        'Seit diesem Jahr wurden rund neunzig Prozent der Schweizer Moorflächen entwässert.',
        'Moore werden in der Schweiz durch die Verfassung geschützt.'
      ],
      zeilen: [
        { text: '1952', loesung: 0 },
        { text: '1850', loesung: 1 },
        { text: '1987', loesung: 2 }
      ],
      punktregel: 'Je 1 Punkt pro richtige Antwort.'
    },
    {
      kapId: 'textverstaendnis', typ: 'multi', text: 'moor', proKreuz: 1, abzugJe: 1,
      frage: 'Kreuze <u>alle</u> Aussagen an, die der Text über die Forschung an Moorleichen macht.',
      kurz: 'Aussagen über die Forschung',
      optionen: [
        'Der Mageninhalt verrät die letzte Mahlzeit.',
        'Die Haare zeigen, wo sich ein Mensch aufgehalten hat.',
        'Alle bekannten Funde weisen Gewaltspuren auf.',
        'Aus den Händen lässt sich auf körperliche Arbeit schliessen.',
        'Die Wissenschaft interessiert vor allem die Todesursache.'
      ],
      loesung: [0, 1, 3],
      erklaerung: 'Z. 16–19. Nur rund dreissig von tausend Funden haben Gewaltspuren (Z. 23/24), und die Wissenschaft interessiert «weniger der Tod als das Leben davor» (Z. 15).',
      punktregel: '1 Punkt pro korrektes Kreuz, 1 Punkt Abzug pro falsches Kreuz. Mindestpunktzahl 0.'
    },
    {
      kapId: 'pronomen', typ: 'text', text: 'moor', punkteJe: 1,
      frage: 'Wer oder was ist mit den folgenden Pronomen gemeint?',
      kurz: 'Pronomenbezug',
      teile: [
        { frage: '<b>Sie</b> (Z. 9: «Sie bindet Stickstoff.»)',
          loesungen: ['das Sphagnan', 'Sphagnan', 'die Substanz', 'Substanz'] },
        { frage: '<b>das</b> (Z. 22: «Der Strick schien das zu beweisen.»)',
          loesungen: ['dass es Hingerichtete oder Opfer von Ritualen waren', 'dass es sich um Hingerichtete handelte', 'die Annahme', 'dass sie hingerichtet wurden'] },
        { frage: '<b>ihn</b> (Z. 38: «Das Moor hat ihn aufbewahrt.»)',
          loesungen: ['der Mann aus dem Seeland', 'den Mann', 'der Mann', 'die Moorleiche', 'der Tote'] }
      ],
      punktregel: 'Je 1 Punkt pro korrekte Lösung.'
    },
    {
      kapId: 'synonyme', typ: 'text', text: 'moor', punkteJe: 1,
      frage: 'Wortschatz / Wortbedeutung: Ersetze die unterstrichenen Wörter durch einen anderen, gleichbedeutenden Ausdruck (Synonym).',
      kurz: 'Synonyme einsetzen',
      teile: [
        { frage: '«Moorleichen sind <u>seltene</u> Funde.» (Z. 6)',
          loesungen: ['rare', 'ungewöhnliche', 'vereinzelte', 'spärliche', 'aussergewöhnliche'] },
        { frage: '«Heute sieht man das <u>zurückhaltender</u>.» (Z. 22)',
          loesungen: ['vorsichtiger', 'skeptischer', 'differenzierter', 'nüchterner', 'kritischer'] },
        { frage: '«Die Säure <u>bewahrt</u> Haut und Haare.» (Z. 11)',
          loesungen: ['erhält', 'konserviert', 'schützt', 'behält', 'bewahrt auf'] },
        { frage: '«Den Ausschlag gab eine <u>Volksabstimmung</u>.» (Z. 32)',
          loesungen: ['Abstimmung', 'Volksentscheid', 'Referendum', 'Urnengang'] },
        { frage: '«Ein Hochmoor <u>sieht fest aus</u> und trägt doch nicht.» (Z. 24/25)',
          loesungen: ['wirkt fest', 'scheint fest', 'erscheint fest', 'macht einen festen Eindruck'] }
      ],
      punktregel: 'Je 1 Punkt pro korrekte Antwort. ½ Punkt Abzug pro nicht korrekt geschriebenes Wort.'
    },
    {
      kapId: 'wortfamilien', typ: 'text', punkteJe: 1,
      frage: 'Notiere ein Nomen oder ein Verb der gleichen Wortfamilie mit möglichst ähnlicher Bedeutung.',
      anweisung: 'Bilde die Nomen nicht, indem du lediglich den Artikel vor das Verb setzt.',
      kurz: 'Wortfamilien bilden',
      teile: [
        { frage: 'graben → <b>das</b>', loesungen: ['Grab', 'das Grab', 'Grabung', 'die Grabung'] },
        { frage: 'binden → <b>der</b>', loesungen: ['Bund', 'der Bund', 'Band', 'das Band'] },
        { frage: 'der Schutz → <b>Verb</b>', loesungen: ['schützen', 'beschützen'] },
        { frage: 'der Beweis → <b>Verb</b>', loesungen: ['beweisen', 'erweisen', 'nachweisen'] },
        { frage: 'verlieren → <b>der</b>', loesungen: ['Verlust', 'der Verlust'] }
      ],
      punktregel: 'Je 1 Punkt pro korrekte Lösung. ½ Punkt Abzug für Rechtschreibfehler.'
    },
    {
      kapId: 'redewendungen', typ: 'zuordnung', punkteJe: 1,
      frage: 'Suche zu den folgenden Aussagen die entsprechende Redewendung.',
      kurz: 'Redewendungen zuordnen',
      vorrat: [
        'etwas unter den Teppich kehren',
        'den Nagel auf den Kopf treffen',
        'die Katze im Sack kaufen',
        'eine harte Nuss zu knacken haben',
        'jemandem reinen Wein einschenken',
        'im Dunkeln tappen'
      ],
      zeilen: [
        { text: 'Jemand verschweigt eine unangenehme Sache.', loesung: 0 },
        { text: 'Jemand sagt genau das Richtige.', loesung: 1 },
        { text: 'Jemand hat eine schwierige Aufgabe vor sich.', loesung: 3 },
        { text: 'Jemand sagt endlich die unangenehme Wahrheit.', loesung: 4 },
        { text: 'Man weiss über eine Sache nichts Genaues.', loesung: 5 }
      ],
      punktregel: 'Je 1 Punkt pro korrekte Lösung.'
    },
    {
      kapId: 'nomen', typ: 'text', punkteJe: 1,
      frage: 'Setze die Ausdrücke in Klammern in den richtigen Fall.',
      kurz: 'Fälle setzen',
      teile: [
        { frage: 'Jenseits ______ (das kleine Moor) beginnt das Ackerland.',
          loesungen: ['des kleinen Moores', 'des kleinen Moors'] },
        { frage: 'Trotz ______ (der starke Regen) grub er weiter.',
          loesungen: ['des starken Regens', 'dem starken Regen'] },
        { frage: 'Gegenüber ______ (die neue Erkenntnis) blieb man skeptisch.',
          loesungen: ['der neuen Erkenntnis'] }
      ],
      punktregel: 'Je 1 Punkt pro korrekte Lösung.'
    },
    {
      kapId: 'verb', typ: 'markieren', punkteJe: 1, abzugModus: 'voll',
      was: 'Infinitive',
      frage: 'Notiere die <b>Infinitive</b>, die in der folgenden Textstelle vorkommen – markiere sie.',
      kurz: 'Infinitive markieren',
      saetze: [
        { woerter: ['Können', 'wir', 'die', 'Knochen', 'noch', 'retten', '?', 'Nein', ',', 'aber', 'wir',
                    'müssen', 'die', 'Haut', 'kühlen', '.'],
          loesung: [5, 14] },
        { woerter: ['Die', 'Proben', 'lagern', 'bereits', 'im', 'Museum', '.', 'So', 'haben', 'wir',
                    'Zeit', ',', 'uns', 'um', 'die', 'Analyse', 'zu', 'kümmern', '.'],
          loesung: [17] }
      ],
      erklaerung: 'Die Infinitive sind <b>retten, kühlen, kümmern</b>. <i>Können, müssen, lagern, haben</i> sind Personalformen.',
      punktregel: 'Je 1 Punkt pro korrekte Lösung, je 1 Punkt Abzug pro falsche Lösung. Mindestpunktzahl 0.'
    },
    {
      kapId: 'zeitformen', typ: 'luecke', punkteJe: 1,
      frage: 'Setze die folgenden Sätze in die gewünschte Zeitform.',
      kurz: 'Zeitformen umsetzen',
      luecken: [
        { vor: 'a) «Der Bauer gräbt die Leiche aus.» → <b>Präteritum:</b> Der Bauer ', loesungen: ['grub'], nach: ' die Leiche ' },
        { vor: '', loesungen: ['aus'], nach: '. ' },
        { vor: 'b) «Die Moore werden entwässert.» → <b>Perfekt:</b> Die Moore ', loesungen: ['sind'], nach: ' entwässert ' },
        { vor: '', loesungen: ['worden'], nach: '. ' },
        { vor: 'c) «Die Polizei stellte die Ermittlungen ein.» → <b>Plusquamperfekt:</b> Die Polizei ', loesungen: ['hatte'], nach: ' die Ermittlungen ' },
        { vor: '', loesungen: ['eingestellt'], nach: '.' }
      ],
      punktregel: 'Je 1 Punkt pro korrekt geschriebene Verbform.'
    },
    {
      kapId: 'aktiv-passiv', typ: 'zuordnung', punkteJe: 0.5,
      frage: 'Notiere, ob die folgenden Sätze im Aktiv (A) oder Passiv (P) sind.',
      kurz: 'Aktiv oder Passiv',
      vorrat: ['A (Aktiv)', 'P (Passiv)'],
      zeilen: [
        { text: 'Die Fingerabdrücke konnten abgenommen werden.', loesung: 1 },
        { text: 'Das Skelett war fast verschwunden.', loesung: 0 },
        { text: 'Die Moore werden seit 1987 geschützt.', loesung: 1 },
        { text: 'Der Torf wurde immer trockener.', loesung: 0 }
      ],
      punktregel: 'Je ½ Punkt pro korrekte Lösung.'
    },
    {
      kapId: 'partikel', typ: 'luecke', punkteJe: 0.5,
      frage: 'Ergänze den folgenden Text mit passenden <b>Präpositionen</b>.',
      kurz: 'Präpositionen ergänzen',
      luecken: [
        { vor: 'Der Mann lag rund 2300 Jahre ', loesungen: ['im', 'in dem'], nach: ' Torf. ' },
        { vor: 'Die Säure wirkt ähnlich wie das Gerbmittel, ', loesungen: ['mit'], nach: ' dem früher Leder haltbar gemacht wurde. ' },
        { vor: 'Er stammte nicht ', loesungen: ['aus'], nach: ' der Gegend. ' },
        { vor: '', loesungen: ['Seit', 'Ab'], nach: ' 1987 stehen die Moore unter Schutz. ' },
        { vor: 'Heute liegt er ', loesungen: ['in'], nach: ' einem klimatisierten Raum. ' },
        { vor: 'Der Entscheid fiel ', loesungen: ['nach'], nach: ' einer Volksabstimmung.' }
      ],
      punktregel: 'Je ½ Punkt pro korrekte und korrekt geschriebene Lösung.'
    },
    {
      kapId: 'wortarten', typ: 'text', punkteJe: 1,
      frage: 'Bestimme die Wortarten der unterstrichenen Wörter. Verwende die vollständigen, möglichst genauen Fachbegriffe.',
      kurz: 'Wortarten bestimmen',
      vorlage: '«<u>Dieselbe</u> (1) Säure, <u>die</u> (2) Haut und Haare bewahrt, löst die Knochen auf, <u>obwohl</u> (3) man <u>lange</u> (4) etwas anderes <u>vermutet</u> (5) hatte.»',
      teile: [
        { frage: '<b>dieselbe</b> (1)', loesungen: ['Demonstrativpronomen', 'Pronomen'] },
        { frage: '<b>die</b> (2)', loesungen: ['Relativpronomen', 'Pronomen'] },
        { frage: '<b>obwohl</b> (3)', loesungen: ['Konjunktion'] },
        { frage: '<b>lange</b> (4)', loesungen: ['Adverb', 'Partikel', 'Adjektiv'] },
        { frage: '<b>vermutet</b> (5)', loesungen: ['Verb', 'Partizip', 'Partizip II'] }
      ],
      punktregel: 'Je 1 Punkt pro korrekte Lösung. ½ Punkt Abzug für Rechtschreibfehler.'
    },
    {
      kapId: 'pronomen', typ: 'markieren', punkteJe: 1, abzugModus: 'voll',
      was: 'Pronomen',
      frage: 'Unterstreiche in den folgenden Sätzen die <b>Pronomen</b>.',
      kurz: 'Pronomen unterstreichen',
      saetze: [
        { woerter: ['Niemand', 'weiss', ',', 'warum', 'er', 'im', 'Moor', 'lag', '.'],
          loesung: [0, 4] },
        { woerter: ['Alles', ',', 'was', 'darin', 'liegt', ',', 'zersetzt', 'sich', ',', 'sobald',
                    'man', 'das', 'Moor', 'trockenlegt', '.'],
          loesung: [0, 2, 7, 10] }
      ],
      erklaerung: '<i>Niemand</i>, <i>er</i>, <i>Alles</i>, <i>was</i>, <i>sich</i> und <i>man</i>. Das <i>das</i> vor «Moor» ist ein Artikel, kein Pronomen.',
      punktregel: 'Je ½ Punkt Abzug pro fehlende oder falsche Lösung. Mindestpunktzahl 0.'
    },
    {
      kapId: 'satzglieder', typ: 'trennen', art: 'satzglied', punkteJe: 1,
      frage: 'Trenne im folgenden Satz die Satzglieder mit Senkrechtstrichen.',
      kurz: 'Satzglieder trennen',
      woerter: ['Im', 'Mai', '1952', 'stach', 'ein', 'Bauer', 'im', 'Bernischen', 'Seeland', 'Torf.'],
      loesung: [2, 3, 5, 8],
      loesungText: 'Im Mai 1952 | stach | ein Bauer | im Bernischen Seeland | Torf.',
      punktregel: 'Je 1 Punkt Abzug für fehlende oder falsche Abtrennung. Mindestpunktzahl 0.'
    },
    {
      kapId: 'satzglieder', typ: 'text', punkteJe: 1,
      frage: 'Bestimme die unterstrichenen Satzglieder. Verwende die vollständigen, möglichst genauen Fachbegriffe.',
      kurz: 'Satzglieder bestimmen',
      teile: [
        { frage: 'Der Mageninhalt verrät <u>die letzte Mahlzeit</u>.',
          loesungen: ['Akkusativobjekt', 'Nominalgruppe im Akkusativ'] },
        { frage: 'Die Forschenden nahmen <u>der Leiche</u> die Fingerabdrücke ab.',
          loesungen: ['Dativobjekt', 'Nominalgruppe im Dativ'] },
        { frage: '<u>Dieselbe Säure</u> löst die Knochen auf.',
          loesungen: ['Subjekt', 'Nominalgruppe im Nominativ'] },
        { frage: 'Er liegt heute <u>in einem klimatisierten Raum</u>.',
          loesungen: ['Präpositionalgruppe', 'Präpositionalgefüge', 'Präpositionalglied', 'Präpositionalobjekt', 'Praepositionalgruppe'] }
      ],
      punktregel: 'Je 1 Punkt pro korrekte Lösung. ½ Punkt Abzug bei falscher Rechtschreibung.'
    },
    {
      kapId: 'zeichensetzung', typ: 'trennen', art: 'komma', punkteJe: 0.5, abzugJe: 0.5,
      frage: 'Setze im folgenden Text die fehlenden Kommas.',
      kurz: 'Kommas setzen',
      woerter: ['Bakterien', 'die', 'einen', 'Körper', 'sonst', 'rasch', 'zersetzen', 'können', 'im',
                'Moor', 'kaum', 'arbeiten', 'weil', 'es', 'dort', 'sauer', 'kalt', 'und',
                'sauerstoffarm', 'ist', '.'],
      loesung: [0, 6, 11, 15],
      loesungText: 'Bakterien, die einen Körper sonst rasch zersetzen, können im Moor kaum arbeiten, weil es dort sauer, kalt und sauerstoffarm ist.',
      punktregel: 'Je ½ Punkt Abzug für fehlendes oder an falscher Stelle gesetztes Komma. Mindestpunktzahl 0.'
    },
    {
      kapId: 'satzbau', typ: 'text', punkteJe: 2,
      frage: 'Satzbau: Forme die folgenden mehrteiligen Sätze in einteilige Sätze um. Verwende statt der Konjunktion jeweils eine passende Präposition.',
      kurz: 'Mehrteilig → einteilig',
      vorlage: '<b>Beispiel:</b> «Weil es heftig gewitterte, brach man die Messung ab.» → «Wegen des heftigen Gewitters brach man die Messung ab.»',
      teile: [
        { frage: 'a) «Nachdem die Moore entwässert worden waren, verschwanden die Funde.»',
          platzhalter: 'Nach …',
          loesungen: [
            'Nach der Entwässerung der Moore verschwanden die Funde',
            'Nach der Entwässerung der Moore verschwanden die Funde.',
            'Nach dem Entwässern der Moore verschwanden die Funde',
            'Nach dem Entwässern der Moore verschwanden die Funde.'
          ] },
        { frage: 'b) «Obwohl das Skelett verschwunden war, konnte man die Fingerabdrücke abnehmen.»',
          platzhalter: 'Trotz …',
          loesungen: [
            'Trotz des verschwundenen Skeletts konnte man die Fingerabdrücke abnehmen',
            'Trotz des verschwundenen Skeletts konnte man die Fingerabdrücke abnehmen.',
            'Trotz dem verschwundenen Skelett konnte man die Fingerabdrücke abnehmen',
            'Trotz des fehlenden Skeletts konnte man die Fingerabdrücke abnehmen'
          ] }
      ],
      punktregel: 'Je 2 Punkte pro korrekte Umformung. 1 Punkt Abzug für Kommasetzung, ½ Punkt pro Rechtschreibfehler.'
    }
  ]
});

LP.pruefungen.push({
  id: 'sim-c',
  titel: 'Simulation C – «Besuch um sieben»',
  kurz: 'Romanauszug, Bauplan der Prüfung 2023.',
  minuten: 40,
  aufgaben: [
    {
      kapId: 'textverstaendnis', typ: 'rfk', text: 'besuch',
      frage: 'Sind die folgenden Aussagen richtig, falsch oder gibt der Text darüber keinen Hinweis? Kreuze an.',
      kurz: 'richtig / falsch / kein Hinweis',
      aussagen: [
        { text: 'Dr. Lenz kommt pünktlich.', loesung: 'r' },
        { text: 'Jonas’ Vater lebt mit im Haus.', loesung: 'f' },
        { text: 'Dr. Lenz legt seine Mappe beim Händeschütteln ab.', loesung: 'f' },
        { text: 'Jonas’ Mutter arbeitet bei der Gemeinde.', loesung: 'k' },
        { text: 'Die beiden Unterschriften sind nicht identisch.', loesung: 'r' }
      ],
      punktregel: 'Je 1 Punkt pro korrekte Antwort.'
    },
    {
      kapId: 'textverstaendnis', typ: 'offen', text: 'besuch', punkteJe: 1,
      frage: 'Beantworte die folgenden Fragen in ganzen Sätzen.',
      kurz: 'Fragen in ganzen Sätzen',
      teile: [
        { frage: 'Woran merkt Jonas, dass seine Mutter keine echte Bitte formuliert?',
          musterloesung: 'Sie benutzt eine bestimmte Stimme – die, mit der sie eine Bitte formuliert, aber keine meint. (Z. 2/3)',
          schluessel: [['stimme'], ['keine bitte', 'nicht gemeint', 'keine meint', 'befehl']] },
        { frage: 'Welche Rolle spielt der Vater in diesem Haus heute?',
          punkte: 2,
          musterloesung: 'Über ihn wird seit zwei Jahren nur im Nebensatz gesprochen – er ist also nicht mehr da und ein unangenehmes Thema. (Z. 26/27)',
          schluessel: [['nebensatz', 'nicht gesprochen', 'kaum', 'nicht mehr da', 'weg', 'verschwunden'], ['zwei jahren', 'seit zwei']] },
        { frage: 'Warum wagt Jonas nicht, die Kühlschranktür zu schliessen?',
          musterloesung: 'Weil das Geräusch die Stille zerbrochen hätte. (Z. 30/31)',
          schluessel: [['geräusch', 'laut'], ['stille', 'still']] },
        { frage: 'Weshalb fordert Dr. Lenz Jonas auf, sich zu setzen?',
          musterloesung: 'Weil es auch um sein Haus geht – Jonas ist mitbetroffen und soll mitbekommen, worum es geht. (Z. 44)',
          schluessel: [['sein haus', 'ihn auch', 'betrifft', 'mitbetroffen', 'geht auch um']] }
      ],
      punktregel: 'Je 1 Punkt für jede richtige Antwort (sinngemäss).'
    },
    {
      kapId: 'textverstaendnis', typ: 'multi', text: 'besuch', proKreuz: 0.5, abzugJe: 0.5,
      frage: 'Kreuze <u>alle</u> Aussagen an, die zu Dr. Lenz passen.',
      kurz: 'Aussagen über Dr. Lenz',
      optionen: [
        'Er lächelt, weil er gelernt hat, dass Lächeln nützlich ist.',
        'Er ist älter, als Jonas erwartet hatte.',
        'Er hängt seinen Mantel auf, ohne zu fragen.',
        'Er hat die zweite Unterschrift bereits vorbereitet dabei.',
        'Er wirkt überrascht, als die Mutter die Unterschrift bestreitet.'
      ],
      loesung: [0, 2, 3],
      erklaerung: 'Z. 10/11, Z. 14 und Z. 35. Er ist <i>jünger</i> als erwartet (Z. 10), und er hat den Satz «genau … erwartet und sogar ein wenig darauf gehofft» (Z. 33/34) – also nicht überrascht.',
      punktregel: '½ Punkt pro korrektes Kreuz, ½ Punkt Abzug pro falsches Kreuz. Mindestpunktzahl 0.'
    },
    {
      kapId: 'textverstaendnis', typ: 'frei', text: 'besuch', punkte: 2,
      frage: 'Es gibt eine Stelle, an der klar wird, dass Dr. Lenz mit der Reaktion der Mutter gerechnet hat. Schildere diese Situation mit eigenen Worten und nenne die Zeile.',
      kurz: 'Eine Situation mit eigenen Worten schildern',
      musterloesung: 'Als die Mutter sagt, das sei nicht die Unterschrift ihres Mannes, nickt Dr. Lenz langsam – so, als hätte er genau diesen Satz erwartet und sogar darauf gehofft. Dann sagt er nur: «Das ist interessant.» (Z. 33/34)',
      schluessel: [['erwartet', 'gehofft', 'gerechnet'], ['nickt', 'nickte', 'langsam'], ['interessant']],
      punktregel: '1 Punkt für die sinngemässe Beschreibung, 1 Punkt für die Zeilenangabe.'
    },
    {
      kapId: 'synonyme', typ: 'multi', text: 'besuch', proKreuz: 0.5, abzugJe: 0.5,
      frage: 'Z. 10/11: «Er lächelte wie jemand, der gelernt hat, dass Lächeln <u>nützlich</u> ist.» Kreuze alle Wörter an, die hier als Ersatz für «nützlich» passen würden.',
      kurz: 'Ersatzwörter für «nützlich»',
      optionen: ['praktisch', 'vorteilhaft', 'freundlich', 'hilfreich', 'herzlich', 'zweckmässig'],
      loesung: [0, 1, 3, 5],
      erklaerung: '<i>freundlich</i> und <i>herzlich</i> beschreiben eine Haltung gegenüber anderen – gemeint ist aber der Nutzen für ihn selbst.',
      punktregel: '½ Punkt für jedes korrekt gesetzte Kreuz, ½ Punkt Abzug pro falsches Kreuz. Mindestpunktzahl 0.'
    },
    {
      kapId: 'synonyme', typ: 'text', text: 'besuch', punkteJe: 1,
      frage: 'Ersetze die unterstrichenen Wörter durch einen anderen, gleichbedeutenden Ausdruck (Synonym).',
      kurz: 'Synonyme einsetzen',
      teile: [
        { frage: '«Jonas <u>schob</u> die Schulsachen <u>zusammen</u>.» (Z. 3)',
          loesungen: ['räumte zusammen', 'sammelte ein', 'raffte zusammen', 'packte zusammen', 'schichtete'] },
        { frage: '«Jonas hörte, wie seine Mutter die Luft <u>anhielt</u>.» (Z. 26)',
          loesungen: ['stockte', 'innehielt', 'erschrak', 'zurückhielt', 'aufhörte zu atmen'] },
        { frage: '«Er zog ein zweites Blatt <u>hervor</u>.» (Z. 35)',
          loesungen: ['heraus', 'aus der Mappe', 'zum Vorschein', 'ans Licht'] },
        { frage: '«Jonas hatte das <u>unangenehme</u> Gefühl …» (Z. 42)',
          loesungen: ['ungute', 'mulmige', 'beklemmende', 'unbehagliche', 'ungemütliche', 'schlechte'] }
      ],
      punktregel: 'Je 1 Punkt pro korrekte Antwort. ½ Punkt Abzug pro nicht korrekt geschriebenes Wort.'
    },
    {
      kapId: 'wortfamilien', typ: 'tabelle', punkteJe: 1,
      frage: 'Notiere ein Nomen der gleichen Wortfamilie mit möglichst ähnlicher Bedeutung. Verwende den vorgegebenen bestimmten Artikel.',
      kurz: 'Verb → Nomen',
      kopf: ['Verb im Präteritum', 'Nomen'],
      zeilen: [
        { fest: ['zog'], felder: [{ loesungen: ['der Zug', 'Zug'] }] },
        { fest: ['schob'], felder: [{ loesungen: ['der Schub', 'Schub'] }] },
        { fest: ['hielt'], felder: [{ loesungen: ['der Halt', 'Halt', 'die Haltung', 'Haltung'] }] },
        { fest: ['sass'], felder: [{ loesungen: ['der Sitz', 'Sitz'] }] },
        { fest: ['sprach'], felder: [{ loesungen: ['die Sprache', 'Sprache', 'der Spruch', 'Spruch'] }] }
      ],
      punktregel: 'Je 1 Punkt pro korrekte Lösung. ½ Punkt Abzug für Rechtschreibfehler.'
    },
    {
      kapId: 'redewendungen', typ: 'text', punkteJe: 0.5,
      frage: 'Ergänze die folgenden Redewendungen. In allen kommt ein <b>Nahrungsmittel</b> vor.',
      kurz: 'Redewendungen ergänzen',
      teile: [
        { frage: 'ein selbst verursachtes Problem lösen müssen: die ______ auslöffeln müssen', loesungen: ['Suppe'] },
        { frage: 'sich ungefragt einmischen: seinen ______ dazugeben', loesungen: ['Senf'] },
        { frage: 'eine schwierige Aufgabe haben: eine harte ______ zu knacken haben', loesungen: ['Nuss'] },
        { frage: 'nur das Beste nehmen: sich die ______ aus dem Kuchen picken', loesungen: ['Rosinen'] },
        { frage: 'etwas Offensichtliches übersehen: ______ auf den Augen haben', loesungen: ['Tomaten'] },
        { frage: 'die unangenehme Wahrheit sagen: jemandem reinen ______ einschenken', loesungen: ['Wein'] }
      ],
      punktregel: 'Je ½ Punkt pro richtige Lösung.'
    },
    {
      kapId: 'verb', typ: 'markieren', punkteJe: 1, abzugModus: 'voll',
      was: 'Hilfsverben',
      frage: 'Unterstreiche in den folgenden Sätzen die <b>Hilfsverben</b>, sofern vorhanden.',
      kurz: 'Hilfsverben unterstreichen',
      saetze: [
        { woerter: ['Jonas', 'hat', 'den', 'Tisch', 'abgeräumt', '.'], loesung: [1] },
        { woerter: ['Seine', 'Mutter', 'wird', 'langsam', 'nervös', '.'], loesung: [] },
        { woerter: ['Der', 'Anwalt', 'hat', 'eine', 'dünne', 'Mappe', '.'], loesung: [] },
        { woerter: ['Der', 'Vertrag', 'ist', 'nie', 'unterschrieben', 'worden', '.'], loesung: [2] },
        { woerter: ['Dr.', 'Lenz', 'wird', 'gleich', 'gehen', '.'], loesung: [2] }
      ],
      erklaerung: 'Hilfsverben sind <b>hat</b> (Perfekt), <b>ist</b> (Perfekt Passiv) und <b>wird</b> (Futur). <i>wird nervös</i> und <i>hat eine Mappe</i> sind Vollverben.',
      punktregel: 'Je 1 Punkt pro korrekte Lösung, je 1 Punkt Abzug pro falsche Lösung. Mindestpunktzahl 0.'
    },
    {
      kapId: 'zeitformen', typ: 'luecke', punkteJe: 1,
      frage: 'Setze die folgenden Sätze in die gewünschte Zeitform.',
      kurz: 'Zeitformen umsetzen',
      luecken: [
        { vor: 'a) «Jonas öffnet die Tür.» → <b>Perfekt:</b> Jonas ', loesungen: ['hat'], nach: ' die Tür ' },
        { vor: '', loesungen: ['geöffnet', 'geoeffnet'], nach: '. ' },
        { vor: 'b) «Der Kaffee wird kalt.» → <b>Präteritum:</b> Der Kaffee ', loesungen: ['wurde'], nach: ' kalt. ' },
        { vor: 'c) «Sie halten die Luft an.» → <b>Plusquamperfekt:</b> Sie ', loesungen: ['hatten'], nach: ' die Luft ' },
        { vor: '', loesungen: ['angehalten'], nach: '. ' },
        { vor: 'd) «Das Blatt wurde gedreht.» → <b>Futur:</b> Das Blatt ', loesungen: ['wird'], nach: ' gedreht ' },
        { vor: '', loesungen: ['werden'], nach: '.' }
      ],
      punktregel: 'Je 1 Punkt pro korrekt geschriebene Verbform.'
    },
    {
      kapId: 'aktiv-passiv', typ: 'zuordnung', punkteJe: 0.5,
      frage: 'Notiere, ob die folgenden Sätze im Aktiv (A) oder Passiv (P) sind.',
      kurz: 'Aktiv oder Passiv',
      vorrat: ['A (Aktiv)', 'P (Passiv)'],
      zeilen: [
        { text: 'Der Vertrag wurde 2019 unterschrieben.', loesung: 1 },
        { text: 'Jonas wird immer unruhiger.', loesung: 0 },
        { text: 'Niemand schickte ihn weg.', loesung: 0 },
        { text: 'Das zweite Blatt ist danebengelegt worden.', loesung: 1 }
      ],
      punktregel: 'Je ½ Punkt pro korrekte Lösung.'
    },
    {
      kapId: 'pronomen', typ: 'luecke', punkteJe: 0.5,
      frage: 'Notiere die passenden Pronomen in die Lücken.',
      kurz: 'Pronomen einsetzen',
      luecken: [
        { vor: 'a) Der Anwalt, ', loesungen: ['dessen'], nach: ' Mantel an den Schultern nass war, lächelte. ' },
        { vor: 'b) Die Mutter, ', loesungen: ['deren'], nach: ' Stimme plötzlich leise wurde, schwieg. ' },
        { vor: 'c) Er legte ein zweites Blatt daneben, ', loesungen: ['was'], nach: ' Jonas neugierig machte. ' },
        { vor: 'd) Kennst du den Mann, ', loesungen: ['dem', 'welchem'], nach: ' die Gemeinde vertraut?' }
      ],
      punktregel: 'Je ½ Punkt pro korrekte und korrekt geschriebene Lösung.'
    },
    {
      kapId: 'partikel', typ: 'markieren', punkteJe: 1, abzugModus: 'voll',
      was: 'Präpositionen',
      frage: 'Unterstreiche in den folgenden Sätzen die <b>Präpositionen</b>.',
      kurz: 'Präpositionen unterstreichen',
      saetze: [
        { woerter: ['Vor', 'der', 'Tür', 'stand', 'ein', 'Mann', 'in', 'einem', 'grauen', 'Mantel', '.'],
          loesung: [0, 6] },
        { woerter: ['Er', 'hängte', 'ihn', 'an', 'die', 'Garderobe', ',', 'ohne', 'zu', 'fragen', '.'],
          loesung: [3] },
        { woerter: ['In', 'der', 'linken', 'Hand', 'hielt', 'er', 'eine', 'Mappe', '.'],
          loesung: [0] },
        { woerter: ['Jonas', 'machte', 'zwei', 'Schritte', 'in', 'den', 'Raum', 'und', 'setzte', 'sich',
                    'hin', '.'],
          loesung: [4] }
      ],
      erklaerung: 'Fünf Präpositionen: <b>Vor, in, an, In, in</b>. <i>ohne … zu</i> leitet hier eine Infinitivgruppe ein, <i>hin</i> gehört zu <i>hinsetzen</i>.',
      punktregel: 'Je 1 Punkt Abzug pro fehlende oder falsche Lösung. Mindestpunktzahl 0.'
    },
    {
      kapId: 'nomen', typ: 'markieren', punkteJe: 1, abzugModus: 'voll',
      was: 'nominalisierte Wörter',
      frage: 'Markiere die Wörter, die hier <b>nominalisiert</b> sind und darum grossgeschrieben werden müssen.',
      kurz: 'Nominalisierungen finden',
      saetze: [
        { woerter: ['Beim', 'warten', 'fiel', 'ihm', 'nichts', 'besseres', 'ein', ',', 'als', 'das',
                    'alte', 'Spiel', 'zu', 'spielen', '.'],
          loesung: [1, 5] }
      ],
      erklaerung: '<i>Warten</i> steht nach «beim», <i>Besseres</i> nach «nichts». <i>alte</i> steht vor dem Nomen <i>Spiel</i> und bleibt klein.',
      punktregel: 'Je 1 Punkt Abzug pro fehlende oder falsche Lösung. Mindestpunktzahl 0.'
    },
    {
      kapId: 'wortarten', typ: 'text', punkteJe: 1,
      frage: 'Bestimme die Wortarten der unterstrichenen Wörter. Verwende die vollständigen, möglichst genauen Fachbegriffe.',
      kurz: 'Wortarten bestimmen',
      vorlage: '«<u>Während</u> (1) seine Mutter sprach, hielt Dr. Lenz die Mappe fest, <u>die</u> (2) er <u>auch</u> (3) beim Händedruck nicht ablegte. <u>Für</u> (4) <u>solche</u> (5) Gespräche war er geübt.»',
      teile: [
        { frage: '<b>während</b> (1)', loesungen: ['Konjunktion'] },
        { frage: '<b>die</b> (2)', loesungen: ['Relativpronomen', 'Pronomen'] },
        { frage: '<b>auch</b> (3)', loesungen: ['Partikel', 'Adverb'] },
        { frage: '<b>für</b> (4)', loesungen: ['Präposition', 'Praeposition'] },
        { frage: '<b>solche</b> (5)', loesungen: ['Demonstrativpronomen', 'Pronomen'] }
      ],
      punktregel: 'Je 1 Punkt pro korrekte Lösung. ½ Punkt Abzug für Rechtschreibfehler.'
    },
    {
      kapId: 'verb', typ: 'markieren', punkteJe: 1, abzugModus: 'voll',
      was: 'Personalformen',
      frage: 'Notiere die <b>Personalformen</b>, die in der folgenden Textstelle vorkommen – markiere sie.',
      kurz: 'Personalformen markieren',
      saetze: [
        { woerter: ['Heute', 'wollen', 'wir', 'die', 'Unterlagen', 'durchgehen', '.'], loesung: [1] },
        { woerter: ['Ob', 'Sie', 'alles', 'verstehen', 'können', '?'], loesung: [4] },
        { woerter: ['Vorher', 'müssen', 'wir', 'die', 'Unterschrift', 'vergleichen', '.'], loesung: [1] },
        { woerter: ['Danach', 'dürfen', 'Sie', 'mir', 'jede', 'Frage', 'stellen', '.'], loesung: [1] }
      ],
      punktregel: 'Je 1 Punkt Abzug pro fehlende oder falsche Lösung. Mindestpunktzahl 0.'
    },
    {
      kapId: 'verb', typ: 'tabelle', punkteJe: 0.5,
      frage: 'Konjugation der Verben: Setze die folgenden Verben in die gewünschte Form.',
      kurz: 'Konjugationstabelle',
      kopf: ['Infinitiv', 'Präsens, 2. Person Singular', 'Präteritum, 3. Person Singular'],
      zeilen: [
        { fest: ['halten'], felder: [{ loesungen: ['hältst', 'haeltst'] }, { loesungen: ['hielt'] }] },
        { fest: ['sprechen'], felder: [{ loesungen: ['sprichst'] }, { loesungen: ['sprach'] }] }
      ],
      punktregel: 'Je ½ Punkt pro korrekte und korrekt geschriebene Lösung.'
    },
    {
      kapId: 'satzglieder', typ: 'trennen', art: 'satzglied', punkteJe: 1,
      frage: 'Trenne im folgenden Satz die Satzglieder mit Senkrechtstrichen.',
      kurz: 'Satzglieder trennen',
      woerter: ['Kurz', 'nach', 'sieben', 'legte', 'der', 'freundlich', 'lächelnde', 'Anwalt', 'ein',
                'einzelnes', 'Blatt', 'auf', 'den', 'Tisch.'],
      loesung: [2, 3, 7, 10],
      loesungText: 'Kurz nach sieben | legte | der freundlich lächelnde Anwalt | ein einzelnes Blatt | auf den Tisch.',
      punktregel: 'Je 1 Punkt Abzug für fehlende oder falsche Abtrennung. Mindestpunktzahl 0.'
    },
    {
      kapId: 'satzglieder', typ: 'text', punkteJe: 1,
      frage: 'Bestimme die unterstrichenen Satzglieder. Verwende die vollständigen, möglichst genauen Fachbegriffe.',
      kurz: 'Satzglieder bestimmen',
      teile: [
        { frage: 'Er gab <u>der Mutter</u> die Hand.',
          loesungen: ['Dativobjekt', 'Nominalgruppe im Dativ'] },
        { frage: 'Er legte <u>ein einzelnes Blatt</u> auf den Tisch.',
          loesungen: ['Akkusativobjekt', 'Nominalgruppe im Akkusativ'] },
        { frage: '<u>Der Kühlschrank</u> summte.',
          loesungen: ['Subjekt', 'Nominalgruppe im Nominativ'] },
        { frage: 'Jonas stand <u>in der Küchentür</u>.',
          loesungen: ['Präpositionalgruppe', 'Präpositionalgefüge', 'Präpositionalglied', 'Präpositionalobjekt', 'Praepositionalgruppe'] },
        { frage: '<u>Das hier</u> ist der Vertrag.',
          loesungen: ['Subjekt', 'Nominalgruppe im Nominativ'] }
      ],
      punktregel: 'Je 1 Punkt pro korrekte Lösung. ½ Punkt Abzug bei falscher Rechtschreibung.'
    },
    {
      kapId: 'zeichensetzung', typ: 'trennen', art: 'komma', punkteJe: 0.5, abzugJe: 0.5,
      frage: 'Setze im folgenden Text die fehlenden Kommas.',
      kurz: 'Kommas setzen',
      woerter: ['Als', 'Jonas', 'öffnete', 'stand', 'vor', 'der', 'Tür', 'ein', 'Mann', 'der', 'jünger',
                'war', 'als', 'erwartet', '.', 'Eigentlich', 'ein', 'freundlicher', 'Mensch', 'dieser',
                'Anwalt', 'dachte', 'er', '.'],
      loesung: [2, 8, 13, 18, 20],
      loesungText: 'Als Jonas öffnete, stand vor der Tür ein Mann, der jünger war als erwartet. Eigentlich ein freundlicher Mensch, dieser Anwalt, dachte er.',
      tipp: 'Vor «als» im Vergleich steht kein Komma – «jünger war als erwartet» bleibt ohne.',
      punktregel: 'Je ½ Punkt Abzug für fehlendes oder an falscher Stelle gesetztes Komma. Mindestpunktzahl 0.'
    },
    {
      kapId: 'satzbau', typ: 'text', punkteJe: 2,
      frage: 'Satzbau: Forme die folgenden Sätze um. Ersetze die Konjunktion durch eine passende Präposition.',
      kurz: 'Mehrteilig → einteilig',
      vorlage: '<b>Beispiel:</b> «Als die Musik erklang, klatschte das Publikum.» → «Beim Erklingen der Musik klatschte das Publikum.»',
      teile: [
        { frage: 'a) «Bevor der Anwalt eintraf, räumte Jonas den Tisch ab.»',
          platzhalter: 'Vor …',
          loesungen: [
            'Vor dem Eintreffen des Anwalts räumte Jonas den Tisch ab',
            'Vor dem Eintreffen des Anwalts räumte Jonas den Tisch ab.',
            'Vor der Ankunft des Anwalts räumte Jonas den Tisch ab',
            'Vor der Ankunft des Anwalts räumte Jonas den Tisch ab.'
          ] },
        { frage: 'b) «Weil die Unterschrift nicht stimmte, wurde der Anwalt vorsichtig.»',
          platzhalter: 'Wegen …',
          loesungen: [
            'Wegen der falschen Unterschrift wurde der Anwalt vorsichtig',
            'Wegen der falschen Unterschrift wurde der Anwalt vorsichtig.',
            'Wegen der nicht stimmenden Unterschrift wurde der Anwalt vorsichtig',
            'Aufgrund der falschen Unterschrift wurde der Anwalt vorsichtig',
            'Aufgrund der falschen Unterschrift wurde der Anwalt vorsichtig.'
          ] }
      ],
      punktregel: 'Je 2 Punkte pro korrekte Umformung. 1 Punkt Abzug für Kommasetzung, ½ Punkt pro Rechtschreibfehler.'
    }
  ]
});
