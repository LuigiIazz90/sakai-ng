import { Component } from '@angular/core';
import { BattutaStateService } from '../data/battuta-state.service';
import { Battuta } from '../data/battuta.models';
import { ApiService } from '../data/api.service';

interface DropdownOption {
  value: string;
  label: string;
}

@Component({
  selector: 'app-categoria-battute',
  templateUrl: './categoria-battute.component.html',
  styleUrls: ['./categoria-battute.component.scss']
})
export class CategoriaBattuteComponent {

  categorie: string[] = [];
  categoria: string = '';
  battutaCategoria: Battuta = { id: '', value: '' };
  options: DropdownOption[] = [];
  selectedOption: DropdownOption | null = null;
  mostraGIF: boolean = false;
  display: boolean = false;
  battutaCategoriaSelezionata: Battuta = { id: '', value: '' };

  constructor(
    private apiService: ApiService,
    private battutaStateService: BattutaStateService
  ) { }

  ngOnInit() {
    this.getListaCategorie();
    this.options = [
      { value: 'animal', label: 'Animal' },
      { value: 'career', label: 'Career' },
      { value: 'celebrity', label: 'Celebrity' },
      { value: 'dev', label: 'Dev' },
      { value: 'explicit', label: 'Explicit' },
      { value: 'fashion', label: 'Fashion' },
      { value: 'food', label: 'Food' },
      { value: 'history', label: 'History' },
      { value: 'money', label: 'Money' },
      { value: 'movie', label: 'Movie' },
      { value: 'music', label: 'Music' },
      { value: 'political', label: 'Political' },
      { value: 'religion', label: 'Religion' },
      { value: 'science', label: 'Science' },
      { value: 'sport', label: 'Sport' },
      { value: 'travel', label: 'Travel' }
    ];
  }

  getListaCategorie() {
    this.apiService.getListaCategorie().subscribe(
      (data: string[]) => {
        console.log(this.categorie, data);

        this.categorie = data;
      },
      (error) => {
        console.error('Errore nella richiesta API', error);
      }
    );
  }

  getBattutaCategoriaRandom() {
    if (this.categoria) {
      const apiUrl = `https://api.chucknorris.io/jokes/random?category=${this.categoria}`;

      this.apiService.getBattutaCategoriaRandom(apiUrl).subscribe(
        (data: Battuta) => {
          this.battutaCategoriaSelezionata = data;
          this.display = true;
        },
        (error) => {
          console.error('Errore nella richiesta API', error);
        }
      );
    }
  }

  resetBattutaCategoria() {
    this.battutaCategoria = { id: '', value: '' };
    this.battutaStateService.updateBattuta(this.battutaCategoria);
    this.battutaStateService.updateHomepageBattuta({ id: '', value: '' });
  }

  onSelect(option: DropdownOption): void {
    this.selectedOption = option;
    this.categoria = option.value;
  }
  attivaGIF() {
    this.mostraGIF = true;
  }

}
