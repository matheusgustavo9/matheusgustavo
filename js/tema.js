const trocarTemaBtn = document.querySelector("#chk-tema");

// Toggle light mode
function toogleLightMode() {
    document.body.classList.toggle("light");
}

// Load light or dark mode
function loadTheme() {
    const lightMode = localStorage.getItem("light")

    if(lightMode) {
        toogleLightMode();
    }
}
loadTheme()

trocarTemaBtn.addEventListener("change", function() {
    toogleLightMode();

    // Save or remove light mode

    localStorage.removeItem("light")

    if(document.body.classList.contains("light")) {
        localStorage.setItem("light", 1);
    }
});