// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input),
//     підставляє його поточне значення в span#name - output.
//  Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const textJnput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

textJnput.addEventListener('input', handleInputChange);
function handleInputChange(event) {
    nameOutput.textContent = event.currentTarget.value;
    if (event.currentTarget.value.trim() === '') {
        nameOutput.textContent = 'Anonymous';
    }
};