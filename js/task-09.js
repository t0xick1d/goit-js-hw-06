function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const currentColor = document.querySelector('.color');
const onChangeBtn = document.querySelector('.change-color');

onChangeBtn.addEventListener('click', onChangeCurrentColor);

function onChangeCurrentColor(event) {
  const createColor = getRandomHexColor();
  currentColor.textContent = createColor;
  document.body.style.backgroundColor = createColor;
}
