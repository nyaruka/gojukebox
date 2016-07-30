import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Data } from './data';
import 'rxjs/add/operator/toPromise';

@Injectable()
export abstract class DataService<T extends Data> {

  constructor(protected http: Http) {}

  abstract getUrl(): string;

  get(id: number) {
    return this.http.get(this.getUrl() + '/?id=' + id)
      .toPromise()
      .then(function(response) {
        return response.json().data[0] as T;
      })
      .catch(this.handleError);
  }

  getAll() {
    return this.http.get(this.getUrl())
      .toPromise()
      .then(function(response) {
        return response.json().data as T[];
      })
      .catch(this.handleError);
  }

  save(data: T): Promise<T>  {
    if (data.id) {
      return this.put(data);
    }
    return this.post(data);
  }

  delete(data: T) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.getUrl()}/${data.id}`;
    return this.http
             .delete(url, {headers: headers})
             .toPromise()
             .catch(this.handleError);
  }

  // Add new data
  protected post(data: T): Promise<T> {
    let headers = new Headers({'Content-Type': 'application/json'});
    return this.http
             .post(this.getUrl(), JSON.stringify(data), {headers: headers})
             .toPromise()
             .then(res => res.json().data)
             .catch(this.handleError);
  }

  // Update existing data
  protected put(data: T) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.getUrl()}/${data.id}`;

    return this.http
             .put(url, JSON.stringify(data), {headers: headers})
             .toPromise()
             .then(() => data)
             .catch(this.handleError);
  }

  handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
