document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".log-in");
    const registerForm = document.querySelector(".registro");
    const loginLink = document.querySelector(".login-link");
    const registerLink = document.querySelector(".register-link");

    function showLoginForm() {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    }

    function showRegisterForm() {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    }

    showLoginForm();

    registerLink.addEventListener("click", showRegisterForm);

    loginLink.addEventListener("click", showLoginForm);
});