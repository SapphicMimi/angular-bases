import { Component } from '@angular/core';

// Por si alguna vez se crea un componente erroneamente, hay que borrar su import y declaración del módulo en el
// que se ha introducido, normalmente app.module.ts, pero puede ser otro.
@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
  public deletedHero?: string;

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }
}
