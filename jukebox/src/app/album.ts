import {OnInit} from '@angular/core'
import {AlbumService} from './album.service'
import {Track} from './track'

export class Album {
  id: number;
  name: string;
  aritst: number;
  cover: string;
  tracks: Track[];
}
