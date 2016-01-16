'use strict'
var popupLogin = document.querySelector('.modal-login');
var modalShadow = document.querySelector('.modal-shadow');
var linkLogin = document.getElementById('login');
var popupMap = document.querySelector('.modal-map');
var linkMap = document.getElementById('map');
var popupLoginClose = document.querySelector('.modal-login .modal-close');
var popupMapClose = document.querySelector('.modal-map .modal-close');

linkLogin.addEventListener('click', function(e) {
	e.preventDefault();
	modalShadow.classList.add('show');
	popupLogin.classList.add('show');
});

linkMap.addEventListener('click', function(e) {
	e.preventDefault();
	modalShadow.classList.add('show');
	popupMap.classList.add('show');
});

/*
popupLoginClose.addEventListener('click', function(e) {
	e.preventDefault();
console.log(this.parentElement);	
	
	modalShadow.classList.remove('show');
	popupLogin.classList.remove('show');
})
*/
popupLoginClose.addEventListener('click', function(e) {
	e.preventDefault();
	closePopup(this);
});

popupMapClose.addEventListener('click', function(e) {
	e.preventDefault();
	closePopup(this);	
});

// function for closing of popup
function closePopup(elem) {
	elem.parentElement.classList.remove('show');
	modalShadow.classList.remove('show');	
}