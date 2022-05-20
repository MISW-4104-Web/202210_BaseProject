import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticulosComponent } from './articulos.component';
import { ListarArticulosComponent } from '../listar-articulos/listar-articulos.component';
import { DetallarArticulosComponent } from '../detallar-articulos/detallar-articulos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ArticulosComponent,ListarArticulosComponent,DetallarArticulosComponent],
  exports:[ArticulosComponent]
})
export class ArticulosModule { }
