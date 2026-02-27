import './App.css';

export function App() {
  return (
    <div className="react-mfe-container">
      <div className="react-mfe-card react-theme">
        <div className="react-mfe-header">
          <svg width="80" height="80" viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg">
            <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
            <g stroke="#61dafb" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2"/>
              <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
              <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
            </g>
          </svg>
          <h2>React Microfrontend</h2>
        </div>
        <div className="react-mfe-body">
          <p className="status-badge success">Online & Connesso</p>
          <div className="info-box">
             <h3>Come funziona?</h3>
             <p>Questa applicazione è un <strong>microfrontend nativo</strong> costruito in React 18.</p>
             <ul>
               <li>Utilizza <strong>Funzioni Component</strong> ed Eventi React nativi.</li>
               <li>Viene avvolto in un <strong>Web Component</strong> customizzato per l'integrazione nella Shell Angular.</li>
               <li>Questo approccio architetturale garantisce un completo isolamento degli stili e del ciclo di vita.</li>
             </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
