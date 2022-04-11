import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';


import { StorageService } from '../../services/storage/storage.service';
import { Agencia } from '../../interfaces/agencia-interface';

@Component({
  selector: 'app-sucursal',
  templateUrl: './agencia.component.html',
  styleUrls: ['./agencia.component.css']
})
export class AgenciaComponent implements OnInit  {

  agencia!:Agencia;
  finish:boolean=false;
  valida:boolean=true;
  onlyNumbers:boolean=true;

  options!: google.maps.MapOptions;
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions!: google.maps.LatLngLiteral[] ;

  constructor(private _activatedRoute:ActivatedRoute, private _route:Router, private _storage:StorageService) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(
      params=>{
        this.agencia=this._storage.getAgencia(params["id"]);
      }
    );

      if (!this.agencia!) {
        this._route.navigateByUrl("/agencias");
      }

      this.options = {
        center: {lat: parseFloat(this.agencia.lat.toString())  , lng: parseFloat(this.agencia.lon.toString())},
        zoom: 15
      };

      this.markerPositions =[
        {
          lat: parseFloat(this.agencia.lat.toString()),
          lng: parseFloat(this.agencia.lon.toString())
        }
      ];

    }

    validaAgencia(){
    if (
        this.agencia.agencia.trim()=="" ||
        this.agencia.direccion.trim()=="" ||
        this.agencia.distrito.trim()=="" ||
        this.agencia.provincia.trim()=="" ||
        this.agencia.lat==0 ||
        this.agencia.lon==0 
       )
       {
        this.valida=false;
       }
       else{
         this.actualizaAgencia();
        }
  }

  actualizaAgencia(){

    console.log(parseFloat(this.agencia.lat.toString()));

    if(!( parseFloat(this.agencia.lat.toString())) || !( parseFloat(this.agencia.lon.toString())) ){
      debugger;
      this.onlyNumbers = false;
    }
    else{
        if (this._storage.updateAgencia(this.agencia)){
            this.finish=true;
            setTimeout(()=>{
              this._route.navigateByUrl("/agencias");
            },1500)
            
        };
    }
  }

 
  

}
