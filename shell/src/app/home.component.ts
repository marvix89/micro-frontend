import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="home-container">
      <div class="hero-section">
        <h1 class="gradient-text">Microfrontend Architecture</h1>
        <p class="subtitle">
          Benvenuto nella Shell Application. Questa applicazione ospita e orchestra fluidamente microfrontend multipli costruiti con tecnologie diverse, creando un'esperienza utente unificata.
        </p>
        
        <div class="tech-stack-cards">
          <div class="tech-card">
            <div class="logo-wrapper nx-logo">
              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.987 14.138l-3.13-5.32 1.942-3.328 4.298 7.37-3.11 1.278z" fill="#0F172A"/>
                <path d="M11.987 14.138l3.13-5.32-1.942-3.328-4.298 7.37 3.11 1.278z" fill="#0F172A"/>
              </svg>
            </div>
            <h3>Orchestration</h3>
            <p>Architettura basata su <strong>Nx Workspace</strong>, fornendo tool di sviluppo, caching e una singola repository (monorepo) per ospitare tutte le applicazioni e librerie.</p>
          </div>

          <div class="tech-card">
            <div class="logo-wrapper angular-logo">
               <svg width="100%" height="100%" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#DD0031" d="M125 30L31.9 63.2l14.2 123.1L125 230l78.9-43.7 14.2-123.1z"/>
                  <path fill="#C3002F" d="M125 30v22.2-.1V230l78.9-43.7 14.2-123.1L125 30z"/>
                  <path fill="#FFFFFF" d="M125 52.1L66.8 182.6h21.7l11.7-29.2h49.4l11.7 29.2H183L125 52.1zm17 83.3h-34l17-40.9 17 40.9z"/>
               </svg>
            </div>
            <h3>Angular Host & MFE</h3>
            <p>Utilizza <strong>Angular 18</strong> per gestire la shell principale ed espone un microfrontend nativo tramite Webpack Module Federation ad alte prestazioni.</p>
          </div>

          <div class="tech-card">
            <div class="logo-wrapper react-logo">
              <svg width="100%" height="100%" viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg">
                <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
                <g stroke="#61dafb" stroke-width="1" fill="none">
                  <ellipse rx="11" ry="4.2"/>
                  <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                  <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                </g>
              </svg>
            </div>
            <h3>React MFE</h3>
            <p>Integra una Remote App in <strong>React 18</strong>. Avvolta in un Web Component personalizzato nella Shell per garantire l'isolamento degli stili e ciclo di vita nativo.</p>
          </div>
        </div>

      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      color: #334155;
      background: #f8fafc;
      min-height: calc(100vh - 80px); /* adjust based on nav */
    }
    .home-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 4rem 2rem;
    }
    .hero-section {
      text-align: center;
      animation: fadeIn 0.8s ease-out;
    }
    .gradient-text {
      font-size: 3.5rem;
      font-weight: 800;
      letter-spacing: -0.025em;
      background: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 50%, #8b5cf6 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 1.5rem;
    }
    .subtitle {
      font-size: 1.25rem;
      color: #64748b;
      max-width: 800px;
      margin: 0 auto 4rem auto;
      line-height: 1.7;
    }
    .tech-stack-cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
    }
    .tech-card {
      background: white;
      border-radius: 1.5rem;
      padding: 2.5rem 2rem;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      border: 1px solid #e2e8f0;
      text-align: center;
    }
    .tech-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    }
    .logo-wrapper {
      height: 120px;
      width: 120px;
      margin: 0 auto 1.5rem auto;
      padding: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 1rem;
    }
    .nx-logo { background: #f1f5f9; }
    .angular-logo { background: #fff1f2; }
    .react-logo { background: #f0fdfa; }
    .tech-card h3 {
      font-size: 1.5rem;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 1rem;
    }
    .tech-card p {
      color: #64748b;
      line-height: 1.6;
      font-size: 1rem;
    }
    .action-buttons {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      flex-wrap: wrap;
    }
    .btn {
      display: inline-flex;
      align-items: center;
      padding: 1rem 2rem;
      font-size: 1.125rem;
      font-weight: 600;
      border-radius: 9999px;
      text-decoration: none;
      transition: all 0.2s;
    }
    .btn-icon {
      margin-right: 0.5rem;
      font-size: 1.25rem;
    }
    .primary-btn {
      background: #dd0031;
      color: white;
      box-shadow: 0 4px 14px 0 rgba(221, 0, 49, 0.39);
    }
    .primary-btn:hover {
      background: #b30027;
      transform: scale(1.05);
    }
    .secondary-btn {
      background: #20232a;
      color: #61dafb;
      box-shadow: 0 4px 14px 0 rgba(32, 35, 42, 0.39);
    }
    .secondary-btn:hover {
      background: #15171c;
      transform: scale(1.05);
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `],
})
export class HomeComponent {}
