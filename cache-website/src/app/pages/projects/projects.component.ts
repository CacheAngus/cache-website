import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
@Component({
  imports: [CommonModule, MatIconModule, RouterModule],
  selector: 'app-projects-component',
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  readonly projects = [
    {
      img: 'https://i.postimg.cc/DwxdG1Gf/Screenshot-2025-09-22-135933.png',
      title: 'Weather',
      link: 'https://github.com/CacheAngus/weather',
    },
    {
      img: 'https://i.postimg.cc/MKMmBnD1/Screenshot-2025-09-22-142317.png',
      title: 'Website',
      link: 'https://github.com/CacheAngus/website',
    },
    {
      img: 'https://code.visualstudio.com/assets/docs/nodejs/reactjs/peek-definition.png',
      title: 'Practice',
      link: 'https://github.com/CacheAngus/beginner-practice',
    },
    {
      img: 'https://i.postimg.cc/2jcsdjbC/Screenshot-2025-09-22-155040.png',
      title: 'QTMA Certifications',
      link: 'https://github.com/CacheAngus/frontend_temp',
    },
  ];
}
