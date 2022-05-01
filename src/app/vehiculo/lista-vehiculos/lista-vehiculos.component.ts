import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-lista-vehiculos',
  templateUrl: './lista-vehiculos.component.html',
  styleUrls: ['./lista-vehiculos.component.css'],
})
export class ListaVehiculosComponent implements OnInit {
  vehiculos: Vehiculo[] = [];
  contadorMarcas: {
    [key: string]: number;
  } = {};

  constructor(private vehiculoService: VehiculoService) {}

  ngOnInit() {
    this.vehiculoService.getAllVehicles().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;

      vehiculos.forEach((vehiculo) => {
        if (!this.contadorMarcas[vehiculo.marca]) {
          this.contadorMarcas[vehiculo.marca] = 0;
        }
        this.contadorMarcas[vehiculo.marca]++;
      });
    });
  }
}
