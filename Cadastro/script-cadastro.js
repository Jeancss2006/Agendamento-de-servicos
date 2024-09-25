// SCRIPT PARTE CADASTRO
////////////////////////////////////////////////////////////////////////////////
function clicar() {
    var senha = window.document.querySelector('input#senha');
    var conf = window.document.querySelector('input#conf');
    if (senha.value !== conf.value) {
        conf.style.border = '1px solid red'
        senha.style.border = '1px solid red'
        window.document.getElementById('mensagem').style.display = 'block'
    }
}
// SCRIPT PARTE NAO-SABE-A-SENHA
////////////////////////////////////////////////////////////////////////////////
function Cancelar() {
    window.location.href = "login.html"
}
