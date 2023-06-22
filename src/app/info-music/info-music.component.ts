import { Component, OnInit } from '@angular/core';
import { LastFMApiService } from '../last-fmapi.service';
@Component({
  selector: 'app-info-music',
  templateUrl: './info-music.component.html',
  styleUrls: ['./info-music.component.scss'],
})
export class InfoMusicComponent implements OnInit{
  public albums!: string;
  public musiciens!: string;
  public nomGroupe!: string;*

  // constructor(private lastFmApiService: LastFMApiService) { }

  ngOnInit() {
    this.nomGroupe = 'Artist';
    this.albums = 'Albums';
    this.musiciens = 'Musiciens';

    
  }
}
