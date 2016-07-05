/**
 * Created by Andriy on 07/04/2016.
 */

(function() {
    'use strict';

    angular
            .module('zinitTestTask')
            .controller('ProvenceController', ProvenceController);

    /** @ngInject */
    function ProvenceController($uibModal, $localStorage, lodash) {
        var vm = this;

        vm.topseller = [
            {
                id: 1,
                name: "Quinta de Sao Vicente Essig",
                price:  9.90,
                inhalt: "0.25 Liter (39.60/ 1 Liter)",
                img_url: "http://www.shopwaredemo.de/media/image/2d/a4/95/SW10101_200x200.png"
            },
            {
                id: 2,
                name: "Steiriches Kurbiskenol ggA",
                price:  14.00,
                inhalt: "0.25 Liter (56.00/ 1 Liter)",
                img_url: "http://www.kfofinho.com/wp-content/uploads/2016/03/Balsamico-Essig.png"
            },
            {
                id: 3,
                name: "Quinta de Sao Vicente OI",
                price:  6.90,
                inhalt: "0.25 Liter (37.60/ 1 Liter)",
                img_url: "http://www.shopwaredemo.co.uk/media/image/52/1c/6b/SW10102_600x600.png"
            }
        ];

        //function for find object in array by id;
        function findObById(id, arr) {
            return lodash.find(arr, function(obj) { return obj.id == id });
        }

        function isInWishList() {
            lodash($localStorage.cart).forEach(function(value) {
                var prodObj  = lodash.find(vm.topseller, function(obj) { return obj.id == value.id });
                if (prodObj) {
                    prodObj.inCart = true;
                }
            });
        }

        $localStorage.cart = $localStorage.cart || [];

        vm.addToCart = function(id) {
            var product = findObById(id, vm.topseller);
            $localStorage.cart.push(product);
            product.inCart = true;
            return $uibModal.open({
                keyboard: false,
                animation: true,
                templateUrl: 'app/templates/modal-cart.html',
                controller: 'CartController',
                controllerAs: 'cart'
            });
        }

        vm.removeFromCart= function(id) {
            lodash.remove($localStorage.cart, function(i) {
                if (i.id == id) {
                    var prodObj  = lodash.find(vm.topseller, function(obj) { return obj.id == i.id });
                    if (prodObj) {
                        prodObj.inCart = false;
                    }
                    return true;
                }
            });
            return $uibModal.open({
                keyboard: false,
                animation: true,
                templateUrl: 'app/templates/modal-cart.html',
                controller: 'CartController',
                controllerAs: 'cart'
            });
        }

        isInWishList();
    }
})();