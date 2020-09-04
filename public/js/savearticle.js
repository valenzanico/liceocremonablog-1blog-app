function save() {
    var htmlpage = sessionStorage.getItem("article_page");
    console.log(htmlpage);
    var url_art = sessionStorage.getItem("url_art_x_offline");//teake urls and article from session storahge
    localStorage.setItem(url_art, htmlpage);
    var offline_article_list_el =
      `<li><a href="/readoffline"><button id="listbut" onclick="sessionStorage.setItem('url_art_offline','${url_art}')">${url_art}</button></a></li>`;
    var list_el = localStorage.getItem("list_offlinepage");
    list_el += offline_article_list_el;
    localStorage.removeItem("list_offlinepage");
    localStorage.setItem("list_offlinepage", list_el);//save in localstorage
    sessionStorage.removeItem("article_page");
    sessionStorage.removeItem("url_art_x_offline");//remove session storage
  };