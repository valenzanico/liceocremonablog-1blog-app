// This is the "Offline copy of assets" service worker
//questo service worker salva una copia offline del sito per far si che funzini anche offline
const CACHE = "pwabuilder-offline";

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

workbox.routing.registerRoute(
  new RegExp('/*'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: CACHE
  })
);






// This is the service worker with the Cache-first network

// const CACHE = "pwabuilder-precache";
//
// importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');
//
// self.addEventListener("message", (event) => {
//   if (event.data && event.data.type === "SKIP_WAITING") {
//     self.skipWaiting();
//   }
// });
//
// workbox.routing.registerRoute(
//   new RegExp('/*'),
//   new workbox.strategies.CacheFirst({
//     cacheName: CACHE
//   })
// );
