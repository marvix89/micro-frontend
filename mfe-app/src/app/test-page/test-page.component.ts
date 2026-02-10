import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mfe-test-page',
  imports: [CommonModule],
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.css',
})
export class TestPageComponent {
  features = [
    {
      title: 'Microfrontend Architecture',
      description: 'Questa applicazione è costruita con architettura microfrontend, permettendo sviluppo e deployment indipendenti.',
      icon: '🏗️'
    },
    {
      title: 'Angular Standalone',
      description: 'Utilizza i componenti standalone di Angular per una struttura modulare e moderna.',
      icon: '⚡'
    },
    {
      title: 'Nx Workspace',
      description: 'Gestito con Nx per ottimizzare build, test e sviluppo in un monorepo.',
      icon: '🚀'
    },
    {
      title: 'Responsive Design',
      description: 'Design completamente responsive che si adatta a tutti i dispositivi.',
      icon: '📱'
    }
  ];
}
