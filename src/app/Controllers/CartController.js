/**
 * Created by Andriy on 07/05/2016.
 */

(function() {
    'use strict';

    angular
            .module('zinitTestTask')
            .controller('CartController', CartController);

    /** @ngInject */
    function CartController($localStorage, lodash, $state) {
        var vm = this;
        vm.isCart = false;

        if($localStorage.cart) {
            vm.products = $localStorage.cart;
            if (vm.products.length) {
                vm.isCart = true;
            }
        }

        vm.removeFromCart = function(id) {
            lodash.remove($localStorage.cart, function(i) {
                if (i.id == id) {
                    return true;
                }
            });
            if (!vm.products.length) {
                vm.isCart = false;
            }
            $state.go($state.current, {}, {reload: true});
        }

       /* vm.products = [
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
        ];*/
    }
})();