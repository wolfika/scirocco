import remote from 'remote';

(() => {
  angular
    .module('scirocco')
    .constant('remote', remote)
    .config(setupMaterialTheme);

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
})();
