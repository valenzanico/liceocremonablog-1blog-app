function topbar() {
    var topbarel = document.getElementById("root");
    var topbarhtml = `
    <div class="topbar">
    <button id="opennavbtn" onclick="openNav()">&#9776; Menù</button>
    <b>liceocremonablog app</b>
</div>
    `;
    topbarel.innerHTML += topbarhtml;


};

export default topbar;