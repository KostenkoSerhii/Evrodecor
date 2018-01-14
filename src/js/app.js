import svgUseIt from 'svg-use-it';
import tabs from './components/tabs.js';
import sliders from './components/sliders.js';
import formSubmit from './components/form.js';
import AOS from 'aos';
// import scrollMagic from './components/scrollmagic.js';
// import techAnimation from './components/tech-animation.js';
import slick from 'slick-carousel';

$(document).ready(function(){
	svgUseIt();

	// before must be set day
	sliders();
	tabs();
	// techAnimation();
	AOS.init({
		disable: 'mobile'
	});
	formSubmit()
	//end
});

