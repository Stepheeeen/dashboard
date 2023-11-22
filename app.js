var cancelBtn = document.querySelector("#cancel");
var notice = document.querySelector("#notice")

cancelBtn.addEventListener('click', () => {
    notice.style.display = "none"
})