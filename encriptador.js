let textoEncriptado = ''; 

function validarTexto(texto) {
    const regex = /^[a-z\s.,!?]+$/; 
    return regex.test(texto) && texto.length <= 500;
}

function encriptarTexto(texto) {
    let encriptado = texto.replace(/e/g, "enter")
                          .replace(/i/g, "imes")
                          .replace(/a/g, "ai")
                          .replace(/o/g, "ober")
                          .replace(/u/g, "ufat");
    return encriptado;
}

function desencriptarTexto(texto) {
    let desencriptado = texto.replace(/enter/g, "e")
                             .replace(/imes/g, "i")
                             .replace(/ai/g, "a")
                             .replace(/ober/g, "o")
                             .replace(/ufat/g, "u");
    return desencriptado;
}

function encriptando() {
    const textoEntrada = document.querySelector('.areadetexto').value;
    if (validarTexto(textoEntrada)) {
        textoEncriptado = encriptarTexto(textoEntrada);
        mostrarResultado(textoEncriptado);
        document.querySelector('.boton-copiar').classList.add('visible'); 
        document.querySelector('.areadetexto').value = ''; 
        
        document.querySelector('.mensajebox').style.top = '5rem';
        document.querySelector('.mensajebox').style.textAlign = 'left'; 
        alert('¡Texto encriptado exitosamente!'); 
    } else {
        alert('El texto debe contener solo letras minúsculas, sin acentos, y un máximo de 500 caracteres.');
    }
}

function desencriptando() {
    const textoEntrada = document.querySelector('.areadetexto').value;
    if (textoEntrada) {
        const textoDesencriptado = desencriptarTexto(textoEntrada);
        mostrarResultado(textoDesencriptado);
        document.querySelector('.boton-copiar').classList.remove('visible'); 
        document.querySelector('.mensajebox').style.top = '5rem';
        document.querySelector('.mensajebox').style.textAlign = 'left'; 
        alert('Texto desencriptado exitosamente!');
    } else {
        alert('No hay texto para desencriptar.');
    }
}

function mostrarResultado(texto) {
    const muneco = document.querySelector('.muneco');
    const textoMensaje = document.querySelector('.texto__mensaje');
    const textoRespuesta = document.querySelector('.texto__respuesta');
    
    muneco.style.display = 'none'; 
    textoMensaje.innerText = texto; 
    textoRespuesta.innerText = ''; 
    document.querySelector('.areadetexto').value = texto; 
}

function copiarTexto() {
    const textoMensaje = document.querySelector('.texto__mensaje').innerText;
    navigator.clipboard.writeText(textoMensaje).then(() => {
        alert("Texto copiado al portapapeles!");
    });
}

function ajustarAlturaTextarea() {
    const textarea = document.querySelector('.areadetexto');
    textarea.style.height = 'auto';
    
    const alturaPx = textarea.scrollHeight;
    
    const tamañoFuenteRaizPx = 16; 
    const alturaRem = alturaPx / tamañoFuenteRaizPx;
    
    textarea.style.height = alturaRem + 'rem';
}

document.addEventListener('DOMContentLoaded', ajustarAlturaTextarea);

document.querySelector('.areadetexto').addEventListener('input', ajustarAlturaTextarea);

document.querySelector('.botones__mod1').addEventListener('click', encriptando);
document.querySelector('.botones__mod2').addEventListener('click', desencriptando);

const botonCopiar = document.createElement('button');
botonCopiar.innerText = 'Copiar';
botonCopiar.className = 'boton-copiar botones__mod2'; 
botonCopiar.addEventListener('click', copiarTexto);
document.querySelector('.respuesta').appendChild(botonCopiar);
