

### core:  maintain a list array, and here stores some user info

### Model: list array

### $scope:
        1. thw shown data in view
        2. the visited user name, phonenumber, and some 'visit' event by button

### view: module



## application

1. create model (var model = [])
2. create AngularJS module (nameList.main) and controller (mainController)
3. in controller, we bind the model with $scope ($scope.nameList = model)
4. by ng-repeat, loop to create table row data
5. realize 'add' function
    a. bind 'name' and 'mobile' input tag with $scope's responding property $scope.nameList.name.
    b. bind the 'add' event with 'invite' button
    c. bind the 'remove' envent with 'remove' button
    d. bind accept and refuse event with responding button
6. listen $location.path(), by  $scope.$watch('location.path()'), when path is different, change the nameList.
