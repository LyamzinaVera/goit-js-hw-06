const nameInput = document.querySelector('input#name-input');
const nameOutput = document.querySelector('span#name-output');

function nameInputChange () {
    const inputValue = nameInput.value.trim();

    if (inputValue === '') {
        nameOutput.textContent = 'Anonymous';
    } else {
        nameOutput.textContent = inputValue;
    }
};

nameInput.addEventListener('input', nameInputChange)