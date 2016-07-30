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

  save(artist: Artist): Promise<Artist>  {
    if (artist.id) {
      return this.put(artist);
    }
    return this.post(artist);
  }

  delete(artist: Artist) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.artistsUrl}/${artist.id}`;
    return this.http
             .delete(url, {headers: headers})
             .toPromise()
             .catch(this.handleError);
  }

  // Add new Artist
  private post(artist: Artist): Promise<Artist> {
    let headers = new Headers({'Content-Type': 'application/json'});

    return this.http
             .post(this.artistsUrl, JSON.stringify(artist), {headers: headers})
             .toPromise()
             .then(res => res.json().data)
             .catch(this.handleError);
  }

  // Update existing Artist
  private put(artist: Artist) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.artistsUrl}/${artist.id}`;

    return this.http
             .put(url, JSON.stringify(artist), {headers: headers})
             .toPromise()
             .then(() => artist)
             .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
