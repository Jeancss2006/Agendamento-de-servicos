let Escolhas = []
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
function estiloEscolha0(valor) {
    let div = document.getElementById(`div-${valor}`)
    let txt = document.getElementById(`txt${valor}`)
    div.style.border = '4px, solid, rgb(89, 83, 109)'
    div.style.background = 'rgb(89, 83, 109)'
    txt.style.background = 'rgb(89, 83, 109)'
    txt.style.color = 'white'
    txt.style.textDecoration = 'underline'
}
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
            estiloEscolha0(0)
        } break
        case 1: {
            estiloEscolha0(1)
        } break 
        case 2: {
            estiloEscolha0(2)
        } break 
        case 3: {
            estiloEscolha0(3)
        } break
        case 4: {
            estiloEscolha0(4)
        } break
        case 5: {
            estiloEscolha0(5)
        } break 
        case 6: {
            estiloEscolha0(6)
        } break
    }
    Escolhas[0] = numEscolha0
    updatetxt()
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
function estiloEscolha1(valor) {
    let div = document.getElementById(`div1-${valor}`)
    let txt = document.getElementById(`txt1-${valor}`)
    div.style.border = '4px, solid, rgb(89, 83, 109)'
    div.style.background = 'rgb(89, 83, 109)'
    txt.style.background = 'rgb(89, 83, 109)'
    txt.style.color = 'white'
    txt.style.textDecoration = 'underline'
}
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
            estiloEscolha1(0)
        } break
        case 1: {
            estiloEscolha1(1)
        } break
        case 2: {
            estiloEscolha1(2)
        } break
    }
    Escolhas[1] = numEscolha1
    updatetxt()
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
// SISTEMA DE BLOQUEIO DE DIAS
    
    divtxt.forEach(function(h1Element){
        if(h1Element.textContent === 'Domingo') {
            h1Element.style.color = 'darkgray';
            h1Element.style.textDecoration = 'line-through'
        }
        if(h1Element.textContent === 'Segunda') {
            h1Element.style.color = 'darkgray'
            h1Element.style.textDecoration = 'line-through'
        }
    });
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// SISTEMA DE ESCOLHA DE DIAS 
function estiloEscolha2(valor) {
    let div = document.getElementById(`div2-${valor - 1}`)
    let divtxt = document.getElementById(`divtxt2-${valor - 1}`)
    let escolhahora = document.querySelectorAll('.hora-escolha')
        div.style.background = 'white'
        div.style.border = '3px solid gray'
        escolhahora.forEach(div => {
            div.style.background = 'white'
            div.style.textDecoration = 'none'
        })   
}
function estiloDayBlocked() {
    let escolhahora = document.querySelectorAll('.hora-escolha')
    escolhahora.forEach(div => {
        div.style.background = 'gray'
        div.style.textDecoration = 'line-through'
        div.style.border = '2px solid gray'
    })
}
function estiloHourBlocked() {
    let escolhahora = document.querySelectorAll('.hora-escolha')
    let horaArray = Array.from(escolhahora)
    let seisHoras = horaArray.slice(-4)
    seisHoras.forEach(div =>{
        div.style.background = 'gray'
        div.style.textDecoration = 'line-through'
    })

}   
function Escolha2(numEscolha2) {
    let displayHora = document.querySelector('.container-escolha4')
    displayHora.style.display = 'block'
    let escolhadia = slide2.querySelectorAll('.dia-escolha')
    escolhadia.forEach((div, valor) => {
        div.style.background = 'gray'
        div.style.border = '4px solid rgb(148, 145, 145)'
        div.id = 'div2-' + (valor)
    })
    divtxt.forEach((h1, valor) => {
        h1.id = 'divtxt2-' + (valor)
    })
    divnum.forEach((h3,valor) => {
        h3.id = 'divnum2-' + (valor)
    })
    switch(numEscolha2) {
        case 1: {
            let divtxt2 = document.getElementById('divtxt2-0')
            if (divtxt2.textContent != 'Domingo' && divtxt2.textContent != 'Segunda') {
                estiloEscolha2(1)
                let divnum2 = document.getElementById('divnum2-0')
                Escolhas[3] = divtxt2.textContent
                Escolhas[4] = divnum2.textContent
            } else {
                numEscolha2 = 0
                estiloDayBlocked()
            }
            if (divtxt2.textContent === 'Sábado') {
                estiloHourBlocked()
            }
        } break
        case 2: {
            let divtxt2 = document.getElementById('divtxt2-1')
            if (divtxt2.textContent != 'Domingo' && divtxt2.textContent != 'Segunda') {
                estiloEscolha2(2)
                let divnum2 = document.getElementById('divnum2-1')
                Escolhas[3] = divtxt2.textContent
                Escolhas[4] = divnum2.textContent
            } else {
                numEscolha2 = 0
                estiloDayBlocked()
            }
            if (divtxt2.textContent === 'Sábado') {
                estiloHourBlocked()
            }
        } break
        case 3: {
            let divtxt2 = document.getElementById('divtxt2-2')
            if (divtxt2.textContent != 'Domingo' && divtxt2.textContent != 'Segunda') {
                estiloEscolha2(3)
                let divnum2 = document.getElementById('divnum2-2')
                Escolhas[3] = divtxt2.textContent
                Escolhas[4] = divnum2.textContent
            } else {
                numEscolha2 = 0
                estiloDayBlocked()
            }
            if (divtxt2.textContent === 'Sábado') {
                estiloHourBlocked()
            }
        } break
        case 4: {
            let divtxt2 = document.getElementById('divtxt2-3')
            if (divtxt2.textContent != 'Domingo' && divtxt2.textContent != 'Segunda') {
                estiloEscolha2(4)
                let divnum2 = document.getElementById('divnum2-3')
                Escolhas[3] = divtxt2.textContent
                Escolhas[4] = divnum2.textContent
            } else {
                numEscolha2 = 0
                estiloDayBlocked()
            }
            if (divtxt2.textContent === 'Sábado') {
                estiloHourBlocked()
            }
        } break
        case 5: {
            let divtxt2 = document.getElementById('divtxt2-4')
            if (divtxt2.textContent != 'Domingo' && divtxt2.textContent != 'Segunda') {
                estiloEscolha2(5)
                let divnum2 = document.getElementById('divnum2-4')
                Escolhas[3] = divtxt2.textContent
                Escolhas[4] = divnum2.textContent
            } else {
                numEscolha2 = 0
                estiloDayBlocked()
            }
            if (divtxt2.textContent === 'Sábado') {
                estiloHourBlocked()
            }
        } break
        case 6: {
            let divtxt2 = document.getElementById('divtxt2-5')
            if (divtxt2.textContent != 'Domingo' && divtxt2.textContent != 'Segunda') {
                estiloEscolha2(6)
                let divnum2 = document.getElementById('divnum2-5')
                Escolhas[3] = divtxt2.textContent
                Escolhas[4] = divnum2.textContent
            } else {
                numEscolha2 = 0
                estiloDayBlocked()
            }
            if (divtxt2.textContent === 'Sábado') {
                estiloHourBlocked()
            }
        } break
        case 7: {
            let divtxt2 = document.getElementById('divtxt2-6')
            if (divtxt2.textContent != 'Domingo' && divtxt2.textContent != 'Segunda') {
                estiloEscolha2(7)
                let divnum2 = document.getElementById('divnum2-6')
                Escolhas[3] = divtxt2.textContent
                Escolhas[4] = divnum2.textContent
            } else {
                estiloDayBlocked()
            }
            if (divtxt2.textContent === 'Sábado') {
                estiloHourBlocked()
            }
        } break
        case 8: {
            let divtxt2 = document.getElementById('divtxt2-7')
            if (divtxt2.textContent != 'Domingo' && divtxt2.textContent != 'Segunda') {
                estiloEscolha2(8)
                let divnum2 = document.getElementById('divnum2-7')
                Escolhas[3] = divtxt2.textContent
                Escolhas[4] = divnum2.textContent
            } else {
                numEscolha2 = 0
                estiloDayBlocked()
            }
            if (divtxt2.textContent === 'Sábado') {
                estiloHourBlocked()
            }
        } break
        case 9: {
            let divtxt2 = document.getElementById('divtxt2-8')
            if (divtxt2.textContent != 'Domingo' && divtxt2.textContent != 'Segunda') {
                estiloEscolha2(9)
                let divnum2 = document.getElementById('divnum2-8')
                Escolhas[3] = divtxt2.textContent
                Escolhas[4] = divnum2.textContent
            } else {
                numEscolha2 = 0
                estiloDayBlocked()
            }
            if (divtxt2.textContent === 'Sábado') {
                estiloHourBlocked()
            }
        } break
        case 10: {
            let divtxt2 = document.getElementById('divtxt2-9')
            if (divtxt2.textContent != 'Domingo' && divtxt2.textContent != 'Segunda') {
                estiloEscolha2(10)
                let divnum2 = document.getElementById('divnum2-9')
                Escolhas[3] = divtxt2.textContent
                Escolhas[4] = divnum2.textContent
            } else {
                numEscolha2 = 0
                estiloDayBlocked()
            }
            if (divtxt2.textContent === 'Sábado') {
                estiloHourBlocked()
            }
        } break
        case 11: {
            let divtxt2 = document.getElementById('divtxt2-10')
            if (divtxt2.textContent != 'Domingo' && divtxt2.textContent != 'Segunda') {
                estiloEscolha2(11)
                let divnum2 = document.getElementById('divnum2-10')
                Escolhas[3] = divtxt2.textContent
                Escolhas[4] = divnum2.textContent
            } else {
                numEscolha2 = 0
                estiloDayBlocked()
            }
            if (divtxt2.textContent === 'Sábado') {
                estiloHourBlocked()
            }
        } break
        case 12: {
            let divtxt2 = document.getElementById('divtxt2-11')
            if (divtxt2.textContent != 'Domingo' && divtxt2.textContent != 'Segunda') {
                estiloEscolha2(12)
                let divnum2 = document.getElementById('divnum2-11')
                Escolhas[3] = divtxt2.textContent
                Escolhas[4] = divnum2.textContent
            } else {
                numEscolha2 = 0
                estiloDayBlocked()
            }
            if (divtxt2.textContent === 'Sábado') {
                estiloHourBlocked()
            }
        } break
        case 13: {
            let divtxt2 = document.getElementById('divtxt2-12')
            if (divtxt2.textContent != 'Domingo' && divtxt2.textContent != 'Segunda') {
                estiloEscolha2(13)
                let divnum2 = document.getElementById('divnum2-12')
                Escolhas[3] = divtxt2.textContent
                Escolhas[4] = divnum2.textContent
            } else {
                numEscolha2 = 0
                estiloDayBlocked()
            }
            if (divtxt2.textContent === 'Sábado') {
                estiloHourBlocked()
            }
        } break
        case 14: {
            let divtxt2 = document.getElementById('divtxt2-13')
            if (divtxt2.textContent != 'Domingo' && divtxt2.textContent != 'Segunda') {
                estiloEscolha2(14)
                let divnum2 = document.getElementById('divnum2-13')
                Escolhas[3] = divtxt2.textContent
                Escolhas[4] = divnum2.textContent
            } else {
                numEscolha2 = 0
                estiloDayBlocked()
            }
            if (divtxt2.textContent === 'Sábado') {
                estiloHourBlocked()
            }
        } break
        case 15: {
            let divtxt2 = document.getElementById('divtxt2-14')
            if (divtxt2.textContent != 'Domingo' && divtxt2.textContent != 'Segunda') {
                estiloEscolha2(15)
                let divnum2 = document.getElementById('divnum2-14')
                Escolhas[3] = divtxt2.textContent
                Escolhas[4] = divnum2.textContent
            } else {
                numEscolha2 = 0
                estiloDayBlocked()
            }
            if (divtxt2.textContent === 'Sábado') {
                estiloHourBlocked()
            }
        } break
    }
    Escolhas[2] = numEscolha2
    updatetxt()
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////// SISTEMA DE ESCOLHAS DE HORAS

function Escolha3(numEscolha3) {
    let horas = document.querySelectorAll('.hora-escolha')
    horas.forEach((div, valor) =>{
        div.id = 'div3-' + valor
    })
    function estiloEscolha3(valor) {
        let div = document.getElementById(`div3-${valor - 1}`)
        let horas = document.querySelectorAll('.hora-escolha')
        if (div.style.background == 'white') {
            horas.forEach(div0 =>{
                div0.style.background = 'white'
                div0.style.border = '2px solid gray'
                if (div0.style.textDecoration == 'line-through') {
                    div0.style.background = 'gray'
                }
            })
            div.style.background = 'rgb(89, 83, 109)'
            div.style.border = '2px solid white'
        } else {
            horas.forEach(div0 =>{
                div0.style.background = 'white'
                div0.style.border = '2px solid gray'
                if (div0.style.textDecoration == 'line-through') {
                    div0.style.background = 'gray'
                }
            })
            numEscolha3 = 0
        }
    }
    switch(numEscolha3) {
        case 1: {
            let horasTxt = document.getElementById('div3-0')
            Escolhas[6] = horasTxt.textContent
            estiloEscolha3(1)
        } break
        case 2: {
            let horasTxt = document.getElementById('div3-1')
            Escolhas[6] = horasTxt.textContent
            estiloEscolha3(2)
        } break
        case 3: {
            let horasTxt = document.getElementById('div3-2')
            Escolhas[6] = horasTxt.textContent
            estiloEscolha3(3)
        } break
        case 4: {
            let horasTxt = document.getElementById('div3-3')
            Escolhas[6] = horasTxt.textContent
            estiloEscolha3(4)
        } break
        case 5: {
            let horasTxt = document.getElementById('div3-4')
            Escolhas[6] = horasTxt.textContent
            estiloEscolha3(5)
        } break
        case 6: {
            let horasTxt = document.getElementById('div3-5')
            Escolhas[6] = horasTxt.textContent
            estiloEscolha3(6)
        } break 
        case 7: {
            let horasTxt = document.getElementById('div3-6')
            Escolhas[6] = horasTxt.textContent
            estiloEscolha3(7)
        } break
        case 8: {
            let horasTxt = document.getElementById('div3-7')
            Escolhas[6] = horasTxt.textContent
            estiloEscolha3(8)
        } break
        case 9: {
            let horasTxt = document.getElementById('div3-8')
            Escolhas[6] = horasTxt.textContent
            estiloEscolha3(9)
        } break
        case 10: {
            let horasTxt = document.getElementById('div3-9')
            Escolhas[6] = horasTxt.textContent
            estiloEscolha3(10)
        } break
        case 11: {
            let horasTxt = document.getElementById('div3-10')
            Escolhas[6] = horasTxt.textContent
            estiloEscolha3(11)
        } break 
        case 12: {
            let horasTxt = document.getElementById('div3-11')
            Escolhas[6] = horasTxt.textContent
            estiloEscolha3(12)
        } break
        case 13: {
            let horasTxt = document.getElementById('div3-12')
            Escolhas[6] = horasTxt.textContent
            estiloEscolha3(13)
        } break 
        case 14: {
            let horasTxt = document.getElementById('div3-13')
            Escolhas[6] = horasTxt.textContent
            estiloEscolha3(14)   
        } break
        case 15: {
            let horasTxt = document.getElementById('div3-14')
            Escolhas[6] = horasTxt.textContent
            estiloEscolha3(15)
        } break
    }
    Escolhas[5] = numEscolha3
    updatetxt()
}
/////////////////////////////////////////////////////////////////////////////////////// SISTEMA DE CONFIRMAÇÃO DO PEDIDO
function updatetxt() {
    let escolha0 = document.getElementById('escolha0')
    let escolha1 = document.getElementById('escolha1')
    let escolha2 = document.getElementById('escolha2')
    let escolha3 = document.getElementById('escolha3')
    switch (Escolhas[0]) {
        case 0: {
            escolha0.innerHTML = `O <strong>serviço</strong> escolhido foi <strong>Corte & Sombrancelha </strong>`
        } break
        case 1: {
            escolha0.innerHTML = `O <strong>serviço</strong> escolhido foi <strong>Corte</strong>`
        } break
        case 2: {
            escolha0.innerHTML = `O <strong>serviço</strong> escolhido foi <strong>Corte + Barba</strong>`
        } break
        case 3: {
            escolha0.innerHTML = `O <strong>serviço</strong> escolhido foi <strong>Platinado</strong>`
        } break
        case 4: {
            escolha0.innerHTML = `O <strong>serviço</strong> escolhido foi <strong>Relaxamento</strong>`
        } break
        case 5: {
            escolha0.innerHTML = `O <strong>serviço</strong> escolhido foi <strong>Luzes</strong>`
        } break
        case 6: {
            escolha0.innerHTML = `O <strong>serviço</strong> escolhido foi <strong>Barba</strong>`
        } break
    }
    switch (Escolhas[1]) {
        case 0: {
            escolha1.innerHTML = `O <strong>cabeleleiro</strong> escolhido foi <strong> Cabeleleiro 1 </strong>`
        } break
        case 1: {
            escolha1.innerHTML = `O <strong>cabeleleiro</strong> escolhido foi <strong> Cabeleleiro 2 </strong>`
        } break
        case 2: {
            escolha1.innerHTML = `O <strong>cabeleleiro</strong> escolhido foi <strong> Cabeleleiro 3 </strong>`
        } break
    }
    if (Escolhas[2] == 0) {
        escolha2.innerHTML = '<strong>O dia escolhido está indisponível</strong>'
        escolha2.style.color = 'red'
    } else {
        escolha2.style.color = 'black'
        escolha2.innerHTML = `O serviço será realizado no <strong>dia</strong> <strong> ${Escolhas[4]} (${Escolhas[3]})`
    }
    if (Escolhas[5] == 0 || Escolhas[2] == 0) {
        escolha3.innerHTML = '<strong> Informe a hora a ser realizada o serviço </strong>'
        escolha3.style.color = 'red'
        escolha3.style.textAlign = 'left'
    } else if (Escolhas[5] !== undefined) {
        escolha3.style.color = 'black'
        escolha3.style.textAlign = 'center'
        escolha3.innerHTML = `<strong>Às</strong> <strong>${Escolhas[6]}</strong>`
    }
}



