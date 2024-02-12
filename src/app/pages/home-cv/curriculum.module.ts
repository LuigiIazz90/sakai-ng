import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { SharedPrimeNgModule } from 'src/app/shared/shared-primeng.module';
import { CurriculumRoutingModule } from './curriculum-routing.module';

@NgModule({
  imports: [

    CurriculumRoutingModule, HttpClientModule, CommonModule, SharedPrimeNgModule
  ],
  declarations: [],
  exports: [

  ]
})
export class CurriculumModule { }
