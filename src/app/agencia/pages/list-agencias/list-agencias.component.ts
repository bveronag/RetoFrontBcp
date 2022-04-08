import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Agencia } from '../../interfaces/agencia-interface';
import { StorageService } from '../../services/storage/storage.service';

@Component({
  selector: 'app-list-agencias',
  templateUrl: './list-agencias.component.html'
})
export class ListAgenciasComponent implements OnInit {


  agencias:Agencia[]=[];

  @ViewChild('Busqueda') busqueda!:ElementRef<HTMLInputElement>;

  constructor(private _storage:StorageService) {
    this.agencias=_storage.ListAgencias();
  }

  ngOnInit(): void {
  }

  buscaAgencias(){
    this.agencias = this._storage.searchItem(this.busqueda.nativeElement.value);
  }



}
