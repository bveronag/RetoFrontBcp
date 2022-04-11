import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { GoogleMapsModule } from '@angular/google-maps';

import { ListAgenciasComponent } from './pages/list-agencias/list-agencias.component';
import { AgenciaComponent } from './pages/agencia/agencia.component';
import { DetalleAgenciaComponent } from './components/detalle-agencia/detalle-agencia.component';
import { PipeFormateaPipe } from './pipes/pipe-formatea.pipe';
import { MapaComponent } from './components/mapa/mapa.component';
  


@NgModule({
  declarations: [
    ListAgenciasComponent,
    AgenciaComponent,
    DetalleAgenciaComponent,
    PipeFormateaPipe,
    MapaComponent
  ],
  exports: [
    ListAgenciasComponent,
    AgenciaComponent,
    DetalleAgenciaComponent 
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
    FormsModule,
    RouterModule,


  ]
})
export class AgenciaModule { }
