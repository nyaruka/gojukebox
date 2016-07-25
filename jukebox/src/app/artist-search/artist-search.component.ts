import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { ArtistService } from '../artist.service';
import { Artist } from '../artist';
import {MdInput} from '@angular2-material/input';


@Component({
  moduleId: module.id,
  selector: 'app-artist-search',
  templateUrl: 'artist-search.component.html',
  styleUrls: ['artist-search.component.css'],
  providers: [ArtistService],
  directives: [MdInput]
})

export class ArtistSearchComponent implements OnInit {
  constructor(
    private artistService: ArtistService,
    private router: Router
  ) {}

  @Output() onSelected = new EventEmitter<Artist>();
  artists: Observable<Artist[]>;
  searchSubject = new Subject<string>();
  query: string;

  // Push a search term into the observable stream.
  search(term: string) {
    this.searchSubject.next(term);
    this.query = term;
  }

  ngOnInit() {
    this.artists = this.searchSubject
      .asObservable()           // cast as Observable
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.artistService.search(term)
        // or the observable of empty artists if no search term
        : Observable.of<Artist[]>([]))
      .catch(error => {
        // Todo: real error handling
        console.log(error);
        return Observable.of<Artist[]>([]);
      });
  }

  selectArtist(artist: Artist) {
    this.router.navigate(['/artist', artist.id]);
    this.onSelected.emit(artist);
    this.search("");
  }
}
