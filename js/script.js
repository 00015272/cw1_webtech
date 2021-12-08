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

fetch("https://us-doctors-and-medical-professionals.p.rapidapi.com/search_npi?npi=1033112214", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "us-doctors-and-medical-professionals.p.rapidapi.com",
		"x-rapidapi-key": "SIGN-UP-FOR-KEY"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});