const inputEmail = document.querySelector('[name=email]')

const inputPassword = document.querySelector('[name=password]');


function checkFields() {
    const fields = Object.keys(this.refs);
    for (const field of fields) {
        if (this.refs[field].value === '')
            return false;
    }
    return true;
}


if (validation) {
    formValidator.generateResultObject();

} else {
    alert ("You have to fill all fields")
}

function generateResultObject() {
    const elements = {};
    elements[this.refs.inputEmail.name] = this.refs.inputEmail.value;
    elements[this.refs.inputPassword.name] = this.refs.inputPassword.value;
    console.log(elements);
}