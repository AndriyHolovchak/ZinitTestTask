(function() {
  'use strict';

  angular
    .module('zinitTestTask')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
