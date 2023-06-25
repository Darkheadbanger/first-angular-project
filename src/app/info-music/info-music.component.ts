import { Component, Input, OnInit } from '@angular/core';
// import { Artist } from '../models/music-data.models';

@Component({
  selector: 'app-info-music',
  templateUrl: './info-music.component.html',
  styleUrls: ['./info-music.component.scss'],
})
export class InfoMusicComponent implements OnInit {
  public albumsMetallica!: string;
  public musiciens!: string;
  public nomGroupe!: string;
  public metallicaAlbumName!: string;
  public members: string[] = []; // Crée cela en array
  @Input() artist!: any;

  ngOnInit() {
    this.nomGroupe = '';
    this.albumsMetallica = '72 Seasons';
    this.musiciens = '';
    this.metallicaAlbumName =
      'https://upload.wikimedia.org/wikipedia/en/0/08/72_Seasons.jpg';
  }
}
