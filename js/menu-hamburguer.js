const btnMobile = document.getElementById("btn-mobile");
const nav = document.getElementById("nav");

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();

    nav.classList.toggle('ativo');
    const ativo = nav.classList.contains("ativo");
    btnMobile.setAttribute('aria-expanded', ativo);
    btnMobile.setAttribute('aria-label', ativo ? "Fechar Menu" : "Abrir Menu");
}

function closeMenu() {
    nav.classList.remove('ativo');
    btnMobile.setAttribute('aria-expanded', false);
    btnMobile.setAttribute('aria-label', "Abrir Menu");
}

function clickMobile(event) {
    const tagName = event.target.tagName.toLowerCase();
    if (tagName === 'a' || tagName === 'ul' || tagName === 'li') {
        closeMenu();
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
nav.addEventListener('click', clickMobile);
