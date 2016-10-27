/**
 * Created by leo on 27/10/16.
 */


(function () {
    var module = angular.module('nameList.model', []);

    module.controller('modelController', function ($scope) {
        $scope.name = 'model Service';
    });



    module.factory('modelService', function () {

        // app data 'the users
        var data = [];

        function Guest(name, mobile) {
            this.status = 'inviting';
            this.name = name;
            this.mobile = mobile
        }

        Guest.prototype.accept = function () {
            this.status = 'accept';
        };

        Guest.prototype.refuse = function () {
            this.status = 'refuse';
        };

        return {

            // 1. get all data
            getAll: function () {
                return data.slice(0); // return the new data array
            },

            invite: function (name, mobile) {
                // TODO: invite

                var isOk = true;

                if (!name || !mobile) {
                    isOk = false;
                    return {
                        code: 'error',
                        message: 'cannot be empty'
                    }
                }

                // 4.2 mobile is repeated
                data.forEach(function (value, index, array) {
                    isOk = isOk && (value.mobile != mobile);
                    return {
                        code: 'error',
                        message: 'repeated mobile number'
                    }
                });

                if (isOk) {
                    var userinfo = new Guest(name, mobile);
                    data.push(userinfo);

                    return {
                        code: 'ok'
                    };
                }

            },

            remove: function (userinfo) {
                // TODO: remove

                //            get userInfo index of the model array
                var index = model.indexOf(userinfo);
                data.splice(index, 1);
            }

        }
    })
})();




























