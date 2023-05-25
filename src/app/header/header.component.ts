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
      state('in', style({ opacity: 0 })),
      state('out', style({ opacity: 1 })),
      transition('in <=> out', animate(1000)),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  public stackTech: string[] = ['Full-stack', 'Front-end', 'Back-end'];
  // On initialise l'indice `indiceStackTechAcctuel` à 0 pour commencer avec le premier élément du tableau.
  public indiceStackTechAcctuel: number = 0;
  // On déclare `stackTechAcctuel` et on l'initialise avec le premier élément du tableau `stackTech`.
  public stackTechAcctuel: string = this.stackTech[this.indiceStackTechAcctuel];
  ngOnInit() {
    setInterval(() => {
      // Si l'indice atteint la fin du tableau `stackTech`, on le réinitialise à 0 pour recommencer avec le premier élément.
      this.indiceStackTechAcctuel++;
      if (this.indiceStackTechAcctuel >= this.stackTech.length) {
        this.indiceStackTechAcctuel = 0;
      }
      // On met à jour `stackTechAcctuel` avec la technologie correspondant à l'indice actuel. Cela permet d'afficher la technologie actuelle dans le template HTML.      this.stackTechAcctuel = this.stackTech[this.indiceStackTechAcctuel];
      this.stackTechAcctuel = this.stackTech[this.indiceStackTechAcctuel];
    }, 1500);
  }
}
