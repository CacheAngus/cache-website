import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { BackgroundComponent } from '../background/background.component';

@Component({
  imports: [MatDialogModule, BackgroundComponent],
  selector: 'app-experience-dialog-component',
  templateUrl: './experiences-dialog.component.html',
})
export class ExperienceDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ExperienceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string; context: string }
  ) {}
}
