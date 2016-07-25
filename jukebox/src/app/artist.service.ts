import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Artist } from './artist';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ArtistService {

  private artistsUrl = 'app/artists';
  constructor(private http: Http) {}

  getArtists() {
    return this.http.get(this.artistsUrl)
      .toPromise()
      .then(function(response) {
        return response.json().data as Artist[];
      })
      .catch(this.handleError);
  }

  getArtist(id: number) {
    return this.http.get(this.artistsUrl + '/?id=' + id)
      .toPromise()
      .then(function(response) {
        return response.json().data[0] as Artist;
      })
      .catch(this.handleError);
  }

  search(term: string) {
    return this.http
               .get(`app/artists/?name=${term}+`)
               .map((r: Response) => r.json().data as Artist[]);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
