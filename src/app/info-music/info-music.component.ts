import { Component } from '@angular/core';

@Component({
  selector: 'app-info-music',
  templateUrl: './info-music.component.html',
  styleUrls: ['./info-music.component.scss'],
})
export class InfoMusicComponent {
  public albums!: string;
  public musiciens!: string;
  public nomGroupe!: string;

  ngOnInit() {
    this.nomGroupe = 'Groupe';
    this.albums = 'Albums';
    this.musiciens = 'Musiciens';
  }
}
