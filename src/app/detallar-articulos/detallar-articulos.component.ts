import { Component, OnInit, Input } from '@angular/core';
import { Articulo } from '../articulos/articulo';

@Component({
  selector: 'app-detallar-articulos',
  templateUrl: './detallar-articulos.component.html',
  styleUrls: ['./detallar-articulos.component.css']
})
export class DetallarArticulosComponent implements OnInit {

  @Input() public articulo:Articulo = {} as Articulo;

  constructor() { }

  ngOnInit() {
  }

}
