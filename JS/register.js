document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    const registerToggle = document.getElementById('register');
    const loginToggle = document.getElementById('login');

    registerToggle.addEventListener('change', function () {
        if (registerToggle.checked) {
            registerForm.style.display = 'block';
            loginForm.style.display = 'none';
        }
    });

    loginToggle.addEventListener('change', function () {
        if (loginToggle.checked) {
            loginForm.style.display = 'block';
            registerForm.style.display = 'none';
        }
    });
});