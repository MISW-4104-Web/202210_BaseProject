/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArticulosService } from './articulos.service';

describe('Service: Articulos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticulosService]
    });
  });

  it('should ...', inject([ArticulosService], (service: ArticulosService) => {
    expect(service).toBeTruthy();
  }));
});
