import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {DataService} from '../data.service'
import {Album} from './album';
import {Artist} from '../artists/artist';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AlbumService extends DataService<Album> {

  constructor(http: Http) {
    super(http)
  }

  getUrl() {
    return 'app/albums';
  }

  getAlbums(artist: Artist) {
    if (artist) {
      return this.http
                 .get(`app/albums/?artist=${artist.id}$`)
                 .toPromise()
                 .then(function(response) {
                   return response.json().data as Album[]
                 });
    } else {
      return this.getAll();
    }
  }

  search(term: string) {
    return this.http
               .get(`app/albums/?name=${term}+`)
               .map((r: Response) => r.json().data as Album[]);
  }
}
