
(function(angular) {

  // define the entrance module "mainApp"
  var app = angular.module('mainApp', []);

  app.controller('mainController', ['$scope', function($scope){
    
    function getId() {

      var id = Math.random();

      for (var i = 0, len = $scope.data.todoList.length; i < len; i++) {
        if ($scope.data.todoList[i].id === id) {
          id = getId();
          break;
        }
      } 
      return id;
    }

    $scope.data = {};
    $scope.actions = {};

    $scope.data.input = '';

    $scope.data.todoList = [
      {id: Math.random(), text: 'learn javascript', completed: false},
      {id: Math.random(), text: 'learn angular.js', completed: true},
      {id: Math.random(), text: 'learn node.js', completed: false}
    ];

    // to add the data to the todoList
    $scope.actions.add = function() {

      if (!$scope.data.input) {
        return
      }

      $scope.data.todoList.push({id: getId(), text: $scope.data.input, completed: false});

      $scope.data.input = '';

    };

    // click 'cross' button to remove the data
    $scope.actions.remove = function(id) {

      for (var i = 0, len = $scope.data.todoList.length; i < len; i++) {
        if ($scope.data.todoList[i].id === id) {
          $scope.data.todoList.splice(i, 1);
          break;
        }
      }
    };

    // only appears the data with completed of 'true'
    $scope.actions.clearCompleted = function() {

      var results = [];
      for (var i = 0, len = $scope.data.todoList.length; i < len; i++) {

        if (!$scope.data.todoList[i].completed) {
            results.push($scope.data.todoList[i]);
        }
      }
      $scope.data.todoList = results;

    };

    // determine whether 'clear completed' button existed
    $scope.actions.existCompleted = function() {

      var has = false;

      for (var i = 0, len = $scope.data.todoList.length; i < len; i++) {

        if ($scope.data.todoList[i].completed) {
          has = true;
        }
      }
      return has;
    };

    $scope.data.currentEditingId = -1;

    $scope.actions.edit = function(id) {
      $scope.data.currentEditingId = id;
    }

    $scope.actions.save = function() {
      $scope.data.currentEditingId = -1;
    }

    // press to check all target
    var now = true;
    $scope.actions.toggleAll = function() {
      for (var i = 0, len = $scope.data.todoList.length; i < len; i++) {
        $scope.data.todoList[i].completed = now;
      }
      now = !now;
    };



  }]);


})(angular); 

































