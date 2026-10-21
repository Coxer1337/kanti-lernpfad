/* Führt den Lernpfad einmal durch, in einem echten Browser.
   Legt ein Profil an, liest Theorie, löst Aufgaben verschiedener Typen,
   prüft die Rückmeldung und die Auswertung – und macht Bildschirmfotos.
   Aufruf: npm run smoke */

import { chromium } from 'playwright';
import { createServer } from 'node:http';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { join, dirname, extname, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const wurzel = join(dirname(fileURLToPath(import.meta.url)), '..');
const bilder = join(dirname(fileURLToPath(import.meta.url)), 'bildschirmfotos');

const TYPEN = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.png': 'image/png',
  '.webmanifest': 'application/manifest+json', '.json': 'application/json'
};

const server = createServer(async (anfrage, antwort) => {
  let pfad = normalize(decodeURIComponent(anfrage.url.split('?')[0]));
  if (pfad === '/' || pfad.endsWith('/')) pfad += 'index.html';
  try {
    const inhalt = await readFile(join(wurzel, pfad));
    antwort.writeHead(200, { 'content-type': TYPEN[extname(pfad)] || 'application/octet-stream' });
    antwort.end(inhalt);
  } catch {
    antwort.writeHead(404).end('nicht gefunden');
  }
});
await new Promise((fertig) => server.listen(0, '127.0.0.1', fertig));
const basis = `http://127.0.0.1:${server.address().port}`;

/* In vorbereiteten Containern liegt Chromium schon da, oft in einer anderen
   Version, als dieses Playwright erwartet. Dann nehmen wir das vorhandene. */
const mitgeliefert = '/opt/pw-browsers/chromium';
const browser = await chromium.launch(
  existsSync(mitgeliefert) ? { executablePath: mitgeliefert } : {}
);
const seite = await browser.newPage({ viewport: { width: 834, height: 1112 } });  // iPad Air

const probleme = [];
seite.on('pageerror', (e) => probleme.push('JS-Fehler: ' + e.message));
seite.on('console', (m) => { if (m.type() === 'error') probleme.push('Konsole: ' + m.text()); });

function melde(schritt) { console.log('  ·', schritt); }
async function foto(name) { await seite.screenshot({ path: join(bilder, name + '.png'), fullPage: false }); }

try {
  /* ---- Profil anlegen ---- */
  await seite.goto(basis + '/index.html');
  await seite.waitForSelector('.dialog');
  await seite.fill('.dialog input.feld', 'Testlerner');
  await seite.click('.dialog .knopf.breit');
  await seite.waitForSelector('.held h1');
  const begruessung = await seite.textContent('.held h1');
  if (!begruessung.includes('Testlerner')) probleme.push('Profilname erscheint nicht: ' + begruessung);
  melde('Profil angelegt: ' + begruessung.trim());
  await foto('01-start');

  /* ---- alle Kapitel sind gelistet ---- */
  const stationen = await seite.locator('.pfad .station').count();
  if (stationen < 15) probleme.push(`nur ${stationen} Kapitel auf der Startseite`);
  melde(`${stationen} Kapitel auf dem Pfad`);

  /* ---- Theorie ---- */
  await seite.locator('.pfad .station').first().locator('.station-karte').click();
  await seite.waitForSelector('.station-karte');
  await foto('02-kapitel');
  await seite.locator('.station-karte').first().click();
  await seite.waitForSelector('.theorie h1');
  const theorieBloecke = await seite.locator('.theorie-block').count();
  if (theorieBloecke < 3) probleme.push(`nur ${theorieBloecke} Theorieblöcke`);
  melde(`Theorie geöffnet (${theorieBloecke} Abschnitte)`);
  await foto('03-theorie');

  /* ---- Stufe 1 durchspielen ---- */
  await seite.click('button:has-text("Verstanden")');
  await seite.waitForSelector('.aufgabe-nr');
  melde('Stufe 1 gestartet');

  const gesehen = new Set();

  /* Spielt die gerade geöffnete Stufe durch – irgendwie, Hauptsache alle
     Bedienelemente werden einmal angefasst. */
  async function stufeDurchspielen(wieviele = 40) {
    for (let i = 0; i < wieviele; i++) {
      if (await seite.locator('.ergebnis').count()) break;
      await seite.waitForSelector('.karte .aufgabe-nr', { timeout: 5000 });

      if (await seite.locator('.rfk .kugel').count()) {
        gesehen.add('rfk');
        const zeilen = await seite.locator('.rfk tbody tr').count();
        for (let z = 0; z < zeilen; z++) {
          await seite.locator('.rfk tbody tr').nth(z).locator('.kugel').first().click();
        }
      } else if (await seite.locator('.zuordnung select').count()) {
        gesehen.add('zuordnung');
        const n = await seite.locator('.zuordnung select').count();
        for (let z = 0; z < n; z++) await seite.locator('.zuordnung select').nth(z).selectOption({ index: 1 });
      } else if (await seite.locator('.wort-knopf').count()) {
        gesehen.add('markieren');
        await seite.locator('.wort-knopf').first().click();
        await seite.locator('.wort-knopf').nth(1).click();
      } else if (await seite.locator('.strich-stelle').count()) {
        gesehen.add(await seite.locator('.strich-stelle.komma').count() ? 'trennen/komma' : 'trennen');
        await seite.locator('.strich-stelle').first().click();
      } else if (await seite.locator('.tabelle-raster input').count()) {
        gesehen.add('tabelle');
        const n = await seite.locator('.tabelle-raster input').count();
        for (let z = 0; z < n; z++) await seite.locator('.tabelle-raster input').nth(z).fill('test');
      } else if (await seite.locator('textarea.feld').count()) {
        gesehen.add(await seite.locator('textarea.feld').first().evaluate((e) => e.rows > 8) ? 'frei/gross' : 'offen');
        const n = await seite.locator('textarea.feld').count();
        for (let z = 0; z < n; z++) {
          await seite.locator('textarea.feld').nth(z).fill(
            'Das ist eine Testantwort in einem ganzen Satz, lang genug für die Mindestlänge dieser Aufgabe. '.repeat(8)
          );
        }
      } else if (await seite.locator('input.feld').count()) {
        gesehen.add(await seite.locator('input.feld.inline').count() ? 'luecke' : 'text');
        const n = await seite.locator('input.feld').count();
        for (let z = 0; z < n; z++) await seite.locator('input.feld').nth(z).fill('Testantwort');
      } else if (await seite.locator('.wahl-knopf').count()) {
        gesehen.add(await seite.locator('.wahl-knopf.rund').count() ? 'single' : 'multi');
        await seite.locator('.wahl-knopf').first().click();
      } else {
        probleme.push('Aufgabe ' + (i + 1) + ': kein bekanntes Bedienelement gefunden');
        break;
      }

      const pruefen = seite.locator('.aufgaben-fuss button:has-text("Prüfen")');
      if (await pruefen.count() === 0 || await pruefen.isDisabled()) {
        probleme.push('Aufgabe ' + (i + 1) + ': «Prüfen» bleibt gesperrt');
        break;
      }
      await pruefen.click();
      await seite.waitForSelector('.rueckmeldung', { timeout: 5000 });
      if (!gemachtesFoto) { await foto('04-rueckmeldung'); gemachtesFoto = true; }

      const selbst = seite.locator('.selbstcheck button');
      while (await selbst.count()) { await selbst.first().click(); }

      await seite.locator('.aufgaben-fuss button').first().click();
      await seite.waitForTimeout(120);
    }
  }

  let gemachtesFoto = false;
  await stufeDurchspielen();

  await seite.waitForSelector('.ergebnis', { timeout: 5000 });
  const punkte = (await seite.textContent('.ergebnis .punkte')).replace(/\s+/g, ' ').trim();
  melde('Auswertung erreicht: ' + punkte);
  await foto('05-auswertung');

  /* ---- die übrigen Aufgabentypen in anderen Kapiteln ---- */
  for (const [stufe, name] of [
    ['#/level/textverstaendnis/2', 'offene Fragen'],
    ['#/level/zeitformen/3', 'Lückentext mit Zeitformen'],
    ['#/level/verb/3', 'Markieren und Konjugationstabelle'],
    ['#/level/satzglieder/3', 'Satzglieder trennen'],
    ['#/level/zeichensetzung/3', 'Kommas setzen'],
    ['#/level/schreibaufgabe/3', 'Schreibaufgabe mit Raster']
  ]) {
    await seite.goto(basis + '/index.html' + stufe);
    await seite.waitForSelector('.aufgabe-nr', { timeout: 5000 });
    await stufeDurchspielen(4);
    melde('durchgespielt: ' + name);
  }
  await foto('10-schreibaufgabe');

  melde('Aufgabentypen bedient: ' + [...gesehen].sort().join(', '));
  const fehlendeTypen = ['rfk', 'single', 'multi', 'text', 'luecke', 'tabelle', 'zuordnung',
                         'markieren', 'trennen', 'offen', 'frei/gross']
    .filter((t) => ![...gesehen].some((g) => g.startsWith(t)));
  if (fehlendeTypen.length) probleme.push('nie bedient: ' + fehlendeTypen.join(', '));

  /* ---- XP wurden vergeben, Abzeichen vergeben ---- */
  const xp = await seite.textContent('#kopf-xp');
  if (/^0\s*XP/.test(xp)) probleme.push('keine XP vergeben');
  melde('Punktestand im Kopf: ' + xp);

  await seite.goto(basis + '/index.html#/abzeichen');
  await seite.waitForSelector('.abzeichen-gitter');
  const verdient = await seite.locator('.abzeichen.hat').count();
  if (verdient < 1) probleme.push('kein einziges Abzeichen verdient');
  melde(`${verdient} Abzeichen verdient`);
  await foto('06-abzeichen');

  /* ---- Prüfungssimulation startet und zeigt die Uhr ---- */
  await seite.goto(basis + '/index.html#/pruefungen');
  await seite.waitForSelector('.karte h2');
  await foto('07-pruefungen');
  await seite.locator('button:has-text("Prüfung starten")').first().click();
  await seite.waitForSelector('.fortschrittszeile');
  const uhr = await seite.textContent('.fortschrittszeile span:last-child');
  if (!uhr.includes('⏱')) probleme.push('keine Uhr in der Prüfung: ' + uhr);
  melde('Prüfung läuft, Uhr: ' + uhr.trim());
  if (await seite.locator('.rueckmeldung').count()) probleme.push('Prüfung zeigt Rückmeldung vor dem Schluss');
  await foto('08-pruefung');

  /* ---- Fortschritt übersteht einen Neustart ---- */
  await seite.goto(basis + '/index.html#/');
  await seite.waitForSelector('.held h1');
  const xpNachher = await seite.textContent('#kopf-xp');
  if (xpNachher !== xp) probleme.push(`XP nach Neuladen anders: ${xp} → ${xpNachher}`);
  melde('Fortschritt nach Neuladen: ' + xpNachher);

  /* ---- Dunkles Thema ---- */
  await seite.emulateMedia({ colorScheme: 'dark' });
  await foto('09-dunkel');
  melde('dunkles Thema gezeichnet');
} catch (e) {
  probleme.push('Abbruch: ' + e.message);
} finally {
  await browser.close();
  server.close();
}

if (probleme.length) {
  console.error('\nProbleme:');
  probleme.forEach((p) => console.error('  ✗ ' + p));
  process.exit(1);
}
console.log('\nDurchlauf ohne Fehler. Bildschirmfotos in scripts/bildschirmfotos/');
