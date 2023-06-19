let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counterValueEl = document.querySelector('#value');

function updatecounterValue() {
    counterValueEl.textContent = counterValue;
}

function decrement() {
    counterValue -= 1;
    updatecounterValue();
};

function increment() {
    counterValue += 1;
    updatecounterValue();
};

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);