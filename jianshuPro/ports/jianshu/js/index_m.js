
	let app = angular.module('index_m', ['news_module', 'category_module']);

//  this is the common filter.
	app.filter('showAsHtml', function($sce) {
		return function (input) {
			return $sce.trustAsHtml(input);
		};
	});

	app.controller('index_m', function($scope, $http, $sce) {


		// index_m specific here for the mobile ones

		

	 });

	app.controller('article_m', function($scope, $http) {

		// id for article
		let id = location.search.substring(1).split('=')[1];
	    console.log(id);

	    $http.get('/ports/jianshu/articleInfor/' + id + '.do').success(function(res) {
	    	console.log(res);

	    	if (res.code == 100) {
	    		$scope.articleInfo = res.data;
	    		console.log(res.data);
	    	} else {
	    		console.log('wrong: ' + res.code);
	    	}
	    	



	    }).error(function() {
	    	// alert('wrong');
		});

	});
		

	
   































