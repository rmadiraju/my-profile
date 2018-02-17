(function () {
    'use strict';

    angular
        .module('app', ['ngRoute','ngCookies'])
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider'];
    function config($routeProvider, $locationProvider, $httpProvider) {
        
        $routeProvider
            .when('/profile', {
                controller: 'ProfileController',
                templateUrl: 'views/profile.view.html',
                controllerAs: 'vm'

            })

            .otherwise({ redirectTo: '/profile' });
    }


    run.$inject = ['$rootScope', '$location', '$http', '$document', '$window', '$q'];



})();
