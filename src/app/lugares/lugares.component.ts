import { Component } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
})
export class LugaresComponent {
  title = 'PlatziSquare';
  a = 5;
  b = 4;
  listo = false;
  nombre:string = '';
  nombre2:string = '';
  lat:number = 25.9465709;
  lng:number = -80.1377101;
  lugares:any = [
    
      {id: 1, plan: 'pagado',   cercania:1, distancia: 1,   active: true, nombre:'floristeria numero 1'},
      {id: 2, plan: 'gratuito', cercania:1, distancia: 1.8, active: false, nombre:'floristeria numero 2'},
      {id: 3, plan: 'pagado',   cercania:2, distancia: 2.5, active: true, nombre:'floristeria numero 3'},
      {id: 4, plan: 'pagado',   cercania:3, distancia: 6.4, active: true, nombre:'floristeria numero 4'},
      {id: 5, plan: 'gratuito', cercania:3, distancia: 4.8, active: false, nombre:'floristeria numero 5'},
      {id: 6, plan: 'pagado',   cercania:2, distancia: 2.8, active: true, nombre:'floristeria numero 6'},
      {id: 7, plan: 'gratuito', cercania:3, distancia: 7,   active: true, nombre:'floristeria numero 7'},
      {id: 8, plan: 'pagado',   cercania:1, distancia: 0.8, active: true, nombre:'floristeria numero 8'},
      {id: 9, plan: 'pagado',   cercania:2, distancia: 2.3, active: false, nombre:'floristeria numero 9'}
   
  ]


  constructor(){
    setTimeout(() => {
      this.listo = true
    },3000)
  }
  clickeado(){
    console.log("workss")
  }
}
