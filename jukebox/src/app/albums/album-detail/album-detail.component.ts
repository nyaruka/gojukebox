import {Component, OnInit, Input} from '@angular/core';
import {Album} from '../album'
import {TrackService} from '../../tracks/track.service'

@Component({
  moduleId: module.id,
  selector: 'app-album-detail',
  providers: [TrackService],
  templateUrl: 'album-detail.component.html',
  styleUrls: ['album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  @Input() album: Album;

  constructor(private trackService: TrackService) { }

  ngOnInit() {
    console.log(this.album);
    // this.album.loadTracks();
    //this.trackService.getTracks(this.album).then(function(tracks){
    //  console.log(tracks);
    //});
  }
}
