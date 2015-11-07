(() => {

  angular
    .module('scirocco')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/torrents');
  }

})();
