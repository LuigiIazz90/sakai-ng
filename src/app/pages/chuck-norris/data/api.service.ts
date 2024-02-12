import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Battuta } from './battuta.models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.chucknorris.io/jokes/random';

  constructor(private http: HttpClient) { }

  getBattutaRandom(): Observable<Battuta> {
    return this.http.get<Battuta>(this.apiUrl);
  }

  getListaCategorie(): Observable<string[]> {
    const url = `https://api.chucknorris.io/jokes/categories`;
    return this.http.get<string[]>(url);
  }

  getBattutaCategoriaRandom(apiUrl: string): Observable<Battuta> {
    return this.http.get<Battuta>(apiUrl);


  }
}
