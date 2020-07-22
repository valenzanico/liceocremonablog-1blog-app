function htmlsidenav() {
    var html_s = `  <div id="mySidenav" class="sidenav">
    <button style="outline: none;user-select: none;" href="javascript:void(0)" class="closebtn" onclick="closeNav()">
      &times;
    </button>
    <div style="margin-left: 34%;"><button class="buttonstyle" onclick="sharepage()">Condividi</button></div>
    <div style="margin-left: 18%;margin-top: 10%;"><a href="/offlinepage"><button  class="buttonstyle">Articoli salvati</button></a></div>
    <div style="margin-left: 0%;margin-top: 10%;" class="chachedelbut" align="center"><button id="update" onclick="deletecache()">Aggiorna l'app</button></div>
  </div>
    `;
    var rootel_s = document.getElementById("root");
    rootel_s.innerHTML += html_s;
}

htmlsidenav();