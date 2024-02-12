import { NgModule } from '@angular/core';
import { ImdbRoutingModule } from './imdb-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RicercaFilmsComponent } from './ricerca-films/ricerca-films.component';
import { CommonModule } from '@angular/common';
import { DettagliFilmsComponent } from './dettagli-films/dettagli-films.component';
import { SharedPrimeNgModule } from 'src/app/shared/shared-primeng.module';

@NgModule({
  imports: [

    ImdbRoutingModule, FormsModule, HttpClientModule, CommonModule, SharedPrimeNgModule
  ],
  declarations: [RicercaFilmsComponent, DettagliFilmsComponent],
  exports: [
    RicercaFilmsComponent
  ]
})
export class ImdbModule { }
