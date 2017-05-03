

/* here will control all the controllers*/

angular.module('Controllers', [])

// used to test the data interaction
.controller('DemoController', ['$scope', function ($scope) {
	console.log('启动了');
}])

// navigation controller
.controller('NavController', ['$scope', function ($scope) {


	// nav data
	$scope.navs = [
		{link: '#/today', text: 'Today Yike', icon: 'icon-home'},
		{link: '#/older', text: 'Previous Yike', icon: 'icon-file-empty'},
		{link: '#/author', text: 'Hot Authors', icon: 'icon-pencil'},
		{link: '#/category', text: 'Category Glance', icon: 'icon-menu'},
		{link: '#/settings', text: 'Settings', icon: 'icon-cog'}
	];
}])

// today yike controller
.controller('TodayController', ['$scope', '$http', '$filter', '$rootScope', function ($scope, $http, $filter, $rootScope) {
	
	// get the today date
	var today = $filter('date')(new Date, 'yyyy-MM-dd');

	// change the title
	$rootScope.title = 'Today Yike';
	// set the current index
	$rootScope.index = 0;
	// show the loading icon
	$rootScope.loaded = false;

	$http({
		url: './api/today.php', // request address, and solve the cross domain problems
		method: 'get',
		params: {today: today}
	}).success(function (info) {

		$rootScope.loaded = true;

		// console.log(info);
		// date
		$scope.date = info.date;
		// article data
		$scope.posts = info.posts;
	});

}])

// previous yike
.controller('OlderController', ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {
	
	$rootScope.title = 'Previous Yike';
	$rootScope.index = 1;
	$rootScope.loaded = false;

	
	$http({
		url: './api/older.php', 
	}).success(function (info) {

		$rootScope.loaded = true;

		console.log(info);

		$scope.date = info.date;
		$scope.posts = info.posts;
	});
}])

// author list
.controller('AuthorController', ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {
	// 
	$rootScope.index = 2;
	$rootScope.title = 'Hot Authors';
	$rootScope.loaded = false;

	$http({
		url: './api/author.php'
	}).success(function (info) {
		$rootScope.loaded = true;

		// recommended authors
		$scope.rec = info.rec;

		// hot authors
		$scope.all = info.all;
	});
}])


//  category controller
.controller('CategoryController', ['$scope', '$rootScope', '$http', function ($scope, $rootScope, $http) {
	
	$rootScope.index = 3;
	$rootScope.title = 'Category Glance';

	$rootScope.loaded = false;

	$http({
		url: './api/column.php',
		
	}).success(function (info) {

		$rootScope.loaded = true;

		$scope.columns = info.columns;
	});
}])

// setting controller
.controller('SettingsController', ['$scope', '$rootScope', function ($scope, $rootScope) {
	
	$rootScope.index = 4;
	$rootScope.title = 'Settings';

	$rootScope.loaded = true;

}]);
































