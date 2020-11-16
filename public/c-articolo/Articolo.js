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

const addstyle = () => {// add custom page style to head element
  var stylesheet = document.createElement("style");
  stylesheet.innerHTML += style
  document.getElementsByTagName("head")[0].appendChild(stylesheet)
}


function Article() {
  addstyle();
  const proxyurl = "https://proxy-1blogapp.herokuapp.com/";
  const url_art = sessionStorage.getItem("linkarticle1bcremonablog");//get link from session storage
  localStorage.setItem("url_art_stor", url_art);//set session storage to save article
  sessionStorage.removeItem("titlearticle1bcremonablog");
  sessionStorage.removeItem("article_page");
  sessionStorage.removeItem("linkarticle1bcremonablog");
  document.getElementById("root").innerHTML = `<header>
    <div class="topbar">
      <b>Leggi l'articolo</b>
      <button id="butsave" onclick="save()">Salva l'articolo offline</button>
      <a href="/"><button class="buttonstyle" onclick="removesession()">indietro</button></a>
    </div>
  </header><div class="lds-ring"><div></div><div></div><div></div><div>`//inner html top bar in root element
  fetch(proxyurl + url_art)//fetch html articlody to get the arrtcle bp
    .then(response => response.text())
    .then(data => {
      let el = document.createElement("html");
      let art_page = el.innerHTML = data;
      let htmlpage;
      let parser = new DOMParser();
      let parsedHtml = parser.parseFromString(data, 'text/html');
      let htmlarticle = parsedHtml.getElementsByClassName("entry-content")[0].innerHTML;
      htmlpage += `<article><div class="all-article" style="font-family: 'Oswald', sans-serif;
            font-size: 20px;
            color:#cccccc;">${htmlarticle}</div></article>`;
      let page = `<article class="article"><div class="all-article" style="font-family: 'Oswald', sans-serif;
            font-size: 20px;
            color:#cccccc;">${htmlarticle}</div></article>`;
      document.getElementById("root").innerHTML += htmlpage;//inner article in root element
      let jp_post_flair = document.getElementById("jp-post-flair");
      if (jp_post_flair === null) {/*pass*/ }
      else { jp_post_flair.remove() }
      document.getElementsByClassName("lds-ring")[0].remove();
      sessionStorage.setItem("article_page", page);
      sessionStorage.setItem("url_art_x_offline", url_art);
    });
};

export default Article;


