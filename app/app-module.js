(() => {
  angular
    .module('scirocco', [
      'ngAria',
      'ngMaterial',
      'ui.router',
    ]).controller('AppCtrl', AppCtrl);

  function AppCtrl() {
    let _this = this;

    _this.something = 'That\'s something!';
  }
})();
