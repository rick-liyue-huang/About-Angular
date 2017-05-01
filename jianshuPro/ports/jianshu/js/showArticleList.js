
	let showArticleList = angular.module('showArticleList', []);


/*
	showArticleList.factory('showArticle', function($scope, $http) {
		return {

			showArticleFn:  function showArticleList() {

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
		};
	});

*/   
	showArticleList.provider('showArticle', function($scope, $http) {
		this.$get = function () {

			return {

				showArticleFn:  function showArticleList() {

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
			}
		}
	})