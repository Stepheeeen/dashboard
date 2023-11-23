var cancelBtn = document.querySelector("#cancel");
var notice = document.querySelector("#notice")
var svg = document.querySelector("#svg")
var username = document.querySelector("#username")
var menu = document.querySelector("#dropdown")

cancelBtn.addEventListener('click', () => {
    notice.style.display = "none"
})

username.addEventListener('click', (event) => {
    event.stopPropagation();
    menu.classList.toggle('visible')
})

document.body.addEventListener('click', function () {
    menu.classList.add('visible');
});

menu.addEventListener('click', function (event) {
    event.stopPropagation();
});
