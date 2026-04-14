// script.js

// Function to validate form inputs
function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '') {
        alert('Username is required.');
        return false;
    }

    if (password === '') {
        alert('Password is required.');
        return false;
    }

    // If validation passes
    return true;
}

// Function to handle login
function handleLogin(event) {
    event.preventDefault(); // Prevent default form submission

    if (validateForm()) {
        // Implement login logic here (e.g., API call)
        alert('Login successful!');
    }
}

// Attaching event listener to the form
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', handleLogin);
}