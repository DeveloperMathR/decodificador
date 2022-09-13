const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");

function btnCodificar() {
    const textoEscondido = codificar(inputTexto.value)
    mensagem.value = textoEscondido
}

function codificar(stringCodificada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringCodificada = stringCodificada.toLowerCase();

    for(let i= 0; i < matrizCodigo.length; i++) {
        if(stringCodificada.includes(matrizCodigo[i][0])) {
            stringCodificada = stringCodificada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringCodificada;
}

function btnDecodificar() {
    const textoDesvendado = decodificar(inputTexto.value)
    mensagem.value = textoDesvendado
}

function decodificar(stringDesvendada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesvendada = stringDesvendada.toLowerCase();

    for(let i= 0; i < matrizCodigo.length; i++) {
        if(stringDesvendada.includes(matrizCodigo[i][1])) {
            stringDesvendada = stringDesvendada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesvendada;
}

function btnCopiar() {
    navigator.clipboard.writeText(mensagem.value)
    alert("Texto copiado!")
}


