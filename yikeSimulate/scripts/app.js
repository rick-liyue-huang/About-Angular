

// entrance file
var app = angular.module('yikeSim', ['ngRoute', 'Controllers', 'Directives']);

// .config will works before the app module runs. and it config some router, and match the templates and controllers
app.config(['$routeProvider', function ($routeProvider) {


	// config the today yike, 
	$routeProvider.when('/today', {
		templateUrl: './views/today.html',
		controller: 'TodayController'
	})

	// config the previous yike
	.when('/older', {
		templateUrl: './views/older.html',
		controller: 'OlderController'
	})

	//  config the author list
	.when('/author', {
		templateUrl: './views/author.html',
		controller: 'AuthorController'
	})
	
	// config the category glance
	.when('/category', {
		templateUrl: './views/category.html',
		controller: 'CategoryController'

	})
	// config settings
	.when('/settings', {
		templateUrl: './views/settings.html',
		controller: 'SettingsController'
	})

	.otherwise({
		redirectTo: '/today'
	});

}]);


//  .run will initiate the the global data, and works immediatelly after the app module runs
app.run(['$rootScope', function ($rootScope) {
	// init the global values
	$rootScope.collapsed = false;

	// init the global methods
	$rootScope.toggle = function () {
		// console.log(1);
		// change the initial values
		$rootScope.collapsed = !$rootScope.collapsed;

		// get all navigations
		var navs = document.querySelectorAll('.navs dd');

		if($rootScope.collapsed) {

			// console.log('open');
			for(var i=0; i<navs.length; i++) {
				navs[i].style.transform = 'translate(0)';
				navs[i].style.transitionDelay = '0.2s';
				navs[i].style.transitionDuration = (i + 1) * 0.15 + 's';
			}
		} else {
			// console.log('close');
			
			var len = navs.length - 1;
			for(var j=len; j>0; j--) {
				// console.log(navs.length - j + 1);
				navs[j].style.transform = 'translate(-100%)';
				navs[j].style.transitionDelay = '';
				navs[j].style.transitionDuration = (len - j) * 0.15 + 's';
			}
		}
	}


}]);