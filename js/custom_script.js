'use strict'
var modalShadow = document.querySelector('.modal-shadow');
var popupLogin = document.querySelector('.modal-login');
var linkLogin = document.getElementById('login');
var popupLoginClose = document.querySelector('.modal-login .modal-close');
var login = popupLogin.querySelector('[name=login]');
var password = popupLogin.querySelector('[name=password]');

var formLogin = popupLogin.querySelector('form');
var storage = localStorage.getItem('login');

var popupMap = document.querySelector('.modal-map');
var linkMap = document.getElementById('map');
var popupMapClose = document.querySelector('.modal-map .modal-close');


var timerError;
console.log(timerError);

function clearError() {
console.log('clearError');
	if (popupLogin.classList.contains('modal-error')) {
		popupLogin.classList.remove('modal-error');
	};
}

login.removeAttribute('required');
password.removeAttribute('required');

linkLogin.addEventListener('click', function(e) {
	e.preventDefault();
	modalShadow.classList.add('show');
	popupLogin.classList.add('show');
	if (storage) {
		login.value = storage;
		password.focus();
	} else {
		login.focus();
	};
	
});

formLogin.addEventListener('submit', function(e) {
	e.preventDefault();	
	
	if (!(login.value && password.value)) {
	//	e.preventDefault();	
		popupLogin.classList.add('modal-error');
console.log(timerError);
		
		if (timerError) {
			clearTimeout(timerError);
			timerError = 0;
		};
		
		timerError = setTimeout(clearError, 505);
		
		
	
	//	setTimeout(clearError, 3000);
console.log(timerError);
	
	} else {
		localStorage.setItem('login', login.value);
	};
});


linkMap.addEventListener('click', function(e) {
	e.preventDefault();
	modalShadow.classList.add('show');
	popupMap.classList.add('show');
});


popupLoginClose.addEventListener('click', function(e) {
	e.preventDefault();
	closePopup(this);
});

popupMapClose.addEventListener('click', function(e) {
	e.preventDefault();
	closePopup(this);	
});

window.addEventListener('keyup', function(e) {
	if (e.keyCode == 27) {
		console.log(popupLogin.classList.contains('show'));
	
		if (popupLogin.classList.contains('show')) {
			popupLoginClose.click();	
		};
		
		if (popupMap.classList.contains('show')) {
			popupMapClose.click();
		};
	}
});

// function for closing of popup
function closePopup(elem) {
	elem.parentElement.classList.remove('show');
	modalShadow.classList.remove('show');	
}