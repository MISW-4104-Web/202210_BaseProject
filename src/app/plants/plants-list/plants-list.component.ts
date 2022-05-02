import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant';


@Component({
  selector: 'app-plants-list',
  templateUrl: './plants-list.component.html',
  styleUrls: ['./plants-list.component.css']
})
export class PlantsListComponent implements OnInit {
  plants: Array<Plant> = [];
  constructor() { }

  ngOnInit() {
  }

}
