const nameInput = document.querySelector('#validation-input');

nameInput.addEventListener('blur', function () {
    const inputValue = nameInput.value.trim();

    const requiredLength = parseInt(nameInput.dataset.length);

    if (inputValue.length === requiredLength) {
        nameInput.classList.remove('invalid');
        nameInput.classList.add('valid')

    } else {
        nameInput.classList.remove('valid');
        nameInput.classList.add('invalid')
    }
})