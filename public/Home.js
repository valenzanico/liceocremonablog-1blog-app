import htmlsidenav from './Sidenav.js';
import topbar from './Topbar.js';
//questo codiceesgue il parsing del feed rss ddi 1bcremona blog per cedere i nuovi artcoli
//this code parse the rrs feed or 1bcremonablog.com to control new article
const proxyurl = "https://proxy-1blogapp.herokuapp.com/";
const rss_url = "https://www.liceocremonablog.it/feed/";
const style = `#root {
  margin: 1rem;
  display: grid;
  grid-template-columns: repeat(1, minmax(200px, 1fr));
  grid-gap: 2rem;
  background: #054560;
  border: 0;
}
body {
  border: 0;
  margin: 0;
  padding: 0;
  background: #054560;
}
.article {
  width: 100%;
  background: #ECEFF1;
  border-radius: 4px;
  overflow: hidden;
  font: 12px/1.1 system-ui, sans-serif;
  padding-left: 28px;
  padding-bottom:20px
  }

a {
    text-decoration: none;
    color: #054560;
    }

  h2 {
    margin: 0;

  }

  #openlink {
    background-color: #0583b8;
    color: white;
    border: none;
    border-radius: 6px;
    padding: 8px;
    position: relative;
    top: 15px;
    outline:none;


  }
  #openlink:hover {
    background-color: #054560;
  }
`

const addstyle = () => {
  var stylesheet = document.createElement("style");
  stylesheet.innerHTML += style
  document.getElementsByTagName("head")[0].appendChild(stylesheet)
}

function Home() {
  addstyle();
  htmlsidenav();
  topbar();
  document.getElementById("root").innerHTML += `<div class="lds-ring"><div></div><div></div><div></div><div>`
  fetch(proxyurl + rss_url)//fetch rss feeed to get articles list
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
      console.log(data);
      const items = data.querySelectorAll("item");
      let html = ``;
      items.forEach(el => {
        var linkart = el.querySelector("link").innerHTML;
        var titleart = el.querySelector("title").innerHTML;
        html += `<div class="articlecontainer">
        <div class="article">
          <h1>
          ${el.querySelector("title").innerHTML}<br>
          <a href="/leggiarticolo">  <button id="openlink" onclick="sessionStorage.setItem('linkarticle1bcremonablog', '${linkart}')">Leggi l'articolo</button></a>
            </h1>
                    </div></div>`;
      });
      html += `
        <div class="chachedelbut" align="center"><button onclick="deletecache()">Aggi0rona l'app</button></div>
        `;
      document.getElementById("root").innerHTML += html;
      document.getElementsByClassName("lds-ring")[0].remove();
    });
}

export default Home;