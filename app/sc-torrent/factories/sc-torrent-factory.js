(() => {

  angular
    .module('scTorrent')
    .factory('Torrent', Torrent);

  function Torrent() {
    let torrents = [
      {
        name: 'Albatraoz',
        progress: 20,
        done: false,
        active: true,
      },
      {
        name: 'Beaver',
        progress: 20,
        done: false,
        active: true,
      },
      {
        name: 'Cat',
        progress: 20,
        done: false,
        active: false,
      },
      {
        name: 'Dog',
        progress: 23,
        done: false,
        active: false,
      },
      {
        name: 'Eel',
        progress: 100,
        done: true,
        active: true,
      },
      {
        name: 'Fox',
        progress: 100,
        done: true,
        active:
          false,
      },
    ];

    return {
      getTorrents(filter) {
        switch (filter) {
          case 'active':
            return torrents.filter(torrent => torrent.active);

          case 'downloading':
            return torrents.filter(torrent => torrent.active && !torrent.done);

          case 'seeding':
            return torrents.filter(torrent => torrent.active && torrent.done);

          case 'paused':
            return torrents.filter(torrent => !torrent.active && !torrent.done);

          case 'finished':
            return torrents.filter(torrent => !torrent.active && torrent.done);

          default:
            return torrents;
        }
      },
    };
  }

})();
