
	let app = angular.module('jianshu', []);

	app.controller('newsData', function($scope, $http) {


		//  the current category 
		$scope.categoryNow = 1;

		// the current page number
		$scope.nowPage = 1;

		// deal with the title --- sample
		// $scope.a='<h1>aaa</h1>'

		// 获取分类列表
		$http.get('/ports/jianshu/category.do').success(function(res) {

			// alert(res.code);
			if (res.code === 100) {
				// alert('successful');
				$scope.categoryList = res.data;
				// $scope.categoryNow = 1;
				$scope.setCategoryNow = function(now) {
					// alert(now);
					$scope.categoryNow = now;
				}
			} else {
				alert('wrong');
			}

		}).error(function() {
			alert('get data wrong');
		});


		// 文章列表
		$http.get('/ports/jianshu/articles/' + $scope.categoryNow + '/' + $scope.nowPage + '.do').success(function(res) {

			// alert(res);
			if (res.code === 100) {
				// success
				console.log(res.data);

				$scope.menuList = res.data;


			} else {
				alert('wrong');
			}

		}).error(function() {
			alert('error');
		})
	});

	// id for article
	let id = location.search.substring(1).split('=')[1];
    // console.log(id);

    $http.get('ports/jianshu/aritcleInfor/' + id + '.do').success(function(res) {
    	console.log(res);
    }).error(function() {

    });































