(() => {
  angular
    .module('scirocco')
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
