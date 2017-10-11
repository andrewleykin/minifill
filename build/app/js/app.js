// Начальная функция

(function(){
	$('.able__list').slick({
		infinite: true,
		arrows: false,
		slidesToShow: 5,
		autoplay: true,
		autoplaySpeed: 2000,
	})
})();
$(document).ready(function () {
    svg4everybody({});
});
// Библиотека wow.js для анимации

(function () {
	new WOW().init();
})();