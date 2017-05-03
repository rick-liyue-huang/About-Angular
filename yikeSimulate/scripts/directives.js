

/**
* directives Module
*/
angular.module('Directives', [])

// self define directive ---- loading
.directive('loading', function () {
	return {
		restrict: 'A',
		replace: true,
		template: '<img src="" alt="" />'
	}
});