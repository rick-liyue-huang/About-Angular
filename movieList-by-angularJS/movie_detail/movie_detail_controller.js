(function(){
    var movieDetail = angular.module('ml.movieDetail',['ml.model']);

    movieDetail.controller('MovieDetailController',function($scope,$routeParams,mlModel){
        // get id from route params
        var id = $routeParams.id;

        mlModel.getSubject(id,function(data){
            $scope.data = data;
            console.log($scope.data)
        })

    })

})();