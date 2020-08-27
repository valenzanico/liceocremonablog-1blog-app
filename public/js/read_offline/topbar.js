function topbar(titolo){
    var topbarel = document.getElementById("root");
    var topbarhtml = `
    <div class="topbar">
    <b>${titolo}</b>
    <a href="/"><button class="returnbutton">indietro</button></a>
</div>
    `;
    topbarel.innerHTML += topbarhtml;


};

export default topbar;
