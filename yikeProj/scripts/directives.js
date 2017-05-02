
	angular.module('Directives', [])

	// self define directive
	.directive('loading', function () {
		return {
			restrict: 'A',
			replace: true,
			template: '<img src="" alt="" />'
		}
	});