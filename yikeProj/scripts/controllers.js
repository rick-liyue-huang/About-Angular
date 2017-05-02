
	angular.module('controllers', [])

	.controller('demoController', function($scope) {
		console.log('demoController is called');
	})

	.controller('navController', function($scope) {
		$scope.navs = [
			{link: '#/today', text: 'Today Yike', icon: 'icon-home'},
			{link: '#/older', text: 'Previous Yike', icon: 'icon-file-empty'}
		];
	})

	.controller('todayController', function ($scope, $http, $filter, $rootScope) {

		let today = $filter('date')(new Date, 'yyyy-MM-dd');

		$rootScope.title = 'Today Yike';
		$rootScope.index = 0;
		$rootScope.loaded = false;

		$http({
			url: './api/today.php', // request the address, and solve the cross domain
			method: 'get',
			params: {today: today}

		}).success(function (info) {

			$rootScope.loaded = true;

			$scope.date = info.date;

			$scope.posts = info.posts;


		});

	})

	.controller('olderController', function ($scope, $http, $rootScope) {
		$rootScope.title = 'Previous Yike';
		$rootScope.index = 1;
		$rootScope.loaded = false;

		// 
		$http({
			url: './api/older.php', // 
		}).success(function (info) {

			$rootScope.loaded = true;

			console.log(info);

			$scope.date = info.date;
			$scope.posts = info.posts;
		});
	});


























