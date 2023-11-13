var login = "yan@gmail.com";
var senha = "1234";


const entrar = document.getElementById("btnentrar").addEventListener("click", logar);

function logar(){
    let email = document.querySelector("#campo__email").value;
    let pass = document.querySelector("#campo__senha").value;

    let validarEmail = document.getElementById("campo__email");
    let validarSenha = document.getElementById("campo__senha");

    if (email === ""){
        validarEmail.classList.add("campo__caixaTextoError"); 
        alert("O e-mail é obrigátorio.");
    }else if(pass === "" ){
        alert("A senha é obrigatória.");
        validarEmail.classList.remove("campo__caixaTextoError");
        validarSenha.classList.add("campo__caixaTextoError");
    }else if(login != email || senha != pass){
        alert("E-mail não cadastrado ou senha incorreta");
        validarEmail.classList.add("campo__caixaTextoError");
        validarSenha.classList.add("campo__caixaTextoError");
    }else {
        window.location.href="main.html";
    }
}

function mostrarSenha() {
    var senha = document.getElementById("campo__senha");

    if(senha.type === 'password'){
        senha.type = 'text';
    }else {
        senha.type = 'password';
    }
}


