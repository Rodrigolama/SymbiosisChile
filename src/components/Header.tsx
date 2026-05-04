"use client";

export default function Header() {
  function handleSmoothScroll(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }

  return (
    <>
      {/* TOP BAR */}
      <div className="top-bar">
        <div className="container">
          <span className="top-bar__address">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Caspana #710, Valdivia
          </span>
          <a href="tel:+56962070062">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            +569 620 700 62
          </a>
          <a href="mailto:monserrat.tome@symbiosischile.com">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            monserrat.tome@symbiosischile.com
          </a>
        </div>
      </div>

      {/* HEADER */}
      <header className="site-header" role="banner">
        <div className="container">
          <a href="/" className="site-logo" aria-label="Symbiosis Chile">
            Symbiosis<span style={{ color: "var(--c-accent)" }}>.</span>
          </a>

          <nav id="primary-nav" aria-label="Primary navigation">
            <ul className="nav-list">
              <li><a href="/" aria-current="page">Inicio</a></li>
              <li><a href="#compromiso" onClick={(e) => handleSmoothScroll(e, "#compromiso")}>Nuestro Compromiso</a></li>
              <li><a href="#servicios" onClick={(e) => handleSmoothScroll(e, "#servicios")}>Consultoría Ambiental</a></li>
              <li><a href="#micorrizas" onClick={(e) => handleSmoothScroll(e, "#micorrizas")}>Análisis de Micorrizas</a></li>
              <li><a href="#contacto" className="btn btn-primary" style={{ padding: "var(--sp-1) var(--sp-3)", fontSize: "var(--fs-sm)", color: "#F8F5F0" }} onClick={(e) => handleSmoothScroll(e, "#contacto")}>Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
