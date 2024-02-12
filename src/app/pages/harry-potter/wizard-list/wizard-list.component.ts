import { WizardWorldService } from './../data/wizard-world.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IWizard } from '../data/wizard.model';

@Component({
  selector: 'app-wizard-list',
  templateUrl: './wizard-list.component.html',
  styleUrls: ['./wizard-list.component.scss']
})
export class WizardListComponent {
  wizards: IWizard[] = [];
  wizards$!: Observable<IWizard[]>;

  constructor(private wizardWorldService: WizardWorldService,) { }

  ngOnInit(): void {
    this.getWizardList();
  }

  getWizardList(): void {
    this.wizardWorldService.getWizards().subscribe((wizards) => {
      console.log(wizards);

      this.wizards = wizards;
    });
  }
}