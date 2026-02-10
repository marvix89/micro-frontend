import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="home-page">
      <h2>Benvenuto nella Shell Application</h2>
      <p>
        Questa è l'applicazione shell che ospita i microfrontend.
        Utilizza Module Federation per caricare dinamicamente applicazioni remote.
      </p>
      <p>
        Clicca su <strong>"MFE App"</strong> nel menu per vedere il microfrontend in azione!
      </p>
      <a routerLink="/mfe-app" class="cta-button">Vai al Microfrontend →</a>
    </div>
  `,
  styles: [],
})
export class HomeComponent {}
