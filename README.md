# 📖 Kanti-Lernpfad Deutsch

Ein Lernpfad für die **Aufnahmeprüfung Deutsch** an die Thurgauer Mittelschulen –
Eintritt aus der **2. Klasse der Sekundarschule** (gymnasiale Maturitätsschule und
Fachmittelschule).

15 Kapitel, 362 Aufgaben, 1336 Punkte und drei vollständige Prüfungssimulationen.
Keine Anmeldung, kein Server, kein Build – und auf dem iPad installierbar wie eine App.

```
npm run serve      # Server starten, Adresse öffnen (auch fürs iPad im Schul-WLAN)
npm run pruefen    # alle Inhalte gegen die Engine prüfen
npm run smoke      # die App im Browser einmal durchspielen
```

## Veröffentlichen: ein Schalter

Die App braucht keinen Build. Darum genügt für GitHub Pages:

**Settings → Pages → Source: «Deploy from a branch» → Branch: `main`, Ordner `/ (root)` → Save.**

Nach ein, zwei Minuten liegt der Lernpfad unter
`https://<dein-name>.github.io/kanti-lernpfad/`. Diese Adresse geben die SuS in
Safari ein und legen sie über *Teilen → Zum Home-Bildschirm* als App ab. Mehr dazu
unter [Als App auf die iPads](#als-app-auf-die-ipads).

---

## Woran sich der Lernpfad orientiert

Ausschliesslich an zwei Quellen:

**Wegweiser Mittelschulen Thurgau 2027, Prüfungsfach Deutsch.** Jedes Kapitel bildet
eines der dort aufgeführten Stoffziele ab. Die Gliederung folgt der Reihenfolge des
Wegweisers: Wortschatz/Wortbildung, Satzbau, Satzglieder, Wortlehre, Verb, Nomen,
Adjektiv, Pronomen, Partikel, Zeichensetzung.

**Die Aufnahmeprüfungen 2022, 2023 und 2024 (GMS 2, Deutsch schriftlich).** Jeder
Aufgabentyp im Lernpfad kommt in mindestens einer dieser Prüfungen vor. Auch die
Punkteregeln sind übernommen – halbe Punkte für Rechtschreibfehler, Abzüge für falsche
Kreuze, Mindestpunktzahl 0.

Drei Themen stehen im Wegweiser erst bei der 3. Sek, kamen in den Prüfungen aus der
2. Sek aber regelmässig vor: **Redewendungen**, **Modalformen** und **Kommas bei
Einschüben**. Sie sind enthalten und als solche gekennzeichnet.

### Die Prüfung

| Teil | Dauer | Gewicht | Umfang |
|---|---|---|---|
| Teil 1: Sprachprüfung | 40 Minuten | 1/3 der Note | 75–80 Punkte, ~20 Aufgaben |
| Teil 2: Schreibaufgabe | 75 Minuten | **2/3 der Note** | ein Aufsatz |

Kapitel 15 behandelt Teil 2 – mit Schreibplan, Zeiteinteilung und dem
Beurteilungsraster des Wegweisers.

---

## Die 15 Kapitel

| # | Kapitel | in der Prüfung |
|---|---|---|
| 1 | Textverständnis | ≈ 20–25 P. |
| 2 | Wortschatz: Synonyme & Wortbedeutung | ≈ 5–8 P. |
| 3 | Wortfamilien & Wortbildung | ≈ 5–7 P. |
| 4 | Redewendungen | ≈ 3–7 P. |
| 5 | Wortarten bestimmen | ≈ 5 P. |
| 6 | Das Verb: Formen erkennen | ≈ 6–10 P. |
| 7 | Zeitformen | ≈ 4–6 P. |
| 8 | Aktiv, Passiv & Modalformen | ≈ 2–4 P. |
| 9 | Nomen: Fälle & Formen | ≈ 3–5 P. |
| 10 | Pronomen | ≈ 4–6 P. |
| 11 | Präpositionen & Konjunktionen | ≈ 4–5 P. |
| 12 | Satzglieder | ≈ 6–7 P. |
| 13 | Satzbau: einteilig ↔ mehrteilig | ≈ 6 P. |
| 14 | Zeichensetzung | ≈ 3–4 P. |
| 15 | Teil 2: Die Schreibaufgabe | 2/3 der Note |

Jedes Kapitel hat denselben Aufbau – das ist die namengebende Flughöhe:

1. **Theorie.** Kurz, mit Beispielen und den Proben, die die Prüfung verlangt
   (Ersatzprobe, Verschiebeprobe, Maskulinprobe, Verbprobe).
2. **Stufe 1 – leicht.** Einstieg, kurze Sätze, eine Regel pro Aufgabe.
3. **Stufe 2 – mittel.** Mehrere Regeln gemischt, längere Sätze.
4. **Stufe 3 – Prüfungsniveau.** Die Originalaufgaben in Form, Länge und Punkteregel.
5. **Stufe 4 – Kanti-Challenge.** Bewusst über dem Prüfungsniveau: Grenzfälle,
   Mehrdeutigkeiten, Sätze mit vier Teilsätzen. Wer sie schafft, hat in der Prüfung Luft.

---

## Belohnung und Rückmeldung

**Rückmeldung** kommt sofort nach jeder Aufgabe: richtig/falsch, die Lösung, eine
Erklärung – und die Punkteregel der echten Prüfung im Wortlaut («Je 1 Punkt Abzug pro
falsches Kreuz. Mindestpunktzahl 0.»). Wer inhaltlich richtig, aber falsch geschrieben
hat, bekommt den halben Punkt und einen Hinweis; genau so rechnet die Prüfung.

Offene Fragen und Aufsätze kann kein Programm zuverlässig beurteilen. Dort erscheinen
Musterlösung, Schlüsselbegriffe und – bei der Schreibaufgabe – das vierteilige
Beurteilungsraster des Wegweisers, und die Schülerin schätzt selbst ein. Die XP sind
dafür gedeckelt, damit eine grosszügige Selbsteinschätzung keine Punktequelle wird.

**Belohnung:**

- **XP und Ränge** – von 🌱 Leseanfänger:in bis 👑 Sprachmeister:in (10 Stufen)
- **Sterne** – 0 bis 3 pro Stufe, nach dem erreichten Anteil
- **24 Abzeichen** – fachlich (📖 Textversteher:in, ✒️ Komma-König:in, ⏳ Zeitreisende:r)
  und ausdauerbezogen (🔥 drei Tage in Folge, 🚀 eine Woche, 🏅 21 Tage)
- **Tagesserie** – zählt die Tage hintereinander
- **Prüfungsbarometer** – ein Prozentwert, gewichtet nach dem Punktegewicht der Kapitel
  in der echten Prüfung, nicht nach der Anzahl Kapitel
- **Fehlerheft** – sammelt automatisch jede Aufgabe unter 60 % und mischt sie für eine
  zweite Runde neu

---

## Prüfungssimulationen

Drei vollständige Sprachprüfungen, gebaut nach dem Bauplan von 2022, 2023 und 2024:

| Simulation | Textsorte | Punkte | Vorbild |
|---|---|---|---|
| A – «Das letzte Training» | Romanauszug | 80 | 2024 |
| B – «Was das Moor behält» | Sachtext | 76 | 2022 |
| C – «Besuch um sieben» | Romanauszug | 75 | 2023 |

40 Minuten mit laufender Uhr, **keine Rückmeldung zwischendurch** – alle Lösungen
kommen am Schluss, zusammen mit der Note und der Empfehlung, welche Kapitel noch zu
üben sind.

### Warum eigene Lesetexte?

Die fünf Lesetexte sind eigens für den Lernpfad geschrieben – in derselben Länge
(38–58 Zeilen), Textsorte und Schwierigkeit wie die Prüfungstexte, mit Zeilennummern
für die Belegaufgaben. Das hat zwei Gründe: Wer die alten Prüfungen übt, lernt leicht
die Lösungen statt das Verfahren. Und die Originaltexte sind Romanauszüge, die
urheberrechtlich geschützt sind.

Die Originalprüfungen gehören trotzdem dazu – aber zum Schluss, auf Papier, unter
Prüfungsbedingungen.

---

## Für die Lehrperson

- **Profile.** Mehrere Schülerinnen und Schüler pro Gerät; das iPad kann herumgereicht
  werden. Jedes Profil hat seinen eigenen Fortschritt.
- **Export/Import.** Jedes Profil lässt sich als JSON-Datei sichern und auf einem
  anderen Gerät wieder einlesen – so kann man Fortschritte einsammeln oder einen
  Gerätewechsel überstehen.
- **Kein Konto, keine Daten nach aussen.** Der Fortschritt liegt im Browser des Geräts
  und verlässt es nur, wenn jemand ihn selbst exportiert. Keine Anmeldung, kein
  Tracking, keine Internetverbindung nötig.
- **Die Schlösser sperren niemanden aus.** Der Pfad empfiehlt eine Reihenfolge; ein
  gesperrtes Kapitel lässt sich nach einer Rückfrage trotzdem öffnen. Wer gezielt
  Kommas üben will, soll das können.

---

## Als App auf die iPads

Die Antwort kurz: **ja, und zwar auf drei Wegen – der erste braucht nichts.**

### 1. Als PWA auf den Home-Bildschirm (empfohlen, sofort einsatzbereit)

Der Lernpfad ist eine **Progressive Web App**: eigenes Icon, Vollbild ohne
Safari-Leiste, und nach dem ersten Öffnen läuft sie **vollständig offline**.

1. GitHub Pages einschalten (siehe oben) – oder lokal `npm run serve`, wenn das
   Schul-WLAN reicht. Es braucht nur HTTPS und statisches Ausliefern.
2. Auf dem iPad in **Safari** die Adresse öffnen.
3. **Teilen → «Zum Home-Bildschirm»**.

Fertig. Kein Apple-Developer-Konto, keine Prüfung durch Apple, keine Jahresgebühr, und
Aktualisierungen sind sofort da, sobald die Dateien auf dem Server neu sind.

> Technisch: `manifest.webmanifest` + `sw.js` legen alle 31 Dateien im Gerät ab.
> Der Service Worker schaltet sich nur über `http(s)` ein – vom USB-Stick (`file://`)
> läuft die App zwar auch, aber ohne Offline-Speicher.

### 2. Zentral verteilt über MDM (für eine ganze Schule)

Wer die iPads mit **Jamf School, Intune, Mosyle** o. ä. verwaltet, verteilt statt eines
Links ein **Web Clip**: Icon und Adresse landen automatisch auf jedem Gerät der
Klasse, ohne dass jemand etwas antippen muss. Das ist in Schweizer Schulen der übliche
Weg für Web-Anwendungen und braucht ebenfalls kein Apple-Developer-Konto.

### 3. Als richtige App im App Store

Technisch möglich – die App wird dazu mit **Capacitor** (oder Cordova) in eine native
Hülle gepackt; der Inhalt bleibt derselbe:

```bash
npm i -D @capacitor/cli @capacitor/core @capacitor/ios
npx cap init "Kanti-Lernpfad" ch.tg.lernpfad --web-dir=.
npx cap add ios && npx cap sync ios && npx cap open ios   # braucht einen Mac mit Xcode
```

Was dazukommt: ein **Apple Developer Program**-Konto (rund 100 CHF pro Jahr), ein Mac
mit Xcode, die **App-Prüfung durch Apple** (wenige Tage, bei Schul-Apps meist
unproblematisch) und derselbe Weg bei jedem Update. Für eine Schulklasse lohnt sich
das selten; sinnvoll wird es, wenn die App öffentlich auffindbar sein soll.

Dazwischen liegt noch **Apple School Manager / Custom Apps**: dieselbe native Hülle,
aber nicht öffentlich im Store, sondern nur für die eigene Organisation freigegeben.
Auch dafür braucht es das Developer-Konto.

> **Empfehlung:** Weg 1 für den Einstieg, Weg 2 sobald die Schule die iPads zentral
> verwaltet. Weg 3 nur, wenn die App wirklich im App Store stehen soll – der Inhalt
> wäre derselbe.

---

## Aufbau des Codes

```
├─ index.html              die ganze App – lädt klassische Skripte, kein Build
├─ manifest.webmanifest    macht sie installierbar
├─ sw.js                   legt alles fürs Offline-Üben ab
├─ css/app.css             helles und dunkles Thema, iPad-tauglich
├─ icons/                  aus scripts/icons.py erzeugt
├─ js/
│  ├─ daten.js             Namensraum, Antwortvergleich, Speicher
│  ├─ texte.js             die fünf Lesetexte
│  ├─ fortschritt.js       Profile, XP, Ränge, Sterne, Fehlerheft
│  ├─ abzeichen.js         die 24 Abzeichen und ihre Bedingungen
│  ├─ aufgaben.js          die zehn Aufgabentypen: zeichnen und auswerten
│  ├─ ansichten.js         Startseite, Kapitel, Theorie, Stufen, Prüfung
│  └─ start.js             Adresszeile beobachten, loslegen
├─ inhalt/
│  ├─ k01…k15-*.js         ein Kapitel pro Datei
│  └─ pruefungen.js        die drei Simulationen
└─ scripts/
   ├─ pruefen.mjs          prüft alle Aufgaben gegen die Engine
   ├─ smoke.mjs            spielt die App im echten Browser durch
   ├─ serve.mjs            kleiner Webserver fürs Klassenzimmer
   └─ icons.py             erzeugt die App-Icons
```

Die Wurzel des Repositorys *ist* die App – deshalb kann GitHub Pages sie direkt
ausliefern, ohne Zwischenschritt.

Es gibt bewusst **keinen Build-Schritt**: Die App besteht aus klassischen Skripten und
läuft so, wie sie im Verzeichnis liegt. Wer ein Kapitel ändern will, öffnet eine Datei
in `inhalt/` und lädt die Seite neu.

### Die zehn Aufgabentypen

| Typ | Prüfungsaufgabe |
|---|---|
| `rfk` | richtig / falsch / kein Hinweis |
| `single` | eine Antwort ankreuzen, Begriff durchstreichen |
| `multi` | «Kreuze alle an» – mit Abzug für falsche Kreuze |
| `text` | kurze Antworten, Synonyme, Fachbegriffe |
| `luecke` | Lückentext, Zeitformen, Relativpronomen |
| `tabelle` | Konjugation, Morpheme, Wortfamilien |
| `zuordnung` | Redewendungen, Personen, Wortarten |
| `markieren` | Pronomen, Präpositionen, Hilfsverben unterstreichen |
| `trennen` | Satzglieder mit Senkrechtstrichen, Kommas setzen |
| `offen` / `frei` | ganze Sätze, Schilderungen, Aufsatz mit Raster |

### Neue Aufgaben hinzufügen

Eine Aufgabe ist ein Objekt in der Kapiteldatei:

```js
{
  typ: 'single',
  frage: 'Welches Wort ist ein Nomen?',
  optionen: ['laufen', 'Haltestelle', 'schnell'],
  loesung: 1,
  tipp: 'Kann ich «der/die/das» davorsetzen?',
  erklaerung: '…',
  punktregel: 'Je 1 Punkt pro korrekte Antwort.'
}
```

Danach `npm run pruefen` – das Skript prüft jede Aufgabe gegen die Engine:
unbekannte Typen, Lösungsindizes ausserhalb des Bereichs, Zeilenangaben, die es im
Lesetext nicht gibt, Lösungen, die der eigene Antwortvergleich nicht akzeptiert, und
Dateien, die der Service Worker nicht ablegt. Bei über 360 Aufgaben findet man einen
vertippten Index sonst nie.

`npm run smoke` spielt die App danach in einem echten Browser durch, legt ein
Profil an, bedient jeden der zehn Aufgabentypen einmal und legt Bildschirmfotos in
`scripts/bildschirmfotos/` ab. Beides läuft bei jedem Push auch als GitHub Action
(`.github/workflows/pruefen.yml`).

---

## Herkunft

Der Lernpfad ist ursprünglich im Repository
[Coxer1337/CodeProjekt](https://github.com/Coxer1337/CodeProjekt) entstanden und
lebt seit der ersten Veröffentlichung hier als eigenständiges Projekt weiter.
