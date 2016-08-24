import {OnInit} from '@angular/core'
import {AlbumService} from '../albums/album.service'
import {Track} from '../tracks/track'
import { Data } from '../data'

export class Album extends Data {
  id: number;
  name: string;
  aritst: number;
  cover: string;
  tracks: Track[];

  constructor() {
    console.log('init album..')
    super()
  }

  setTracks(tracks: Track[]) {
    this.tracks = tracks;
  }

  loadTracks() {
    console.log('loading tracks..');
  }
}
