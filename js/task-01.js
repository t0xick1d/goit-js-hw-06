const categoriesEl = document.querySelectorAll('.item');
const ulEl = document.querySelector('#categories');
const animalEl = ulEl.firstChild;

console.log(`Number of categoties: ${categoriesEl.length}`);

categoriesEl.forEach((e) => {
  console.log(`Category: ${e.querySelector('h2').textContent}`);
  console.log(`Element: ${e.querySelectorAll('li').length}`);
});