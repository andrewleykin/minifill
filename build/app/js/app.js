// Начальная функция

(function(){
	$('.able__list').slick({
		infinite: true,
		arrows: false,
		slidesToShow: 5,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
		{
			breakpoint: 960,
			settings: {
				slidesToShow: 3
				}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2
				}
		}
		]
	});

	var link = $('.menu__humburger'),
		list = $('.menu__list'),
		contacts = $('.header__contacts'),
		activeLink = 'menu__humburger--active',
		flag = true,
		duration = 400;

		link.click(function() {
			if(flag) {
				link.addClass(activeLink);
				list.slideDown(duration);
				setTimeout(function(){
					contacts.slideDown(duration);
				},duration - 150)
				flag = false;
			} else {
				link.removeClass(activeLink);
				contacts.slideUp(duration,function(){
					setTimeout(function(){
						contacts.removeAttr('style');
					});
				});
				setTimeout(function(){
					list.slideUp(duration,function(){
						setTimeout(function(){
							list.removeAttr('style');
						});
					});
				},duration - 150)
				flag = true;
			}
		});
	 svg4everybody();
})();
