/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import * as fakerLib from '@faker-js/faker';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { Vehiculo } from '../vehiculo';
import { ListaVehiculosComponent } from './lista-vehiculos.component';

describe('ListaVehiculosComponent', () => {
  const faker = fakerLib.default;
  let component: ListaVehiculosComponent;
  let fixture: ComponentFixture<ListaVehiculosComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListaVehiculosComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaVehiculosComponent);
    component = fixture.componentInstance;
    let vehiculos = [
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
    fixture.componentInstance.vehiculos = vehiculos as Vehiculo[];

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render one vehicle item or row for each vehicle register', () => {
    const vehicles = debug.queryAll(By.css('tr.app-vehiculo'));
    expect(vehicles).toBeTruthy();
    expect(vehicles.length).toEqual(3);
  });
});
