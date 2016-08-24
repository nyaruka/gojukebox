/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { TrackService } from './track.service';

describe('Service: Track', () => {
  beforeEach(() => {
    addProviders([TrackService]);
  });

  it('should ...',
    inject([TrackService],
      (service: TrackService) => {
        expect(service).toBeTruthy();
      }));
});
