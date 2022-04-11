import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';


import { StorageGuard } from './agencia/services/guard/storage.guard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AgenciaModule } from './agencia/agencia.module';
import { LoadingComponent } from './agencia/pages/loading/loading.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    HttpClientModule,
    FlexLayoutModule,
    SharedModule,
    AgenciaModule,
    BrowserAnimationsModule,

  ],
  providers: [
    StorageGuard
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
