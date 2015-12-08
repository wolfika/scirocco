(() => {

  angular
    .module('scTorrent')
    .controller('TorrentsCtrl', TorrentsCtrl);

  function TorrentsCtrl($stateParams, Torrent) {
    const _this = this;
    let currentFilter = $stateParams.filter || 'all';

    _this.torrents = Torrent.getTorrents(currentFilter);
  }

})();
