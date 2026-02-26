import { Route } from '@angular/router';

import { loadRemote, registerRemotes } from '@module-federation/enhanced/runtime';
import { inject } from '@angular/core';
import { ConfigService } from './config.service';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'mfe-app',
    loadChildren: () => {
      const configService = inject(ConfigService);
      registerRemotes([
        {
          name: 'mfe_app',
          entry: configService.getConfig().angularMfeUrl,
          type: 'module'
        }
      ]);
      return loadRemote<any>('mfe_app/Routes')
        .then((m) => m!.remoteRoutes)
        .catch(err => {
          console.error("Failed to load mfe-app", err);
          return [];
        });
    },
  },
  {
    path: 'react-mfe',
    loadComponent: () =>
      import('./react-mfe-wrapper.component').then(
        (m) => m.ReactMfeWrapperComponent
      ),
  },
];
