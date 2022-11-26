const counterValue = document.querySelector('#value');

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

incrementBtn.addEventListener('click', (e) => changeCounter(e));
decrementBtn.addEventListener('click', (e) => changeCounter(e));
function changeCounter(e) {
  e.target.dataset.action === 'increment'
    ? (counterValue.textContent = Number(counterValue.textContent) + 1)
    : (counterValue.textContent = Number(counterValue.textContent) - 1);
}
