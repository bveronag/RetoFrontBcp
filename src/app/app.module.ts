import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';




import { StorageGuard } from './agencia/services/guard/storage.guard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AgenciaModule } from './agencia/agencia.module';
import { LoadingComponent } from './agencia/pages/loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AgenciaModule,
  ],
  providers: [StorageGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
