const menu = document.querySelector(".menu");
const navMenu = document.querySelector(".mobile-only");

menu.addEventListener('click', () => {
    navMenu.classList.toggle("menu-show");
})