import remote from 'remote';

(() => {
  angular
    .module('scirocco', [
      'ngAria',
      'ngMaterial',
      'ui.router',
    ]).controller('AppCtrl', AppCtrl);

  function AppCtrl() {
    let _this = this;

    _this.quit = function quit() {
      remote.require('app').quit();
    };
  }
})();
