
(function () {

    var movieList = angular.module('ml.movieList', ['ml.model']);

    movieList.controller('MovieListController', function ($scope, $routeParams, mlModel) {

        var category = $routeParams.category;
        var page = $routeParams.page;


        //起始记录和当前页面有关，每页显式的列表项数有关
        var listCount = 12;
        var start = (page - 1) * listCount;


        // 回调函数用于页面要显示的列表数据
        var vm = $scope.vm = {};
        vm.data = [];
        switch (category) {
            case 'top250':
                mlModel.getTop250(start, listCount, function (data) {
                    vm.data = data.subjects;
                });
                break;
        }

        $scope.params = $routeParams;
        $scope.name = 'list';
    })

})();
