export class InMemoryDataService {
  createDb() {

    let artists = [
      {id: 1, name: 'Phish', splash: 'images/artists/phish.jpg', position:'top'},
      {id: 2, name: 'Beck', splash: 'images/artists/beck.jpg', position:'top'},
      {id: 3, name: 'Britney Spears', splash: 'images/artists/britney_spears.jpg', position:'top'},
      {id: 4, name: 'Black Eyed Peas', splash: 'images/artists/black_eyed_peas.jpg', position:'top'},
      {id: 5, name: 'The Police', splash: 'images/artists/the_police.jpg', position:'top'},
      {id: 6, name: 'Coldplay', splash: 'images/artists/coldplay.jpg', position:'top'},
      {id: 7, name: 'Sublime', splash: 'images/artists/sublime.jpg', position:'top'},
      {id: 8, name: 'Eminem', splash: 'images/artists/eminem.jpg', position:'cover'},
      {id: 9, name: 'Dr. Dre', splash: 'images/artists/dr_dre.jpg', position:'cover'},
      {id: 10, name: 'Madonna', splash: 'images/artists/madonna.jpg', position:'bottom'}
    ];

    let albums = [
      {id: 1, artist: 1, name: 'Fuego', cover: 'images/albums/fuego.jpg'},
      {id: 2, artist: 2, name: 'Morning Phase', cover: 'images/albums/morning_phase.jpg'},
      {id: 3, artist: 3, name: 'Circus', cover: 'images/albums/circus.jpg'},
      {id: 4, artist: 4, name: 'Elephunk', cover: 'images/albums/elephunk.jpg'},
      {id: 5, artist: 5, name: 'Message in a Bottle', cover: 'images/albums/message_in_a_bottle.jpg'},
      {id: 6, artist: 6, name: 'X&Y', cover: 'images/albums/message_in_a_bottle.jpg'},
      {id: 7, artist: 7, name: 'Sublime', cover: 'images/albums/sublime.jpg'},
      {id: 8, artist: 8, name: 'Marshall Mathers LP', cover: 'images/albums/marshall_mathers_lp.jpg'},
      {id: 9, artist: 9, name: 'Chronic', cover: 'images/albums/chronic.jpg'},
      {id: 10, artist: 10, name: 'Erotica', cover: 'images/albums/erotica.jpg'}
    ]

    return {
      artists
    };
  }
}
