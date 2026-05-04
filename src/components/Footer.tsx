export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="/" aria-label="Symbiosis Chile">
              <img src="/img/logohf.png" alt="Symbiosis Chile" className="footer-logo-img" />
            </a>
            <p>Donde el rigor científico protege a los organismos más específicos. Especialistas en Hongos, Líquenes y Briófitas.</p>
          </div>
          <div className="footer-col">
            <h5>Servicios</h5>
            <ul>
              <li><a href="#servicios">Consultoría Ambiental</a></li>
              <li><a href="#micorrizas">Análisis de Micorrizas</a></li>
              <li><a href="#compromiso">Nuestro Compromiso</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contacto</h5>
            <ul>
              <li>Caspana #710, Valdivia</li>
              <li><a href="mailto:monserrat.tome@symbiosischile.com">monserrat.tome@symbiosischile.com</a></li>
              <li><a href="https://www.symbiosischile.com/" target="_blank" rel="noopener noreferrer">symbiosischile.com</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Symbiosis Chile. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
