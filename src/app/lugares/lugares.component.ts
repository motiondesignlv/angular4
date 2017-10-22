import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';


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

  lugares = null;
  constructor(private lugaresService: LugaresService){
    setTimeout(() => {
      this.listo = true
    },3000);
    lugaresService.getLugares()
      .valueChanges().subscribe(lugares => {
        console.log(lugares)
        this.lugares = lugares;
    });
  }

  clickeado(){
    console.log("workss")
  }
}
