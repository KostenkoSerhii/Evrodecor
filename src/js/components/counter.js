	import {zamerPlanningToday, zamerDoneToday, zamerPlanningNextDay, montazPlanningToday, montazDoneToday} from'./data.js';

	function counter(day, hour){
			// console.log(day);
			// day = 1;
		let counter = $(".js-counter");
		let counterArr;

		counter.each(function(index, item){
			let $item = $(item);
			let attr = $($item).attr('data-counter');
			
			if(attr == 'zamerPlanningToday'){
				counterArr = zamerPlanningToday; 
			}else if(attr == 'zamerDoneToday'){
				counterArr = zamerDoneToday;
			}else if(attr == 'zamerPlanningNextDay'){
				counterArr = zamerPlanningNextDay;
			}else if(attr == 'montazPlanningToday'){
				counterArr = montazPlanningToday;
			}else if(attr == 'montazDoneToday'){
				counterArr = montazDoneToday;
			};


			parseObj(counterArr[day], $item)
		});
		function parseObj(arr, item){
			// hour =10;

			for (let i = 0; i < arr.length; i++) {
				let lastVeiw = arr[i].maxTime == 0 ? true: false;

				if(!lastVeiw){
					if( hour >= arr[i].minTime && hour < arr[i].maxTime ){
						parseCount(arr[i].value, item)
					}
				}else{
					if( hour >= arr[i].minTime ){
						parseCount(arr[i].value, item)
					}
				}
			};

		};
		function parseCount(value, item){
		// считаем количесвто элементов для вставки в html
		let valueStr = value + "";
		let valueLength = valueStr.length;
		let simbolArr = [];

		for (let i = 0; i < valueLength; i++) {
			simbolArr.push(valueStr[i])
		}

		insertCountOnPage(simbolArr, item);
	};
	function insertCountOnPage(arr, item){
	// вставляем в зависимости от количества элементов 

	item.html('');
	for (let i = 0; i < arr.length; i++) {
		item.append(`<div class="counter__count"><span>${arr[i]}</span></div>`)
	}
};

};
module.exports = counter;