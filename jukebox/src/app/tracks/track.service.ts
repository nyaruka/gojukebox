import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Track } from '../tracks/track';
import { Album } from '../albums/album';
import { Headers, Http, Response } from '@angular/http';

@Injectable()
export class TrackService extends DataService<Track> {
  constructor(http: Http) {
    super(http);
  }

  getUrl() {
    return 'app/tracks';
  }

  getTracks(album: Album) {
    if (album) {
      console.log('getting tracks for', album);
      return this.http
                 .get(`app/tracks/?album=${album.id}$`)
                 .toPromise()
                 .then(function(response) {
                   return response.json().data as Track[]
                 });
    } else {
      return this.getAll();
    }
  }
}
