
const inputEl = document.querySelector('input#font-size-control');
const textSpan = document.querySelector('span#text');

console.log(textSpan);

function inputElSize() {
    const fontSize = inputEl.value;

    textSpan.style.fontSize = `${fontSize}px`;
}
inputEl.addEventListener('input', inputElSize)
