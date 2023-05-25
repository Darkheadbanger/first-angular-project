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
  public arrStack: string[] = ['Full-Stack', 'Front-End', 'Back-End'];
  public indiceStack: number = 0;
  public indiceStackAcctuel: string = this.arrStack[this.indiceStack];

  ngOnInit() {
    // La function pour faire tourner l'animation
    this.changeText();
  }

  // La fonction pour faire tourner l'application une fois la promesse est fait
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
        this.indiceStack++;
        if (this.indiceStack >= this.arrStack.length) {
          this.indiceStack = 0;
        }
        this.indiceStackAcctuel = this.arrStack[this.indiceStack];
        resolve();
      }, 2000);
    });
  }
}
