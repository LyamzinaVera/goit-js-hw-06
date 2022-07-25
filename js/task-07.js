const inputEl = document.querySelector('#font-size-control');

const spanEl = document.querySelector('#text');

inputEl.addEventListener('change', onRangeMove);

function onRangeMove(event) {
    spanEl.style.fontSize = event.currentTarget.value + "px";
}