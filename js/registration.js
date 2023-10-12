function signUp() {
    
}

document.querySelector('.sign_in_button').addEventListener('click', function() {
    var email = document.querySelector('input[type="text"]').value;
    var password = document.querySelector('input[type="password"]').value;
    var confirmPassword = document.querySelectorAll('input[type="password"]')[1].value;
    
    // Проверка формата почты
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var isValidEmail = emailRegex.test(email);
    
    // Проверка совпадения паролей
    var arePasswordsMatch = password === confirmPassword;
    
    // Вывод сообщений об ошибках
    if (!isValidEmail) {
       alert('Неверный формат почты!');
    } else if (!arePasswordsMatch) {
       alert('Пароли не совпадают!');
    } else {
       alert('Регистрация успешно завершена!');

       localStorage.setItem("email", email);
       localStorage.setItem("password", password);
    }
 });