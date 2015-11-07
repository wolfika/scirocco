(() => {

  angular
    .module('scNavigation')
    .directive('scFilterTabs', scFilterTabs);

  function scFilterTabs() {
    return {
      restrict: 'E',
      replace: false,
      templateUrl: 'sc-navigation/directives/filter-tabs-directive.tpl.html',
      controllerAs: 'filterTabs',
    };
  }

})();
