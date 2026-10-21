/* Start: Kapitel sortieren, Adresszeile beobachten, loslegen. */

LP.start = (function () {

  function neuLaden() { LP.ansichten.zeichneAktuelle(); }

  function los() {
    LP.kapitel.sort(function (a, b) { return a.nr - b.nr; });
    LP.ansichten.start();

    /* Erst die Adresse setzen, dann zuhören: sonst löst das Setzen selbst
       ein hashchange aus und die erste Ansicht wird zweimal gezeichnet. */
    if (!location.hash) location.replace('#/');
    window.addEventListener('hashchange', neuLaden);
    neuLaden();

    /* Beim ersten Start gleich den Tag zählen, damit die Serie stimmt. */
    if (LP.fortschritt.aktiv()) {
      var tage = LP.fortschritt.tagMelden();
      if (tage && tage > 1) LP.toast('🔥 ' + tage + ' Tage in Folge – weiter so!', 2600);
    }

    /* Offline-Betrieb, sobald die Seite über http(s) läuft. */
    if ('serviceWorker' in navigator && location.protocol.indexOf('http') === 0) {
      navigator.serviceWorker.register('sw.js').catch(function () {});
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', los);
  else los();

  return { neuLaden: neuLaden };
})();
