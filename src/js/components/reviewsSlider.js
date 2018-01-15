function reviewsSlider(){
	let slider = $(".js-review-list"),
	slidesGroup = slider.find(".js-review-group"),
	slidesGroupLength = slidesGroup.length,
	btn = $(".js-review-toggler");
	let activeGroupIndex = 0;
	let nextGroupIndex = 1;
	let accessToNextClick = 1;
	btn.on("click", function(e){
		e.preventDefault();
		
		if(accessToNextClick == 0) return;
		accessToNextClick = 0;
		if((activeGroupIndex + 1) < slidesGroupLength){
			slidesGroup.eq(activeGroupIndex).removeClass("is-active");
			// slidesGroup.eq(activeGroupIndex + 1).removeClass("is-next-group");
			setTimeout(function(){
				activeGroupIndex += 1;
				slidesGroup.eq(activeGroupIndex).addClass("is-active");
				
				// if((activeGroupIndex + 1) < slidesGroupLength){
				// 	slidesGroup.eq(activeGroupIndex + 1).addClass("is-next-group");
				// }else{
				// 	slidesGroup.eq(0).addClass("is-next-group");
				// };
				accessToNextClick = 1;
			}, 200)

		}else{
			slidesGroup.eq(activeGroupIndex).removeClass("is-active");
			// slidesGroup.eq(0).removeClass("is-next-group");
			setTimeout(function(){
				activeGroupIndex = 0;
				slidesGroup.eq(activeGroupIndex).addClass("is-active");
				// slidesGroup.eq(activeGroupIndex + 1).addClass("is-next-group");
				accessToNextClick = 1
			}, 200)

			// slidesGroup.eq(activeGroupIndex).next().addClass("is-next-group");
		};
		// if((activeGroupIndex + 1) < slidesGroupLength){
		// 	slidesGroup.eq(activeGroupIndex).next().addClass("is-active");
		// 	slidesGroup.eq(activeGroupIndex).removeClass("is-active")
		// 	activeGroupIndex += 1;

		// }else{
		// 	slidesGroup.eq(activeGroupIndex).removeClass("is-active")
		// 	activeGroupIndex = 0;
		// 	slidesGroup.eq(activeGroupIndex).addClass("is-active");
		// };

	});

};
module.exports = reviewsSlider;