import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.routes').then((m) => m.WELCOME_ROUTES),
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.routes').then((m) => m.ABOUT_ROUTES),
  },
  {
    path: 'projects',
    loadChildren: () => import('./pages/projects/projects.routes').then((m) => m.PROJECTS_ROUTES),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/experience/experience.routes').then((m) => m.EXPERIENCE_ROUTES),
  },
];
