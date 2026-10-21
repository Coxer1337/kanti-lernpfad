/* Service Worker: legt die ganze App im Gerät ab, damit sie ohne Netz läuft.
   Die Liste wird von scripts/lernpfad-pruefen.mjs gegen index.html geprüft –
   wer eine Datei hinzufügt, bekommt dort einen Fehler, wenn er sie hier
   vergisst. VERSION bei jeder Änderung hochzählen. */

var VERSION = 'lernpfad-v1';

var DATEIEN = [
  './',
  './index.html',
  './manifest.webmanifest',
  './css/app.css',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './js/daten.js',
  './js/texte.js',
  './js/fortschritt.js',
  './js/abzeichen.js',
  './js/aufgaben.js',
  './js/ansichten.js',
  './js/start.js',
  './inhalt/k01-textverstaendnis.js',
  './inhalt/k02-synonyme.js',
  './inhalt/k03-wortfamilien.js',
  './inhalt/k04-redewendungen.js',
  './inhalt/k05-wortarten.js',
  './inhalt/k06-verb.js',
  './inhalt/k07-zeitformen.js',
  './inhalt/k08-aktiv-passiv.js',
  './inhalt/k09-nomen-faelle.js',
  './inhalt/k10-pronomen.js',
  './inhalt/k11-partikel.js',
  './inhalt/k12-satzglieder.js',
  './inhalt/k13-satzbau.js',
  './inhalt/k14-zeichensetzung.js',
  './inhalt/k15-schreibaufgabe.js',
  './inhalt/pruefungen.js'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(VERSION)
      .then(function (speicher) { return speicher.addAll(DATEIEN); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys()
      .then(function (namen) {
        return Promise.all(namen.filter(function (n) { return n !== VERSION; })
                                .map(function (n) { return caches.delete(n); }));
      })
      .then(function () { return self.clients.claim(); })
  );
});

/* Zuerst der Speicher, dann das Netz: In der Schule ist das WLAN oft da,
   aber langsam – und die App ändert sich nur, wenn jemand sie neu baut. */
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(function (treffer) {
      if (treffer) return treffer;
      return fetch(e.request).then(function (antwort) {
        if (antwort && antwort.status === 200 && antwort.type === 'basic') {
          var kopie = antwort.clone();
          caches.open(VERSION).then(function (speicher) { speicher.put(e.request, kopie); });
        }
        return antwort;
      }).catch(function () {
        return caches.match('./index.html');
      });
    })
  );
});
