import { Injectable } from '@angular/core';
import { ExperienceDialogComponent } from './experiences-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable()
export class ExperienceDialogService {
  constructor(public dialog: MatDialog) {}

  open(context: { title: string; context: string }) {
    return this.dialog.open(ExperienceDialogComponent, {
      height: '600px',
      width: '500px',
      data: context,
    });
  }
}
