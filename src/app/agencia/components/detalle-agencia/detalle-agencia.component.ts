import {  Component,  Input, OnInit  } from '@angular/core'; 
import { Agencia } from '../../interfaces/agencia-interface';

@Component({
  selector: 'app-detalle-agencia',
  templateUrl: './detalle-agencia.component.html'
})
export class DetalleAgenciaComponent implements OnInit {

  @Input() agencias:Agencia[]=[];

  constructor( ) { }

  ngOnInit(): void {
  }



}


