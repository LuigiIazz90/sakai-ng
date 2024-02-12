import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { BattutaStateService } from '../data/battuta-state.service';
import { Battuta } from '../data/battuta.models';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  isCollapsed: boolean = true;
  battuta: Battuta = { id: '', value: '' };
  mostraTesto: boolean = true;
  stopGIF: boolean = false;



  constructor(private battutaStateService: BattutaStateService) { }

  ngOnInit() {

    interval(1000).subscribe(() => {
      this.mostraTesto = !this.mostraTesto;
    });

    this.battutaStateService.homepageBattuta$.subscribe((battuta) => {
      this.battuta = battuta;
    });
  }
  toggleGIF() {
  }
}
