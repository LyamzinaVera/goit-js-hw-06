const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.getElementById("ingredients");

const elements = ingredients.map((ingreddient) => {
  const liEl = document.createElement('li');
  liEl.textContent = ingreddient;
  liEl.classList.add('item');
  return liEl;
})
ulEl.append(...elements);

console.log(ulEl);
console.log(elements);

