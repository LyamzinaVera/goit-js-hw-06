const input = document.querySelector('#name-input');
// console.log(input)
const nameInput = document.querySelector('#name-output');
// console.log(nameInput)
 
function onInputAction(event){
    const valueInput = event.currentTarget.valueInput;
    // console.log(valueInput)

    if (valueInput === '') {
        return nameInput.textContent = 'Anonymous'
    }
    nameInput.textContent = valueInput;
}

input.addEventListener('input', onInputAction)