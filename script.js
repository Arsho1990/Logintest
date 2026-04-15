// script.js

function setTheme(theme) {
    document.body.classList.toggle('dark-theme', theme === 'dark');
    document.body.classList.toggle('light-theme', theme === 'light');
    const toggleBtn = document.getElementById('theme-toggle');

    if (toggleBtn) {
        toggleBtn.textContent = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    }
}

function loadTheme() {
    const storedTheme = localStorage.getItem('theme');
    const preferredTheme = storedTheme || 'light';
    setTheme(preferredTheme);
}

function toggleTheme() {
    const isDark = document.body.classList.contains('dark-theme');
    const nextTheme = isDark ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
}

function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === '') {
        alert('Email is required.');
        return false;
    }

    if (password === '') {
        alert('Password is required.');
        return false;
    }

    return true;
}

function handleLogin(event) {
    event.preventDefault();

    if (validateForm()) {
        alert('Login successful!');
    }
}

window.addEventListener('DOMContentLoaded', function () {
    loadTheme();

    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
});
