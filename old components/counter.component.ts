import { Component } from "@angular/core";

// Para que nos funcione el nuevo componente que hemos creado, no es suficiente con declararlo todo y ponerlo en el
// HTML, sino que tendremos que añadirlo a un módulo, y como al principio solo tenemos uno, pues lo ponemos en ese.
@Component({
  selector: 'app-counter',
  template: '<h1>Hola Counter</h1>'
})
export class CounterComponent {

}
