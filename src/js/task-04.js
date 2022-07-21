let counterValue = 0;

const minusBtn = document.querySelector('[data-action="decrement"]');
const plusBtn = document.querySelector('[data-action="increment"]');
const counter = document.querySelector("#value");

const minusClick = () => {
    counterValue -= 1;

    counter.textContent = counterValue
};

const plusClick = () => {
    counterValue += 1;

    counter.textContent = counterValue
};

minusBtn.addEventListener("click", minusClick)
plusBtn.addEventListener("click", plusClick)