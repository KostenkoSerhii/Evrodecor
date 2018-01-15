import {isResp1169} from './global.js';
function careSlider(){
	// if(isResp1169()) return;
	let careSlider = $('.js-care-slider');
	let sliderItem = careSlider.find("p");
	let sliderItemLength = sliderItem.length;
	let activeItem = 0;

	setInterval(function(){
		if(activeItem + 1 < sliderItemLength){
			sliderItem.removeClass('is-active');
			activeItem++;
			sliderItem.eq(activeItem).addClass('is-active');
		}else{
			sliderItem.removeClass('is-active');
			activeItem = 0;
			sliderItem.eq(activeItem).addClass('is-active');
		};
	}, 2000)
};
module.exports = careSlider;