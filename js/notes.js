const floating_button = document.getElementById('floating_button');
const profile_button = document.getElementById('profile_button');
const overlay_container = document.querySelector('.overlay_container');
const profile_container = document.querySelector('.profile_container');

const colors = [
    "#E38242",
    "#46B351",
    "#DC43C7",
    "#8449E4",
    "#DCD343",
    "#EA4141",
    "#3F73F6"
  ];
 
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

function addNote() { 
    const randomColor = colors[Math.floor(Math.random() * colors.length)]; 
 
    var noteName = document.getElementById("noteName").getElementsByTagName("input")[0].value; 
    var noteText = document.getElementById("noteText").getElementsByTagName("input")[0].value;
    var overlay = document.querySelector('.overlay');
    var noteList = document.getElementById('noteList');
    
    //Log
    console.log("name: " + noteName);
    console.log("text: " + noteText);
 
    const container = document.createElement('div'); 
    container.style.display = 'flex'; 
    container.style.flexDirection = 'column'; 
    container.style.alignItems = 'start'; 
    container.style.padding = '24px'; 
    container.style.borderRadius = '24px'; 
    container.style.backgroundColor = randomColor; 
 
    const name = document.createElement('h4');
    name.style.marginTop = "0px";
    name.style.marginBottom = "0px"; 
    name.textContent = noteName; 
 
    const text = document.createElement('h3');
    text.style.marginBottom = "12px"; 
    text.textContent = noteText; 
 
    const date = document.createElement('h2');
    date.style.marginBottom = '0px'; 
    date.textContent = getCurrentDate(); 
 
    container.append(name, text, date); 
    
    var listItem = document.createElement('li');
    
    listItem.appendChild(container);
    noteList.appendChild(listItem);
    
    overlay.style.display = 'none';
}

function getCurrentDate() {
    var date = new Date();
  
    var hours = addZeroPrefix(date.getHours());
    var minutes = addZeroPrefix(date.getMinutes());
    var day = addZeroPrefix(date.getDate());
    var month = addZeroPrefix(date.getMonth() + 1);
    var year = date.getFullYear();
  
    var formattedDate = hours + ':' + minutes + ' ' + day + ':' + month + ':' + year;
    return formattedDate;
  }
  
  function addZeroPrefix(value) {
    return value < 10 ? '0' + value : value;
  }