import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
@Component({
  imports: [CommonModule, MatIconModule, RouterModule],
  selector: 'app-welcome',
  templateUrl: './welcome.html',
})
export class Welcome {}
