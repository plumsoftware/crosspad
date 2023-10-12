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
    } else if (!isValidEmail) {
        alert("Некорректный формат электронной почты");
    } else {
        window.location.href = "./templates/notes.html";
    }
}