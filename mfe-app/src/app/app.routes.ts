import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./test-page/test-page.component').then((m) => m.TestPageComponent),
  },
];
