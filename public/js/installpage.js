

import topbar from './topbar_installpage.js';

function mainpage() {
    var root = document.getElementById("root");
    const mainwidgets = `<div class="bordi">
    <div class="androidapk">
      <h3>Android</h3>
      <p>Scarica l'app dal play store</p>
      <a href='https://play.google.com/store/apps/details?id=com.nicolovalenza.bcremonablogapp&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' target="_blank"><img alt='Disponibile su Google Play' style="width:190px; height:73px;" src='https://play.google.com/intl/en_us/badges/static/images/badges/it_badge_web_generic.png'/></a>
    </div>
    </div>
    <div class="bordi">
    <div class="pwa">
      <h3 style="margin-block-end: none;">installa l'app PWA per iPhone, Android e PC</h3><br>
      <p>Per maggiori informazioni sulle pwa clicca <a href="https://iquii.com/2019/03/04/progressive-web-app/" target="_blank">qui</a></p>
      <div id="installContainer" class="hidden">
    <button id="butInstall" class="buttonstyle" type="button">
    Installa
    </button>
    </div>
    </div>
    </div>
    <div class="bordi">
    <div class="installcontainer">
    <h3>Huawei</h3>
    <p>Scarica l'app dal AppGallery</br>
    Solo per gli smartphone Huawei dotati di AppGallery</br>
    In Arrivo</br></p>
    <a href="#"><img style="width:190px; height:73px;" src="/images/appgallerybadge.png"/></a>

    
  </div>
  </div>
    <div class="bordi">
    <div class="windowsexe">
      <h3>Scarica l'applicazione per Windows</h3>
      <a href="media/1cremonablog-app_Setup_1.0.0.exe"><button id="downloadbut">scarica</button></a>
    </div>
    </div>
    <div class="bordi">
    <div class="installcontainer">
      <h3>Scarica l'applicazione per Mac</h3>
      <a href="media/1cremonablog-app_Setup_1.0.0.exe"><button id="downloadbut">In arrivo</button></a>
    </div>
    </div>


    
    <div class="bordi">
    <div class="github">
      <h3>visualizza e scarica il codice sorgente dell'applicazione</h3>
      <a href="https://github.com/Eaglee0/1blog-app" target="_blank"><button id="downloadbut">github</button></a>
    </div>
    </div>`;
    root.innerHTML += mainwidgets;
}

topbar();
mainpage();