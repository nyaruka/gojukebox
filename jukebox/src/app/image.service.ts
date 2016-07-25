import {Injectable} from '@angular/core';
import {Jsonp, URLSearchParams, Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class ImageService {
  constructor(private jsonp: Jsonp, private http: Http) {}

  fetchImage(link: string) {
    console.log(link);
    return this.http.get(link)
      .toPromise()
      .catch(this.handleError);
  }

  search (term: string, start: number) {
    let url = "https://www.googleapis.com/customsearch/v1?";
    let params = new URLSearchParams();
    params.set('searchType', 'image');
    params.set('imgType', 'photo');
    params.set('imgSize', 'xxlarge');
    params.set('cx', '001357580456511962690:fu_csfmefou');
    params.set('key', 'AIzaSyDycOXxktA7XHlfzmdS1FTAeNI4GRdbepk');
    params.set('callback', 'JSONP_CALLBACK');
    params.set('q', term);

    if (start > 0) {
       params.set('start', '' + start);
    }

    return this.jsonp
               .get(url, { search: params })
               .map(request => <any[]> request.json().items)
               .catch(this.handleError);
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
