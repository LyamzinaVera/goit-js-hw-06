const input = document.querySelector('#validation-input');

const rightLength = input.getAttribute('data-length');
console.log(rightLength)

function onInputBlur(event) {
  if (event.target.value.length === Number(rightLength)){
   input.classList.remove("invalid");
   input.classList.add("valid");
  } else {
    input.classList.remove("valid");
   input.classList.add("invalid");
  }
}
input.addEventListener("blur", onInputBlur)