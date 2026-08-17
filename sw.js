// Minimaler Service Worker - nötig, damit der Browser die Seite als installierbare App erkennt.
// Bewusst ohne Offline-Caching, damit du immer die aktuelle Version siehst (kein "alte Version bleibt hängen"-Problem).
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', () => {
  // bewusst leer - alle Anfragen gehen normal ans Netzwerk, kein Caching
});
