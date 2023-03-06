const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.usuario.value;
    const password = loginForm.password.value;

    if (username === "admin" && password === "admin") {
        alert("Ha ingresado de manera satisfactoria.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})