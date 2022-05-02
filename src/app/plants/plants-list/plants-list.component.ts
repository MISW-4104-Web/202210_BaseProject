import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant';
import { PlantService } from '../plant.service';


@Component({
  selector: 'app-plants-list',
  templateUrl: './plants-list.component.html',
  styleUrls: ['./plants-list.component.css']
})
export class PlantsListComponent implements OnInit {
  plants: Array<Plant> = [];
  interiorPlantsLength: number = 0;
  exteriorPlantsLength: number = 0;

  constructor(private plantService: PlantService) { }
  getPlants(): void {
    this.plantService.getPlants().subscribe((plants) => {
      this.plants = plants;
      let interiorPlants = this.plants.filter(plant => plant.tipo === 'Interior');
      let exteriorPlants = this.plants.filter(plant => plant.tipo === 'Exterior');
      this.exteriorPlantsLength = exteriorPlants.length;
      this.interiorPlantsLength = interiorPlants.length;
    });
  }
  ngOnInit() {
    this.getPlants();
  }
}
