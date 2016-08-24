import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Artist } from './artist';
import { DataService } from '../data.service'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ArtistService extends DataService<Artist> {

  constructor(http: Http) {
    super(http);
  }

  getUrl() {
    return 'app/artists';
  }

  search(term: string) {
    return this.http
               .get(`app/artists/?name=${term}+`)
               .map((r: Response) => r.json().data as Artist[]);
  }

}
