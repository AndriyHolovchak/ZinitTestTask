/**
 * Created by Andriy on 07/05/2016.
 */

(function() {
    'use strict';

    angular
        .module('zinitTestTask')
        .controller('CartController', CartController);

    /** @ngInject */
    function CartController($rootScope, $localStorage, lodash, $state, $http) {
        var vm = this;
        vm.products = [];
        vm.isCart = false;

        if ($localStorage.cart) {
            vm.products = $localStorage.cart;
            if (vm.products.length) {
                vm.isCart = true;
            }
        }

        vm.removeFromCart = function(id) {
            lodash.remove($localStorage.cart, function(i) {
                if (i.id == id) {
                    $rootScope.cartSum -= i.price;
                    $rootScope.cartSum = Math.round($rootScope.cartSum * 100) / 100;
                    return true;
                }
            });
            if (!vm.products.length) {
                vm.isCart = false;
            }
            $state.go($state.current, {}, { reload: true });
        }

        vm.zurKasse = function() {
            var sendData = JSON.stringify(vm.products, null, 4);
            $http({
                url: 'https://angular-file-upload-cors-srv.appspot.com/',
                method: "POST",
                data: sendData,
                headers: { 'Content-Type': 'application/json' }
            }).success(function() {
                alert('Senden JSON Data: ' + sendData);
            }).error(function() {
                alert("error");
            });
        
        }
    }
})();
