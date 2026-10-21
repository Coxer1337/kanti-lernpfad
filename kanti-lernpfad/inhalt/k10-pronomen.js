LP.kapitel.push({
  id: 'pronomen',
  nr: 10,
  titel: 'Pronomen',
  bild: '👉',
  gewicht: 6,
  kurz: 'Stellvertreter für Nomen – finden, einsetzen und auflösen.',
  pruefungsgewicht: '≈ 4–6 P.',
  inPruefung: '2023: Pronomen unterstreichen (4 P.) und Pronomen in Lücken setzen (2 P.). 2024: Pronomen einsetzen (3 P.). Dazu in jeder Prüfung: «Wer oder was ist mit diesem Pronomen gemeint?»',
  theorieKurz: 'Die Pronomenarten, Relativpronomen im Genitiv und der Bezug im Text.',

  theorie: [
    { titel: 'Was Pronomen tun',
      html: [
        '<p>Ein <b class="wort">Pronomen</b> steht anstelle eines Nomens oder begleitet es. Ohne Pronomen ',
        'müsste man jedes Nomen wiederholen:</p>',
        '<div class="beispiel"><i>Nora stellte Noras Tasche ab, weil Nora müde war.</i><br>',
        '→ <i>Nora stellte <b>ihre</b> Tasche ab, weil <b>sie</b> müde war.</i></div>',
        '<div class="merksatz">Der Wegweiser verlangt für die 2. Sek nur die <b>Anwendung</b>, keine ',
        'Bestimmung der Pronomenarten. In der Prüfung heisst das: Pronomen <u>finden</u>, <u>einsetzen</u> und ',
        '<u>auflösen</u> – nicht benennen. Die Namen stehen trotzdem hier, weil sie beim Einsetzen helfen.</div>'
      ].join('') },

    { titel: 'Die Arten im Überblick',
      html: [
        '<table>',
        '<tr><th>Art</th><th>Beispiele</th><th>Wozu</th></tr>',
        '<tr><td>Personalpronomen</td><td>ich, du, er, sie, es, wir, ihr, sie / ihm, ihn, ihnen</td>',
        '<td>ersetzt eine Person oder Sache</td></tr>',
        '<tr><td>Possessivpronomen</td><td>mein, dein, sein, ihr, unser, euer</td><td>zeigt Besitz an</td></tr>',
        '<tr><td>Reflexivpronomen</td><td>mich, dir, sich</td><td>weist auf das Subjekt zurück</td></tr>',
        '<tr><td>Demonstrativpronomen</td><td>dieser, jener, derselbe, solche, das</td><td>zeigt hin</td></tr>',
        '<tr><td>Relativpronomen</td><td>der, die, das, welcher, was, dessen, deren</td>',
        '<td>leitet einen Relativsatz ein</td></tr>',
        '<tr><td>Indefinitpronomen</td><td>man, alle, viele, einige, nichts, jemand, andere</td>',
        '<td>unbestimmt</td></tr>',
        '<tr><td>Interrogativpronomen</td><td>wer, was, welcher</td><td>fragt</td></tr>',
        '</table>',
        '<div class="merksatz">Die beiden am häufigsten vergessenen Pronomen sind <b>man</b> und <b>sich</b>. ',
        'Wer sie beim Unterstreichen übersieht, verliert sicher einen Punkt.</div>'
      ].join('') },

    { titel: 'Relativpronomen: die Lücken-Aufgabe',
      html: [
        '<p>In der Prüfung heisst es: «Notiere die passenden Pronomen in die Lücken.» Fast immer sind ',
        'Relativpronomen gemeint – und fast immer geht es um <b>dessen</b>, <b>deren</b> und <b>was</b>.</p>',
        '<table>',
        '<tr><th>Form</th><th>wann</th><th>Beispiel</th></tr>',
        '<tr><td><b>dessen</b></td><td>Bezugswort ist männlich oder sächlich (Singular)</td>',
        '<td>Der Clown, <b>dessen</b> Schuhe zu gross sind, …</td></tr>',
        '<tr><td><b>deren</b></td><td>Bezugswort ist weiblich oder Plural</td>',
        '<td>Lena, <b>deren</b> Freunde picknickten, …</td></tr>',
        '<tr><td><b>was</b></td><td>bezieht sich auf einen <u>ganzen Satz</u> oder auf <i>das, alles, ',
        'nichts, etwas</i></td><td>Er küsste sie nochmals, <b>was</b> Lena peinlich fand.</td></tr>',
        '<tr><td><b>dem / der / denen</b></td><td>das Verb im Relativsatz verlangt den Dativ</td>',
        '<td>Kennst du das Kind, <b>dem</b> der Clown zugewinkt hat?</td></tr>',
        '</table>',
        '<div class="probe"><b>Zwei Fragen genügen:</b><br>',
        '1. <u>Worauf bezieht sich der Relativsatz?</u> Ein Nomen → der/die/das/dessen/deren. Ein ganzer Satz ',
        '→ <b>was</b>.<br>',
        '2. <u>Welchen Fall verlangt das Verb im Relativsatz?</u> «zuwinken» verlangt den Dativ → <i>dem</i>.</div>'
      ].join('') },

    { titel: 'Pronomen im Text auflösen',
      html: [
        '<p>«Wer oder was ist mit <i>sie</i> (Z. 18) gemeint?» ist eine sichere Punktequelle, wenn man ',
        'systematisch vorgeht:</p>',
        '<ol><li>Die ganze Zeile lesen, nicht nur das Pronomen.</li>',
        '<li>Ein bis zwei Sätze zurückgehen.</li>',
        '<li>Die Ersatzprobe machen: Pronomen durch das gefundene Nomen ersetzen.</li>',
        '<li>Mit einem <b>Nomen oder Namen</b> antworten, nie mit einem anderen Pronomen.</li></ol>',
        '<div class="merksatz"><b>Numerus und Genus prüfen:</b> <i>sie</i> kann Singular weiblich oder Plural ',
        'sein. Steht im Satz ein Verb im Plural («sie kamen»), muss auch die Lösung im Plural stehen.</div>'
      ].join('') }
  ],

  level: [
    {
      titel: 'Pronomen finden', niveau: 'leicht', farbe: 'gruen', bild: '🌱', xpFaktor: 1,
      kurz: 'Pronomen erkennen und einfache Bezüge auflösen.',
      aufgaben: [
        {
          typ: 'markieren', punkteJe: 1, abzugModus: 'voll',
          was: 'Pronomen',
          frage: 'Unterstreiche in den folgenden Sätzen die <b>Pronomen</b>.',
          kurz: 'Pronomen unterstreichen (leicht)',
          saetze: [
            { woerter: ['Sie', 'stellte', 'ihre', 'Tasche', 'ab', 'und', 'sah', 'auf', 'das', 'Display', '.'],
              loesung: [0, 2] },
            { woerter: ['Er', 'nickte', 'langsam', 'und', 'fragte', 'sie', 'nach', 'dem', 'Training', '.'],
              loesung: [0, 5] }
          ],
          tipp: '<i>ihre</i> ist ein Possessivpronomen und zählt mit.',
          punktregel: 'Je ½ Punkt Abzug pro fehlende oder falsche Lösung. Mindestpunktzahl 0.'
        },
        {
          typ: 'luecke', punkteJe: 1,
          frage: 'Setze das passende <b>Personalpronomen</b> ein.',
          kurz: 'Personalpronomen einsetzen',
          luecken: [
            { vor: 'Nora rannte, aber ', loesungen: ['sie'], nach: ' kam zu spät. ' },
            { vor: 'Der Bus fuhr weiter; ', loesungen: ['er'], nach: ' hielt nicht an. ' },
            { vor: 'Herr Kuster schaute geradeaus. Nora dankte ', loesungen: ['ihm'], nach: '. ' },
            { vor: 'Die Freunde warteten oben. Sie hatten ', loesungen: ['ihr'], nach: ' Tipps gegeben.' }
          ],
          punktregel: 'Je ½ Punkt pro korrekte und korrekt geschriebene Lösung.'
        },
        {
          typ: 'text', text: 'nachtbus', punkteJe: 1,
          frage: 'Wer oder was ist mit den folgenden Pronomen gemeint?',
          anweisung: 'Antworte mit einem Nomen oder einem Namen.',
          kurz: 'Pronomenbezug im Text (leicht)',
          teile: [
            { frage: '<b>Sie</b> (Z. 2)', loesungen: ['Nora'] },
            { frage: '<b>sie</b> (Z. 5: «als sie sich verabschiedeten»)', loesungen: ['Nora und Samira', 'Samira und Nora', 'die beiden', 'Nora und ihre Freundin'] },
            { frage: '<b>ihm</b> (Z. 51: «Dann würde ich es ihm sagen»)', loesungen: ['Noras Vater', 'der Vater', 'Vater', 'ihrem Vater'] }
          ],
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        },
        {
          typ: 'single',
          frage: 'Welches Wort in diesem Satz ist <u>kein</u> Pronomen?<br>«Niemand sagte etwas, als sie die Tür öffnete.»',
          kurz: 'Welches Wort ist kein Pronomen?',
          optionen: ['Niemand', 'etwas', 'als', 'sie'],
          loesung: 2,
          erklaerung: '<i>als</i> ist eine Konjunktion, die den Nebensatz einleitet. <i>Niemand</i> und <i>etwas</i> sind Indefinitpronomen, <i>sie</i> ist ein Personalpronomen.'
        },
        {
          typ: 'luecke', punkteJe: 1,
          frage: 'Setze das passende <b>Possessivpronomen</b> ein.',
          kurz: 'Possessivpronomen einsetzen',
          luecken: [
            { vor: 'Nora verlor ', loesungen: ['ihren'], nach: ' Flaschendeckel. ' },
            { vor: 'Milan zog ', loesungen: ['sein'], nach: ' Hosenbein hoch. ' },
            { vor: 'Wir holen ', loesungen: ['unsere'], nach: ' Taschen. ' },
            { vor: 'Habt ihr ', loesungen: ['eure'], nach: ' Schuhe dabei?' }
          ],
          punktregel: 'Je ½ Punkt pro korrekte Lösung.'
        }
      ]
    },

    {
      titel: 'Relativpronomen', niveau: 'mittel', farbe: '', bild: '🔎', xpFaktor: 1.2,
      kurz: 'dessen, deren, was – die Lückenaufgabe der Prüfung.',
      aufgaben: [
        {
          typ: 'luecke', punkteJe: 1,
          frage: 'Notiere die passenden <b>Relativpronomen</b> in die Lücken.',
          kurz: 'dessen, deren, was einsetzen',
          luecken: [
            { vor: 'Der Clown, ', loesungen: ['dessen'], nach: ' Schuhe viel zu gross sind, fiel auf den Hintern. ' },
            { vor: 'Die Direktorin, ', loesungen: ['deren'], nach: ' Kleid bunt schillerte, begrüsste das Publikum. ' },
            { vor: 'Der Clown fiel hin, ', loesungen: ['was'], nach: ' alle Kinder zum Lachen brachte. ' },
            { vor: 'Kennst du das Kind, ', loesungen: ['dem', 'welchem'], nach: ' der Clown zugewinkt hat?' }
          ],
          tipp: 'Bei der dritten Lücke bezieht sich das Pronomen auf den ganzen Satz davor, nicht auf ein einzelnes Nomen.',
          punktregel: 'Je ½ Punkt pro korrekte und korrekt geschriebene Lösung.'
        },
        {
          typ: 'zuordnung', punkteJe: 1,
          frage: 'Worauf bezieht sich das Relativpronomen?',
          kurz: 'Bezug des Relativpronomens bestimmen',
          vorrat: ['auf ein männliches Nomen', 'auf ein weibliches Nomen', 'auf ein Nomen im Plural', 'auf den ganzen vorangehenden Satz'],
          zeilen: [
            { text: 'Der Trainer, <u>dessen</u> Narbe im Verein berühmt war, schwieg.', loesung: 0 },
            { text: 'Lena, <u>deren</u> Schuh dreimal gebunden war, stand auf.', loesung: 1 },
            { text: 'Milan log, <u>was</u> Vogt sofort bemerkte.', loesung: 3 },
            { text: 'Die Läufer, <u>deren</u> Zeiten schlechter wurden, mussten pausieren.', loesung: 2 }
          ],
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        },
        {
          typ: 'markieren', punkteJe: 1, abzugModus: 'voll',
          was: 'Pronomen',
          frage: 'Unterstreiche alle <b>Pronomen</b> – auch die unauffälligen.',
          kurz: 'Alle Pronomen finden (mittel)',
          saetze: [
            { woerter: ['Nichts', 'erinnert', 'intensiver', 'an', 'Zirkus', 'als', 'dieser', 'Geruch', '.'],
              loesung: [0, 6] },
            { woerter: ['Alles', 'ist', 'aufregend', '.', 'Da', 'fühlt', 'man', 'sich', 'wie', 'in',
                        'einer', 'anderen', 'Welt', '.'],
              loesung: [0, 6, 7] },
            { woerter: ['Warum', 'das', 'so', 'ist', '?', 'Nun', ',', 'denk', 'mal', 'gut', 'nach', '!'],
              loesung: [1] }
          ],
          erklaerung: '<i>man</i> und <i>sich</i> werden am häufigsten übersehen. <i>das</i> in «Warum das so ist» ist ein Demonstrativpronomen.',
          punktregel: 'Je ½ Punkt Abzug pro fehlende oder falsche Lösung. Mindestpunktzahl 0.'
        },
        {
          typ: 'luecke', punkteJe: 1,
          frage: 'Setze das Relativpronomen im richtigen <b>Fall</b> ein.',
          anweisung: 'Prüfe, welchen Fall das Verb im Relativsatz verlangt.',
          kurz: 'Relativpronomen im richtigen Fall',
          luecken: [
            { vor: 'Das ist der Trainer, ', loesungen: ['dem'], nach: ' ich vertraue. (vertrauen + Dativ) ' },
            { vor: 'Das ist der Trainer, ', loesungen: ['den'], nach: ' ich kenne. (kennen + Akkusativ) ' },
            { vor: 'Das ist der Trainer, ', loesungen: ['der'], nach: ' uns geholfen hat. (Subjekt) ' },
            { vor: 'Das ist der Trainer, ', loesungen: ['dessen'], nach: ' Methode umstritten ist. (Besitz)' }
          ],
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        },
        {
          typ: 'single',
          frage: 'Welcher Satz ist <u>falsch</u>?',
          kurz: 'Welcher Relativsatz ist falsch?',
          optionen: [
            'Die Frau, deren Mantel nass war, lächelte.',
            'Der Mann, dessen Mantel nass war, lächelte.',
            'Die Frau, dessen Mantel nass war, lächelte.',
            'Die Leute, deren Mäntel nass waren, lächelten.'
          ],
          loesung: 2,
          erklaerung: 'Bei einem weiblichen Bezugswort heisst es <b>deren</b>, nicht «dessen». <i>dessen</i> steht nur bei männlichen und sächlichen Nomen im Singular.'
        }
      ]
    },

    {
      titel: 'Prüfungsniveau', niveau: 'Prüfung', farbe: 'gold', bild: '🎯', xpFaktor: 1.5,
      kurz: 'Die Originalaufgaben aus 2023 und 2024.',
      aufgaben: [
        {
          typ: 'markieren', punkteJe: 1, abzugModus: 'voll',
          was: 'Pronomen',
          frage: 'Unterstreiche in den folgenden Sätzen die <b>Pronomen</b>.',
          kurz: 'Pronomen unterstreichen (Prüfung 2023)',
          saetze: [
            { woerter: ['Nichts', 'erinnert', 'intensiver', 'an', 'Zirkusatmosphäre', 'als', 'dieser',
                        'unverwechselbare', 'Geruch', 'nach', 'Pferd', ',', 'Sägemehl', 'und', 'Gras', '.'],
              loesung: [0, 6] },
            { woerter: ['Alles', 'ist', 'so', 'unglaublich', 'aufregend', '.', 'Da', 'fühlt', 'man', 'sich',
                        'wie', 'in', 'einer', 'anderen', 'Welt', '.'],
              loesung: [0, 8, 9, 13] },
            { woerter: ['Warum', 'das', 'so', 'ist', '?', 'Nun', ',', 'denk', 'mal', 'gut', 'nach', '!'],
              loesung: [1] }
          ],
          erklaerung: 'Die Lösung der Prüfung lautete: <b>Nichts, dieser, Alles, man, sich, eine, andere, das</b>. <i>eine</i> und <i>andere</i> gelten dort als Pronomen; <i>eine</i> kann man ebenso gut als unbestimmten Artikel zählen.',
          punktregel: 'Je ½ Punkt Abzug pro fehlende oder falsche Lösung. Mindestpunktzahl 0.'
        },
        {
          typ: 'luecke', punkteJe: 0.5,
          frage: 'Notiere die passenden Pronomen in die Lücken.',
          kurz: 'Pronomen einsetzen (Prüfung 2023)',
          luecken: [
            { vor: 'a) Der Clown, ', loesungen: ['dessen'], nach: ' Schuhe viel zu gross sind, fiel auf den Hintern. ' },
            { vor: 'b) Der Clown fiel auf den Hintern, ', loesungen: ['was'], nach: ' alle Kinder zum Lachen brachte. ' },
            { vor: 'c) Die Zirkusdirektorin, ', loesungen: ['deren'], nach: ' Kleid bunt schillerte, begrüsste das Publikum. ' },
            { vor: 'd) Kennst du das Kind, ', loesungen: ['dem', 'welchem'], nach: ' der Clown zugewinkt hat?' }
          ],
          punktregel: 'Je ½ Punkt pro korrekte und korrekt geschriebene Lösung.'
        },
        {
          typ: 'luecke', punkteJe: 1,
          frage: 'Notiere die passenden Pronomen in die Lücken.',
          kurz: 'Pronomen einsetzen (Prüfung 2024)',
          luecken: [
            { vor: 'a) Lena, ', loesungen: ['deren'], nach: ' Freunde oben picknickten, musste hier sein. ' },
            { vor: 'b) Er küsste ihre Mutter ein zweites Mal, ', loesungen: ['was'], nach: ' Lena peinlich fand. ' },
            { vor: 'c) Makarenko, ', loesungen: ['dessen'], nach: ' Bodyguard rückwärts vom Stuhl gekippt war, lachte.' }
          ],
          punktregel: 'Je 1 Punkt pro korrekt geschriebene Lösung.'
        },
        {
          typ: 'text', text: 'besuch', punkteJe: 1,
          frage: 'Wer oder was ist mit den folgenden Pronomen gemeint?',
          kurz: 'Pronomenbezug im Romanauszug',
          teile: [
            { frage: '<b>sie</b> (Z. 2: «mit der Stimme, die sie benutzte»)', loesungen: ['seine Mutter', 'die Mutter', 'Mutter', 'Jonas Mutter', 'Frau Riedi'] },
            { frage: '<b>er</b> (Z. 15: «eine dünne Mappe, die er nicht ablegte»)', loesungen: ['Dr. Lenz', 'Lenz', 'der Mann', 'Herr Dr. Lenz'] },
            { frage: '<b>sie</b> (Z. 24: «dass sie es lesen konnte»)', loesungen: ['die Mutter', 'Jonas Mutter', 'seine Mutter', 'Frau Riedi', 'Mutter'] },
            { frage: '<b>Das</b> (Z. 34: «Das ist interessant»)', loesungen: ['dass es nicht seine Unterschrift ist', 'die Aussage der Mutter', 'dass die Unterschrift nicht von ihrem Mann stammt', 'dass die Unterschrift gefälscht ist'] }
          ],
          tipp: 'Lies immer den Satz davor. Bei der letzten Frage bezieht sich das Pronomen auf eine ganze Aussage.',
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        },
        {
          typ: 'markieren', punkteJe: 1, abzugModus: 'voll',
          was: 'Pronomen',
          frage: 'Unterstreiche alle <b>Pronomen</b> in diesem Abschnitt.',
          kurz: 'Pronomen im Abschnitt (Prüfungsniveau)',
          saetze: [
            { woerter: ['Jeder', 'wusste', 'etwas', ',', 'aber', 'niemand', 'sagte', 'es', 'ihr', ',',
                        'weil', 'sich', 'alle', 'vor', 'ihrer', 'Reaktion', 'fürchteten', '.'],
              loesung: [0, 2, 5, 7, 8, 11, 12, 14] }
          ],
          erklaerung: 'Acht Pronomen: <i>Jeder, etwas, niemand, es, ihr, sich, alle, ihrer</i>. Wer <i>sich</i> oder das Possessivpronomen <i>ihrer</i> übersieht, verliert Punkte.',
          punktregel: 'Je ½ Punkt Abzug pro fehlende oder falsche Lösung. Mindestpunktzahl 0.'
        }
      ]
    },

    {
      titel: 'Kanti-Challenge', niveau: 'darüber', farbe: 'rot', bild: '🏔️', xpFaktor: 2,
      kurz: 'Mehrdeutige Bezüge, Relativsätze mit Präposition und «derer».',
      aufgaben: [
        {
          typ: 'luecke', punkteJe: 1,
          frage: 'Setze das Relativpronomen ein – hier steht eine <b>Präposition</b> davor.',
          anweisung: 'Die Präposition bestimmt den Fall des Pronomens.',
          kurz: 'Relativpronomen nach Präposition',
          luecken: [
            { vor: 'Das ist der Vertrag, über ', loesungen: ['den'], nach: ' sie gesprochen haben. ' },
            { vor: 'Das ist die Frau, mit ', loesungen: ['der'], nach: ' er telefoniert hat. ' },
            { vor: 'Das sind die Akten, in ', loesungen: ['denen'], nach: ' alles steht. ' },
            { vor: 'Das ist der Grund, aus ', loesungen: ['dem'], nach: ' sie geschwiegen hat.' }
          ],
          erklaerung: '<i>über</i> verlangt hier den Akkusativ, <i>mit</i>, <i>in</i> und <i>aus</i> den Dativ. Im Plural lautet der Dativ <i>denen</i>, nicht «den».',
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        },
        {
          typ: 'single',
          frage: 'In diesem Satz ist der Pronomenbezug <b>mehrdeutig</b>. Worauf kann sich «sie» beziehen?<br>«Anna sagte ihrer Tochter, dass sie zu spät sei.»',
          kurz: 'Mehrdeutiger Pronomenbezug',
          optionen: [
            'nur auf Anna',
            'nur auf die Tochter',
            'auf Anna oder auf die Tochter – der Satz ist nicht eindeutig',
            'auf niemanden, «sie» ist hier unpersönlich'
          ],
          loesung: 2,
          erklaerung: 'Grammatisch sind beide Bezüge möglich. In einem Aufsatz muss man solche Sätze umformulieren: «Anna sagte ihrer Tochter: ‹Du bist zu spät.›» Genau darauf achtet die Beurteilung in Teil 2.'
        },
        {
          typ: 'markieren', punkteJe: 1, abzugModus: 'voll',
          was: 'Pronomen',
          frage: 'Unterstreiche alle <b>Pronomen</b>. In diesem Satz sind es mehr, als man denkt.',
          kurz: 'Alle Pronomen in einem dichten Satz',
          saetze: [
            { woerter: ['Wer', 'sich', 'selbst', 'nichts', 'zutraut', ',', 'dem', 'hilft', 'auch', 'keiner',
                        ',', 'der', 'es', 'gut', 'mit', 'ihm', 'meint', '.'],
              loesung: [0, 1, 2, 3, 6, 9, 11, 12, 15] }
          ],
          erklaerung: 'Neun Pronomen: <i>Wer</i> (Relativ-/Interrogativpronomen), <i>sich</i>, <i>selbst</i>, <i>nichts</i>, <i>dem</i>, <i>keiner</i>, <i>der</i>, <i>es</i>, <i>ihm</i>.',
          punktregel: 'Je ½ Punkt Abzug pro fehlende oder falsche Lösung. Mindestpunktzahl 0.'
        },
        {
          typ: 'zuordnung', punkteJe: 1,
          frage: 'Bestimme die Art des unterstrichenen Pronomens.',
          kurz: 'Pronomenarten bestimmen (Challenge)',
          vorrat: ['Personalpronomen', 'Possessivpronomen', 'Reflexivpronomen', 'Demonstrativpronomen', 'Relativpronomen', 'Indefinitpronomen', 'Interrogativpronomen'],
          zeilen: [
            { text: '<u>Welche</u> Unterschrift ist echt?', loesung: 6 },
            { text: 'Er wischte <u>sich</u> die Hände ab.', loesung: 2 },
            { text: '<u>Derselbe</u> Mann war schon einmal hier.', loesung: 3 },
            { text: 'Das Blatt, <u>das</u> er hervorzog, war alt.', loesung: 4 },
            { text: '<u>Jemand</u> musste gelogen haben.', loesung: 5 },
            { text: 'Zeigen Sie mir <u>Ihre</u> Unterlagen.', loesung: 1 }
          ],
          punktregel: 'Je 1 Punkt pro korrekte Lösung.'
        },
        {
          typ: 'text', punkteJe: 1,
          frage: 'Formuliere den Satz so um, dass der Pronomenbezug eindeutig wird.',
          anweisung: 'Es gibt mehrere richtige Lösungen – notiere, worauf sich dein «sie» bezieht.',
          kurz: 'Mehrdeutigkeit auflösen',
          teile: [
            { frage: '«Lena half ihrer Mutter, weil sie keine Zeit hatte.» Wer hatte keine Zeit – die Mutter?',
              platzhalter: 'Lena half ihrer Mutter, weil diese …',
              loesungen: ['Lena half ihrer Mutter, weil diese keine Zeit hatte',
                          'Lena half ihrer Mutter, weil diese keine Zeit hatte.',
                          'Lena half ihrer Mutter, weil die Mutter keine Zeit hatte',
                          'Lena half ihrer Mutter, weil die Mutter keine Zeit hatte.'] }
          ],
          erklaerung: 'Das Demonstrativpronomen <i>diese</i> zeigt auf das zuletzt genannte Nomen – damit ist der Bezug eindeutig. Oder man wiederholt das Nomen.'
        }
      ]
    }
  ]
});
