function regirectToRegistration() {
    // window.open("./templates/registration.html", "_blank");
    window.location.href = "./templates/registration.html";
}

function signIn() {
    var email = document.querySelector('input[type="text"]').value;
    var password = document.querySelector('input[type="password"]').value;
    var textField = document.querySelector('.text-field');

    // Проверка формата почты
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var isValidEmail = emailRegex.test(email);

    if (email === "" || password === "") {
        textField.style.borderColor = 'red';
        alert("Неверный пароль или почта")
    } else if (!isValidEmail) {
        alert("Некорректный формат электронной почты");
    } else {
        redirectToNotes(email, password)
    }
}

function redirectToNotes(email, password) {
    var savedEmail = localStorage.getItem("email")
    var savedPassword = localStorage.getItem("password")

    const emailTextField = document.getElementById("email_text_field");
    const passwordTextField = document.getElementById("password_text_field");


    var isEmailEqual = savedEmail === email
    var isPasswordEqual = savedPassword === password

    //Logs
    console.log("email is " + savedEmail)
    console.log("password is " + savedPassword)

    if (isEmailEqual && isPasswordEqual) {
        window.location.href = "./templates/notes.html";
    } else if (isEmailEqual && !isPasswordEqual) {
        alert("Неверный пароль")
        emailTextField.style.borderColor = 'red';
    } else if (!isEmailEqual && isPasswordEqual) {
        alert("Неверный пароль")
        passwordTextField.style.borderColor = 'red';
    } else if (!isEmailEqual && !isPasswordEqual){
        alert("Неверный пароль и почта")
    }
}