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
            <h1 id="hero-title" className="hero-title text-balance">
              Ciencia dedicada a los protagonistas invisibles<br className="hidden md:block"/> de la resiliencia ambiental
            </h1>
            <p className="hero-subtitle">
              Somos especialistas en Hongos, Líquenes y Briófitas.
            </p>
            <div className="hero-actions">
              <a href="#contacto" className="btn btn-primary">Solicitar Cotización</a>
              <a href="#servicios" className="btn btn-outline">Conocer Servicios</a>
            </div>
          </div>
        </section>

        {/* ── PAS SECTION — directly after hero for max emotional impact ── */}
        <section id="compromiso" className="pas-section bg-alt" aria-labelledby="pas-title">
          <div className="container">
            <span className="section-label">Rigurosidad y respaldo en cada Proyecto</span>
            <h2 id="pas-title" className="section-title text-balance">
              Ciencia dedicada a proteger a los organismos más específicos.
            </h2>
            <div className="pas-grid">
              <FadeIn>
                <div className="pas-card">
                  <div className="card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  </div>
                  <h4>El desafío</h4>
                  <p>Las normativas ambientales en constante evolución exigen un nivel de especialización técnica en componentes complejos que los estudios generales no logran cubrir.</p>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="pas-card">
                  <div className="card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                  </div>
                  <h4>El riesgo</h4>
                  <p>Retrasos en la aprobación y contingencias administrativas ante el SEIA. Un informe sin un respaldo científico sólido pone en riesgo la viabilidad y continuidad de tu Proyecto.</p>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="pas-card">
                  <div className="card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h4>Nuestra solución</h4>
                  <p>Ciencia rigurosa y caracterización taxonómica de alta precisión. Entregamos resultados robustos que garantizan el cumplimiento normativo y promueven la sostenibilidad de cada operación.</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── PILARES SECTION ── */}
        <section id="pilares" className="pas-section" aria-labelledby="pilares-title">
          <div className="container">
            <span className="section-label">Nuestra especialidad, nuestra prioridad</span>
            <h2 id="pilares-title" className="section-title">
              Los tres pilares de la resiliencia ambiental.
            </h2>
            <div className="pas-grid">
              <FadeIn>
                <div className="pas-card">
                  <div className="card-img-container" style={{ marginBottom: "1.5rem", borderRadius: "12px", overflow: "hidden", height: "200px" }}>
                    <Image src="/img/hongos-pilar.jpg" alt="Hongos" width={400} height={200} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <h4>Hongos</h4>
                  <p>Pilares del ciclo de nutrientes y la salud del suelo. Su presencia es un indicador crítico de la estabilidad en ecosistemas complejos.</p>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="pas-card">
                  <div className="card-img-container" style={{ marginBottom: "1.5rem", borderRadius: "12px", overflow: "hidden", height: "200px" }}>
                    <Image src="/img/liquenes-pilar.jpg" alt="Líquenes" width={400} height={200} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <h4>Líquenes</h4>
                  <p>Son organismos simbióticos que funcionan como bioindicadores excepcionales de la calidad del aire y la continuidad del hábitat.</p>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="pas-card">
                  <div className="card-img-container" style={{ marginBottom: "1.5rem", borderRadius: "12px", overflow: "hidden", height: "200px" }}>
                    <Image src="/img/briofitas-pilar.jpg" alt="Briófitas" width={400} height={200} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <h4>Briófitas</h4>
                  <p>Este grupo, que incluye musgos y hepáticas, es vital para la regulación hídrica y la protección del suelo contra la erosión.</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── CONSULTORÍA AMBIENTAL BENTO ── */}
        <section id="servicios" className="services-section" aria-labelledby="services-title">
          <div className="container">
            <span className="section-label">Consultoría Ambiental</span>
            <h2 id="services-title" className="section-title">Estudio, identificación e informes para el SEIA</h2>
            <p className="section-desc">Respaldamos proyectos con ciencia de vanguardia y un compromiso absoluto con la sostenibilidad.</p>

            <div className="bento-grid">
              <FadeIn className="bento-card span-2 has-img">
                <Image className="bento-img" src="/img/monitoreo.jpg" alt="Microscopía de hifas y esporas AMF" width={800} height={300} loading="lazy" style={{ width: "100%", height: "180px", objectFit: "cover" }} />
                <div className="bento-body">
                  <div className="card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                  </div>
                  <h4>Trabajo de terreno</h4>
                  <p>Muestreos georreferenciados de hongos, líquenes y briófitas para evaluar la biodiversidad del ecosistema.</p>
                </div>
              </FadeIn>

              <FadeIn className="bento-card">
                <div className="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                </div>
                <h4>Identificación taxonómica</h4>
                <p>Microscopía y tinciones especializadas en laboratorio para determinar cada especie con exactitud.</p>
              </FadeIn>

              <FadeIn className="bento-card">
                <div className="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h4>Elaboración de informes</h4>
                <p>Informes técnicos alineados con el SEIA, respaldados por evidencia científica rigurosa.</p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── ANÁLISIS DE MICORRIZAS — dedicated section ── */}
        <section id="micorrizas" className="micorrizas-section" aria-labelledby="micorrizas-title">
          <div className="container">
            <span className="section-label">Análisis de Micorrizas</span>
            <h2 id="micorrizas-title" className="section-title">La simbiosis que sostiene la vida del suelo</h2>
            <p className="section-desc">Servicios especializados en hongos micorrícicos arbusculares (HMA) para evaluar, restaurar y potenciar la salud radicular y edáfica.</p>

            <div className="bento-grid">
              <FadeIn className="bento-card">
                <div className="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
                </div>
                <h4>Colonización micorrícica</h4>
                <p>Porcentaje de colonización fúngica en raíces mediante tinción y microscopía especializada.</p>
              </FadeIn>

              <FadeIn className="bento-card">
                <div className="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                <h4>Inoculación de sustratos</h4>
                <p>HMA nativos para restaurar la simbiosis del suelo y potenciar su resiliencia.</p>
              </FadeIn>

              <FadeIn className="bento-card span-2 has-img">
                <Image className="bento-img" src="/img/esporas.jpg" alt="Esporas de hongos micorrícicos bajo microscopio" width={800} height={300} loading="lazy" style={{ width: "100%", height: "180px", objectFit: "cover" }} />
                <div className="bento-body">
                  <div className="card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                  </div>
                  <h4>Conteo de esporas de HMA</h4>
                  <p>Cuantificación de esporas en suelos naturales y agrícolas para evaluar diversidad fúngica y salud del suelo.</p>
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
                  <p>Muestreo georreferenciado de hongos, líquenes y briófitas en el área de influencia del proyecto.</p>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="pas-card">
                  <div className="card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                  </div>
                  <span className="step-number">02</span>
                  <h4>Análisis de Laboratorio</h4>
                  <p>Microscopía y tinciones especializadas para identificación taxonómica precisa y conteo de esporas.</p>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="pas-card">
                  <div className="card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <span className="step-number">03</span>
                  <h4>Informe &amp; Cumplimiento</h4>
                  <p>Documentación técnica lista para el SEIA que acelera la aprobación de tu proyecto.</p>
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
              <img src="/img/client-logo.png" alt="Cliente 1" className="client-logo" />
              <img src="/img/client-logo (1).png" alt="Cliente 2" className="client-logo" />
              <img src="/img/client-logo (2).png" alt="Cliente 3" className="client-logo" />
              <img src="/img/client-logo (3).png" alt="Cliente 4" className="client-logo" />
              <img src="/img/client-logo (4).png" alt="Cliente 5" className="client-logo" />
              <img src="/img/client-logo (5).png" alt="Cliente 6" className="client-logo" />
              <img src="/img/client-logo (6).png" alt="Cliente 7" className="client-logo" />
              <img src="/img/client-logo.png" alt="Cliente 1" className="client-logo" />
              <img src="/img/client-logo (1).png" alt="Cliente 2" className="client-logo" />
              <img src="/img/client-logo (2).png" alt="Cliente 3" className="client-logo" />
              <img src="/img/client-logo (3).png" alt="Cliente 4" className="client-logo" />
              <img src="/img/client-logo (4).png" alt="Cliente 5" className="client-logo" />
              <img src="/img/client-logo (5).png" alt="Cliente 6" className="client-logo" />
              <img src="/img/client-logo (6).png" alt="Cliente 7" className="client-logo" />
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contacto" className="contact-section" aria-labelledby="contact-title">
          <div className="container">
            <h2 id="contact-title" className="section-title text-center">Comienza tu consultoría</h2>
            <p className="contact-subtitle text-center">Donde el rigor científico protege a los organismos más específicos.</p>

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
