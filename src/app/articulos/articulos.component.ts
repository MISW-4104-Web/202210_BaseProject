import { Component, OnInit } from '@angular/core';
import { Articulo } from './articulo';
import { ArticulosService } from './articulos.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  articulos: Articulo[] = {} as Articulo[];
  promedio:number = 0;
  articuloSeleccionado: Articulo | undefined;

  constructor(private articulosService:ArticulosService) { }

  ngOnInit() {
    this.articulosService.getArticulos().subscribe(articulos => {
      this.articulos = articulos;
      this.getAveragePrice();
    });
  }

  getAveragePrice(){
    let total = 0;
    this.articulos.forEach((articulo) => total = total + articulo.price);
    this.promedio = Math.ceil(total/this.articulos.length);
    return
  }

  clickArticulo(articulo:Articulo){
    this.articuloSeleccionado = articulo;
  }
}
