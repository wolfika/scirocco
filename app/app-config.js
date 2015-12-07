import remote from 'remote';

(() => {

  angular
    .module('scirocco')
    .constant('remote', remote)
    .constant('app', remote.require('app'))
    .constant('shell', remote.require('shell'))
    .constant('window', remote.getCurrentWindow())
    .config(setupMaterialTheme)
    .config(setupAppMenu);

  function setupMaterialTheme($mdThemingProvider) {
    $mdThemingProvider
      .theme('scirocco')
      .primaryPalette('blue-grey', {
        default: '500',
      })
      .accentPalette('pink', {
        default: '600',
      });

    $mdThemingProvider.setDefaultTheme('scirocco');
  }

  function setupAppMenu(window) {
    window.setMenu(null);
  }

})();
