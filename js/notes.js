const floating_button = document.getElementById('floating_button');
const profile_button = document.getElementById('profile_button');
const overlay_container = document.querySelector('.overlay_container');
const profile_container = document.querySelector('.profile_container');
 
function showOverlay() { 
    var overlay = document.querySelector('.overlay');
    const close_overlay = document.getElementById('close_add_note_overlay');  
    overlay.style.display = 'flex'; 
    overlay_container.style.display = 'flex';
    profile_container.style.display = 'none';

    close_overlay.addEventListener('click', function() {
        overlay.style.display = 'none'; 
    });
}

function showProfile() {
    var overlay = document.querySelector('.overlay');
    const close_overlay = document.getElementById('close_profile_overlay');
    const save = document.getElementById('save');

    var e = localStorage.getItem("email");
    var p = localStorage.getItem("password");

    document.getElementById("email_").getElementsByTagName("input")[0].value = e;
    document.getElementById("password_").getElementsByTagName("input")[0].value = p;

    overlay.style.display = 'flex'; 
    profile_container.style.display = 'flex';
    overlay_container.style.display = 'none';

    save.addEventListener('click', function() {

        // Проверка формата почты
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var isValidEmail = emailRegex.test(document.querySelector('input[type="text"]').value);

        var isSimilar = document.getElementById("password_").getElementsByTagName("input")[0].value === document.getElementById("password_2").getElementsByTagName("input")[0].value;
    
        // Вывод сообщений об ошибках
        if(isValidEmail) {
            alert('Ошибка: неверный формат почты');
        } else if (!isSimilar){
            alert('Ошибка: пароли не совпадают');
        }else {
            alert('Данные успешно изменены');

            localStorage.setItem("email", document.getElementById("email_").getElementsByTagName("input")[0].value);
            localStorage.setItem("password", document.getElementById("password_").getElementsByTagName("input")[0].value);
            overlay.style.display = 'none';
        }
    });

    close_overlay.addEventListener('click', function() {
        overlay.style.display = 'none'; 
    });
}
 
floating_button.addEventListener('click', showOverlay);
profile_button.addEventListener('click', showProfile);