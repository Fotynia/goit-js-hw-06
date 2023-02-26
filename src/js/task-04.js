// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const counter = document.querySelector('#counter');
console.log(counter);
const showValue = document.querySelector('#value');
let counterValue = 0;
const btnDecr = document.querySelector('[data-action=decrement]');
const btnIncr = document.querySelector('[data-action=increment]');

btnDecr.addEventListener('click', () => {
    counterValue -= 1;
    console.log(counterValue);
    showValue.textContent = counterValue; 
});
btnIncr.addEventListener('click', () => {
    counterValue += 1;
    console.log(counterValue);
   showValue.textContent = counterValue; 
})
