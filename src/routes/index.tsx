import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
const logoUrl = "/fenix_blue.webp";

const PAYPAL_URL = "https://www.paypal.me/Jose0880712";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fenix Store | Hosting, Skins, Scripts y Mapeos MTA" },
      {
        name: "description",
        content:
          "Fenix Store - hosting, skins, scripts y mapeos para servidores gamer y desarrolladores.",
      },
      { property: "og:title", content: "Fenix Store | Recursos premium para tu servidor MTA" },
      {
        property: "og:description",
        content:
          "Hosting ultra rápido, skins premium, scripts optimizados y mapeos a medida para tu comunidad.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "icon", type: "image/webp", href: "/fenix_blue.webp" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Orbitron:wght@500;700;800;900&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css",
      },
      { rel: "stylesheet", href: "/site.css" },
    ],
  }),
  component: Index,
});

function PaypalButton() {
  return (
    <a
      className="paypal-button"
      href={PAYPAL_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fa-brands fa-paypal" aria-hidden="true"></i> Pagar con PayPal
    </a>
  );
}

const categories = [
  {
    id: "skins",
    title: "Skins Exclusivos",
    text: "Looks únicos y premium para distinguir a tus jugadores.",
    meta: <span>Ediciones elite</span>,
    price: "$5.00 USD",
  },
  {
    id: "scripts",
    title: "Scripts & Mods",
    text: "Optimización, administración y gameplay con soluciones listas para usar.",
    meta: <span>Mejora tu servidor</span>,
    price: "$7.00 USD",
  },
  {
    id: "mapeos",
    title: "Mapeos a Medida",
    text: "Experiencias inmersivas con entornos custom, urbanos y PvP.",
    meta: <span>Diseños 3D únicos</span>,
    price: "$8.00 USD",
  },
];

const hostingPlans = [
  {
    name: "Cobre",
    badge: "🥉",
    price: "$1.72 USD",
    popular: false,
    features: [
      "Capacidad: Hasta 32 Jugadores",
      "Hardware: 2 GB RAM │ Almacenamiento SSD NVMe",
      "Bases de datos: Acceso FTP y MySQL Integrado",
      "Protección: Anti-DDoS Incluida",
      "Panel: Administración Web 24/7",
    ],
  },
  {
    name: "Plata",
    badge: "🥈",
    price: "$3.45 USD",
    popular: true,
    features: [
      "Capacidad: Hasta 64 Jugadores",
      "Hardware: 4 GB RAM │ Almacenamiento SSD NVMe",
      "Respaldos: Backups Automáticos",
      "Bases de datos: Acceso FTP y MySQL Integrado",
      "Protección: Anti-DDoS Incluida",
      "Panel: Administración Web 24/7",
    ],
  },
  {
    name: "Dorado",
    badge: "🥇",
    price: "$6.90 USD",
    popular: false,
    features: [
      "Capacidad: Hasta 128 Jugadores",
      "Hardware: 6 GB RAM │ Almacenamiento SSD NVMe",
      "Rendimiento: Prioridad de CPU",
      "Respaldos: Backups Automáticos Diarios",
      "Bases de datos: Acceso FTP y MySQL Integrado",
      "Protección: Anti-DDoS Avanzada",
      "Panel: Administración Web 24/7",
    ],
  },
  {
    name: "Platino",
    badge: "👑",
    price: "$11.49 USD",
    popular: false,
    features: [
      "Capacidad: Hasta 256 Jugadores",
      "Hardware: 8 GB RAM │ Almacenamiento SSD NVMe",
      "Rendimiento: Recursos Premium Garantizados",
      "Protección: Mitigación Anti-DDoS Avanzada",
      "Respaldos: Backups Automáticos Diarios",
      "Bases de datos: Acceso FTP y MySQL Integrado",
      "Panel: Administración Web 24/7",
    ],
  },
];

function Index() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#" className="brand" aria-label="Fenix Store home">
  <img src="/fenix_blue.webp" alt="Fenix Store" className="brand-image" />
</a>

          <button
            className="nav-toggle"
            aria-label="Abrir menú"
            aria-expanded={navOpen}
            onClick={() => setNavOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav
            className={`main-nav${navOpen ? " open" : ""}`}
            aria-label="Navegación principal"
          >
            <a href="#">Inicio</a>
            <a href="#servicios">Servicios</a>
            <a href="#hosting">Hosting</a>
            <a href="#skins">Skins</a>
            <a href="#scripts">Scripts</a>
            <a href="#mapeos">Mapeos</a>
            <a href="#soporte">Soporte</a>
          </nav>

        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Powering every server</span>
              <h1>Todos los recursos necesarios para tu servidor de MTA</h1>
              <p>
                Soluciones completas para gamers y desarrolladores: hosting ultra rápido,
                skins premium, scripts optimizados y mapeos a medida para llevar tu
                comunidad al siguiente nivel.
              </p>
              <div className="hero-actions">
                <a href="#servicios" className="button primary">
                  Explorar tienda
                </a>
              </div>
              <ul className="hero-stats" aria-label="Estadísticas de Fenix Store">
                <li>
                  <strong>24/7</strong>
                  <span>Soporte</span>
                </li>
                <li>
                  <strong>99.9%</strong>
                  <span>Uptime</span>
                </li>
              </ul>
            </div>

            <div className="hero-visual" aria-label="Ilustración de servidor Fenix">
              <div className="orb-glow"></div>
              <div className="phoenix-core">
                <div className="phoenix-wing left"></div>
                <div className="phoenix-wing right"></div>
                <div className="phoenix-body"></div>
              </div>

              <div className="floating-card card-top">
                <span className="mini-label">Hosting</span>
                <strong>SSD NVMe</strong>
                <small>Rendimiento extremo</small>
              </div>

              <div className="floating-card card-mid">
                <span className="mini-label">Scripts</span>
                <strong>+ 200 Packs</strong>
                <small>Economía y roleplay</small>
              </div>

              <div className="floating-card card-bottom">
                <span className="mini-label">Skins</span>
                <strong>4K Ultra</strong>
                <small>Diseños premium</small>
              </div>
            </div>
          </div>
        </section>

        <section className="categories" id="servicios">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow accent">Lo que ofrecemos</span>
              <h2>Categorías principales</h2>
            </div>

            <div className="category-grid">
  {categories.map((cat) => (
    <article className="category-card" id={cat.id} key={cat.title}>
      <div className="card-icon branding-badge">
        <img src="/fenix_blue.webp" alt="Fenix Store" />
      </div>
                  <h3>{cat.title}</h3>
                  <p>{cat.text}</p>
                  <div className="category-meta">
                    {cat.meta}
                    <a href="#" className="text-link">
                      VER MÁS
                    </a>
                  </div>
                  <div className="category-price">{cat.price}</div>
                  <PaypalButton />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="hosting-plans" id="hosting">
          <div className="container">
            <div className="section-heading centered">
              <span className="eyebrow accent">🚔 MTA HOSTING</span>
              <h2>Planes y precios de la categoría "Hosting"</h2>
            </div>

            <div className="plan-grid">
              {hostingPlans.map((plan) => (
                <article
                  className={`plan-card ${plan.popular ? "popular" : ""}`}
                  key={plan.name}
                >
                  <div className="plan-header">
                    <span className="plan-badge">{plan.badge}</span>
                    <h3>{plan.name}</h3>
                    {plan.popular && <span className="popular-tag">⭐ MÁS POPULAR</span>}
                  </div>
                  <ul className="plan-features">
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <div className="plan-price">
                    <strong>{plan.price}</strong>
                    <span>/mes</span>
                  </div>
                  <PaypalButton />
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="soporte">
        <div className="container footer-grid">
          <div>
            <p>
              Servicios y productos premium para servidores gamer, comunidades y
              desarrolladores.
            </p>
          </div>

          <div>
            <h4>Inicio</h4>
            <ul>
              <li>
                <a href="#">Resumen</a>
              </li>
              <li>
                <a href="#">Servicios</a>
              </li>
              <li>
                <a href="#">Productos</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Servicios</h4>
            <ul>
              <li>
                <a href="#">Hosting</a>
              </li>
              <li>
                <a href="#">Skins</a>
              </li>
              <li>
                <a href="#">Scripts</a>
              </li>
              <li>
                <a href="#">Mapeos</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Contacto</h4>
            <ul className="contact-list">
              <li>
                <i className="fa-solid fa-phone"></i> +1 (809) 391 8608
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p>© 2026 Fenix Store. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
