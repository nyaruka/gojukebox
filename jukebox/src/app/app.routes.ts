import { provideRouter, RouterConfig } from '@angular/router';
import { ArtistDetailComponent } from './artists/artist-detail/artist-detail.component';

const routes: RouterConfig = [
  {
    path: 'artist/:id',
    component: ArtistDetailComponent
  },
  {
    path: '',
    redirectTo: '/artist/1',
    pathMatch: 'full'
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
