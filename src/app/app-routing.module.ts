import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { ListAgenciasComponent } from './agencia/pages/list-agencias/list-agencias.component';
import { AgenciaComponent } from './agencia/pages/agencia/agencia.component';
import { LoadingComponent } from './agencia/pages/loading/loading.component';
import { DetalleAgenciaComponent } from './agencia/components/detalle-agencia/detalle-agencia.component';
import { StorageGuard } from './agencia/services/guard/storage.guard';

const routes: Routes = [
  
  { path: '', pathMatch: 'full', component: LoadingComponent },
  { path: 'detalleAgencia', component: DetalleAgenciaComponent, canActivate:[StorageGuard] },
  { path: 'agencias', component: ListAgenciasComponent, canActivate:[StorageGuard] },
  { path: 'agencia/:id', component: AgenciaComponent  },

  // RUTA ESPECIAL POR SI NO HACE MATCH CON ALGUNA OTRA RUTA, ESTA REDIRECCIONA A ALGUNA RUTA EN PARTICULAR
  { path: '**', pathMatch: 'full', redirectTo: 'agencias' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
