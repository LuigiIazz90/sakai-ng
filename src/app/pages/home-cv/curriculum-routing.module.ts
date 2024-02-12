import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CurriculumComponent } from './curriculum/curriculum.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'home-cv',
      component: CurriculumComponent
    }

  ])],
  exports: [RouterModule]
})
export class CurriculumRoutingModule { }
