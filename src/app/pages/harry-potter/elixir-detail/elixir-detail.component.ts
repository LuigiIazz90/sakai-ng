import { WizardWorldService } from './../data/wizard-world.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IElixir } from '../data/wizard.model';

@Component({
  selector: 'app-elixir-detail',
  templateUrl: './elixir-detail.component.html',
  styleUrls: ['./elixir-detail.component.scss']
})
export class ElixirDetailComponent implements OnInit {
  elixir: IElixir | undefined;
  wizardId: string | null = null;

  constructor(private route: ActivatedRoute, private wizardWorldService: WizardWorldService, private router: Router) { }

  ngOnInit(): void {
    this.getElixirDetails();
    this.extractWizardId();
  }

  getElixirDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.wizardWorldService.getElixirDetails(id).subscribe((elixir) => {
        this.elixir = elixir;
      });
    }
  }

  extractWizardId(): void {
    this.wizardId = this.route.snapshot.paramMap.get('wizardId');
  }

  // goBackToWizardDetails(): void {
  //   if (this.wizardId) {
  //     this.router.navigate(['wizard-list/wizard/:id/elixirs/:id', this.wizardId]);
  //   }
  // }
}