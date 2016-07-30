/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { AlbumService } from './album.service';

describe('Service: Album', () => {
  beforeEach(() => {
    addProviders([AlbumService]);
  });

  it('should ...',
    inject([AlbumService],
      (service: AlbumService) => {
        expect(service).toBeTruthy();
      }));
});
