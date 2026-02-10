import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'mfe-app',
    loadChildren: () => import('mfe_app/Routes').then((m) => m!.remoteRoutes),
  },
];
