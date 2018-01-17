
function sliders(){
	let heroPrev = `<div class="heroPrev"><?xml version="1.0" encoding="utf-8"?>
	<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	viewBox="0 0 199.3 328" enable-background="new 0 0 199.3 328" xml:space="preserve">
	<polygon points="195.7,36.1 163.4,3.7 3.7,163.7 3.7,163.7 3.7,163.7 163.4,323.7 195.7,291.3 68.4,163.7 "/>
	</svg></div>`;
	let heroNext = `<div class="heroNext"><?xml version="1.0" encoding="utf-8"?>
	<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	viewBox="0 0 199.3 328" enable-background="new 0 0 199.3 328" xml:space="preserve">
	<polygon points="131,163.7 3.7,291.3 36,323.7 195.7,163.7 195.7,163.7 195.7,163.7 36,3.7 3.7,36.1 "/>
	</svg></div>`;
	let expPrev = `<div class="expPrev"><?xml version="1.0" encoding="utf-8"?>
	<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	viewBox="0 0 199.3 328" enable-background="new 0 0 199.3 328" xml:space="preserve">
	<polygon points="195.7,36.1 163.4,3.7 3.7,163.7 3.7,163.7 3.7,163.7 163.4,323.7 195.7,291.3 68.4,163.7 "/>
	</svg></div>`;
	let expNext = `<div class="expNext"><?xml version="1.0" encoding="utf-8"?>
	<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	viewBox="0 0 199.3 328" enable-background="new 0 0 199.3 328" xml:space="preserve">
	<polygon points="131,163.7 3.7,291.3 36,323.7 195.7,163.7 195.7,163.7 195.7,163.7 36,3.7 3.7,36.1 "/>
	</svg></div>`;

	let heroSlider = $(".js-hero-slider");
	let expSlider = $(".js-expir-slider");
	heroSlider.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: heroPrev,
		nextArrow: heroNext,
		dots: true,
		autoplay: true,
		autoplaySpeed: 4000,
		pauseOnFocus: false,
		pauseOnHover: false,
		responsive: [
		{
			breakpoint: 992,
			settings: {
				infinite: true,
				arrows: false
			}
		}
		]
	});
	expSlider.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: heroPrev,
		nextArrow: heroNext,
		dots: true,
		responsive: [
		{
			breakpoint: 992,
			settings: {
				infinite: true,
				arrows: false
			}
		}
		]

	});	

	// $(".js-review-list").slick({
	// 	infinite: true,
	// 	slidesToShow: 3,
	// 	slidesToScroll: 3,
	// 	vertical: true,
	// 	centerMode: true,
	// 	responsive: [
	// 	{
	// 		breakpoint: 992,
	// 		settings: {
	// 			verticalSwiping: true
	// 		}
	// 	}
	// 	]
	// });

	//end
};
module.exports = sliders;