import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaVehiculosComponent } from './lista-vehiculos/lista-vehiculos.component';

@NgModule({
  imports: [CommonModule],
  exports: [ListaVehiculosComponent],
  declarations: [ListaVehiculosComponent],
})
export class VehiculoModule {}
