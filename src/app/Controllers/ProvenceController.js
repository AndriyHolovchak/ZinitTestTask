/**
 * Created by Andriy on 07/04/2016.
 */

(function() {
    'use strict';

    angular
            .module('zinitTestTask')
            .controller('ProvenceController', ProvenceController);

    /** @ngInject */
    function ProvenceController() {
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
        ]
    }
})();