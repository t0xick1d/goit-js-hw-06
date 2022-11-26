const inputElement = document.querySelector('#name-input');
const actualName = document.querySelector('#name-output');

inputElement.addEventListener('input', (e) => {
  actualName.textContent = e.currentTarget.value;
  if (actualName.textContent === '') {
    actualName.textContent = 'Anonymous';
  }
});
