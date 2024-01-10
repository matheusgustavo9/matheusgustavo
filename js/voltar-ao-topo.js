const voltarAoTopo = document.querySelector(".voltar-ao-topo")

voltarAoTopo.onclick = () => {
    const scrollStep = -window.scrollY / (0.04 * 1000);
    const scrollInterval = setInterval(function() {
    if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
    } else {
        clearInterval(scrollInterval);
    }
    }, 15);
};

window.onload = () => {
    voltarAoTopo.hidden = true;
};

window.onscroll =  () => {
    voltarAoTopo.hidden = !(document.documentElement.scrollTop > 250)
}