function heroSetTime(day, hour, date){
	let place = $(".js-hero-day");
	let nightSlide = $(".js-hero-night-slide");
	let weekendSlide = $(".js-hero-weekend-slide").detach();
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
	let weekendArr = [
	'Jan 1',
	'Jan 8',
	'Mar 8',
	'Apr 9',
	'May 1',
	'May 9',
	'May 28',
	'Jun 28',
	'Aug 24',
	'Oct 15',
	'Dec 25'
	];
	let dateStr = date + "";
	// let dateStr = 'May 8';
	let weekend = false;
	for (let i = 0; i < weekendArr.length; i++) {
		let temp = dateStr.indexOf(weekendArr[i]);
		// console.log(weekendArr[i]);
		if(temp != '-1'){
			weekend = true;
			break;
		}
		
		
	};
	// day = 2;
	// console.log(date);
	place.html(heroDaysStr[day]);
	// console.log(hour);
	if(hour >= 7 & hour < 21){
		nightSlide.remove();
		// console.log('remove');
	}
	if(day == 0 || day == 6 || weekend){
		heroSlider.append(weekendSlide);
	}
	// else{
	// 	heroSlider.slick('slickAdd', '<div class="hero-slider__slide hero-slider__slide--manager">' + nightSlideHtml + '</div>');
	// }
};
module.exports = heroSetTime;