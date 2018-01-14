	function counter(day, hour){
		let counter = $(".js-counter");
		let counterArr;
		let zamerPlanningToday = [
		//понедельник
		[
		{
			minTime: 0,
			maxTime: 9,
			value: 18
		},
		{
			minTime: 9,
			maxTime: 10,
			value: 19
		},
		{
			minTime: 10,
			maxTime: 11,
			value: 21
		},
		{
			minTime: 11,
			maxTime: 13,
			value: 21
		},
		{
			minTime: 13,
			maxTime: 14,
			value: 23
		},
		{
			minTime: 14,
			maxTime: 15,
			value: 24
		},
		{
			minTime: 15,
			maxTime: 0,
			value: 26
		}
		],
		// вторник
		[]
		];
		// console.log(zamerPlanningToday);
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


			// console.log(counterArr[day]);
			parseObj(counterArr[day], $item)
		});
		function parseObj(arr, item){
			hour =1;

			// console.log(hour);
			for (let i = 0; i < arr.length; i++) {
				// let value;
				let lastVeiw = arr[i].maxTime == 0 ? true: false;

				// console.log(lastVeiw);
				if(!lastVeiw){
					if( hour >= arr[i].minTime && hour < arr[i].maxTime ){
						// console.log(`value: ${arr[i].value}` );
						parseCount(arr[i].value, item)
					}
				}else{
					if( hour >= arr[i].minTime ){
						// console.log(`value: ${arr[i].value}` );
						parseCount(arr[i].value, item)
					}
				}

				// console.log(`minTime: ${arr[i].minTime}` );
				// console.log(`maxTime: ${arr[i].maxTime}` );
				// console.log(`value: ${arr[i].value}` );

				// for (let key in arr[i]){
				// 	console.log( "Ключ: " + key + "; значение: " + arr[i][key] );
					// let minTime = arr[i][0];
					// let maxTime = arr[i][1];
					// let value = arr[i][2];
					// console.log(`minTime: ${key}`);
					// console.log(`maxTime: ${minTime}`);
					// console.log(`value: ${minTime}`);
				// }

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

		// console.log(simbolArr);

		// console.log(`hello from  parseCount(), item: ${item}`);
		insertCountPage(simbolArr, item);
	};
	function insertCountPage(arr, item){
	// вставляем в зависимости от количества элементов 

	// console.log(`hello from  insertCountPage(), arr: ${arr}`);
	// console.log(`hello from  insertCountPage()`);
	// console.log(item);

	item.html('');
	for (let i = 0; i < arr.length; i++) {
		item.append(`<div class="counter__count"><span>${arr[i]}</span></div>`)
		console.log(arr[i]);
	}
};

};
module.exports = counter;