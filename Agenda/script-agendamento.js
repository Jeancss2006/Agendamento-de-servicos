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
//////////////////////////////////////////////////////////////////////////////////////////////////
// SISTEMAS DE SLIDES DIAS
    document.getElementById('anterior-dia').addEventListener('click', moveleft2)
    document.getElementById('posterior-dia').addEventListener('click', moveright2)
    var slide2 = document.querySelector('div#dia-escolha')
    var totalslides2 = slide2.querySelectorAll('div').length;
    var slideWidth2 = slide2.clientWidth;
    var acumulador2 = 0
    var divtxt = slide2.querySelectorAll('h1')
    var divnum = slide2.querySelectorAll('h3')
    var Datanum = new Date().getDate();
    var Datatxt = new Date().getDay();
    var mesnum = new Date().getMonth();
    var anonum = new Date().getFullYear();
    function moveright2() {
        if (acumulador2 < totalslides2 - 3){
            acumulador2 += 1
        }
        if (acumulador2 <= totalslides2 - 3) {
            if (slideWidth2 >= 785) {
                slide2.style.transform = `translateX(${-acumulador2 * (slideWidth2 / 5)}px)`
            } else {
                slide2.style.transform = `translateX(${-acumulador2 * (slideWidth2 / 3)-8}px)`
            }
        }
    }
    function moveleft2() {
        acumulador2 -= 1
        if (acumulador2 <= totalslides2 - 3 && acumulador2 >= 0) {
            if (slideWidth2 >= 785) {
                slide2.style.transform = `translateX(${-acumulador2 * (slideWidth2 / 5)}px)`
            } else {
                slide2.style.transform = `translateX(${-acumulador2 * (slideWidth2 / 3)-8}px)`
            }
        } else if (acumulador2 == -1) {
            acumulador2 = (totalslides2 - 3)
            if (slideWidth2 >= 785) {
                slide2.style.transform = `translateX(${-acumulador2 * (slideWidth2 / 5)}px)`
            } else {
                slide2.style.transform = `translateX(${-acumulador2 * (slideWidth2 / 3)-8}px)`
            }
        }
    }
///////////////////////////////////////////////////////////////////////////////////////
// VALIDADOR DE DIAS NUMERO
    var contador = 1
    divnum.forEach((h3, valor) => {
        if (mesnum == 0 || mesnum == 2 || mesnum == 4 || mesnum == 6 || mesnum == 7 || mesnum == 9 || mesnum == 11) {
            if (Datanum + (valor) <= 31) {
                h3.innerHTML = Datanum + (valor)
            }
            if (Datanum + (valor) > 31){
                if (contador < 10) {
                h3.innerHTML = '0' + (contador)
                } else {
                    h3.innerHTML = (contador)
                }
                contador += 1
            }    
        } else if (mesnum != 1) {
            if (Datanum + (valor) <= 30) {
                h3.innerHTML = Datanum + (valor)
            }
            if (Datanum + (valor) > 30) {
                if (contador < 10) {
                    h3.innerHTML = '0' + (contador)
                } else {
                    h3.innerHTML = (contador)
                }
                contador += 1
            }
        } else {
            if (anonum % 4 == 0) {
                if (Datanum + (valor) <= 29) {
                    h3.innerHTML = Datanum + (valor)
                }
                if (Datanum + (valor) > 29) {
                    if (contador < 10) {
                        h3.innerHTML = '0' + (contador)
                    } else {
                        h3.innerHTML = (contador)
                    }
                    contador += 1
                }
            } else {
                if (Datanum + (valor) <= 28) {
                    h3.innerHTML = Datanum + (valor)
                }
                if (Datanum + (valor) > 28) {
                    if (contador < 10) {
                        h3.innerHTML = '0' + (contador)
                    } else {
                        h3.innerHTML = (contador)
                    }
                    contador += 1
                }
            }
            
        }   
            
    })
///////////////////////////////////////////////////////////////////////////////////////
// VALIDADOR DE DIAS TXT
    contador = 0
    divtxt.forEach((h1, valor) => {
        if (Datatxt + (valor) < 7) {
            switch (Datatxt + (valor)){
                case 0: {
                    h1.innerHTML = 'Domingo'
                } break
                case 1: {
                    h1.innerHTML = 'Segunda'
                } break
                case 2: {
                    h1.innerHTML = 'Terça'
                } break
                case 3: {
                    h1.innerHTML = 'Quarta'
                } break
                case 4: {
                    h1.innerHTML = 'Quinta'
                } break
                case 5: {
                    h1.innerHTML = 'Sexta'
                } break
                case 6: {
                    h1.innerHTML = 'Sábado'
                } break
            }   
        } else {
            switch (contador) {
                case 0: {
                    h1.innerHTML = 'Domingo'
                    contador++
                } break
                case 1: {
                    h1.innerHTML = 'Segunda'
                    contador++
                } break
                case 2: {
                    h1.innerHTML = 'Terça'
                    contador++
                } break
                case 3: {
                    h1.innerHTML = 'Quarta'
                    contador++
                } break
                case 4: {
                    h1.innerHTML = 'Quinta'
                    contador++
                } break
                case 5: {
                    h1.innerHTML = 'Sexta'
                    contador++
                } break
                case 6: {
                    h1.innerHTML = 'Sábado'
                    contador = 0
                } break
            }
        }
            
    })
///////////////////////////////////////////////////////////////////////////////////////////////
// SISTEMA DE ESCOLHA DIAS


