function submitForm() {
    const name = document.getElementById('name').value;
    const errorMessage = document.getElementById('error-message');
    if (!name) {
      errorMessage.textContent = 'Please fill out the required field.';
      return false;
    }
    errorMessage.textContent = ''; // Clear any previous error messages
    alert('Form submitted successfully!');
    return true;
  }
