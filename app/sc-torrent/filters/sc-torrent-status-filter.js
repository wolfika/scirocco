(() => {

  angular
    .module('scTorrent')
    .filter('torrentStatus', torrentStatus);

  function torrentStatus() {
    return (torrent) => {
      if (torrent.active && torrent.done) {
        return 'Seeding';
      } else if (torrent.active && !torrent.done) {
        return 'Downloading';
      } else if (!torrent.active && torrent.done) {
        return 'Finished';
      } else {
        return 'Paused';
      }
    };
  }

})();
