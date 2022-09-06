const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsGroup = document.querySelector('#ingredients');

const ingrientMarkup = ingredients.map((ingredient) => {
  const ingredientLi = document.createElement('li');
  ingredientLi.classList.add('item');
  ingredientLi.textContent = ingredient;
  return ingredientLi;
})
ingredientsGroup.append(...ingrientMarkup);


