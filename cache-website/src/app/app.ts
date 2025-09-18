import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule, NzIconModule, NzLayoutModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  isCollapsed = false;
  routers = [
    { icon: '26798.ico', link: '/welcome', title: 'Welcome', isActive: false },
    { icon: '26800.ico', link: '/experience', title: 'Experience' },
    { icon: '26799.ico', link: '/projects', title: 'Projects' },
    { icon: '29815.ico', link: '/about', title: 'About' },
  ];
}
