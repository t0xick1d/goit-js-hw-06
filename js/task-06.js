const inputElement = document.querySelector('#validation-input');
const actualLenth = Number(inputElement.dataset.length);

inputElement.addEventListener('blur', (e) => {
  const actualInputLenth = inputElement.value.length;
  if (actualLenth <= actualInputLenth) {
    inputElement.classList.add('valid');
    inputElement.classList.contains('invalid') ? inputElement.classList.remove('invalid') : '';
  } else {
    inputElement.classList.add('invalid');
    inputElement.classList.contains('valid') ? inputElement.classList.remove('valid') : '';
  }
});
