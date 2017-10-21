import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective} from './directives/resaltar.directive';
import { ContarClicksDirective} from './directives/contar-clicks.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';

const appRoutes: Routes = [
  {path:'lugares', component: LugaresComponent},
  {path:'detalle/:id', component: DetalleComponent},
  {path:'', component: LugaresComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCMMAxcOLjM8TFdRoBnvjMlR2kTftZfXhY'
    }),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
