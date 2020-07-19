function deletecache() {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
        for(let registration of registrations) {
         registration.unregister()
       } })
    caches.delete('1bcremonablog-app');
}

