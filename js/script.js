// ELEMENTS
const menu = document.querySelector('#menu-btn');
const navbar = document.querySelector('.navbar');

// MENU
menu.addEventListener('click', function() {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

// NAV ON WINDOW SCROLL
window.onscroll = function() {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

