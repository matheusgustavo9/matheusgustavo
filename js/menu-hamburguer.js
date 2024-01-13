const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
    if(event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById("nav");
    nav.classList.toggle('ativo')
    event.curretTarget.setAttribute('aria-expanded', 'true')
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);