import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const phone = "5527997249882";
const wa = (msg: string) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

function App() {
  return (
    <main className="page-shell">
      {/* Profile */}
      <section className="bio">
        <div className="profile-wrap">
          <span className="profile-ring" />
          <img
            className="profile-photo"
            src="/lucas-ribeiro.jpg"
            alt="Lucas Ribeiro"
          />
          <span className="badge">✓</span>
        </div>

        <div className="identity">
          <h1>Lucas Ribeiro</h1>
          <p className="store-tag">RIBEIRO STORE · Colatina, ES</p>
          <p className="bio-text">
            Especialista em celulares há 6 anos. Atendimento direto,
            garantia real e os melhores preços da região.
          </p>
        </div>

        <div className="stats">
          <div className="stat">
            <strong>6+</strong>
            <span>anos</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <strong>1 ano</strong>
            <span>garantia</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <strong>100%</strong>
            <span>confiança</span>
          </div>
        </div>
      </section>

      {/* Primary CTA */}
      <a
        className="btn-primary"
        href={wa("Oi Lucas! Vim pelo link e quero comprar um celular.")}
        target="_blank"
        rel="noreferrer"
      >
        <svg className="wa-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.532 5.845L.057 23.175a.75.75 0 0 0 .916.919l5.42-1.464A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.712 9.712 0 0 1-4.964-1.363l-.355-.213-3.679.994.984-3.596-.232-.371A9.712 9.712 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
        </svg>
        Comprar pelo WhatsApp
        <span className="btn-arrow">→</span>
      </a>

      {/* Secondary links */}
      <div className="secondary-links">
        <a
          className="btn-secondary"
          href="https://www.instagram.com/ribeiro_storecol/"
          target="_blank"
          rel="noreferrer"
        >
          <svg className="s-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
          </svg>
          @ribeiro_storecol
        </a>

        <a
          className="btn-secondary"
          href={wa("Oi Lucas! Quero saber os celulares disponíveis.")}
          target="_blank"
          rel="noreferrer"
        >
          <svg className="s-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <rect x="5" y="2" width="14" height="20" rx="2" />
            <line x1="12" y1="18" x2="12.01" y2="18" strokeLinecap="round" strokeWidth="2.5" />
          </svg>
          Ver celulares disponíveis
        </a>
      </div>

      {/* Location card */}
      <a
        className="location-card"
        href="https://www.google.com/maps/place/Ribeiro+Store/@-19.5222165,-40.6407297,17z/data=!3m1!4b1!4m6!3m5!1s0xb7070e049de051:0x5352ffd6731d18dc!8m2!3d-19.5222216!4d-40.6381548!16s%2Fg%2F11k_y7t62w"
        target="_blank"
        rel="noreferrer"
        aria-label="Abrir no Google Maps"
      >
        <div className="map-preview" aria-hidden="true">
          <div className="map-grid">
            {Array.from({ length: 30 }).map((_, i) => (
              <span key={i} className="map-cell" />
            ))}
          </div>
          <div className="map-roads">
            <span className="road road-h" style={{ top: "38%" }} />
            <span className="road road-h" style={{ top: "68%" }} />
            <span className="road road-v" style={{ left: "32%" }} />
            <span className="road road-v" style={{ left: "62%" }} />
          </div>
          <div className="map-pin-wrap">
            <svg className="map-pin" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>
          <div className="map-open-tag">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="11" height="11">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Abrir Maps
          </div>
        </div>

        <div className="location-info">
          <div className="location-row">
            <svg className="loc-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <div>
              <p className="loc-address">Av. Silvio Avidos, 927</p>
              <p className="loc-sub">Próximo à Igreja Mundial · São Silvano</p>
            </div>
          </div>

          <div className="hours">
            <div className="hours-row">
              <span className="hours-dot open" />
              <span className="hours-label">Seg – Sex</span>
              <span className="hours-time">08:30 – 18:00</span>
            </div>
            <div className="hours-row">
              <span className="hours-dot open" />
              <span className="hours-label">Sábado</span>
              <span className="hours-time">08:00 – 12:30</span>
            </div>
          </div>
        </div>
      </a>

      <footer className="footer">
        <span>(27) 99724-9882</span>
        <span className="dot" />
        <span>Colatina, ES</span>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
