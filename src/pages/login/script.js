function handleSubmit(event) {
  event.preventDefault();
  const emailInput = document.getElementById('email-input');
  const passwordInput = document.getElementById('password-input');
  const passwordError = document.getElementById('login-password-input-error');
  const emailError = document.getElementById('login-email-input-error');

  let isValid = true;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailInput.value.trim() === '' || 0 || false || undefined) {
    emailInput.style.border = '2px solid red';
    emailError.style.display = 'flex';
    emailError.innerHTML = `
    <img src="../../assets/error.svg" alt="" aria-hidden />
                Please enter your email address
    `;
    isValid = false;
    return;
  }

  if (!emailRegex.test(emailInput.value)) {
    emailInput.style.border = '2px solid red';
    emailError.style.display = 'flex';
    isValid = false;
    emailError.innerHTML = `
    <img src="../../assets/error.svg" alt="" aria-hidden />
                Please enter a valid email address
    `;
  }

  if (passwordInput.value.trim() === '' || 0 || false || undefined) {
    passwordInput.style.border = '2px solid red';
    passwordError.style.display = 'flex';
    isValid = false;
  }

  if (isValid) {
    window.location.href = '../cards/index.html';
  }

  return isValid;
}

function removeError(field) {
  const input = document.getElementById(`${field}-input`);
  const error = document.getElementById(`login-${field}-input-error`);

  input.style.border = '';
  error.style.display = 'none';
}
