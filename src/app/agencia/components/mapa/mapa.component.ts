import { Component, OnInit, Input } from '@angular/core';
import { Agencia } from '../../interfaces/agencia-interface';
 
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html' 
})
export class MapaComponent implements OnInit {


  @Input('agencia') agencia!:Agencia;

  options!: google.maps.MapOptions; 

  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions!: google.maps.LatLngLiteral[] ;
  
  
  constructor() { }

  ngOnInit(): void {
    this.options = {
      center: {lat: parseFloat(this.agencia.lat.toString())  , lng: parseFloat(this.agencia.lon.toString())},
      zoom: 18
    };

    this.markerPositions =[
      {
        lat: parseFloat(this.agencia.lat.toString()),
        lng: parseFloat(this.agencia.lon.toString())
      }
    ];

  }

}
