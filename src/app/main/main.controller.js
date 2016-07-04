(function() {
  'use strict';

  angular
    .module('zinitTestTask')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($rootScope, $scope, $state) {
    var vm = this;

    vm.stateName = $state.current.name;

    $scope.$on('$stateChangeStart',
            function(event, toState){
              vm.stateName = toState.name;
            });
  }
})();
