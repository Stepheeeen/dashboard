var cancelBtn = document.querySelector("#cancel");
var notice = document.querySelector("#notice");
var svg = document.querySelector("#svg");
var username = document.querySelector("#username");
var menu = document.querySelector("#dropdown");
var notification = document.querySelector('#alert');

cancelBtn.addEventListener('click', () => {
    notice.style.display = "none";
});

// Notification menu
svg.addEventListener('click', (event) => {
    event.stopPropagation();
    notification.classList.toggle('hidden');
});

document.body.addEventListener('click', function () {
    notification.classList.add('hidden');
});

notification.addEventListener('click', function (event) {
    event.stopPropagation();
});

// Dropdown menu 
username.addEventListener('click', (event) => {
    event.stopPropagation();
    menu.classList.toggle('visible');
});

document.body.addEventListener('click', function () {
    menu.classList.remove('visible');
});

menu.addEventListener('click', function (event) {
    event.stopPropagation();
});
