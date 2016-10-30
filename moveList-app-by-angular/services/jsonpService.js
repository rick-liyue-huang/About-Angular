

void function () {

    // jsonp 请求的服务
    var mlJsonp = angular.module('ml.services.jsonp', []);
    mlJsonp.factory('mlJsonp', function ($rootScope) {

        var count = 0;

        return function (url, callback) {
            /*
            * 那么，我们如何自制一个jsonp访问的服务

             1.创建一个script标签
             2.把地址传进去： 原地址+ "? &+callback=fn  "
             3.创建一个fn函数，用于接收返回的数据
             a. 把数据传给想要的人
             b. 把我们创建的script标签删掉
            *
            * */

            var scriptElem = document.createElement('script');
            var callbackName = "__callback__" + count++;
            var jsonpUrl = url.replace('JSONP_CALLBACK', callbackName);
            scriptElem.src = jsonpUrl;

            window[callbackName] = function (data) {
                // 把数据传给想要用的人
                callback(data);
                $rootScope.$apply(); // $apply() always update the $rootScope
                window.document.body.removeChild(scriptElem);
            };
            // 4. 把标签放到body上，把请求发过去

            window.document.body.appendChild(scriptElem);
        }
    });

}();





















