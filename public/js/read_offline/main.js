
import topbar from './topbar.js';
function page() {
    var url_art_off = sessionStorage.getItem("url_art_offline");
    var body = localStorage.getItem(url_art_off);
    var pageroot = document.getElementById("root");
    pageroot.innerHTML += body;
    var rem = document.getElementById("jp-post-flair");
    rem.remove();
}


var title = sessionStorage.getItem("url_art_offline");
topbar(title);
page();
