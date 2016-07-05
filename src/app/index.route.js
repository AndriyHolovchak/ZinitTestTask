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
            }).state('main.provence', {
                url: 'provence',
                templateUrl: 'app/templates/provence.html',
                controller: 'ProvenceController',
                controllerAs: 'provence'
            }).state('main.adventure', {
                url: 'adventure',
                templateUrl: 'app/templates/adventure.html',
            }).state('main.tradition', {
                url: 'tradition',
                templateUrl: 'app/templates/tradition.html',
            }).state('main.specials', {
                url: 'specials',
                templateUrl: 'app/templates/specials.html',
            }).state('main.blog', {
                url: 'blog',
                templateUrl: 'app/templates/blog.html',
            });

        $urlRouterProvider.otherwise('/home');
    }

})();
