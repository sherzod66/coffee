
const burger = document.querySelector('.header__column-burger');
burger.addEventListener("click", burgerClick);

function burgerClick(event) {
	const first = document.querySelector('.header__column.first')
	const penultimate = document.querySelector('.header__column-list.__list2');
	first.classList.toggle('active');
	penultimate.classList.toggle('active');

}