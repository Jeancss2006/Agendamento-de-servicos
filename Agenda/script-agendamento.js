// SISTEMA DE SLIDES SERVIÇO
    document.getElementById('anterior').addEventListener('click', moveleft0)
    document.getElementById('posterior').addEventListener('click', moveright0)
    var slide0 = document.querySelector('div#serviço-escolha')
    var totalslides0 = slide0.querySelectorAll('img').length;
    var slideWidth0 = slide0.clientWidth;
    var acumulador0 = 0
    
    function moveright0() {
    acumulador0 += 1
    if(acumulador0 < (totalslides0 - 1)/2) { 
        slide0.style.transform = `translateX(${-acumulador0 * slideWidth0}px)`
    } else if (acumulador0 == (totalslides0 - 1)/2) {
        slide0.style.transform = `translateX(${(-acumulador0 * slideWidth0) + slideWidth0 / 2}px)`
    } else if(acumulador0 == (totalslides0 + 1)/ 2) {
        acumulador0 = 0
        slide0.style.transform = `translateX(${-acumulador0 * slideWidth0}px)`
    }
    }
    function moveleft0() {
    acumulador0 -= 1
    if(acumulador0 >= 0) {
        slide0.style.transform = `translateX(${-acumulador0 * slideWidth0}px)`
    } else if(acumulador0 == -1) {
        acumulador0 = ((totalslides0 - 1)/2)
        slide0.style.transform = `translateX(${(-acumulador0 * slideWidth0) + slideWidth0 / 2}px)`
    }
    }
//////////////////////////////////////////////////////////////////////////////////////////////////
// SISTEMA DE SLIDES PROFISSIONAL
    document.getElementById('anterior-cabe').addEventListener('click', moveleft1)
    document.getElementById('posterior-cabe').addEventListener('click', moveright1)
    var slide1 = document.querySelector('div#cabeleleiro-escolha')
    var totalslides1 = slide1.querySelectorAll('img').length;
    var slideWidth1 = slide1.clientWidth;
    var acumulador1 = 0
    function moveright1() {
        acumulador1 += 1
        if (acumulador1 <= totalslides1 - 1) {
            slide1.style.transform = `translateX(${-acumulador1 * slideWidth1}px)`
        } else if (acumulador1 == totalslides1) {
            acumulador1 = 0
            slide1.style.transform = `translateX(${-acumulador1 * slideWidth1}px)`
        }
    }
    function moveleft1() {
        acumulador1 -= 1
        if (acumulador1 >= 0) {
            slide1.style.transform = `translateX(${-acumulador1 * slideWidth1}px)`
        } else if (acumulador1 == -1) {
            acumulador1 = (totalslides1 - 1)
            slide1.style.transform = `translateX(${-acumulador1 * slideWidth1}px)`
        }
    }
//////////////////////////////////////////////////////////////////////////////////////////////////
// SISTEMAS DE ESCOLHA DIAS


//////////////////////////////////////////////////////////////////////////////////////////////////
// SISTEMA DE ESCOLHA SERVIÇO
    function Escolha0(numEscolha0) {
        
        let servDiv = document.getElementById('serviço-escolha')
        let escolha = servDiv.querySelectorAll('.escolha')
        let escolhatxt = document.querySelectorAll('.escolhatxt')
        escolha.forEach((div, valor) => {
            div.id = 'div-' + (valor)
        });
        escolha.forEach(div => {
            div.style.border = '2px solid white';
            div.style.background = 'white';
        })
        escolhatxt.forEach(div => {
            div.style.background = 'white';
            div.style.color = 'black';
            div.style.textDecoration = 'none';
        })
        switch (numEscolha0) {
            case 0: {
                let div0 = document.getElementById('div-0')
                let txt0 = document.getElementById('txt0')
                div0.style.border = '4px, solid, rgb(89, 83, 109)'
                div0.style.background = 'rgb(89, 83, 109)'
                txt0.style.background = 'rgb(89, 83, 109)'
                txt0.style.color = 'white'
                txt0.style.textDecoration = 'underline'
            } break
            case 1: {
                let div1 = document.getElementById('div-1')
                let txt1 = document.getElementById('txt1')
                div1.style.border = '4px, solid, rgb(89, 83, 109)'
                div1.style.background = 'rgb(89, 83, 109)'
                txt1.style.background = 'rgb(89, 83, 109)'
                txt1.style.color = 'white'
                txt1.style.textDecoration = 'underline'
            } break 
            case 2: {
                let div2 = document.getElementById('div-2')
                let txt2 = document.getElementById('txt2')
                div2.style.border = '4px, solid, rgb(89, 83, 109)'
                div2.style.background = 'rgb(89, 83, 109)'
                txt2.style.background = 'rgb(89, 83, 109)'
                txt2.style.color = 'white'
                txt2.style.textDecoration = 'underline'
            } break 
            case 3: {
                let div3 = document.getElementById('div-3')
                let txt3 = document.getElementById('txt3')
                div3.style.border = '4px, solid, rgb(89, 83, 109)'
                div3.style.background = 'rgb(89, 83, 109)'
                txt3.style.background = 'rgb(89, 83, 109)'
                txt3.style.color = 'white'
                txt3.style.textDecoration = 'underline'
            } break
            case 4: {
                let div4 = document.getElementById('div-4')
                let txt4 = document.getElementById('txt4')
                div4.style.border = '4px, solid, rgb(89, 83, 109)'
                div4.style.background = 'rgb(89, 83, 109)'
                txt4.style.background = 'rgb(89, 83, 109)'
                txt4.style.color = 'white'
                txt4.style.textDecoration = 'underline'
            } break
            case 5: {
                let div5 = document.getElementById('div-5')
                let txt5 = document.getElementById('txt5')
                div5.style.border = '4px, solid, rgb(89, 83, 109)'
                div5.style.background = 'rgb(89, 83, 109)'
                txt5.style.background = 'rgb(89, 83, 109)'
                txt5.style.color = 'white'
                txt5.style.textDecoration = 'underline'
            } break 
            case 6: {
                let div6 = document.getElementById('div-6')
                let txt6 = document.getElementById('txt6')
                div6.style.border = '4px, solid, rgb(89, 83, 109)'
                div6.style.background = 'rgb(89, 83, 109)'
                txt6.style.background = 'rgb(89, 83, 109)'
                txt6.style.color = 'white'
                txt6.style.textDecoration = 'underline'
            } break
        }
        
}
//////////////////////////////////////////////////////////////////////////////////////////////////
// SISTEMA DE ESCOLHAS PROFISSIONAL
    function Escolha1 (numEscolha1) {
        let funcDiv = document.getElementById('cabeleleiro-escolha')
        let escolhafunc = funcDiv.querySelectorAll('.escolha-cabe')
        let escolhafunctxt = document.querySelectorAll('.escolha-cabetxt')
        escolhafunc.forEach((div, valor) =>{
            div.id = 'div1-' + (valor)
        });
        escolhafunc.forEach(div => {
            div.style.border = '2px solid white';
            div.style.background = 'white';
        })
        escolhafunctxt.forEach(div => {
            div.style.background = 'white';
            div.style.color = 'black';
            div.style.textDecoration = 'none';
        })
        switch(numEscolha1) {
            case 0: {
                let div0 = document.getElementById('div1-0')
                let txt0 = document.getElementById('txt1-0')
                div0.style.border = '4px, solid, rgb(89, 83, 109)'
                div0.style.background = 'rgb(89, 83, 109)'
                txt0.style.background = 'rgb(89, 83, 109)'
                txt0.style.color = 'white'
                txt0.style.textDecoration = 'underline'
            } break
            case 1: {
                let div1 = document.getElementById('div1-1')
                let txt1 = document.getElementById('txt1-1')
                div1.style.border = '4px, solid, rgb(89, 83, 109)'
                div1.style.background = 'rgb(89, 83, 109)'
                txt1.style.background = 'rgb(89, 83, 109)'
                txt1.style.color = 'white'
                txt1.style.textDecoration = 'underline'
            } break
            case 2: {
                let div2 = document.getElementById('div1-2')
                let txt2 = document.getElementById('txt1-2')
                div2.style.border = '4px, solid, rgb(89, 83, 109)'
                div2.style.background = 'rgb(89, 83, 109)'
                txt2.style.background = 'rgb(89, 83, 109)'
                txt2.style.color = 'white'
                txt2.style.textDecoration = 'underline'
            } break
        }
    }
