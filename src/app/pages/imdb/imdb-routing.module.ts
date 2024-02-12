import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RicercaFilmsComponent } from './ricerca-films/ricerca-films.component';
import { DettagliFilmsComponent } from './dettagli-films/dettagli-films.component';

@NgModule({
  imports: [RouterModule.forChild([

    {
      path: 'ricerca',
      component: RicercaFilmsComponent
    },

    {
      path: 'ricerca/dettagli/:idFilm',
      component: DettagliFilmsComponent
    },
    {
      path: '',
      redirectTo: 'ricerca',
      pathMatch: 'full'
    }


  ])],
  exports: [RouterModule]
})
export class ImdbRoutingModule { }
