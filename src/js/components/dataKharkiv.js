		let zamerPlanningToday = [
		//0 - воскр
		[
		{minTime: 0, maxTime: 23, value: 6},
		{minTime: 23, maxTime: 0, value: 6}
		],
		//1 - понедельник
		[
		{minTime: 0, maxTime: 10, value: 6},
		{minTime: 10, 	maxTime: 11, value: 7},
		{minTime: 11, maxTime: 13, value: 8},
		{minTime: 13, maxTime: 15, value: 9},
		{minTime: 15, maxTime: 0, value: 11}
		],
		//2 - вторник
		[
		{minTime: 0, maxTime: 9, value: 5},
		{minTime: 9, maxTime: 12, value: 6},
		{minTime: 12, maxTime: 13, value: 7},
		{minTime: 13, maxTime: 14, value: 8},
		{minTime: 14, maxTime: 0, value: 9}
		],
		//3 - среда
		[
		{minTime: 0, maxTime: 9, value: 6},
		{minTime: 9, maxTime: 12, value: 8},
		{minTime: 12, maxTime: 0, value: 9}
		],
		//4 - четверг
		[
		{minTime: 0, maxTime: 10, value: 4},
		{minTime: 10, maxTime: 11, value: 5},
		{minTime: 11, maxTime: 13, value: 6},
		{minTime: 13, maxTime: 14, value: 7},
		{minTime: 14, maxTime: 0, value: 8}
		],
		//5 - пятница
		[
		{minTime: 0, maxTime: 9, value: 5},
		{minTime: 9, maxTime: 11, value: 6},
		{minTime: 11, maxTime: 13, value: 7},
		{minTime: 13, maxTime: 15, value: 8},
		{minTime: 15, maxTime: 0, value: 9}
		],
		//6 - суббота
		[
		{minTime: 0, maxTime: 11, value: 7},
		{minTime: 11, maxTime: 12, value: 8},
		{minTime: 12, maxTime: 14, value: 9},
		{minTime: 14, maxTime: 0, value: 10}
		]
		];
		let zamerDoneToday = [
		//0 - воскр
		[
		{minTime: 0, maxTime: 7, value: 0},
		{minTime: 7, maxTime: 11, value: 1},
		{minTime: 11, maxTime: 13, value: 2},
		{minTime: 13, maxTime: 14, value: 3},
		{minTime: 14, maxTime: 16, value: 4},
		{minTime: 16, maxTime: 17, value: 5},
		{minTime: 17, maxTime: 0, value: 6}
		],
		//1 - понедельник
		[
		{minTime: 0, maxTime: 7, value: 0},
		{minTime: 7, maxTime: 9, value: 1},
		{minTime: 9, maxTime: 10, value: 3},
		{minTime: 10, maxTime: 11, value: 5},
		{minTime: 11, maxTime: 15, value: 7},
		{minTime: 15, maxTime: 18, value: 9},
		{minTime: 18, maxTime: 19, value: 10},
		{minTime: 19, maxTime: 0, value: 11}
		],
		//2 - вторник
		[
		{minTime: 0, maxTime: 8, value: 0},
		{minTime: 8, maxTime: 11, value: 2},
		{minTime: 11, maxTime: 13, value: 3},
		{minTime: 13, maxTime: 15, value: 4},
		{minTime: 15, maxTime: 16, value: 6},
		{minTime: 16, maxTime: 18, value: 7},
		{minTime: 18, maxTime: 19, value: 8},
		{minTime: 19, maxTime: 0, value: 9}
		],
		//3 - среда
		[
		{minTime: 0, maxTime: 7, value: 0},
		{minTime: 7, maxTime: 8, value: 1},
		{minTime: 8, maxTime: 10, value: 2},
		{minTime: 10, maxTime: 11, value: 3},
		{minTime: 11, maxTime: 12, value: 4},
		{minTime: 12, maxTime: 13, value: 5},
		{minTime: 13, maxTime: 17, value: 6},
		{minTime: 17, maxTime: 19, value: 7},
		{minTime: 19, maxTime: 0, value: 9}
		],
		//4 - четверг
		[
		{minTime: 0, maxTime: 8, value: 0},
		{minTime: 8, maxTime: 11, value: 2},
		{minTime: 11, maxTime: 12, value: 3},
		{minTime: 12, maxTime: 13, value: 4},
		{minTime: 13, maxTime: 18, value: 5},
		{minTime: 18, maxTime: 19, value: 7},
		{minTime: 19, maxTime: 0, value: 8}
		],
		//5 - пятница
		[
		{minTime: 0, maxTime: 7, value: 0},
		{minTime: 7, maxTime: 9, value: 1},
		{minTime: 9, maxTime: 11, value: 2},
		{minTime: 11, maxTime: 13, value: 3},
		{minTime: 13, maxTime: 14, value: 4},
		{minTime: 14, maxTime: 17, value: 5},
		{minTime: 17, maxTime: 18, value: 6},
		{minTime: 18, maxTime: 19, value: 7},
		{minTime: 19, maxTime: 0, value: 9}
		],
		//6 - суббота
		[
		{minTime: 0, maxTime: 7, value: 0},
		{minTime: 7, maxTime: 8, value: 2},
		{minTime: 8, maxTime: 11, value: 3},
		{minTime: 11, maxTime: 12, value: 4},
		{minTime: 12, maxTime: 13, value: 5},
		{minTime: 13, maxTime: 15, value: 7},
		{minTime: 15, maxTime: 17, value: 8},
		{minTime: 17, maxTime: 18, value: 9},
		{minTime: 18, maxTime: 0, value: 10}
		]
		];
		let zamerPlanningNextDay = [
		//0 - воскр
		[
		{minTime: 0, maxTime: 8, value: 6},
		{minTime: 8, maxTime: 0, value: 6}
		],
		//1 - понедельник
		[
		{minTime: 0, maxTime: 10, value: 0},
		{minTime: 10, maxTime: 12, value: 1},
		{minTime: 12, maxTime: 13, value: 2},
		{minTime: 13, maxTime: 15, value: 3},
		{minTime: 15, maxTime: 0, value: 5}
		],
		//2 - вторник
		[
		{minTime: 0, maxTime: 9, value: 1},
		{minTime: 9, maxTime: 10, value: 2},
		{minTime: 10, maxTime: 12, value: 3},
		{minTime: 12, maxTime: 15, value: 5},
		{minTime: 15, maxTime: 0, value: 6}
		],
		//3 - среда
		[
		{minTime: 0, maxTime: 9, value: 0},
		{minTime: 9, maxTime: 11, value: 1},
		{minTime: 11, maxTime: 14, value: 2},
		{minTime: 14, maxTime: 17, value: 3},
		{minTime: 17, maxTime: 0, value: 0}
		],
		//4 - четверг
		[
		{minTime: 0, maxTime: 10, value: 1},
		{minTime: 10, maxTime: 12, value: 2},
		{minTime: 12, maxTime: 15, value: 3},
		{minTime: 15, maxTime: 16, value: 4},
		{minTime: 16, maxTime: 0, value: 5}
		],
		//5 - пятница
		[
		{minTime: 0, maxTime: 9, value: 0},
		{minTime: 9, maxTime: 11, value: 2},
		{minTime: 11, maxTime: 13, value: 3},
		{minTime: 13, maxTime: 14, value: 4},
		{minTime: 14, maxTime: 17, value: 6},
		{minTime: 17, maxTime: 0, value: 0}
		],
		//6 - суббота
		[
		{minTime: 0, maxTime: 11, value: 1},
		{minTime: 11, maxTime: 12, value: 2},
		{minTime: 12, maxTime: 15, value: 4},
		{minTime: 15, maxTime: 16, value: 5},
		{minTime: 16, maxTime: 0, value: 6}
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
		{minTime: 9, maxTime: 12, value: 1},
		{minTime: 12, maxTime: 19, value: 2},
		{minTime: 19, maxTime: 0, value: 4}
		],
		//2 - вторник
		[
		{minTime: 0, maxTime: 12, value: 0},
		{minTime: 12, maxTime: 14, value: 1},
		{minTime: 14, maxTime: 19, value: 2},
		{minTime: 19, maxTime: 0, value: 5}
		],
		//3 - среда
		[
		{minTime: 0, maxTime: 12, value: 0},
		{minTime: 12, maxTime: 14, value: 2},
		{minTime: 14, maxTime: 19, value: 3},
		{minTime: 19, maxTime: 0, value: 6}
		],
		//4 - четверг
		[
		{minTime: 0, maxTime: 9, value: 0},
		{minTime: 9, maxTime: 14, value: 1},
		{minTime: 14, maxTime: 19, value: 2},
		{minTime: 19, maxTime: 0, value: 3}
		],
		//5 - пятница
		[
		{minTime: 0, maxTime: 12, value: 0},
		{minTime: 12, maxTime: 19, value: 2},
		{minTime: 19, maxTime: 0, value: 4}
		],
		//6 - суббота
		[
		{minTime: 0, maxTime: 12, value: 0},
		{minTime: 12, maxTime: 14, value: 2},
		{minTime: 14, maxTime: 19, value: 3},
		{minTime: 19, maxTime: 0, value: 6}
		]
		];
		export {zamerPlanningToday, zamerDoneToday, zamerPlanningNextDay, montazPlanningToday, montazDoneToday};