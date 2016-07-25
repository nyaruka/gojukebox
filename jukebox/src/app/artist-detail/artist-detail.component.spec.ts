/* tslint:disable:no-unused-variable */

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import {
  addProviders, beforeEachProviders,
  async, inject, describe, expect, it
} from '@angular/core/testing';

import { ArtistDetailComponent } from './artist-detail.component';
import { ArtistService } from '../artist.service';

class MockActivatedRoute extends ActivatedRoute {
  constructor() {
    super();
    this.params = Observable.of({id: "5"});
  }
}

class MockArtistService {

}

this.mockRoute = new MockActivatedRoute();
this.mockArtistService = new MockArtistService();

/*beforeEachProviders(() => [
  this.provide(ActivatedRoute, { useValue: this.mockRoute })
]);
*/

describe('Component: ArtistDetail', () => {
  it('should create an instance', () => {
  });
});
