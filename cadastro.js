const registro = {
    "Nome": {
        "name": "nome",
        "type": "text",
        "tag": "fa-regular fa-user"
    },
    "Data de nascimento": {
        "name": "Data de nascimento",
        "type": "date",
        "tag": "fa-regular fa-calendar"
    },
    "CPF": {
        "name": "CPF",
        "type": "text",
        "tag": "fa-regular fa-id-card"
    },
    "telefone": {
        "name": "telefone",
        "type": "text",
        "tag": "fa-solid fa-phone"
    },
    "CEP": {
        "name": "CEP",
        "type": "text",
        "tag": "fa-solid fa-earth-americas"
    },
    "UF": {
        "name": "UF",
        "type": "text",
        "tag": "fa-solid fa-earth-americas" 
    },
    "País": {
        "name": "País",
        "type": "text",
        "tag": "fa-solid fa-earth-americas" 
    },
    "Endereço": {
        "name": "Endereço",
        "type": "text",
        "tag": "fa-solid fa-house" 
    },
    "Número": {
        "name": "Número",
        "type": "text",
        "tag": "fa-solid fa-house" 
    },
    "E-mail": {
        "name": "E-mail",
        "type": "email",
        "tag": "fa-regular fa-envelope"
    },
    "Senha": {
        "name": "Senha",
        "type": "password",
        "tag": "fa-solid fa-lock"
    },
    "Confirmar Senha" : {
        "name": "Confirmar Senha",
        "type": "password",
        "tag": "fa-solid fa-lock"
    }
}

const registros = document.getElementById("formularioRegistro");
let formHTML = '<form>';

for (const chave in registro) {
    const elemento = registro[chave];
  
    formHTML += `<label for="${elemento.name}"><i class="${elemento.tag}"></i>${elemento.name}: </label>
    <input type="${elemento.type}" name="${elemento.name}" id="${elemento.name}" required>`;
  }

formHTML += '</form>';
registros.innerHTML = formHTML;
