

import topbar from './topbar_installpage.js';

function mainpage() {
    var root = document.getElementById("root");
    const mainwidgets = `<div class="bordi">
    <div class="androidapk">
      <h3>scarica l'apk per installare l'applicazione per android</h3>
      <a href="media/1bcremonablogapp.apk"><button id="downloadbut">scarica</button></a>
    </div>
    </div>
    <div class="bordi">
    <div class="pwa">
      <h3 style="margin-block-end: none;">installa l'app PWA per iPhone, Android e PC</h3><br>
      <p>Per maggiori informazioni sulle pwa clicca <a href="#">qui</a></p>
      <div id="installContainer" class="hidden">
    <button id="butInstall" class="buttonstyle" type="button">
    Installa
    </button>
    </div>
    </div>
    </div>
    <div class="bordi">
    <div class="windowsexe">
      <h3>scarica il programma per windows</h3>
      <a href="media/1cremonablog-app_Setup_1.0.0.exe"><button id="downloadbut">scarica</button></a>
    </div>
    </div>
    
    <div class="bordi">
    <div class="github">
      <h3>visualizza e scarica il codice sorgente dell'applicazione</h3>
      <a href="https://github.com/Eaglee0/1blog-app"><button id="downloadbut">github</button></a>
    </div>
    </div>`;
    root.innerHTML += mainwidgets;
}

topbar();
mainpage();