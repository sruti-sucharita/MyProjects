const registerButton = document.getElementById('registerButton');
const usernameInput = document.getElementById('name');
const emailInput = document.getElementById('year');
const phoneInput = document.getElementById('phone');


registerButton.addEventListener('click', () => {
    if (usernameInput.value.trim() === '' || emailInput.value.trim() === '' || phoneInput.value.trim() === '' ) {
        alert('Please fill in all required fields.');
    } else {
        alert('Registered Successfully!');
        usernameInput.value = '';
                emailInput.value = '';
                phoneInput.value = '';
    }
});