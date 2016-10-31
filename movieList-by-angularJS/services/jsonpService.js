void function () {
    // jsonp request
    var mlJsonp = angular.module('ml.services.jsonp', []);
    mlJsonp.factory('mlJsonp', function ($rootScope) {
        var count = 0;


        return function (url, callback) {
            //1. create a script tag
            var scriptElem = document.createElement('script');

            //2.
            var callbackName = "__callback__" + count++;
            var jsonpUrl = url.replace('JSONP_CALLBACK', callbackName);
            scriptElem.src = jsonpUrl;

            //3. create a fun function to receive a data
            window[callbackName] = function(data){
                //
                callback(data);
                $rootScope.$apply(); //$scope的$apply()，to update。

                window.document.body.removeChild(scriptElem);
            };

            //4.put in body
            window.document.body.appendChild(scriptElem);
        }
    })
}();