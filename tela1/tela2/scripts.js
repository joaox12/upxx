class Validator {

  constructor() {
  }

  validate(form) {
    this.clearPreviousValidations(form);

    const inputs = form.getElementsByTagName('input');
    const inputsArray = [...inputs];
    let isValid = true;

    inputsArray.forEach(input => {
      // Não há mais validações
    });

    this.validateFileInput(form);

    return isValid;
  }

  clearPreviousValidations(form) {
    const currentValidations = form.querySelectorAll('.error-validation');
    currentValidations.forEach(validation => validation.remove());
  }

  printMessage(input, msg) {
    const errorsQty = input.parentNode.querySelector('.error-validation');
    if (errorsQty === null) {
      const template = document.querySelector('.error-validation').cloneNode(true);
      template.textContent = msg;
      const inputParent = input.parentNode;
      template.classList.remove('template');
      inputParent.appendChild(template);
    }
  }

  validateFileInput(form) {
    const uploadInput = form.querySelector('#attachment');
    if (uploadInput && uploadInput.files.length === 0) {
      alert("Anexo necessário");
      uploadInput.focus();
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('register-form');
  const successMessage = document.getElementById('success-message');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const validator = new Validator();
    const isValid = validator.validate(form);

    if (isValid) {
      successMessage.textContent = 'Formulário enviado com sucesso!';
      // Aqui você pode adicionar lógica adicional, como enviar o formulário para o servidor.
    }
  });
});
