function heroSetTime(day, hour){
	let place = $(".js-hero-day");
	let nightSlide = $(".js-hero-night-slide");
	// let nightSlideHtml = nightSlide.html();
	let heroSlider = $(".js-hero-slider");
	let heroDaysStr = [
	'в воскресенье',
	'в понедельник',
	'во вторник',
	'в среду',
	'в четверг',
	'в пятницу',
	'в субботу',
	];

	place.html(heroDaysStr[day]);
	// console.log(hour);
	if(hour >= 7 & hour < 21){
		nightSlide.remove();
		// console.log('remove');
	}
	// else{
	// 	heroSlider.slick('slickAdd', '<div class="hero-slider__slide hero-slider__slide--manager">' + nightSlideHtml + '</div>');
	// }
};
module.exports = heroSetTime;