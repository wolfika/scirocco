(() => {

  angular
    .module('scNavigation')
    .directive('scMainMenu', scMainMenu);

  function scMainMenu(app, shell) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'sc-navigation/directives/main-menu-directive.tpl.html',
      controllerAs: 'mainMenu',
      controller(app, shell) {
        var _this = this;

        _this.openDocs = function openDocs() {
          shell.openExternal('https://github.com/wolfika/scirocco/wiki');
        };

        _this.openIssues = function openIssues() {
          shell.openExternal('https://github.com/wolfika/scirocco');
        };

        _this.quit = function quit() {
          app.quit();
        };
      },
    };
  }
})();
