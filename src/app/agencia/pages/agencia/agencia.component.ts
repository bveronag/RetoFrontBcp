import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';


import { StorageService } from '../../services/storage/storage.service';
import { Agencia } from '../../interfaces/agencia-interface';

@Component({
  selector: 'app-sucursal',
  templateUrl: './agencia.component.html',
  styleUrls: ['./agencia.component.css']
})
export class AgenciaComponent implements OnInit {

  agencia!:Agencia;
  finish:boolean=false;
  valida:boolean=true;
  expresionRegular ='/^-?\d+(?:.\d+)?(?:[Ee][-+]?\d+)?$';

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
  }
  validaAgencia(){
    if (
        this.agencia.agencia=="" ||
        this.agencia.direccion=="" ||
        this.agencia.distrito=="" ||
        this.agencia.provincia=="" ||
        this.agencia.lat==null ||
        this.agencia.lon==null 
       )
       {
        this.valida=false;
       }
       else{
         this.actualizaAgencia();
        }
  }

  actualizaAgencia(){
    if (this._storage.updateAgencia(this.agencia)){
          this.finish=true;
          setTimeout(()=>{
            this._route.navigateByUrl("/agencias");
          },2500)

      };
  }

  

}
