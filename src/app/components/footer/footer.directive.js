/**
 * Created by Andriy on 07/04/2016.
 */
(function() {
    'use strict';

    angular
            .module('zinitTestTask')
            .directive('footer', footer);

    /** @ngInject */
    function footer() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/footer/footer.html',
            scope: {
                creationDate: '='
            },
            controller: FooterController,
            controllerAs: 'footer',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function FooterController() {
            //var vm = this;
        }
    }

})();
