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

function handleResize() {
    if (window.innerWidth > 1000) {
        nav.classList.remove("hidden");
    } else {
        nav.classList.add("hidden");
    }
}
window.addEventListener("resize", handleResize());
handleResize();

const viewer = document.getElementsByClassName("viewer")[0];
gallery.onclick = (event) => {
    const clickedImage = event.target;
    const newSrc = clickedImage.getAttribute("src").split("-")[0] + "-full.jpeg";
    const newAlt = clickedImage.getAttribute("alt") + "big";
    viewer.querySelector("& img").setAttribute("src", newSrc);
    viewer.querySelector("& img").setAttribute("alt", newAlt);
    viewer.classList.remove("hidden");
};

const closeViewer = document.getElementById("close-viewer");
closeViewer.onclick = (event) => {
    viewer.classList.add("hidden");
};