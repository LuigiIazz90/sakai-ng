import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Battuta } from './battuta.models';

@Injectable({
  providedIn: 'root'
})
export class BattutaStateService {
  private battutaSubject = new BehaviorSubject<Battuta>({ id: '', value: '' });
  battuta$ = this.battutaSubject.asObservable();

  updateBattuta(battuta: Battuta) {
    this.battutaSubject.next(battuta);
  }
  private homepageBattutaSubject = new BehaviorSubject<Battuta>({ id: '', value: '' });
  homepageBattuta$ = this.homepageBattutaSubject.asObservable();

  updateHomepageBattuta(battuta: Battuta) {
    this.homepageBattutaSubject.next(battuta);
  }
}