var cacheName = '1bcremonablog-app';
var filesToCache = [
'/',
'/index.html'
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
// self.addEventListener('install', (event) => {
//     console.log('👷', 'install', event);
//     self.skipWaiting();
//   });
  
//   self.addEventListener('activate', (event) => {
//     console.log('👷', 'activate', event);
//     return self.clients.claim();
//   });
  
//   self.addEventListener('fetch', function(event) {
//     // console.log('👷', 'fetch', event);
//     event.respondWith(fetch(event.request));
//   });
  
//   const butInstall = document.getElementById('butInstall');
//   const divInstall = document.getElementById('installContainer');
  
//   window.addEventListener('beforeinstallprompt', (event) => {
//     console.log('👍', 'beforeinstallprompt', event);
//     // Stash the event so it can be triggered later.
//     window.deferredPrompt = event;
//     // Remove the 'hidden' class from the install button container
//     divInstall.classList.toggle('hidden', false);
//   });
  
  
//   butInstall.addEventListener('click', () => {
//     console.log('👍', 'butInstall-clicked');
//     const promptEvent = window.deferredPrompt;
//     if (!promptEvent) {
//       // The deferred prompt isn't available.
//       return;
//     }
//     // Show the install prompt.
//     promptEvent.prompt();
//     // Log the result
//     promptEvent.userChoice.then((result) => {
//       console.log('👍', 'userChoice', result);
//       // Reset the deferred prompt variable, since
//       // prompt() can only be called once.
//       window.deferredPrompt = null;
//       // Hide the install button.
//       divInstall.classList.toggle('hidden', true);
//     });
//   });
  
  
//   window.addEventListener('appinstalled', (event) => {
//     console.log('👍', 'appinstalled', event);
//   });

