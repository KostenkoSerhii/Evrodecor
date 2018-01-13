
function sliders(){
	let heroPrev = `<div class="heroPrev"><?xml version="1.0" encoding="utf-8"?>
	<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	viewBox="0 0 199.3 328" enable-background="new 0 0 199.3 328" xml:space="preserve">
	<polygon points="195.7,36.1 163.4,3.7 3.7,163.7 3.7,163.7 3.7,163.7 163.4,323.7 195.7,291.3 68.4,163.7 "/>
	</svg></div>`;
	let heroNextl = `<div class="heroNext"><?xml version="1.0" encoding="utf-8"?>
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

	let expSlider = $(".js-expir-slider");

	expSlider.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: expPrev,
		nextArrow: expNext,
		dots: true
	});

	//end
};
module.exports = sliders;