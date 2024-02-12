import { Component } from '@angular/core';
import { ImdbService } from '../data/imdb.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmDescription, ImdbResponse } from '../data/imdb-response.interface';

@Component({
  selector: 'app-dettagli-films',
  templateUrl: './dettagli-films.component.html',
  styleUrls: ['./dettagli-films.component.scss']
})
export class DettagliFilmsComponent {
  dettagliFilm: FilmDescription = {
    "#TITLE": "",
    "#YEAR": 0,
    "#IMDB_ID": "",
    "#RANK": 0,
    "#ACTORS": "",
    "#AKA": "",
    "#IMDB_URL": "",
    "#IMDB_IV": "",
    "#IMG_POSTER": "",
  };

  constructor(private route: ActivatedRoute, private imdbService: ImdbService, private router: Router) {
    const idFilm = this.route.snapshot.paramMap.get('idFilm');

    if (idFilm) {
      this.imdbService.dettagliFilm(idFilm).subscribe((data: ImdbResponse) => {
        console.log('Dati dettagliFilm:', data);
        if (data.description && data.description.length > 0) {
          this.dettagliFilm = data.description[0];
        }
      });
    }
  }
  tornaAllaRicerca() {
    this.router.navigate(['imdb/ricerca']);
  }
}

