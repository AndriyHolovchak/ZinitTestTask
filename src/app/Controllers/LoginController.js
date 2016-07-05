/**
 * Created by Andriy on 07/05/2016.
 */
(function() {
    'use strict';

    angular
            .module('zinitTestTask')
            .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController($rootScope, $localStorage, $uibModalInstance) {
        var vm = this;

        vm.login = function(data) {
            $localStorage.userData = data;
            $rootScope.userData = data;
            $uibModalInstance.dismiss('cancel');
        }
    }
})();