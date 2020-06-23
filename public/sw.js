var cacheName = '1bcremonablog-app';
var filesToCache = [
'/',
'/index.html',
'/articolo/index.html',
'/js/register-sw.js',
'/stylesheets/style1.css',
'/stylesheets/reader.css',
'/stylesheets/style_rss.css',
'/manifest.json'
];
/* Avvia il Service Worker e Memorizza il contenuto nella cache */
self.addEventListener('install', function(e) {
e.waitUntil(
caches.open(cacheName).then(function(cache) {
return cache.addAll(filesToCache);
})
);
});
/* Serve i Contenuti Memorizzati quando sei Offline */
self.addEventListener('fetch', function(e) {
e.respondWith(
caches.match(e.request).then(function(response) {
return response || fetch(e.request);
})
);
});
