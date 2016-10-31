(function () {
    var movieList = angular.module('ml.movieList', ['ml.model']);
    movieList.controller('MovieListController', function ($scope, $routeParams, mlModel) {
        //  get AngularJS path params
        // get category
        var category = $routeParams.category;
        // the page
        var page = $routeParams.page;

        var listCount = 12;

        var start = (page - 1) * listCount;


        // the the data shown in page
        var vm = $scope.vm = {};
        vm.data = [];
        vm.pager = {};

        // loading mark
        vm.loading = true;


        function buildPager(page, total, listCount, category) {
            this.curr = page; // current page
            this.max = Math.ceil(total / listCount);
            // next page
            this.next = page == this.max
                ? this.max
                : page - 0 + 1;
            // previous page
            this.prev = page == 1
                ? 1
                : page - 1;
            this.category = category;
        }

        switch (category) {
            case "top250":
                mlModel.getTop250(start, listCount, function (data) {
                    vm.data = data.subjects;
                    vm.pager = new buildPager(page, data.total, listCount, category);
                    vm.loading = false;
                });
                break;
            case "in_theaters": // in theater
                mlModel.getInTheaters(start, listCount, function (data) {
                    vm.data = data.subjects;
                    vm.pager = new buildPager(page, data.total, listCount, category);
                    vm.loading = false;
                });
                break;
            case "coming_soon": // coming soon
                mlModel.getComingSoon(start, listCount, function (data) {
                    vm.data = data.subjects;
                    vm.pager = new buildPager(page, data.total, listCount, category);
                    vm.loading = false;
                });
                break;
        }
    })
})();