const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const boton = document.querySelector(".copiar")

/*function encriptadorDeTexto2(stringEncriptada){
    stringEncriptada = stringEncriptada.toLowerCase();
    let cadena = ""
    for(let i = 0; i<string.length; i++){
        if(string[i] === "e"){
            cadena += "enter";
        }
        else if(string[i] === "i"){
            cadena += "imes";
        }
        else if(string[i] === "a"){
            cadena += "ai"
        }
        else if(string[i] === "o"){
            cadena += "ober";
        }
        else if(string[i] === "u"){
            cadena += "ufat"
        }
        else{cadena += string[i]}
    }
    return cadena
}*/

function btnEncriptar(){
    const textoEncriptado = encriptadorDeTexto(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptadorDeTexto(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i<matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptadorDeTexto(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
}

function desencriptadorDeTexto(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i<matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

boton.addEventListener("click", function() {
    
    const textArea = document.querySelector(".mensaje");
    textArea.select();
    textArea.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
});


