import { Injectable } from '@angular/core';
import {  CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class StorageGuard implements CanActivate {

  constructor(private _router: Router){
  }

  canActivate( ): boolean{
    if(!localStorage.getItem('agencias')){
      this._router.navigate(['']);
      return false;
    }else
    {
      return true;
    }
  }

}
