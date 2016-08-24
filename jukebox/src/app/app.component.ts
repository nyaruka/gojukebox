import {Component, OnInit, ViewChild} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import './rxjs-extensions';

import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

import {ArtistService} from './artists/artist.service';
import {Artist} from './artists/artist'
import {ArtistSearchComponent} from './artists/artist-search/artist-search.component'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdToolbar,
    MdButton,
    MdInput,
    MdCheckbox,
    MdIcon,
    ArtistSearchComponent
  ],
  providers: [ArtistService, MdIconRegistry]
})

export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav;

  artists: Artist[];
  constructor(
    private artistService: ArtistService,
    private router: Router
  ) {}

  ngOnInit() {
    this.artistService.getAll()
        .then(artists => this.artists = artists);
  }

  onSearchResult(artist) {
    // an artist was selected in our search, close the nav
    this.sidenav.close();
  }
}
