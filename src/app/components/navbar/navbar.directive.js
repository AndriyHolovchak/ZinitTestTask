(function () {
    'use strict';

    angular
            .module('zinitTestTask')
            .directive('acmeNavbar', acmeNavbar);

    /** @ngInject */
    function acmeNavbar() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/navbar/navbar.html',
            controller: NavbarController,
            controllerAs: 'navbar',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function NavbarController($timeout, $uibModal) {
            var vm = this;
            vm.clock = "loading clock..."; // initialise the time variable
            vm.tickInterval = 1000 //ms
            var checkPartDayInterval = 3600000;

            var tick = function () {
                vm.clock = Date.now() // get the current time
                $timeout(tick, vm.tickInterval); // reset the timer
            }

            // Start the timer
            $timeout(tick, vm.tickInterval);

            var partDay = function () {
                var today = new Date();
                var curHr = today.getHours();

                if (curHr < 4) {
                    vm.partOfDay = "Guten Nacht!";
                } else if (curHr < 12) {
                    vm.partOfDay = "Guten Morgen!";
                } else if (curHr < 18) {
                    vm.partOfDay = "Guten Tag!";
                } else {
                    vm.partOfDay = "Guten Abend!";
                }
                $timeout(partDay, checkPartDayInterval);
            }

            $timeout(partDay, 1);

            vm.showCart = function () {
                return $uibModal.open({
                    keyboard: false,
                    animation: true,
                    templateUrl: 'app/templates/modal-cart.html',
                    controller: 'CartController',
                    controllerAs: 'cart'
                });
            }
        }
    }

})();
