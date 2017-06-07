
(function(angular) {

  var controllers = angular.module('app.controllers.main', ['app.services.main']);

  controllers.controller('mainController', [

    '$scope',
    '$routeParams',
    '$route',
    'mainService',
    function($scope, $routeParams, $route, mainService) {

      $scope.data = {};
      $scope.actions = {};

      $scope.data.input = '';

      $scope.data.todoList = mainService.get();

      $scope.actions.add = function() {
        if (!$scope.data.input) {
          return
        }

        mainService.add($scope.data.input);

        $scope.data.input = '';
      };


      $scope.actions.remove = function(id) {
        mainService.remove(id);
      };

      $scope.actions.clearCompleted = function() {
        var newTodos = mainService.clearCompleted();
        $scope.data.todoList = newTodos;
      };

      $scope.actions.existCompleted = mainService.existCompleted;

      $scope.data.currentEditingId = -1;
      $scope.actions.edit = function(id) {
        $scope.data.currentEditingId = id;
      };

      $scope.actions.save = function() {
        $scope.data.currentEditingId = -1;
      };

      $scope.actions.toggleAll = function() {
        mainService.toggleAll();
      };

      $scope.actions.toggle = function() {
        mainService.save();
      };

      $scope.data.selector = {};

      var status = $routeParams.status;

      switch (status) {

        case 'active':
          $scope.data.selector = {completed: false};
          break;

        case 'completed':
          $scope.data.selector = {completed: true};
          break;

        default:
          $route.updateParams({status: ''});
          $scope.data.selector = {};
          break;
      }

      $scope.actions.equalCompare = function(source, target) {

        return source === target;
      };

    }


    ]);

})(angular); 































