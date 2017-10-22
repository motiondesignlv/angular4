import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LugaresService } from './services/lugares.service';
import { CrearComponent } from './crear/crear.component'

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { HttpModule } from '@angular/http';


const appRoutes: Routes = [
  { path: 'lugares', component: LugaresComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'crear', component: CrearComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: '', component: LugaresComponent }
]

export const firebaseConfig = {
  apiKey: "AIzaSyD0QVloHmnZGexn5fBcSPgVh4Ux5_kkoCc",
  authDomain: "platzisquare-c4f40.firebaseapp.com",
  databaseURL: "https://platzisquare-c4f40.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "470870018172"
};


@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCMMAxcOLjM8TFdRoBnvjMlR2kTftZfXhY'
    }),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule
  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
