import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ExperienceDialogService } from '../../common/experiences-dialog/experienes-dialog.service';

@Component({
  imports: [CommonModule, MatIconModule, RouterModule, MatButtonModule],
  providers: [ExperienceDialogService],
  selector: 'app-experience-page',
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  readonly experiences = [
    {
      img: '',
      title: 'Full-time',
      body: `<div class="text-2xl">Ten Thousand Coffees</div><p class="text-lg mb-2">Software Engineer - 5+ years</p><p>Worked as the lead engineer for multiple key, fullstack features across the platform</p><p>Tech stack: MongoDB, Express.js, Angular, Node.js, Typescript</p>
      <p class="text-lg mb-2">Product Reliability Engineer - 1 year</p><p>Primary bug investigator and in charge of converting common manual tasks to features</p><p>Tech stack: MongoDB, Express.js, Angular, Node.js, Typescript</p>`,
    },
    {
      img: '',
      title: 'Internships',
      body: `<div class="text-2xl">Ten Thousand Coffees</div><p class="text-lg mb-2">Product Reliability Engineer - 4 months</p><p>Primary bug investigator and in charge of converting common manual tasks to features</p><p>Tech stack: MongoDB, Express.js, Angular, Node.js, Typescript</p>
      <div class="text-2xl">Andrew Davidson & Co</div><p class="text-lg mb-2">Data Visualization and Analysis Intern - 4 months</p><p>Modeled and analysed data to create notebooks for sales and engineering to use as inputs</p><p>Tech stack: SQL, PowerBI, Excel Macros, Tableau</p>`,
    },
  ];

  constructor(private readonly experiencesDialogService: ExperienceDialogService) {}

  openDialog(title: string, context: string) {
    this.experiencesDialogService.open({ title, context }).afterClosed().subscribe();
  }
}
