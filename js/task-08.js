const form = document.querySelector('.login-form');

function formLog (event) {
   
    event.preventDefault();
    
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === "" || password === '') {
        return alert('Все поля должны быть заполнены!');
    }

    const formData = {
        email: email,
        password: password
    }
    console.log(formData);

    form.reset();
};

form.addEventListener('submit', formLog)