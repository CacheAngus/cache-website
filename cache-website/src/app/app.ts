import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { BackgroundComponent } from './common/background/background.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule, NzIconModule, NzLayoutModule, BackgroundComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  isCollapsed = false;
  routers = [
    { icon: '26798.ico', link: '/welcome', title: 'Welcome', isActive: false },
    { icon: '26800.ico', link: '/experience', title: 'Experience' },
    { icon: '26799.ico', link: '/projects', title: 'Projects' },
    { icon: '29815.ico', link: '/about', title: 'About' },
  ];
  title!: string;

  ngOnInit(): void {
    this.title = 'Welcome';
  }

  updateTitle(title: string) {
    this.title = title;
  }
}
