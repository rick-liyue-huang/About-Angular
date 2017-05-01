
	

	let cate_module = angular.module('cate_module', [/*'showArticleList'*/]);

	cate_module.controller('cateController', function($scope, $http/*, showArticle*/) {


		//  the current category 
		$scope.categoryNow = 1;

		// the current page number
		$scope.nowPage = 1;

		// 获取分类列表
		$http.get('/ports/jianshu/category.do').success(function(res) {

			// alert(res.code);
			if (res.code === 100) {
				// alert('successful');
				$scope.categoryList = res.data;
				// $scope.categoryNow = 1;

				// sometimes, we also need to set the first tag as the fix one, and default
				// $scope.categoryList.unshift({"categoryId": 0, "name": 'Default'});   


				$scope.setCategoryNow = function(now) {
					// alert(now);
					$scope.categoryNow = now;

					// showArticle.showArticleFn();
					showArticleList();

					
				}
			} else {
				alert('wrong---code');
			}

		}).error(function() {
			alert('get data wrong');
		});



		$scope.nowPage = 1;

		showArticleList();

		function showArticleList() {

					// article
		$http.get('/ports/jianshu/articles/' + $scope.categoryNow + '/' + $scope.nowPage + '.do').success(function(res) {

				// alert(res);
				if (res.code === 100) {
					// success
					console.log(res.data );

					$scope.menuList = res.data;


				} else {
					// alert('wrong: ' + res.code);
				}

			}).error(function() {
				alert('error-fn');
			});
		}


	});



	























