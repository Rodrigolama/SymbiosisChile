import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      <Header />

      <main id="main" role="main">
        {/* ── HERO ── */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-bg">
            <Image
              src="/img/hero-fungi.jpg"
              alt="Macro fotografía de hongos — Symbiosis Chile"
              width={1920}
              height={1280}
              priority
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
            />
          </div>
          <div className="hero-content">
            <h1 id="hero-title" className="hero-title">
              Consultoría e Investigación<br />Ambiental
            </h1>
            <p className="hero-subtitle">
              Somos especialistas en la investigación y gestión ambiental de Hongos, Líquenes y Briófitas. Organismos complejos que requieren técnicas especializadas para su monitoreo e identificación.
            </p>
            <div className="hero-actions">
              <a href="#contacto" className="btn btn-primary">Solicitar Cotización</a>
              <a href="#servicios" className="btn btn-outline">Conocer Servicios</a>
            </div>
          </div>
        </section>

        {/* ── PAS SECTION ── */}
        <section id="compromiso" className="pas-section" aria-labelledby="pas-title">
          <div className="container">
            <span className="section-label">¿Por qué Symbiosis?</span>
            <h2 id="pas-title" className="section-title text-balance">
              Tu cumplimiento ambiental no puede esperar.
            </h2>
            <div className="pas-grid">
              <FadeIn>
                <div className="pas-card">
                  <div className="card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  </div>
                  <h4>El Problema</h4>
                  <p>Regulaciones ambientales cada vez más estrictas exigen técnicas especializadas que pocas consultoras dominan.</p>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="pas-card">
                  <div className="card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                  </div>
                  <h4>El Riesgo</h4>
                  <p>Retrasos, multas del SEIA y daño reputacional. Un estudio deficiente puede paralizar tus operaciones.</p>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="pas-card">
                  <div className="card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h4>La Solución</h4>
                  <p>Ciencia rigurosa, identificación taxonómica precisa y cumplimiento normativo garantizado. Tu aliado estratégico.</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── SERVICES BENTO ── */}
        <section id="servicios" className="services-section" aria-labelledby="services-title">
          <div className="container">
            <span className="section-label">Nuestros Servicios</span>
            <h2 id="services-title" className="section-title">Consultoría Ambiental &amp; Análisis de Micorrizas</h2>
            <p className="section-desc">Soluciones integrales respaldadas por ciencia de vanguardia y un compromiso absoluto con la sostenibilidad.</p>

            <div className="bento-grid">
              <FadeIn className="bento-card span-2 has-img">
                <Image className="bento-img" src="/img/monitoreo.jpg" alt="Microscopía de hifas y esporas AMF" width={800} height={300} loading="lazy" style={{ width: "100%", height: "180px", objectFit: "cover" }} />
                <div className="bento-body">
                  <div className="card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                  </div>
                  <h4>Monitoreo Ambiental</h4>
                  <p>Seguimiento detallado de la biodiversidad de hongos, líquenes y briófitas en distintos ecosistemas. Datos esenciales para evaluar el estado de los hábitats y sus condiciones ecológicas.</p>
                </div>
              </FadeIn>

              <FadeIn className="bento-card">
                <div className="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                </div>
                <h4>Identificación Taxonómica</h4>
                <p>Análisis precisos en laboratorio con reactivos y técnicas especializadas para garantizar resultados exactos.</p>
              </FadeIn>

              <FadeIn className="bento-card">
                <div className="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h4>Cumplimiento Normativo</h4>
                <p>Estudios que cumplen los estándares del Servicio de Evaluación de Impacto Ambiental (SEIA).</p>
              </FadeIn>

              <FadeIn className="bento-card" id="micorrizas">
                <div className="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
                </div>
                <h4>Colonización Micorrícica</h4>
                <p>Determinación del porcentaje de colonización presente en raíces mediante tinción y microscopía.</p>
              </FadeIn>

              <FadeIn className="bento-card">
                <div className="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                <h4>Inoculación de Sustrato</h4>
                <p>Inoculación con hongos micorrícicos arbusculares nativos para restaurar y potenciar la simbiosis del suelo.</p>
              </FadeIn>

              <FadeIn className="bento-card span-2 has-img">
                <Image className="bento-img" src="/img/esporas.jpg" alt="Esporas de hongos micorrícicos bajo microscopio" width={800} height={300} loading="lazy" style={{ width: "100%", height: "180px", objectFit: "cover" }} />
                <div className="bento-body">
                  <div className="card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                  </div>
                  <h4>Conteo de Esporas AMF</h4>
                  <p>Extracción y cuantificación de esporas de hongos micorrícicos en suelo natural y de cultivo. Datos valiosos para evaluar diversidad, actividad fúngica y el impacto de prácticas agrícolas en la salud del suelo.</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── HOW WE WORK ── */}
        <section id="metodo" className="pas-section how-section" aria-labelledby="how-title">
          <div className="container">
            <span className="section-label">Cómo Trabajamos</span>
            <h2 id="how-title" className="section-title text-balance">
              Un proceso científico de 3 etapas.
            </h2>
            <div className="pas-grid">
              <FadeIn>
                <div className="pas-card">
                  <div className="card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                  </div>
                  <span className="step-number">01</span>
                  <h4>Prospección en Terreno</h4>
                  <p>Muestreo exhaustivo con protocolos estandarizados. Recolección georreferenciada de hongos, líquenes y briófitas en el área de influencia.</p>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="pas-card">
                  <div className="card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                  </div>
                  <span className="step-number">02</span>
                  <h4>Análisis de Laboratorio</h4>
                  <p>Identificación taxonómica con microscopía avanzada y reactivos especializados. Cuantificación de esporas y colonización micorrícica.</p>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="pas-card">
                  <div className="card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <span className="step-number">03</span>
                  <h4>Informe &amp; Cumplimiento</h4>
                  <p>Documentación técnica lista para el SEIA. Informes claros con respaldo científico que aceleran la aprobación de tu proyecto.</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── CLIENT LOGOS ── */}
        <section className="clients-section" aria-label="Empresas que confían en nosotros">
          <div className="container">
            <span className="section-label">Confían en Nosotros</span>
            <div className="clients-grid">
              <div className="client-logo--placeholder">Logo 1</div>
              <div className="client-logo--placeholder">Logo 2</div>
              <div className="client-logo--placeholder">Logo 3</div>
              <div className="client-logo--placeholder">Logo 4</div>
              <div className="client-logo--placeholder">Logo 5</div>
              <div className="client-logo--placeholder">Logo 6</div>
              <div className="client-logo--placeholder">Logo 1</div>
              <div className="client-logo--placeholder">Logo 2</div>
              <div className="client-logo--placeholder">Logo 3</div>
              <div className="client-logo--placeholder">Logo 4</div>
              <div className="client-logo--placeholder">Logo 5</div>
              <div className="client-logo--placeholder">Logo 6</div>
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contacto" className="contact-section" aria-labelledby="contact-title">
          <div className="container">
            <h2 id="contact-title" className="section-title text-center">Comienza tu consultoría</h2>
            <p className="contact-subtitle text-center">3 pasos simples para poner tu proyecto en manos expertas.</p>

            <ContactForm />

            <div className="contact-info">
              <span className="contact-info__item">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Caspana #710, Valdivia
              </span>
              <span className="contact-info__item">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <a href="tel:+56962070062">+569 620 700 62</a>
              </span>
              <span className="contact-info__item">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <a href="mailto:monserrat.tome@symbiosischile.com">monserrat.tome@symbiosischile.com</a>
              </span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
