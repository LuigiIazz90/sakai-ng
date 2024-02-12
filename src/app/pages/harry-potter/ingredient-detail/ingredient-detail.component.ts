import { WizardWorldService } from './../data/wizard-world.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IIngredient } from '../data/wizard.model';

@Component({
  selector: 'app-ingredient-detail',
  templateUrl: './ingredient-detail.component.html',
  styleUrls: ['./ingredient-detail.component.scss']
})
export class IngredientDetailComponent implements OnInit {
  ingredient: IIngredient | undefined;

  constructor(private route: ActivatedRoute, private wizardWorldService: WizardWorldService) { }

  ngOnInit(): void {
    this.getIngredientDetails();
  }

  getIngredientDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.wizardWorldService.getIngredientDetails(id).subscribe((ingredient) => {
        console.log('Ingredient Details:', ingredient);
        this.ingredient = ingredient;
      });
    }
  }
}