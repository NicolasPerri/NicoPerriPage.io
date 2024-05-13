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

