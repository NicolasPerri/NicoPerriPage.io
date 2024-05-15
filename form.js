const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const mailInput = document.querySelector('#mail');
const msgInput = document.querySelector('#msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (nameInput.validity.valid && mailInput.validity.valid && msgInput.validity.valid) {
    alert('Formulario válido!');
  } else {
    alert('Por favor, complete los campos correctamente.');
  }
});

//* Dealing with Input width
let el = document.querySelector(".input-wrap .input");
let widthMachine = document.querySelector(".input-wrap .width-machine");
el.addEventListener("keyup", () => {
  widthMachine.innerHTML = el.value;
});

// Dealing with Textarea Height
function calcHeight(value) {
  let numberOfLineBreaks = (value.match(/\n/g) || []).length;
  // min-height + lines x line-height + padding + border
  let newHeight = 20 + numberOfLineBreaks * 20 + 12 + 2;
  return newHeight;
}

let textarea = document.querySelector(".comment");
textarea.addEventListener("keyup", () => {
  textarea.style.height = calcHeight(textarea.value) + "px";
});
