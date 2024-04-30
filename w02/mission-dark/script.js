const body = document.body;
const themeSelector = document.getElementById("theme");
const logo = document.getElementById("logo");
function changeTheme() {
    if (themeSelector.value=="dark") {
        body.classList.add("dark");
        logo.src="byui-logo_dark.png";
    }
    else {
        body.classList.remove("dark");
        logo.src="byui-logo_light.webp";
    }
};
themeSelector.addEventListener('change', e => changeTheme());