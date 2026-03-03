import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { service, challenge, name, email } = await request.json();

    // Validate required fields
    if (!service || !name || !email) {
      return NextResponse.json(
        { success: false, message: "Por favor completa todos los campos requeridos." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Por favor ingresa un email válido." },
        { status: 400 }
      );
    }

    // Send email via Resend
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      // No API key configured — log the submission and return success
      console.log("[Contact Form] No RESEND_API_KEY set. Submission:", { service, challenge, name, email });
      return NextResponse.json({
        success: true,
        message: "Mensaje recibido. Te contactaremos pronto.",
      });
    }

    const recipients = [
      "rodrigolamatorres@gmail.com",
    ];

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "contacto@symbiosischile.com",
        to: recipients,
        subject: `[Symbiosis Chile] Nueva consulta: ${service}`,
        reply_to: email,
        text: [
          `Servicio: ${service}`,
          `Desafío: ${challenge || "(sin especificar)"}`,
          `Nombre: ${name}`,
          `Email: ${email}`,
          `Fecha: ${new Date().toLocaleString("es-CL", { timeZone: "America/Santiago" })}`,
        ].join("\n"),
      }),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      console.error("[Contact Form] Resend error:", errorData);
      // Still return success to the user — we log the error server-side
      return NextResponse.json({
        success: true,
        message: "Mensaje recibido. Te contactaremos pronto.",
      });
    }

    return NextResponse.json({
      success: true,
      message: "Tu proyecto está ahora en manos expertas. Te contactaremos en menos de 24 horas.",
    });
  } catch (error) {
    console.error("[Contact Form] Unexpected error:", error);
    return NextResponse.json(
      { success: false, message: "Error interno. Intenta de nuevo." },
      { status: 500 }
    );
  }
}
