function page() {
    list_el = localStorage.getItem("list_offlinepage");
    pageroot = document.getElementById("root");
    pageroot.innerHTML += list_el;
}


page()