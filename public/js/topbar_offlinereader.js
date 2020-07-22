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

topbar();
