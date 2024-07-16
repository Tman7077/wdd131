const form = document.getElementById("formContainer");
const donateButton = document.getElementById("donate");
const closeButton = document.getElementById("close");
function modifyForm(show) {
    if (show) {
        form.classList.remove("hidden");
        document.body.style.overflow = "hidden";
    }
    else {
        form.classList.add("hidden");
        document.body.style.overflow = "visible";
    }
}
donateButton.addEventListener("click", (e) => { modifyForm(true) });
closeButton.addEventListener("click", (e) => { modifyForm(false) });