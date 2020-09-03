const style = `.container-art {
  display: block;
  margin-left: 50px;
  margin-right: 0px;
  color: #bfbfbf;
  font-size: 20px


}

body {
  font-family: sans-serif;
  background-color: #054560;
}


.topbar {
  font-family: sans-serif;
  color: white;
  padding: 25px;
  font-size: 45px;
  background-color: #ea5b21;
  position: relative;
  left: -21px;
  top: -21px;
  margin: 0;
  overflow: hidden;
  width: 100%;

}

.buttonstyle {
  border-radius: 6px;
  background-color: #0583b8;
  color: white;
  padding: 8px;
  border: none;
  position: absolute;
  right: 20px;
  color: white;
  outline:none;
}

.buttonstyle:hover {
  background-color: #054560;
}


.article {
  font-family: 'Oswald', sans-serif;
  font-size: 20px;
  color:#cccccc;
}

#butsave {
  border-radius: 6px;
  background-color: #0583b8;
  color: white;
  padding: 8px;
  border: none;
  position: absolute;
  right: 100px;
  color: white;
  outline:none;
}

#butsave:hover {
  background-color: #054560;
}`

const addstyle = () => {
  var stylesheet = document.createElement("style");
  stylesheet.innerHTML += style
  document.getElementsByTagName("head")[0].appendChild(stylesheet)
}


function Article() {
  addstyle();
  const proxyurl = "https://proxy-1blogapp.herokuapp.com/";
  const url_art = sessionStorage.getItem("linkarticle1bcremonablog");
  localStorage.setItem("url_art_stor", url_art)
  sessionStorage.removeItem("titlearticle1bcremonablog");
  sessionStorage.removeItem("article_page");
  sessionStorage.removeItem("linkarticle1bcremonablog");
  const butsave = `<button id="butsave" onclick="save()">Salva l'articolo offline</button>`
  console.log(url_art);
  document.getElementById("root").innerHTML = `<header>
    <div class="topbar">
      <b>Leggi l'articolo</b>
      <button id="butsave" onclick="save()">Salva l'articolo offline</button>
      <a href="/"><button class="buttonstyle" onclick="removesession()">indietro</button></a>
    </div>
  </header><div class="lds-ring"><div></div><div></div><div></div><div>`
  fetch(proxyurl + url_art)
    .then(response => response.text())
    .then(data => {
      console.log(typeof data);
      var el = $('<div></div>');
      var art_page = el.html(data);
      let htmlpage;
      console.log($('.entry-content', art_page));
      var htmlarticle = $('.entry-content', art_page)[0].innerHTML;
      console.log(htmlarticle);
      htmlpage += `<article><div class="all-article" style="font-family: 'Oswald', sans-serif;
            font-size: 20px;
            color:#cccccc;">${htmlarticle}</div></article>`;
      var page = `<article class="article"><div class="all-article" style="font-family: 'Oswald', sans-serif;
            font-size: 20px;
            color:#cccccc;">${htmlarticle}</div></article>`;
      document.getElementById("root").innerHTML += htmlpage;
      $("#jp-post-flair").remove();
      $(".lds-ring").remove();
      sessionStorage.setItem("article_page", page);
      sessionStorage.setItem("url_art_x_offline", url_art);
    });
};

export default Article;