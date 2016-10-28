
// we use the IIFE to create a new angularJS module,  it is depended by the main module

(function () {

    var module = angular.module('nameList.module', []);

    module.controller('moduleController', function ($scope) {

    });

    module.factory('moduleService', function () {

        // create a array to store the nameList
        var data = [];


        // a constructor function used to create the new user
        function User(name, phone) {
            this.name = name;
            this.phone = phone;
            this.status = "inviting";
        }

        User.prototype.accept = function () {
            this.status = "accept";
        };

        User.prototype.refuse = function () {
            this.status = "refuse";
        };

        return {

            getAll: function () {
                return data.slice(0);
            },

            invite: function (name, phone) {

                if (!name || !phone) {
                    return {
                        code: 'error',
                        message: 'username or phone number can not be empty'
                    };
                }

                var isOk = true;

                data.forEach(function (value, index, array) {
                    isOk = isOk && (value.phone != phone);
                });

                if (!isOk) {
                    return {
                        code: 'error',
                        message: 'phone number can not be repeated'
                    };
                }

                if (isOk) {
                    var user = new User(name, phone);
                    data.push(user);
                    return {
                        code: 'ok'
                    };
                }
            },

            remove: function (user) {
                //    TODO
                var index = data.indexOf(user);
                data.splice(index, 1);
            }
        }
    });

})();
























