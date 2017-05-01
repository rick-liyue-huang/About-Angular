
	

	let news_module = angular.module('news_module', ['showArticleList']);

	news_module.controller('newsController', function($scope, $http, showArticle) {


		

		// the current page number
		$scope.nowPage = 1;

		showArticle.showArticleFn();


		


	});






















