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
              <svg width="100%" height="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="3" fill="#143055"/>
                <!-- N shape and top of X -->
                <path fill="#ffffff" d="M11.987 14.138l-3.132 4.923-5.193-8.427-.012 8.822H0V4.544h3.691l5.247 8.833.005-3.998 3.044 4.759zm.601-5.761c.024-.048 0-3.784.008-3.833h-3.65c.002.059-.005 3.776-.003 3.833h3.645z"/>
                <!-- X wave part in light blue -->
                <path fill="#41B1F1" d="M21.364 12.438c-.375-.13-.8-.277-1.109-.681-.06-.08-.116-.17-.176-.265a2.143 2.143 0 0 0-.533-.642c-.294-.216-.68-.322-1.18-.322a2.482 2.482 0 0 0-2.294 1.536 2.325 2.325 0 0 1 4.002.388.75.75 0 0 0 .836.334c.493-.105.46.36 1.203.518v-.133c-.003-.446-.246-.55-.75-.733zm2.024 1.266a.723.723 0 0 0 .347-.638c-.01-2.957-2.41-5.487-5.37-5.487a5.364 5.364 0 0 0-4.487 2.418c-.01-.026-1.522-2.39-1.538-2.418H8.943l3.463 5.423-3.379 5.32h3.54l1.54-2.366 1.568 2.366h3.541l-3.21-5.052a.7.7 0 0 1-.084-.32 2.69 2.69 0 0 1 2.69-2.691h.001c1.488 0 1.736.89 2.057 1.308.634.826 1.9.464 1.9 1.541a.707.707 0 0 0 1.066.596zm.35.133c-.173.372-.56.338-.755.639-.176.271.114.412.114.412s.337.156.538-.311c.104-.231.14-.488.103-.74z"/>
                <!-- wave detail -->
                <path fill="#41B1F1" d="M19.62 12.598a2.061 2.061 0 0 0-1.969 1.336 1.963 1.963 0 0 1 2.343-.739c.396.161.917.422 1.33.283a2.1 2.1 0 0 0-1.704-.88z"/>
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
