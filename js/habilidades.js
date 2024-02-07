function mostrarDescricaoDaHabilidade(){
    const iconeDaHabilidade = document.querySelectorAll('.icon-habilidade .box-hbld')
    const descricaoMostrarHabilidade = document.querySelectorAll('.descricao')
    const descricaoDaHabilidade = document.querySelectorAll('.sobre-habilidade article')

    if(iconeDaHabilidade.length && descricaoDaHabilidade.length){
        let msg = '/* Passe o mouse por cima de alguma habilidade */' 
        if (window.innerWidth <= 860){
            msg = '/* Clique em alguma habilidade */'
        } 

        descricaoMostrarHabilidade[0].innerHTML = msg

        function activeTab(index) {
            descricaoDaHabilidade.forEach(item => {
                item.classList.remove('ativo')
            });

            descricaoDaHabilidade[index].classList.add('ativo')    
        }

        iconeDaHabilidade.forEach((itemMenu, index) => {
            itemMenu.addEventListener('mouseover', function(){
                activeTab(index)
                descricaoMostrarHabilidade[0].innerHTML = ''         
            }) 
        })

        iconeDaHabilidade.forEach((itemMenu, index) => {
            itemMenu.addEventListener('mouseout', function(){
                activeRemove(index)
                descricaoMostrarHabilidade[0].innerHTML = msg 
            })
        })

        function activeRemove() {
            descricaoDaHabilidade.forEach(item => {
                item.classList.remove('ativo')
            });    
        }
    }
}
mostrarDescricaoDaHabilidade()