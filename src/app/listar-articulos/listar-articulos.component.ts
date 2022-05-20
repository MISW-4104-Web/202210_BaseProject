import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Articulo } from '../articulos/articulo';

@Component({
  selector: 'app-listar-articulos',
  templateUrl: './listar-articulos.component.html',
  styleUrls: ['./listar-articulos.component.css']
})
export class ListarArticulosComponent implements OnInit {

  @Input() public articulos:Articulo[] | undefined;
  @Output() clickArticulos = new EventEmitter<Articulo>();

  constructor() { }

  ngOnInit() {
  }

  clickArticulo(articulo:Articulo){
    this.clickArticulos.emit(articulo);
  }

}
