import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterLink, RouterOutlet, NzIconModule, NzLayoutModule, NzMenuModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  value = { title: 'gege' };
  isCollapsed = false;
  readonly professionalRouters = [
    { icon: 'book', link: '/welcome', title: 'Welcome' },
    { icon: 'api', link: '/experience', title: 'Experience' },
    { icon: 'build', link: '/projects', title: 'Projects' },
  ];
  readonly personalRouters = [{ icon: 'dollar-circle', link: '/about', title: 'About' }];
}
