
const inputEl = document.querySelector('input#font-size-control');
const textSpan = document.querySelector('span#text');

console.log(textSpan);

inputEl.addEventListener('input', function () {
    const fontSize = inputEl.value;

    textSpan.style.fontSize = `${fontSize}px`;
})