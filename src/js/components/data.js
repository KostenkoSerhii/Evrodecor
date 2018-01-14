		let zamerPlanningToday = [
		//0 - воскр
		[
		{minTime: 0, maxTime: 23, value: 6},
		{minTime: 23, maxTime: 0, value: 6}
		],
		//1 - понедельник
		[
		{minTime: 0, maxTime: 9, value: 18},
		{minTime: 9, 	maxTime: 10, value: 19},
		{minTime: 10, maxTime: 12, value: 21},
		{minTime: 12, maxTime: 13, value: 23},
		{minTime: 13, maxTime: 14, value: 24},
		{minTime: 14, maxTime: 0, value: 26}
		],
		//2 - вторник
		[
		{minTime: 0, maxTime: 11, value: 10},
		{minTime: 11, maxTime: 12, value: 12},
		{minTime: 12, maxTime: 13, value: 13},
		{minTime: 13, maxTime: 15, value: 14},
		{minTime: 15, maxTime: 16, value: 15},
		{minTime: 16, maxTime: 17, value: 17},
		{minTime: 17, maxTime: 0, value: 19}
		],
		//3 - среда
		[
		{minTime: 0, maxTime: 9, value: 13},
		{minTime: 9, maxTime: 10, value: 15},
		{minTime: 10, maxTime: 12, value: 16},
		{minTime: 12, maxTime: 14, value: 17},
		{minTime: 14, maxTime: 16, value: 18},
		{minTime: 16, maxTime: 17, value: 20},
		{minTime: 17, maxTime: 0, value: 21}
		],
		//4 - четверг
		[
		{minTime: 0, maxTime: 10, value: 12},
		{minTime: 10, maxTime: 13, value: 13},
		{minTime: 13, maxTime: 15, value: 15},
		{minTime: 15, maxTime: 17, value: 16},
		{minTime: 17, maxTime: 0, value: 17}
		],
		//5 - пятница
		[
		{minTime: 0, maxTime: 9, value: 9},
		{minTime: 9, maxTime: 11, value: 10},
		{minTime: 11, maxTime: 13, value: 11},
		{minTime: 13, maxTime: 14, value: 13},
		{minTime: 14, maxTime: 16, value: 15},
		{minTime: 16, maxTime: 17, value: 17},
		{minTime: 17, maxTime: 0, value: 19}
		],
		//6 - суббота
		[
		{minTime: 0, maxTime: 10, value: 15},
		{minTime: 10, maxTime: 11, value: 17},
		{minTime: 11, maxTime: 12, value: 18},
		{minTime: 12, maxTime: 14, value: 20},
		{minTime: 14, maxTime: 15, value: 21},
		{minTime: 15, maxTime: 17, value: 23},
		{minTime: 17, maxTime: 0, value: 24}
		]
		];
		let zamerDoneToday = [
		//0 - воскр
		[
		{minTime: 0, maxTime: 8, value: 0},
		{minTime: 8, maxTime: 10, value: 1},
		{minTime: 10, maxTime: 13, value: 2},
		{minTime: 13, maxTime: 14, value: 3},
		{minTime: 14, maxTime: 16, value: 4},
		{minTime: 16, maxTime: 17, value: 5},
		{minTime: 17, maxTime: 18, value: 6},
		{minTime: 18, maxTime: 0, value: 6}
		],
		//1 - понедельник
		[
		{minTime: 0, maxTime: 7, value: 0},
		{minTime: 7, maxTime: 8, value: 1},
		{minTime: 8, maxTime: 9, value: 3},
		{minTime: 9, maxTime: 10, value: 4},
		{minTime: 10, maxTime: 11, value: 5},
		{minTime: 11, maxTime: 12, value: 7},
		{minTime: 12, maxTime: 13, value: 9},
		{minTime: 13, maxTime: 14, value: 12},
		{minTime: 14, maxTime: 15, value: 15},
		{minTime: 15, maxTime: 16, value: 17},
		{minTime: 16, maxTime: 17, value: 18},
		{minTime: 17, maxTime: 18, value: 21},
		{minTime: 18, maxTime: 19, value: 24},
		{minTime: 19, maxTime: 0, value: 26}
		],
		//2 - вторник
		[
		{minTime: 0, maxTime: 8, value: 0},
		{minTime: 8, maxTime: 9, value: 3},
		{minTime: 9, maxTime: 10, value: 5},
		{minTime: 10, maxTime: 11, value: 8},
		{minTime: 11, maxTime: 12, value: 10},
		{minTime: 12, maxTime: 13, value: 11},
		{minTime: 13, maxTime: 14, value: 13},
		{minTime: 14, maxTime: 16, value: 15},
		{minTime: 16, maxTime: 17, value: 16},
		{minTime: 17, maxTime: 19, value: 17},
		{minTime: 19, maxTime: 0, value: 19}
		],
		//3 - среда
		[
		{minTime: 0, maxTime: 7, value: 0},
		{minTime: 7, maxTime: 8, value: 1},
		{minTime: 8, maxTime: 9, value: 4},
		{minTime: 9, maxTime: 10, value: 5},
		{minTime: 10, maxTime: 11, value: 9},
		{minTime: 11, maxTime: 13, value: 10},
		{minTime: 13, maxTime: 14, value: 14},
		{minTime: 14, maxTime: 16, value: 16},
		{minTime: 16, maxTime: 17, value: 18},
		{minTime: 17, maxTime: 18, value: 19},
		{minTime: 18, maxTime: 19, value: 20},
		{minTime: 19, maxTime: 0, value: 21}
		],
		//4 - четверг
		[
		{minTime: 0, maxTime: 8, value: 0},
		{minTime: 8, maxTime: 9, value: 2},
		{minTime: 9, maxTime: 10, value: 3},
		{minTime: 10, maxTime: 11, value: 5},
		{minTime: 11, maxTime: 12, value: 6},
		{minTime: 12, maxTime: 13, value: 8},
		{minTime: 13, maxTime: 14, value: 10},
		{minTime: 14, maxTime: 15, value: 11},
		{minTime: 15, maxTime: 16, value: 12},
		{minTime: 14, maxTime: 17, value: 14},
		{minTime: 17, maxTime: 19, value: 16},
		{minTime: 19, maxTime: 0, value: 17}
		],
		//5 - пятница
		[
		{minTime: 0, maxTime: 7, value: 0},
		{minTime: 7, maxTime: 8, value: 1},
		{minTime: 8, maxTime: 9, value: 4},
		{minTime: 9, maxTime: 10, value: 5},
		{minTime: 10, maxTime: 11, value: 7},
		{minTime: 11, maxTime: 12, value: 9},
		{minTime: 12, maxTime: 13, value: 10},
		{minTime: 13, maxTime: 14, value: 11},
		{minTime: 14, maxTime: 15, value: 12},
		{minTime: 15, maxTime: 16, value: 14},
		{minTime: 16, maxTime: 17, value: 15},
		{minTime: 17, maxTime: 18, value: 18},
		{minTime: 19, maxTime: 0, value: 19}
		],
		//6 - суббота
		[
		{minTime: 0, maxTime: 8, value: 0},
		{minTime: 8, maxTime: 9, value: 3},
		{minTime: 9, maxTime: 10, value: 5},
		{minTime: 10, maxTime: 11, value: 8},
		{minTime: 11, maxTime: 12, value: 10},
		{minTime: 12, maxTime: 13, value: 12},
		{minTime: 13, maxTime: 14, value: 14},
		{minTime: 14, maxTime: 15, value: 15},
		{minTime: 15, maxTime: 16, value: 17},
		{minTime: 16, maxTime: 17, value: 19},
		{minTime: 17, maxTime: 18, value: 22},
		{minTime: 18, maxTime: 19, value: 23},
		{minTime: 19, maxTime: 0, value: 24}
		]
		];
		let zamerPlanningNextDay = [
		//0 - воскр
		[
		{minTime: 0, maxTime: 8, value: 18},
		{minTime: 9, maxTime: 0, value: 18}
		],
		//1 - понедельник
		[
		{minTime: 0, maxTime: 10, value: 3},
		{minTime: 10, maxTime: 12, value: 5},
		{minTime: 12, maxTime: 14, value: 7},
		{minTime: 14, maxTime: 18, value: 9},
		{minTime: 19, maxTime: 0, value: 10}
		],
		//2 - вторник
		[
		{minTime: 0, maxTime: 9, value: 8},
		{minTime: 9, maxTime: 11, value: 9},
		{minTime: 11, maxTime: 15, value: 10},
		{minTime: 15, maxTime: 17, value: 11},
		{minTime: 17, maxTime: 19, value: 12},
		{minTime: 19, maxTime: 0, value: 13}
		],
		//3 - среда
		[
		{minTime: 0, maxTime: 10, value: 7},
		{minTime: 10, maxTime: 13, value: 8},
		{minTime: 13, maxTime: 16, value: 10},
		{minTime: 16, maxTime: 18, value: 11},
		{minTime: 18, maxTime: 0, value: 12}
		],
		//4 - четверг
		[
		{minTime: 0, maxTime: 9, value: 3},
		{minTime: 9, maxTime: 11, value: 4},
		{minTime: 11, maxTime: 14, value: 5},
		{minTime: 14, maxTime: 17, value: 6},
		{minTime: 17, maxTime: 18, value: 7},
		{minTime: 18, maxTime: 19, value: 8},
		{minTime: 19, maxTime: 0, value: 9}
		],
		//5 - пятница
		[
		{minTime: 0, maxTime: 9, value: 9},
		{minTime: 9, maxTime: 10, value: 11},
		{minTime: 10, maxTime: 12, value: 12},
		{minTime: 12, maxTime: 14, value: 13},
		{minTime: 14, maxTime: 16, value: 14},
		{minTime: 16, maxTime: 0, value: 15}
		],
		//6 - суббота
		[
		{minTime: 0, maxTime: 11, value: 2},
		{minTime: 11, maxTime: 12, value: 3},
		{minTime: 12, maxTime: 16, value: 4},
		{minTime: 16, maxTime: 20, value: 5},
		{minTime: 20, maxTime: 0, value: 6}
		]
		];
		let montazPlanningToday = [
		//0 - воскр
		[
		{minTime: 0, maxTime: 8, value: 0},
		{minTime: 8, maxTime: 0, value: 0}
		],
		//1 - понедельник
		[
		{minTime: 0, maxTime: 9, value: 4},
		{minTime: 9, maxTime: 0, value: 4}
		],
		//2 - вторник
		[
		{minTime: 0, maxTime: 9, value: 5},
		{minTime: 9, maxTime: 0, value: 5}
		],
		//3 - среда
		[
		{minTime: 0, maxTime: 9, value: 6},
		{minTime: 9, maxTime: 0, value: 6}
		],
		//4 - четверг
		[
		{minTime: 0, maxTime: 9, value: 3},
		{minTime: 9, maxTime: 0, value: 3}
		],
		//5 - пятница
		[
		{minTime: 0, maxTime: 9, value: 4},
		{minTime: 9, maxTime: 0, value: 4}
		],
		//6 - суббота
		[
		{minTime: 0, maxTime: 9, value: 6},
		{minTime: 9, maxTime: 0, value: 6}
		]
		];
				let montazDoneToday = [
		//0 - воскр
		[
		{minTime: 0, maxTime: 8, value: 0},
		{minTime: 8, maxTime: 0, value: 0}
		],
		//1 - понедельник
		[
		{minTime: 0, maxTime: 9, value: 0},
		{minTime: 9, maxTime: 0, value: 2}
		],
		//2 - вторник
		[
		{minTime: 0, maxTime: 12, value: 0},
		{minTime: 12, maxTime: 16, value: 2},
		{minTime: 15, maxTime: 0, value: 5}
		],
		//3 - среда
		[
		{minTime: 0, maxTime: 12, value: 0},
		{minTime: 12, maxTime: 19, value: 3},
		{minTime: 20, maxTime: 0, value: 6}
		],
		//4 - четверг
		[
		{minTime: 0, maxTime: 9, value: 0},
		{minTime: 9, maxTime: 15, value: 1},
		{minTime: 15, maxTime: 0, value: 3}
		],
		//5 - пятница
		[
		{minTime: 0, maxTime: 12, value: 0},
		{minTime: 12, maxTime: 15, value: 3},
		{minTime: 15, maxTime: 0, value: 4}
		],
		//6 - суббота
		[
		{minTime: 0, maxTime: 12, value: 0},
		{minTime: 12, maxTime: 19, value: 2},
		{minTime: 20, maxTime: 0, value: 6}
		]
		];
		export {zamerPlanningToday, zamerDoneToday, zamerPlanningNextDay, montazPlanningToday, montazDoneToday};