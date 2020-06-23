const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url_art = sessionStorage.getItem("linkarticle1bcremonablog");
console.log(url_art);
fetch(proxyurl + url_art)
  .then(response => response.text())
  .then(data => {
    var el = $( '<div></div>' );
el.html(data);

obj_article =$('.entry-content', el);

    });
