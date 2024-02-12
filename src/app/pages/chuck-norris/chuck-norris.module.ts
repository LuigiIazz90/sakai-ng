import { NgModule } from '@angular/core';
import { ChuckNorrisRoutingModule } from './chuck-norris-routing.module';
import { SharedPrimeNgModule } from 'src/app/shared/shared-primeng.module';
import { HomepageComponent } from './homepage/homepage.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { BattutaRandomComponent } from './battuta-random/battuta-random.component';
import { CategoriaBattuteComponent } from './categoria-battute/categoria-battute.component';

@NgModule({
  imports: [ChuckNorrisRoutingModule, SharedPrimeNgModule, CommonModule, HttpClientModule, FormsModule, DropdownModule


  ],
  declarations: [HomepageComponent, BattutaRandomComponent, CategoriaBattuteComponent],
  exports: [
    HomepageComponent,
    BattutaRandomComponent,
    CategoriaBattuteComponent
  ]
})
export class ChuckNorrisModule { }
