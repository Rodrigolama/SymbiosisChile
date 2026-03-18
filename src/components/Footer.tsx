export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="site-logo">Symbiosis<span style={{ color: "var(--c-accent)" }}>.</span></div>
            <p>Especialistas en investigación y gestión ambiental de Hongos, Líquenes y Briófitas. Ciencia rigurosa al servicio de la sostenibilidad.</p>
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
              <li><a href="tel:+56962070062">+569 620 700 62</a></li>
              <li><a href="mailto:monserrat.tome@symbiosischile.com">monserrat.tome@symbiosischile.com</a></li>
              <li><a href="https://wa.me/56962070062?text=Hola+Symbiosis,+necesito+información+sobre+servicios+ambientales" target="_blank" rel="noopener noreferrer" className="whatsapp-link">+569 620 700 62 (WhatsApp)</a></li>
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
