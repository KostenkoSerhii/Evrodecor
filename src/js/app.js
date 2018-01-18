import svgUseIt from 'svg-use-it';
import heroSetTime from './components/heroSetTime.js';
import counter from './components/counter.js';
import tabs from './components/tabs.js';
import sliders from './components/sliders.js';
import careSlider from './components/care.js';
import formSubmit from './components/form.js';
import reviewsSlider from './components/reviewsSlider.js';
import AOS from 'aos';
// import scrollMagic from './components/scrollmagic.js';
// import techAnimation from './components/tech-animation.js';
import slick from 'slick-carousel';

$(document).ready(function(){
	svgUseIt();
	let date = new Date();
	let day = date.getDay();
	let hour = date.getHours();
	const days = [
	'воскресенье',
	'понедельник',
	'вторник',
	'среда',
	'четверг',
	'пятница',
	'суббота',
	];

	// hour = 15;

	// setTimeout(function(){
	// 	hour = 21
	// }, 10000)


	heroSetTime(day, hour);
	
	// before must be set day
	sliders();
	tabs();
	reviewsSlider();
	careSlider();

	AOS.init({
		disable: 'mobile'
	});
	counter(day, hour);
	formSubmit()

	setInterval(function(){
		let locDate = new Date();
		let locDay = date.getDay();
		let locHour = date.getHours();
		if(locDay != day || locHour != hour ){
			heroSetTime(day, hour);
			counter(day, hour);
			day = locDay;
			hour = locHour;

			// console.log('not coincidence');
		}
		// console.log('coincidence');
	}, 30000)
	//end
});

