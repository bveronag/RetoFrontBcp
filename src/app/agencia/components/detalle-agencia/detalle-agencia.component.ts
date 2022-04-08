import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core'; 
import { Agencia } from '../../interfaces/agencia-interface';



declare const google:any;
@Component({
  selector: 'app-detalle-agencia',
  templateUrl: './detalle-agencia.component.html'
})
export class DetalleAgenciaComponent implements OnInit, AfterViewInit{

  @Input() agencias:Agencia[]=[];
  _lat:number=0;
  _lng:number=0;

  center = {
    lat: 35.717,
    lng: 15.644,
  }

  map!:any;
  @ViewChild('mapElement') mapElement!: ElementRef<HTMLDivElement>;

  constructor( ) { }
  
  ngOnInit(): void {
  }
  
 
  ngAfterViewInit(): void {
 
  }
   
     
  
  

}


