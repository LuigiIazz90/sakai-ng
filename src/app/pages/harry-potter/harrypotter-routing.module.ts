import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ElixirDetailComponent } from './elixir-detail/elixir-detail.component';
import { WizardDetailComponent } from './wizard-detail/wizard-detail.component';
import { WizardListComponent } from './wizard-list/wizard-list.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      redirectTo: 'wizard-list',
      pathMatch: 'full'
    },

    {
      path: 'wizard-list',
      component: WizardListComponent
    },
    {
      path: 'wizard-list/wizard/:id',
      component: WizardDetailComponent
    },
    {
      path: 'wizard-list/wizard/:id/elixirs/:id',
      component: ElixirDetailComponent
    },




  ])],

  exports: [RouterModule]
})
export class HarryPotterRoutingModule {
}