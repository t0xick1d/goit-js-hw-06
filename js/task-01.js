const categoriesEl = document.querySelectorAll('.item');
const ulEl = document.querySelector('#categories');
console.log(`Number of categoties: ${categoriesEl.length}`);
const animalEl = ulEl.firstChild;
console.log(`Category: ${categoriesEl[0].querySelector('h2').textContent}`);
console.log(`Element: ${categoriesEl[0].querySelectorAll('li').length}`);
console.log(`Category: ${categoriesEl[1].querySelector('h2').textContent}`);
console.log(`Element: ${categoriesEl[1].querySelectorAll('li').length}`);
console.log(`Category: ${categoriesEl[2].querySelector('h2').textContent}`);
console.log(`Element: ${categoriesEl[2].querySelectorAll('li').length}`);
