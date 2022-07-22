const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientList = document.querySelector('#ingredients');

const ingredientEl = ingredients.map((element) => {
  const listEl = document.createElement('li');
  listEl.textContent = element;
  listEl.classList.add("item");

  return listEl;
})

ingredientList.append(...ingredientEl);
console.log(ingredientList);
  
  




