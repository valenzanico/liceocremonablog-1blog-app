function topbar(){
    var topbarel = document.getElementById("root");
    var topbarhtml = `
    <div class="topbar">
    <b>articoli salvati</b>
    <a href="/"><button class="returnbutton">indietro</button></a>
</div>
    `;
    topbarel.innerHTML += topbarhtml;


};

const style = `.topbar {
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

  
button {
    border-radius: 6px;
    background-color: #0583b8;
    color: white;
    padding: 8px;
    border: none;
    outline:none;
}
  
button:hover {
    background-color: #054560;
}

body {
    background-color: #054560;
}
#listbut {
    margin-top: 5%;
}

#listbut:hover {
    background-color: #07597c;
}

article {
    font-family: 'Oswald', sans-serif;
    font-size: 20px;
    color:#cccccc;
}`

const addstyle = () => {
    var stylesheet = document.createElement("style");
    stylesheet.innerHTML += style
    document.getElementsByTagName("head")[0].appendChild(stylesheet)
  }

function Offlinearticle() {
    addstyle();
    topbar();
    var list_el = localStorage.getItem("list_offlinepage");
    var pageroot = document.getElementById("root");
    pageroot.innerHTML += list_el;
}


export default Offlinearticle;