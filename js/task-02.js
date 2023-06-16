const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.getElementById("ingredients");

ingredients.forEach(function (ingreddient) {
  const liEl = document.createElement('li');
  liEl.textContent = ingreddient;
  liEl.classList.add('item');
  ulEl.appendChild(liEl);
})

console.log(ulEl);


