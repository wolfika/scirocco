(() => {

  angular
    .module('scTorrent')
    .config(config);

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
      .otherwise('/torrents/all');

    $stateProvider
      .state('torrents', {
        url: '/torrents/:filter',
        params: {
          filter: null,
        },
        templateUrl: 'sc-torrent/views/sc-torrents.tpl.html',
        controllerAs: 'torrents',
        controller: 'TorrentsCtrl',
      });
  }
})();
