// Obtener los elementos del DOM
let btnEncriptar = document.getElementById("btn-encriptar");
let btnCopiar = document.getElementById("btn-copiar");
let btnDescifrar = document.getElementById("btn-descifrar");

// Agregar eventos a los botones
btnEncriptar.addEventListener("click", encriptar);
btnCopiar.addEventListener("click", copiar);
btnDescifrar.addEventListener("click", descifrar);

// Función para encriptar el mensaje
function encriptar() {
  let texto = document.getElementById("texto").value;
  let resultado = "";

  for (let i = 0; i < texto.length; i++) {
    let letra = texto.charAt(i);

    switch (letra) {
      case "e":
        resultado += "enter";
        break;
      case "i":
        resultado += "imes";
        break;
      case "a":
        resultado += "ai";
        break;
      case "o":
        resultado += "ober";
        break;
      case "u":
        resultado += "ufat";
        break;
      default:
        resultado += letra;
        break;
    }
  }

  document.getElementById("resultado").value = resultado;
}

// Función para descifrar el mensaje
function descifrar() {
  let mensajeEncriptado = document.getElementById("resultado").value;
  let resultado = "";

  resultado = mensajeEncriptado.replace(/enter/g, "e");
  resultado = resultado.replace(/imes/g, "i");
  resultado = resultado.replace(/ai/g, "a");
  resultado = resultado.replace(/ober/g, "o");
  resultado = resultado.replace(/ufat/g, "u");

  document.getElementById("resultado").value = resultado;
}

// Función para copiar el mensaje encriptado al portapapeles
function copiar() {
  let mensajeEncriptado = document.getElementById("resultado").value;
  navigator.clipboard.writeText(mensajeEncriptado);
}
