function handleSubmit(event) {
  event.preventDefault();
  const emailInput = document.getElementById('email-input');
  const nameInput = document.getElementById('name-input');
  const promiseMessagem = document.getElementById('subscribe-input-helper-text');
  const emailError = document.getElementById('subscribe-email-input-error');
  const nameError = document.getElementById('subscribe-name-input-error');
  const successMessage = document.getElementById('subscribe-success-message');
  const form = document.getElementById('subscribe-form');

  let isValid = true;

  // Verificar se o email é válido
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailInput.style.border = '2px solid red';
    emailError.style.display = 'flex';
    promiseMessagem.style.display = 'none';
    isValid = false;
  }

  // Verificar se o nome não está vazio
  if (nameInput.value.trim() === '' || 0 || false || undefined) {
    nameInput.style.border = '2px solid red';
    nameError.style.display = 'flex';
    isValid = false;
  }

  // Se tudo estiver válido, armazenar no localStorage e exibir mensagem de sucesso
  if (isValid) {
    localStorage.setItem('email', emailInput.value);
    localStorage.setItem('name', nameInput.value);

    successMessage.style.display = 'flex';
    form.style.display = 'none';
  }

  return isValid; // Impede o envio se houver erros
}

// Remove as mensagens de erro quando o usuário interage com o input
function removeError(field) {
  const input = document.getElementById(`${field}-input`);
  const error = document.getElementById(`subscribe-${field}-input-error`);

  input.style.border = '';
  error.style.display = 'none';
}
