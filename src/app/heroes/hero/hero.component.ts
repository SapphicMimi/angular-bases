import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  // Si quiero devolver dos propiedades de diferente tipo de dato como un string o cadena sin mucha complicación,
  // deberia utilizar los backticks o ``
  getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  changeHero(name: string):void {
    this.name = name;
  }

  changeAge(age: number):void {
    this.age = age;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;

    // Esta instrucción, introducida con JS en vez con Angular, causa que algunos de los h1 de nuestro HTML
    // manejados por Angular sean cambiados, y queden fuera del ciclo.
    // Esto puede darle problemas a Angular.
    // document.querySelectorAll('h1').forEach(element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>';
    // })
  }
}
