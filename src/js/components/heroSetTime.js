function heroSetTime(day, hour){
	let place = $(".js-hero-day");
	let nightSlide = $(".js-hero-night-slide");
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
};
module.exports = heroSetTime;