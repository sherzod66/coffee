window.addEventListener("load", e => {
	const loadBox = document.querySelector('.load')
	const wrapper = document.getElementById('wrapper')
	loadBox.remove();
	wrapper.classList.add('wrapper')
})
const burger = document.querySelector('.header__column-burger');
burger.addEventListener("click", burgerClick);

function burgerClick(event) {
	const first = document.querySelector('.header__column.first')
	const penultimate = document.querySelector('.header__column-list.__list2');
	first.classList.toggle('active');
	penultimate.classList.toggle('active');

}

$(document).ready(function () {
	$('.slider__container').slick();
});

const bottomTop = document.querySelector('.footer__scroll');

bottomTop.addEventListener("click", event => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth"
	});
})