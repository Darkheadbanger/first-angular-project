import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

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

  public technologieStack: string[] = ['Full-Stack', 'Front-End', 'Back-End'];
  public indiceStackAcctuel: number = 0;
  public stackAcctuel: string = this.technologieStack[this.indiceStackAcctuel];

  ngOnInit() {
    this.introdutionText = 'I am';
    this.name = 'David';
    this.secondName = 'Satria';
    this.lastName = 'Bouhaben';
    this.profession = 'Developper';
    // La function pour faire tourner l'animation
    this.changeText();
  }

  // La fonction pour faire tourner l'application une fois la promesse est fait et va tourner
  // En continue chaque 2 seconds car une fonctione recursive, changeText tourne, changeText fait appel
  // a etapeAnimation, changeText rentre dans setTimeout et tourne pendant 2 seconds et c'est comme ca a l'infini
  changeText() {
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
}
