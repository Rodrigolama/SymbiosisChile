"use client";

import { useState, useRef } from "react";
import { useGclid } from "@/hooks/useGclid";

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState("");
  const [challenge, setChallenge] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const { getGclid } = useGclid();

  function goToStep(n: number | "success") {
    if (n === "success") {
      setSuccess(true);
      if (progressRef.current) progressRef.current.style.display = "none";
      return;
    }
    setStep(n);
    setError("");
  }

  function handleServiceChange(value: string) {
    setService(value);
    setTimeout(() => goToStep(2), 350);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError("Por favor completa todos los campos.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Por favor ingresa un email válido.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ service, challenge, name, email, gclid: getGclid() }),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success) {
        // Push to Google Tag Manager Data Layer
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'generate_lead',
          form_id: 'contacto_principal',
          conversion_value: 50,
          service_selected: service,
          user_email: email
        });
        // Google Ads conversion tracking
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'conversion', {
            'send_to': 'AW-18008420048/bUcgCJquzYYcENDdiotD',
            'value': 1.0,
            'currency': 'CLP'
          });
        }
        goToStep("success");
      } else {
        setError(data.message || "Error al enviar. Intenta de nuevo.");
      }
    } catch {
      setLoading(false);
      setError("Error de conexión. Intenta de nuevo.");
    }
  }

  return (
    <div className="contact-card">
      {/* Progress indicator */}
      <div className="form-progress" ref={progressRef} aria-hidden="true">
        <div className={`progress-step${step === 1 ? " is-active" : ""}${step > 1 ? " is-done" : ""}`}><span>1</span></div>
        <div className={`progress-line${step > 1 ? " is-done" : ""}`}></div>
        <div className={`progress-step${step === 2 ? " is-active" : ""}${step > 2 ? " is-done" : ""}`}><span>2</span></div>
        <div className={`progress-line${step > 2 ? " is-done" : ""}`}></div>
        <div className={`progress-step${step === 3 ? " is-active" : ""}`}><span>3</span></div>
      </div>

      <form id="symbiosis-contact-form" noValidate onSubmit={handleSubmit}>
        {/* STEP 1: Service selection */}
        {!success && step === 1 && (
          <div className="form-step is-active">
            <h3 className="step-label">¿En qué área necesitas apoyo?</h3>
            <div className="service-toggles">
              <label className="service-toggle">
                <input type="radio" name="service" value="Consultoría de Hongos" checked={service === "Consultoría de Hongos"} onChange={() => handleServiceChange("Consultoría de Hongos")} />
                <span className="toggle-card">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                  Consultoría<br />de Hongos
                </span>
              </label>
              <label className="service-toggle">
                <input type="radio" name="service" value="Estudio de Líquenes" checked={service === "Estudio de Líquenes"} onChange={() => handleServiceChange("Estudio de Líquenes")} />
                <span className="toggle-card">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                  Estudio<br />de Líquenes
                </span>
              </label>
              <label className="service-toggle">
                <input type="radio" name="service" value="Impacto Ambiental" checked={service === "Impacto Ambiental"} onChange={() => handleServiceChange("Impacto Ambiental")} />
                <span className="toggle-card">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  Impacto<br />Ambiental
                </span>
              </label>
            </div>
          </div>
        )}

        {/* STEP 2: Pain point */}
        {!success && step === 2 && (
          <div className="form-step is-active">
            <h3 className="step-label">¿Cuál es el mayor desafío de tu proyecto?</h3>
            <textarea name="challenge" rows={4} placeholder="Ej: Necesitamos cumplir con el SEIA antes de marzo..." className="form-textarea" value={challenge} onChange={(e) => setChallenge(e.target.value)} />
            <div className="step-actions">
              <button type="button" className="btn btn-outline" onClick={() => goToStep(1)}>Atrás</button>
              <button type="button" className="btn btn-primary" onClick={() => goToStep(3)}>Siguiente</button>
            </div>
          </div>
        )}

        {/* STEP 3: Contact info */}
        {!success && step === 3 && (
          <div className="form-step is-active">
            <h3 className="step-label">¿Cómo te contactamos?</h3>
            <input type="text" name="name" placeholder="Tu nombre completo" className="form-input" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="email" name="email" placeholder="Email profesional" className="form-input" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <div className="step-actions">
              <button type="button" className="btn btn-outline" onClick={() => goToStep(2)}>Atrás</button>
              <button type="submit" className={`btn btn-primary btn-submit${loading ? " is-loading" : ""}`}>
                <span className="btn-text">Enviar Consulta</span>
                <span className="btn-spinner" aria-hidden="true"></span>
              </button>
            </div>
          </div>
        )}

        {/* SUCCESS STATE */}
        {success && (
          <div className="form-step form-success is-active">
            <div className="success-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <h3 className="step-label">¡Tu proyecto está en manos expertas!</h3>
            <p className="success-msg">Te contactaremos en menos de 24 horas para discutir la mejor estrategia para tu proyecto.</p>
          </div>
        )}

        {/* Error message */}
        <div className="form-error" role="alert" aria-live="polite">{error}</div>
      </form>
    </div>
  );
}
