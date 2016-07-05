(function () {
    'use strict';

    angular
            .module('zinitTestTask')
            .controller('MainController', MainController);

    /** @ngInject */
    function MainController($rootScope, $scope, $state, lodash, $localStorage, $uibModal) {
        var vm = this;

        if (!$localStorage.userData) {
            $uibModal.open({
                keyboard: false,
                animation: true,
                templateUrl: 'app/templates/modal-login.html',
                controller: 'LoginController',
                controllerAs: 'login'
            });
        } else {
            $rootScope.userData = $localStorage.userData;
        }

        vm.stateName = $state.current.name;

        $scope.$on('$stateChangeStart',
                function (event, toState) {
                    vm.stateName = toState.name;
                });

        $rootScope.cartSum = 0;

        if ($localStorage.cart) {
            lodash($localStorage.cart).forEach(function (value) {
                $rootScope.cartSum += value.price;
            });
        }

        $rootScope.cartSum = Math.round($rootScope.cartSum * 100) / 100;


    }
})();
