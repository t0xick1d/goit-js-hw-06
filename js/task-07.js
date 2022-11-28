const sizeControlRadioBtn = document.querySelector('#font-size-control');
const spanElement = document.querySelector('#text');

sizeControlRadioBtn.addEventListener('input', (e) => {
  spanElement.style.fontSize = `${e.target.value}px`;
});
