const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url_art = sessionStorage.getItem("linkarticle1bcremonablog");

console.log(url_art);
fetch(proxyurl + url_art)
  .then(response => response.text())
  .then(data => {
    console.log(typeof data);
    var el = $('<div></div>');
    var art_page = el.html(data);
    let htmlpage;
    htmlpage += `<div class="container-art"><div class="all-article">${$('.entry-content', art_page)[0].innerHTML}</div></div>`;
    document.body.insertAdjacentHTML("beforeend", htmlpage);
    $("#jp-post-flair").remove();
    $("#text").remove();

  });
