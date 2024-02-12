import { Component } from '@angular/core';
import { FilmDescription, ImdbResponse } from '../data/imdb-response.interface';
import { ImdbService } from '../data/imdb.service';

@Component({
  selector: 'app-ricerca-films',


  templateUrl: './ricerca-films.component.html',
  styleUrls: ['./ricerca-films.component.scss']
})
export class RicercaFilmsComponent {
  risultatiFilm: FilmDescription[] = [];
  nomeFilm: string = '';

  isTyping: boolean = false;
  poster = [
    { image: 'https://www.artovercovers.com/wp-content/uploads/2019/10/joker-poster-p.jpg', name: 'Locandine Films' },
    { image: 'https://www.gamesurf.it/media/5776057760_586472225b/cover_article_small.webp', name: 'Locandine Films' },
    { image: 'https://static.sky.it/images_static/cinema/news/2017/01/25/IENE-CURIOSITA.jpg.transform/hero-mobile-2x/c90ac7dbc8cf5bcb60b10fc080f2bd99b95a82b5/img.jpeg', name: 'Locandine Films' },
    { image: 'https://www.today.it/~shared/images/tv/locandine/interstellar-41up.jpg', name: 'Locandine Films' },

  ];





  constructor(private imdbService: ImdbService) { }

  resetRicerca() {
    this.nomeFilm = '';
    this.risultatiFilm = [];
    this.isTyping = false;


  }

  cercaFilm() {

    this.isTyping = false;
    if (this.nomeFilm) {
      this.imdbService.ricercaFilm(this.nomeFilm).subscribe((data: ImdbResponse) => {
        if (data.description && data.description.length > 0) {
          this.risultatiFilm = data.description;
        } else {
          this.risultatiFilm = [];

        }
        this.isTyping = true;
      });
    }
  }

}