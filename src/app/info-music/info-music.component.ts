import { Component, Input, OnInit } from '@angular/core';
// import { Artist } from '../models/music-data.models';

@Component({
  selector: 'app-info-music',
  templateUrl: './info-music.component.html',
  styleUrls: ['./info-music.component.scss'],
})
export class InfoMusicComponent implements OnInit {
  public musiciens!: string;
  public albumImage!: string[];
  public members: string[] = []; // Crée cela en array
  @Input() artist!: any;

  ngOnInit() {}
}
