import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImdbResponse } from './imdb-response.interface';



@Injectable({
  providedIn: 'root'
})
export class ImdbService {
  private apiUrl = 'https://search.imdbot.workers.dev/';


  constructor(private http: HttpClient) { }

  ricercaFilm(nomeFilm: string): Observable<ImdbResponse> {
    const url = `${this.apiUrl}?q=${nomeFilm}`;
    return this.http.get<ImdbResponse>(url);
  }

  dettagliFilm(idFilm: string): Observable<ImdbResponse> {
    const url = `${this.apiUrl}?tt=${idFilm}&q=${idFilm}`;
    return this.http.get<ImdbResponse>(url);
  }

}