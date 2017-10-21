import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
})

export class DetalleComponent {
    lugares:any = [
        
          {id: 1, plan: 'pagado',   cercania:1, distancia: 1,   active: true, nombre:'floristeria numero 1', description: 'descripcion de este negocio, mas adelante tendremos mas informacion'},
          {id: 2, plan: 'gratuito', cercania:1, distancia: 1.8, active: false, nombre:'floristeria numero 2', description: 'descripcion de este negocio, mas adelante tendremos mas informacion'},
          {id: 3, plan: 'pagado',   cercania:2, distancia: 2.5, active: true, nombre:'floristeria numero 3', description: 'descripcion de este negocio, mas adelante tendremos mas informacion'},
          {id: 4, plan: 'pagado',   cercania:3, distancia: 6.4, active: true, nombre:'floristeria numero 4', description: 'descripcion de este negocio, mas adelante tendremos mas informacion'},
          {id: 5, plan: 'gratuito', cercania:3, distancia: 4.8, active: false, nombre:'floristeria numero 5', description: 'descripcion de este negocio, mas adelante tendremos mas informacion'},
          {id: 6, plan: 'pagado',   cercania:2, distancia: 2.8, active: true, nombre:'floristeria numero 6', description: 'descripcion de este negocio, mas adelante tendremos mas informacion'},
          {id: 7, plan: 'gratuito', cercania:3, distancia: 7,   active: true, nombre:'floristeria numero 7', description: 'descripcion de este negocio, mas adelante tendremos mas informacion'},
          {id: 8, plan: 'pagado',   cercania:'8', distancia: '0.8', active: true, nombre:'floristeria numero 8', description: 'descripcion de este negocio, mas adelante tendremos mas informacion'},
          {id: 9, plan: 'pagado',   cercania:2, distancia: 2.3, active: false, nombre:'floristeria numero 9', description: 'descripcion de este negocio, mas adelante tendremos mas informacion'}
       
      ]

      id= null;
      lugar:any = {};


 constructor(private route: ActivatedRoute){
      console.log(this.route.snapshot.params['id']);
      console.log(this.route.snapshot.queryParams['action']);
      this.id = this.route.snapshot.params['id'];
      console.log(this.buscarLugar())
      this.lugar = this.buscarLugar();
 }  

 buscarLugar(){
     return this.lugares.filter( (lugar) => { return lugar.id == this.id } )[0] || null; 
 }
}
