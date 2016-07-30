import { XHRBackend } from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './app/mock.service';

import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { enableProdMode } from '@angular/core';

import { AppComponent, environment } from './app/';
import { appRouterProviders } from './app/app.routes';

import {disableDeprecatedForms, provideForms} from '@angular/forms';


if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  appRouterProviders,
  HTTP_PROVIDERS,

  // mocking http services
  { provide: XHRBackend, useClass: InMemoryBackendService },
  { provide: SEED_DATA, useClass: InMemoryDataService },

  // use bleeding forms
  disableDeprecatedForms(),
  provideForms()
]);
