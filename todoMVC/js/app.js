
(function(angular) {

	var app = angular.module('mainApp', ['ngRoute', 'app.controllers.main']);

	app.config(['$routeProvider',function($routeProvider) {
		
		$routeProvider 
			.when('/:status?', {
				controller: 'mainController',
				templateUrl: 'main_tmpl'
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);

	

})(angular); 
































