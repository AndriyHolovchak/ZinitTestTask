(function () {
    'use strict';

    angular
            .module('zinitTestTask')
            .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                abstract: true,
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            }).state('main.home', {
                url: 'home',
                templateUrl: 'app/templates/home.html',
                controller: 'HomeController',
                controllerAs: 'home'
            });

        $urlRouterProvider.otherwise('/home');
    }

})();
