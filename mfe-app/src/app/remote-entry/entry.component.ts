import { Component } from '@angular/core';

@Component({
  selector: 'mfe-mfe-app-entry',
  standalone: true,
  template: `
    <div class="mfe-container">
      <div class="mfe-card angular-theme">
        <div class="mfe-header">
           <svg width="80" height="80" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
              <path fill="#DD0031" d="M125 30L31.9 63.2l14.2 123.1L125 230l78.9-43.7 14.2-123.1z"/>
              <path fill="#C3002F" d="M125 30v22.2-.1V230l78.9-43.7 14.2-123.1L125 30z"/>
              <path fill="#FFFFFF" d="M125 52.1L66.8 182.6h21.7l11.7-29.2h49.4l11.7 29.2H183L125 52.1zm17 83.3h-34l17-40.9 17 40.9z"/>
           </svg>
           <h2>Angular Microfrontend</h2>
        </div>
        <div class="mfe-body">
          <p class="status-badge success">Online & Connesso</p>
          <div class="info-box">
             <h3>Come funziona?</h3>
             <p>Questa applicazione è un <strong>microfrontend nativo</strong> costruito in Angular 18.</p>
             <ul>
               <li>Utilizza <strong>Standalone Components</strong></li>
               <li>È esposto ad altre applicazioni tramite <strong>Webpack Module Federation</strong> (definito in <code>module-federation.config.ts</code>)</li>
               <li>Viene caricato in modo asincrono dalla Shell solo quando si visita questa specifica route.</li>
             </ul>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
    }
    .mfe-container {
      padding: 3rem 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 60vh;
      animation: fadeIn 0.6s ease-out;
    }
    .mfe-card {
      background: white;
      border-radius: 1.5rem;
      overflow: hidden;
      box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1);
      max-width: 600px;
      width: 100%;
      border: 1px solid #e2e8f0;
    }
    .mfe-header {
      background: linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%);
      padding: 3rem 2rem;
      text-align: center;
      border-bottom: 2px solid #fecdd3;
    }
    .mfe-header h2 {
      margin: 1.5rem 0 0 0;
      color: #1e293b;
      font-size: 2rem;
      font-weight: 800;
    }
    .mfe-body {
      padding: 2.5rem;
    }
    .status-badge {
      display: inline-block;
      padding: 0.5rem 1rem;
      border-radius: 9999px;
      font-size: 0.875rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .status-badge.success {
      background: #dcfce7;
      color: #166534;
      border: 1px solid #bbf7d0;
    }
    .info-box {
      background: #f8fafc;
      border-radius: 1rem;
      padding: 1.5rem;
      border: 1px solid #e2e8f0;
    }
    .info-box h3 {
      margin-top: 0;
      color: #334155;
      font-size: 1.25rem;
    }
    .info-box p, .info-box ul {
      color: #475569;
      line-height: 1.7;
    }
    .info-box ul {
      padding-left: 1.5rem;
      margin-bottom: 0;
    }
    .info-box li {
      margin-bottom: 0.5rem;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class RemoteEntryComponent {}
