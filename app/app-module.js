(() => {
  angular
    .module('scirocco', [
      'ngAria',
      'ngMaterial',
      'ui.router',
      'scNavigation',
    ]).controller('AppCtrl', AppCtrl);

  function AppCtrl() {
    let _this = this;

    _this.version = '0.0.1';
  }
})();
