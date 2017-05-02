
	let app = angular.module('yikeSim', ['ngRoute', 'controllers']);


//  .config will works before the app module runs. and it config some router
	app.config(['$routeProvider',function($routeProvider) {
		
		$routeProvider.when('/today', {

			templateUrl: './views/today.html',
			controller: 'todayController'

		})
		.when('/older', {

			templateUrl: './views/older.html',
			controller: 'olderController'

		})
		.otherwise({

			redirectTo: '/today'

		});


	}]);

	// .run will initiate the the global data, and works immediatelly after the app module runs.
	app.run(['$rootScope', function($rootScope) {


		// initiate the classname 
		$rootScope.collapsed = false;

		// initiate the global methods
		$rootScope.toggle = function () {

			$rootScope.collapsed = !$rootScope.collapsed;

			// get all the navigation
			let navs = document.querySelectorAll('.navs dd');

			if($rootScope.collapsed) {
				
				for(var i=0; i<navs.length; i++) {
					navs[i].style.transform = 'translate(0)';
					navs[i].style.transitionDelay = '0.2s';
					navs[i].style.transitionDuration = (i + 1) * 0.15 + 's';
				}
			} else {
				
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































