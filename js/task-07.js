const sizeControlRadioBtn = document.querySelector('#font-size-control');
const spanElement = document.querySelector('#text');

sizeControlRadioBtn.addEventListener('input', (e) => {
  const actuelFonstSize = Number(e.target.value);
  spanElement.style.fontSize = `${actuelFonstSize}px`;
});
