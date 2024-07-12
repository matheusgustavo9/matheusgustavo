const voltarAoTopo = document.querySelector(".voltar-ao-topo");

voltarAoTopo.addEventListener('click', () => {
    const passoDeRolagem = -window.scrollY / (0.04 * 1000);
    const tempoDeIntervalo = setInterval(function() {
        if (window.scrollY !== 0) {
            window.scrollBy(0, passoDeRolagem);
        } else {
            clearInterval(tempoDeIntervalo);
        }
    }, 15);
});

window.onload = () => {
    voltarAoTopo.classList.add('hidden');
};

window.onscroll =  () => {
    voltarAoTopo.hidden = !(document.scrollTop > 200)
    if(window.scrollY >= 200) {
        voltarAoTopo.classList.remove('hidden')
    } else {
        voltarAoTopo.classList.add('hidden');
    }
}