import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articulo } from './articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  private apiUrl = 'https://raw.githubusercontent.com/Uniandes-isis2603/recursos-isis2603/master/json/clothingitems.json';

  constructor(private http: HttpClient) { }

  getArticulos(): Observable<Articulo[]> {
    return this.http.get<Articulo[]>(this.apiUrl);
  }
}
