const form = document.getElementById("contact-form");
const errorContainer = document.getElementById("error-list");

const nombre = document.getElementById("name").value;
const email = document.getElementById("mail").value;
const numero = document.getElementById("numero").value;
const mensaje = document.getElementById("mensaje").value;

function validarNombre(nombre) {
  const regExName = /^[a-z A-Z]{0,20}$/;
  if (nombre.trim() === "") {
    mostrarMensaje("Por favor, ingrese su nombre.");
    return;
  } else if (!validarNombre(nombre)) {
    mostrarMensaje("Por favor, ingrese un nombre válido.");
    return;
  }
  return regExName.test(nombre);
}

function validarNumero(numero) {
  const regExNum = /^[1-9]d{9}$/;
  if (numero.trim() === "") {
    mostrarMensaje("El numero no puede estar vacio");
    return;
  } else if (!validarNumero(numero)) {
    mostrarMensaje("el numero tiene que ser sin el 0 y sin el 15");
    return;
  }
  return regExNum.test(numero);
}

function validarEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.trim() === "") {
    mostrarMensaje("Debe ingresar su e-mail");
    return;
  } else if (!validarEmail(email)) {
    mostrarMensaje("Debe ingresar un e-mail valido");
    return;
  }
  return emailRegex.test(email);
}

function mostrarMensaje(mensaje) {
  const errorElement = document.createElement("p");
  if (mensaje.trim() === "") {
    mostrarMensaje("Debe agregar un mensaje");
    return;
  }
  errorElement.textContent = mensaje;
  errorContainer.appendChild(errorElement);
}

function validarFormulario(event) {
  event.preventDefault();
  errorContainer.innerHTML = "";
}
