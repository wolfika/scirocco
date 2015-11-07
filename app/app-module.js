(() => {
  angular
    .module('scirocco', [
      'ngAria',
      'ngMaterial',
      'ui.router',
      'scNavigation',
    ]).controller('AppCtrl', AppCtrl);

  function AppCtrl(remote) {
    let _this = this;

    _this.quit = function quit() {
      remote.require('app').quit();
    };
  }
})();
