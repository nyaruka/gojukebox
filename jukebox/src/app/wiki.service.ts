import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';

@Injectable()
export class WikipediaService {
  constructor(private jsonp: Jsonp) {}

  search (term: string) {
    console.log('searching wikipedia for ' + term);
    let wikiUrl = 'http://en.wikipedia.org/w/api.php';
    let params = new URLSearchParams();
    params.set('titles', term);
    params.set('action', 'query');
    params.set('prop', 'extracts');
    params.set('exintro', '');
    params.set('explaintext', '');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');
    // TODO: Add error handling
    return this.jsonp
               .get(wikiUrl, { search: params })
               .map(request => <string> request.json()['query']['pages']['210453']);
  }
}
