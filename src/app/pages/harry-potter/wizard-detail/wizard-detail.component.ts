import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IWizard } from '../data/wizard.model';
import { WizardWorldService } from '../data/wizard-world.service';

@Component({
  selector: 'app-wizard-detail',
  templateUrl: './wizard-detail.component.html',
  styleUrls: ['./wizard-detail.component.scss']
})
export class WizardDetailComponent implements OnInit {
  wizard: IWizard | undefined;

  constructor(
    private route: ActivatedRoute,
    private wizardWorldService: WizardWorldService
  ) { }

  ngOnInit(): void {
    this.getWizardDetails();
    console.log('WizardDetailComponent loaded');
  }

  getWizardDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.wizardWorldService.getWizardDetails(id).subscribe((wizard) => {
        this.wizard = wizard;
      });
    }
  }
}