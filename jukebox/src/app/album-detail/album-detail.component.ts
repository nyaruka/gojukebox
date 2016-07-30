import {Component, OnInit, Input} from '@angular/core';
import {Album} from '../album'

@Component({
  moduleId: module.id,
  selector: 'app-album-detail',
  templateUrl: 'album-detail.component.html',
  styleUrls: ['album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  @Input() album: Album;

  constructor() { }

  ngOnInit() {
  }

}
