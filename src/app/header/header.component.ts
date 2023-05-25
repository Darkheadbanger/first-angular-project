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
      state('in', style({ opacity: 1})),
      state('out', style({ opacity: 0})),
      transition('in <=> out', animate(2000)),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  public stackTech: string[] = ['Full-stack', 'Front-end', 'Back-end'];
  public indiceStackTechAcctuel: number = 0;
  public stackTechAcctuel: string = this.stackTech[this.indiceStackTechAcctuel];

  ngOnInit() {
    this.cycleText();
  }

  cycleText() {
    this.changeText().then(() => {
      setTimeout(() => {
        this.cycleText();
      }, 2000);
    });
  }

  changeText(): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.indiceStackTechAcctuel++;
        if (this.indiceStackTechAcctuel >= this.stackTech.length) {
          this.indiceStackTechAcctuel = 0;
        }
        this.stackTechAcctuel = this.stackTech[this.indiceStackTechAcctuel];
        resolve();
      }, 2000);
    });
  }
}
