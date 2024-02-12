import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IWizard, IElixir, IIngredient } from './wizard.model';

@Injectable({
  providedIn: 'root',
})
export class WizardWorldService {
  private apiUrl = 'https://wizard-world-api.herokuapp.com';

  constructor(private http: HttpClient) { }

  getWizards(): Observable<IWizard[]> {
    return this.http.get<IWizard[]>(`${this.apiUrl}/Wizards`);
  }

  getWizardDetails(id: string): Observable<IWizard> {
    return this.http.get<IWizard>(`${this.apiUrl}/Wizards/${id}`);
  }

  getElixirs(): Observable<IElixir[]> {
    return this.http.get<IElixir[]>(`${this.apiUrl}/Elixirs`);
  }

  getElixirDetails(id: string): Observable<IElixir> {
    return this.http.get<IElixir>(`${this.apiUrl}/Elixirs/${id}`);
  }

  getIngredients(): Observable<IIngredient[]> {
    return this.http.get<IIngredient[]>(`${this.apiUrl}/Ingredients`);
  }

  getIngredientDetails(id: string): Observable<IIngredient> {
    return this.http.get<IIngredient>(`${this.apiUrl}/Ingredients/${id}`);
  }
}
