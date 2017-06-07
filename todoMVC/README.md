In this project, I just download the 'todomvc-app-template' template, and use angular.js to realize it.

### TodoMVC project

#### one:
based one the view to get the data member (which data we need? )
It means that which part in the view is changeable, and we bind the changeable part with data member (model)

In this project, the list can be acted as array (index: value) or object (key: value). -- " $scope.todos "

The stored data content (array) includes 'index', 'text' and 'completed', the index used to differentiate the element from others.

 In the tag of '3 items lefts', it is correlative to the list length.
 
 And the 'clear completed' tag is also correlative to the list element 'completed' property.
 
 #### two:
 In the app.js, we code the angular MVC.
 
 ```
 var myApp = angular('myTodoMVC', []);
 myApp.controller('mainController', ['$scope', fn])
 ```
 
 In angular.js, no DOM control, we use two-way data bind ("$scope") to sync the data between view and model.
  
 'ng-model' 'ng-click' '{{}}', 'ng-show' all used to bind the data, and we can deal with them in controller 'app.js'
 
 here note that : '{{}}' or 'ng-bind' can deal with 'innerHTML', and 'ng-model' can deal with 'value' property in 'input' tag
  
 '$scope' can bind with data or action. 

 #### three:

 In this project, firstly I put everything in the app-pre.js, including 'module', 'controller'.

 And then, I seperate the app-pre.js to differnt .js files, includes 'main.js' in controller module, 'main.js' in service module, and 'app.js' for the entrance module.

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 