const inputElement = document.querySelector('#validation-input');
const actualLenth = Number(inputElement.dataset.length);

inputElement.addEventListener('blur', (e) => {
  const actualInputLenth = inputElement.value.length;
  if (actualLenth === actualInputLenth) {
    inputElement.classList.add('valid');
    inputElement.classList.remove('invalid');
  } else {
    inputElement.classList.add('invalid');
    inputElement.classList.remove('valid');
  }
});
