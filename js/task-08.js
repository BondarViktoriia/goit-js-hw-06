
const form = document.querySelector('.login-form')

form.addEventListener('submit', onFocusSubmit)

function onFocusSubmit(event) {
    event.preventDefault()
    const {
        elements: { email, password },
    } = event.currentTarget

    if (email.value === '' || password.value === '') {
        return alert('Пожалуйста, заполните все поля!')
    }
const formData = new FormData(event.currentTarget);    
    console.log(formData);

    formData.forEach((value, name) => {
        console.log('onForsSubmit -> value', value);
        console.log('onforsSubmit - > name', name)
    });
        event.currentTarget.reset();
};