(() => {

  angular
    .module('scirocco', [
      'ngAria',
      'ngMaterial',
      'ui.router',
      'scNavigation',
      'scTorrent',
    ]).controller('AppCtrl', AppCtrl);

  function AppCtrl() {
    let _this = this;

    _this.version = '0.0.1';
  }

})();
