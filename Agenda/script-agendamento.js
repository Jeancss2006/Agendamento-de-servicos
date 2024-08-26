// SISTEMA DE SLIDES
    document.getElementById('anterior').addEventListener('click', moveleft)
    document.getElementById('posterior').addEventListener('click', moveright)
    var slide = document.querySelector('div#serviço-escolha')
    var totalslides = slide.querySelectorAll('img').length;
    var slideWidth = slide.clientWidth;
    var acumulador = 0

    function moveright() {
    acumulador += 1
    if(acumulador <= totalslides - 1) { 
        slide.style.transform = `translateX(${-acumulador * slideWidth}px)`
    } else if(acumulador == totalslides) {
        acumulador = 0
        slide.style.transform = `translateX(${-acumulador * slideWidth}px)`
    }
    }
    function moveleft() {
    acumulador -= 1
    if(acumulador >= 0) {
        slide.style.transform = `translateX(${-acumulador * slideWidth}px)`
    } else if(acumulador == -1) {
        acumulador = (totalslides - 1)
        slide.style.transform = `translateX(${-acumulador * slideWidth}px)`
    }
    }
// SISTEMA DE ESCOLHA
    function Escolha(numEscolha) {
        let escolha1 = document.getElementById('serv0')
        let teste = document.getElementById('serviço-escolha')
        let teste1 = teste.querySelectorAll('.escolhatxt')
        teste1.forEach((div, valor) => {
            div.id = 'div-' + (valor + 1)
        });
        if (numEscolha == 0) {
            let div1 = document.getElementById('div-1')
            div1.style.border = '3px, solid, gray'
            div1.style.background = 'gray'
            div1.style.color = 'white'
        }
        
}
