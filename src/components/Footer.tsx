import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="site-logo" style={{ marginBottom: "1rem" }}>
              <Image
                src="/img/logo.png"
                alt="Symbiosis Chile Logo"
                width={150}
                height={40}
                style={{ height: "auto", width: "auto", maxHeight: "40px", filter: "brightness(0) invert(1)" }}
              />
            </div>
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
