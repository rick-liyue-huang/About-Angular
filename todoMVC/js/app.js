(function (angular) {  // window -> angular, can
	'use strict';

	// Your starting point. Enjoy the ride!

	//create main module 'myTodoMVC'
	var myApp = angular.module('myTodoMVC', []);

	// create the main controller
	myApp.controller('mainController', ['$scope', function ($scope) {


		function getId() {
			var id = Math.random();
			for (var i = 0; i < $scope.todos.length; i++) {
				if ($scope.todos[i].id === id) {
					id = getId();
					break;
				}
			}
			return id;
		}


		// the input need a model
		$scope.text = '';

		// the task list also need a model with some default data
		//each task structure like {id: 1, text: 'learn js', completed: true}
		$scope.todos = [
			{id: 1, text: 'learn javascript', completed: true},
			{id: 2, text: 'learn angular', completed: false},
			{id: 3, text: 'learn node', completed: false}
		];

		// add todo
		$scope.add = function () {

			if (!$scope.text) {
				return;
			}

			$scope.todos.push({

				// 自动增长？
				// id: $scope.todos.length + 1,
				// avoid to repeated id
				id: getId(),

				// two-way data-bind $scope.text ,add
				text: $scope.text,
				completed: false
			});

			// clear the input
			$scope.text = '';
		};

		// remove func
		$scope.remove = function (id) {

			//删除谁
			for (var i = 0; i < $scope.todos.length; i++) {

				if ($scope.todos[i].id === id) {
					$scope.todos.splice(i, 1);
					break;

				}
			}
		};

		$scope.clear = function () {

			var results = [];
			for (var i = 0; i < $scope.todos.length; i++) {

				if (!$scope.todos[i].completed) {
					results.push($scope.todos[i]);
				}

			}
			$scope.todos = results;
		};

		// determine whether here have already finished
		$scope.existed = function () {

			// this function has return value of boolean
			for (var i = 0; i < $scope.todos.length; i++) {
				if ($scope.todos[i].completed) {
					return true;
				}
			}
			return false;
		};

		// currently editing element
		$scope.currentEditingId = -1;
		$scope.editing = function (id) {

			$scope.currentEditingId = id;
		};

		// press return to save
		$scope.save = function () {
			$scope.currentEditingId = -1;
		};

		// $scope.checkall = false;
		// $scope.$watch('checkall', function (now, old) {
		// 	for (var i = 0; i < $scope.todos.length; i++) {
		// 		$scope.todos[i].completed = now;
		// 	}
		// });

		var now = false;
		$scope.toggleAll = function () {
			for (var i = 0; i < $scope.todos.length; i++) {
				$scope.todos[i].completed = now;
			}
			now = !now;
		}

	}]);


})(angular);





































