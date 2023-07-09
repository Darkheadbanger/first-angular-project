import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

import { DiscogsAPI } from '../discogsAPI.service';
import { forkJoin } from 'rxjs';
import { MusicData } from '../models/music-data.models';
// import { MusicData } from '../models/music-data.models';

interface bandAlbum {
  albums?: string;
  cover?: string;
}

interface AlbumData {
  [key: string]: bandAlbum;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      state('out', style({ opacity: 0 })),
      transition('in <=> out', animate(2000)),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  public name!: string;
  public secondName!: string;
  public lastName!: string;
  public introdutionText!: string;
  public profession!: string;

  public groupe!: string;

  public dataMusic!: MusicData[];

  public albums!: AlbumData;

  public technologieStack: string[] = ['Full-Stack', 'Front-End', 'Back-End'];
  public indiceStackAcctuel: number = 0;
  public stackAcctuel: string = this.technologieStack[this.indiceStackAcctuel];

  constructor(private discogsAPI: DiscogsAPI) {}
  ngOnInit() {
    this.introdutionText = 'I am';
    this.name = 'David';
    this.secondName = 'Satria';
    this.lastName = 'Bouhaben';
    this.profession = 'Developper';
    this.groupe = 'Groupes';
    // La function pour faire tourner l'animation
    this.changeText();
    this.discogsAPIS();
  }

  // La fonction pour faire tourner l'application une fois la promesse est fait et va tourner
  // En continue chaque 2 seconds car une fonctione recursive, changeText tourne, changeText fait appel
  // a etapeAnimation, changeText rentre dans setTimeout et tourne pendant 2 seconds et c'est comme ca a l'infini
  changeText(): void {
    this.etapeAnimationText().then(() => {
      setTimeout(() => {
        this.changeText();
      }, 2000);
    });
  }

  // La fonction d'étape de comment l'animation va être joué avec promesse
  etapeAnimationText(): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        this.indiceStackAcctuel++;
        if (this.indiceStackAcctuel >= this.technologieStack.length) {
          this.indiceStackAcctuel = 0;
        }
        this.stackAcctuel = this.technologieStack[this.indiceStackAcctuel];
        resolve();
      }, 2000);
    });
  }

  discogsAPIS(): void {
    this.bandAlbums();
    // forkJoin attends un tableau d'Observables et non une instance de DiscogsAPI qui est discogsAPI (linjection dans le constructor)
    forkJoin(this.discogsAPI.getAlbumInfo()).subscribe({
      next: (discogData: MusicData[]) => {
        console.log('discogsApi', discogData);
        this.dataMusic = discogData;
      },
      error: (error) => console.error('Il y a une erreur', error),
    });
  }

  bandAlbums(): AlbumData {
    return (this.albums = {
      Metallica: {
        albums: '72 Seasons',
        cover: 'https://www.metal-archives.com/images/1/0/9/3/1093489.jpg?1546',
      },
      Slayer: {
        albums: 'Repentless',
        cover: 'https://www.metal-archives.com/images/5/1/7/8/517836.jpg?4917',
      },
      Megadeth: {
        albums: 'The Sick, the Dying... and the Dead!',
        cover: 'https://www.metal-archives.com/images/1/0/4/9/1049913.jpg?4546',
      },
      Anthrax: {
        albums: 'For All Kings',
        cover: 'https://www.metal-archives.com/images/5/4/8/6/548635.jpg?2104',
      },
    });
  }
}
