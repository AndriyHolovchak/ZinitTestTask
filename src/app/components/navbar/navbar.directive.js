(function() {
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

      var tick = function () {
        vm.clock = Date.now() // get the current time
        $timeout(tick, vm.tickInterval); // reset the timer
      }

      // Start the timer
      $timeout(tick, vm.tickInterval);

      vm.showCart = function() {
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
