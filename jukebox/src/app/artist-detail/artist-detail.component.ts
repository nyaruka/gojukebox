import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {MdButton} from '@angular2-material/button';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MdInput} from '@angular2-material/input';
import {MdCheckbox} from '@angular2-material/checkbox';

import {Artist} from '../artist';
import {ArtistService} from '../artist.service';
import {ImageService} from '../image.service';
import {JSONP_PROVIDERS}  from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-artist-detail',
  templateUrl: 'artist-detail.component.html',
  styleUrls: ['artist-detail.component.css'],
  providers: [JSONP_PROVIDERS, ImageService],
  directives: [
    MdButton,
    MdInput,
    MdCheckbox,
    MdButton,
    MdIcon
  ]
})

export class ArtistDetailComponent implements OnInit {

  @Input() artist: Artist;
  @Output() close = new EventEmitter();
  sub: any;
  error: any;
  navigated = false;

  editing: boolean = false;
  splashOptions: any[];

  constructor(
    private artistService: ArtistService,
    private imageService: ImageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  selectArtist(artist: Artist) {
    this.artist = artist;
  }

  showEdit() {
    this.editing = true;
    this.splashOptions = [];
    let splashOptions = this.splashOptions;

    // TODO: do this with infinite scrolling
    for (var i=0; i<5; i++) {
      this.imageService.search(this.artist.name, i*10)
        .toPromise()
        .then(function(results) {
          for (let item in results) {
            let option = results[item];

            // only show landscape results
            if (option.image.width > option.image.height) {
              splashOptions.push(option);
            }
          }
        });
    }
  }

  previewSplash(option: any)  {
    //this.artist.splash = option.image.thumbnailLink
    this.artist.splash = option.link;

    //let artist = this.artist;

    // only replace the image if it succeeds
    /*this.imageService.fetchImage(option.link).then(
      function(response) {
        console.log(response);
        if (response) {
          artist.splash = option.link;
        }
      });
    */
  }

  save() {
    this.artistService.save(this.artist)
        .then(artist => this.editing = false);
  }

  previewPosition(position: string) {
    this.artist.position = position;
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.navigated = true;
        this.artistService.getArtist(id)
            .then(artist => this.selectArtist(artist));
      } else {
        this.navigated = false;
        this.artist = new Artist();
        console.log(this.artist);
      }
    });
  }
}
