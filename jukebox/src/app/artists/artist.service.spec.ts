/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ArtistService } from './artist.service';

describe('Service: Artist', () => {
  beforeEach(() => {
    addProviders([ArtistService]);
  });

  it('should ...',
    inject([ArtistService],
      (service: ArtistService) => {
        expect(service).toBeTruthy();
      }));
});
