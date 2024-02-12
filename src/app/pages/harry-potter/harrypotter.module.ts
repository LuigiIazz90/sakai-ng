import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SharedPrimeNgModule } from 'src/app/shared/shared-primeng.module';
import { HarryPotterRoutingModule } from './harrypotter-routing.module';
import { WizardListComponent } from './wizard-list/wizard-list.component';
import { WizardDetailComponent } from './wizard-detail/wizard-detail.component';
import { ElixirDetailComponent } from './elixir-detail/elixir-detail.component';
import { IngredientDetailComponent } from './ingredient-detail/ingredient-detail.component';

@NgModule({
  imports: [

    HarryPotterRoutingModule, FormsModule, HttpClientModule, CommonModule, SharedPrimeNgModule
  ],
  declarations: [WizardListComponent, WizardDetailComponent, ElixirDetailComponent, IngredientDetailComponent],
  exports: [WizardListComponent,

  ]
})
export class HarryPotterModule { }