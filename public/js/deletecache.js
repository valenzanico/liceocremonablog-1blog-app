function deletecache() {
    if (navigator.onLine == true) {//if users online delte cache


      navigator.serviceWorker.getRegistrations().then(function (registrations) {
        for (let registration of registrations) {
          registration.unregister()
        }
      })
      caches.delete('1bcremonablog-app');
      window.location['reload']()
    } else {//if user isn't online doesn't delete caxche
      document.getElementById("update").innerText = "Sei offline";
    }
  }