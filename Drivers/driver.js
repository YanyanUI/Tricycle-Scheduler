const menu = document.querySelector(".menu");
const navMenu = document.querySelector(".mobile-only");
const addDriver = document.querySelector(".addDriver-btn");

menu.addEventListener('click', () => {
    navMenu.classList.toggle("menu-show");
})

addDriver.addEventListener('click', () => {
    window.location.href = "../Registration/registration.html";
});