function topbar(){
    var ciao = "ciao cioa"
    var topbarel = document.getElementById("root");
    var topbarhtml = `
    <div class="topbar">
    <b>1bcremonablog app</b>
    <button id="sharebut" onclick="sharepage()">Condividi</button>
</div>
    `;
    topbarel.innerHTML += topbarhtml;


};

topbar();
