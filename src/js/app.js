import svgUseIt from 'svg-use-it';
import heroSetTime from './components/heroSetTime.js';
import counter from './components/counter.js';
import tabs from './components/tabs.js';
import sliders from './components/sliders.js';
import careSlider from './components/care.js';
import formSubmit from './components/form.js';
import AOS from 'aos';
// import scrollMagic from './components/scrollmagic.js';
// import techAnimation from './components/tech-animation.js';
import slick from 'slick-carousel';

$(document).ready(function(){
	svgUseIt();
	let date = new Date()
	let day = date.getDay();
	const days = [
	'воскресенье',
	'понедельник',
	'вторник',
	'среда',
	'четверг',
	'пятница',
	'суббота',
	];
	let hour = date.getHours();
	// console.log(day);
	// console.log(days);

	heroSetTime(day, hour);
	
	// before must be set day
	sliders();
	tabs();
	careSlider();

	AOS.init({
		disable: 'mobile'
	});
	counter(day, hour);
	formSubmit()
	//end
});

