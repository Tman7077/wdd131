const menubutton = document.getElementById("menu-button");
const nav = document.getElementById("navbar");
menubutton.onclick = (event) => {
    if (nav.classList.contains("hidden")) {
        nav.classList.remove("hidden");
    }
    else {
        nav.classList.add("hidden");
    }
};