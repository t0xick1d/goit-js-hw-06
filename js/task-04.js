const counterValue = document.querySelector('#value');

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

incrementBtn.addEventListener('click', (e) => changeCounter(e));
decrementBtn.addEventListener('click', (e) => changeCounter(e));

let count = 0;

function changeCounter(e) {
  e.target.dataset.action === 'increment' ? (count += 1) : (count -= 1);
  counterValue.textContent = count;
}
