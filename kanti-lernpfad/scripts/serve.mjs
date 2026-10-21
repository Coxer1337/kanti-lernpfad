/* Kleiner Webserver für den Lernpfad – mehr braucht es nicht, weil die App
   ohne Build auskommt. Nur über http(s) schaltet sich der Service Worker ein
   und legt alles fürs Offline-Üben ab.
   Aufruf: npm run serve  (dann http://localhost:8080 öffnen) */

import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { join, dirname, extname, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import { networkInterfaces } from 'node:os';

const wurzel = join(dirname(fileURLToPath(import.meta.url)), '..');
const hafen = Number(process.env.PORT) || 8080;

const TYPEN = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8'
};

createServer(async (anfrage, antwort) => {
  let pfad = normalize(decodeURIComponent(anfrage.url.split('?')[0]));
  if (pfad.includes('..')) return antwort.writeHead(403).end('verboten');
  if (pfad === '/' || pfad.endsWith('/')) pfad += 'index.html';
  try {
    const inhalt = await readFile(join(wurzel, pfad));
    antwort.writeHead(200, {
      'content-type': TYPEN[extname(pfad)] || 'application/octet-stream',
      'cache-control': 'no-cache'
    });
    antwort.end(inhalt);
  } catch {
    antwort.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' }).end('nicht gefunden: ' + pfad);
  }
}).listen(hafen, () => {
  console.log('Kanti-Lernpfad läuft:');
  console.log('  auf diesem Gerät   http://localhost:' + hafen);
  for (const [name, adressen] of Object.entries(networkInterfaces())) {
    for (const a of adressen || []) {
      if (a.family === 'IPv4' && !a.internal) {
        console.log(`  im Netz (${name})   http://${a.address}:${hafen}`);
      }
    }
  }
  console.log('\nAuf dem iPad diese Adresse in Safari öffnen, dann «Teilen» → «Zum Home-Bildschirm».');
});
