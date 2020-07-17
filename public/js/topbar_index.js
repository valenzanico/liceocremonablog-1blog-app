function topbar(){
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
