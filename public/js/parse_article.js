const proxyurl = "https://proxy-1blogapp.herokuapp.com/";
const url_art = sessionStorage.getItem("linkarticle1bcremonablog");
localStorage.setItem("url_art_stor", url_art)

const butsave = `<button id="butsave" onclick="save()">Salva l'articolo offline</button>`

console.log(url_art);
fetch(proxyurl + url_art)
  .then(response => response.text())
  .then(data => {
    console.log(typeof data);
    var el = $('<div></div>');
    var art_page = el.html(data);
    let htmlpage;
    console.log($('.entry-content', art_page));
    htmlpage += `<article><div class="all-article">${$('.entry-content', art_page)[0].innerHTML}</div></article>`;
    var page = `<article><div class="all-article">${$('.entry-content', art_page)[0].innerHTML}</div></article>`;
    document.body.insertAdjacentHTML("beforeend", htmlpage);
    $("#jp-post-flair").remove();
    $("#text").remove();
    sessionStorage.setItem("article_page",page);

  });


function save() {
  var htmlpage = sessionStorage.getItem("article_page");
  console.log(htmlpage);
  localStorage.setItem(url_art, htmlpage);
  var offline_article_list_el = `<li><a href="/offlinepage/read"><button id="listbut" onclick="sessionStorage.setItem('url_art_offline','${url_art}')">${url_art}</button></a></li>`;
  var list_el = localStorage.getItem("list_offlinepage");
  list_el += offline_article_list_el;
  localStorage.removeItem("list_offlinepage");
  localStorage.setItem("list_offlinepage", list_el);
  sessionStorage.removeItem("article_page");
} ;