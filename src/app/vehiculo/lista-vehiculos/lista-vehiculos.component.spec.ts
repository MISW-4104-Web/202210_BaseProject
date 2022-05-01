/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ListaVehiculosComponent } from './lista-vehiculos.component';
import * as fakerLib from '@faker-js/faker';
import { Vehiculo } from '../vehiculo';

describe('ListaVehiculosComponent', () => {
  const faker = fakerLib.default;
  let component: ListaVehiculosComponent;
  let fixture: ComponentFixture<ListaVehiculosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListaVehiculosComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  let artworks = [
    new Vehiculo(
      faker.datatype.number(),
      faker.datatype.string(),
      faker.datatype.string(),
      faker.datatype.string(),
      faker.datatype.number(),
      faker.datatype.number(),
      faker.datatype.number(),
      faker.datatype.string()
    ),
    new Vehiculo(
      faker.datatype.number(),
      faker.datatype.string(),
      faker.datatype.string(),
      faker.datatype.string(),
      faker.datatype.number(),
      faker.datatype.number(),
      faker.datatype.number(),
      faker.datatype.string()
    ),
    ,
    new Vehiculo(
      faker.datatype.number(),
      faker.datatype.string(),
      faker.datatype.string(),
      faker.datatype.string(),
      faker.datatype.number(),
      faker.datatype.number(),
      faker.datatype.number(),
      faker.datatype.string()
    ),
  ];

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
