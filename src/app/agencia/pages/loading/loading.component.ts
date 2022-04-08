import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { StorageService } from '../../services/storage/storage.service';


@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor(private _router:Router, private _storage:StorageService){
   }
 
/*
  Al ser la primera página en cargarse,
  se guarda la data en el localstorage,
  luego se redirige a sucursales
*/
 ngOnInit(): void {
  
    this._storage.CheckStorage();
    setTimeout(()=>{
      this._router.navigateByUrl("/agencias")
    },
      1200
    )
    
  }




}
