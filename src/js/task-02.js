const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, який для кожного елемента масиву ingredients:
// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredientsList = document.querySelector('#ingredients');
const firstItem = document.createElement('li');
firstItem.textContent = 'Potatoes';
firstItem.classList.toggle('item');
const secondItem = document.createElement('li');
secondItem.textContent = 'Mushrooms';
secondItem.classList.toggle('item');
const thirdItem = document.createElement('li');
thirdItem.textContent = 'Garlic';
thirdItem.classList.toggle('item');
const fourthItem = document.createElement('li');
fourthItem.textContent = 'Tomatos';
fourthItem.classList.toggle('item');
const fifthItem = document.createElement('li');
fifthItem.textContent = 'Herbs';
fifthItem.classList.toggle('item');
const sixthItem = document.createElement('li');
sixthItem.textContent = 'Condiments';
sixthItem.classList.toggle('item');
ingredientsList.append(firstItem, secondItem, thirdItem, fourthItem, fifthItem, sixthItem);
console.log(ingredientsList);