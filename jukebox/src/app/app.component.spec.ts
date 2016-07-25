/* tslint:disable:no-unused-variable */

import { addProviders, async, inject, describe, beforeEach, it, expect } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('App: Jukebox', () => {
  beforeEach(() => {
    addProviders([AppComponent]);
  });

  it('should create the app',
    inject([AppComponent], (app: AppComponent) => {
      expect(app).toBeTruthy();
    }));

  it('should have artists',
    inject([AppComponent], (app: AppComponent) => {
      expect(app.artists).toBeTruthy();
    }));
});
