var cacheName = '1bcremonablog-app';
var filesToCache = [
'/',
'/index.html',
'/articolo/index.html',
'/offlinepage/index.html',
'/offlinepage/read/index.html',
'/js/register-sw.js',
'/stylesheets/style1.css',
'/stylesheets/reader.css',
'/stylesheets/style_rss.css',
'/manifest.json',
'/js/articolo_script.js',
'/js/cachedelete.js',
'/js/firebaseconfig.js',
'/js/install.js',
'/js/installpage.js',
'/js/offlineart.js',
'/js/parse_article.js',
'/js/parse_rss.js',
'/js/sharepage.js',
'/js/sidenav.js',
'/js/sidenav_index.js',
'/js/sw-plugin.js',
'/js/topbar_index.js',
'/js/topbar_installpage.js',
'/well-known/assetlinks.json'
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
