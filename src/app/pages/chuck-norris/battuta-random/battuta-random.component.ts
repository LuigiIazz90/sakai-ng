import { Component, OnInit } from '@angular/core';
import { BattutaStateService } from '../data/battuta-state.service';
import { Battuta } from '../data/battuta.models';
import { ApiService } from '../data/api.service';

@Component({
  selector: 'app-battuta-random',
  templateUrl: './battuta-random.component.html',
  styleUrls: ['./battuta-random.component.scss']
})
export class BattutaRandomComponent implements OnInit {
  battuta: Battuta;
  displayDialog: boolean = false;
  displayButton: boolean = true;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  showDialog() {
    this.apiService.getBattutaRandom().subscribe(
      (data: Battuta) => {
        this.battuta = data;
        this.displayDialog = true;
        this.displayButton = false;
      },
      (error) => {
        console.error('Errore nella richiesta API', error);
      }
    );
  }

  closeDialog() {
    this.displayDialog = false;
    this.displayButton = true;
  }

  generateAnotherRandomBattuta() {
    this.showDialog();
  }
}