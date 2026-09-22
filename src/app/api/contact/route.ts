import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const payload: unknown = await request.json();
    if (!payload || typeof payload !== "object") {
      return NextResponse.json(
        { success: false, message: "No pudimos procesar tu consulta. Revisa los datos e intenta de nuevo." },
        { status: 400 }
      );
    }

    const { service, challenge, name, email } = payload as Record<string, unknown>;

    // Validate required fields
    if (
      typeof service !== "string" || !service.trim() || service.length > 200 ||
      typeof name !== "string" || !name.trim() || name.length > 200 ||
      typeof email !== "string" || !email.trim() || email.length > 320 ||
      (challenge !== undefined && (typeof challenge !== "string" || challenge.length > 5000))
    ) {
      return NextResponse.json(
        { success: false, message: "Por favor completa los campos requeridos e intenta de nuevo." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const normalizedEmail = email.trim();
    if (!emailRegex.test(normalizedEmail)) {
      return NextResponse.json(
        { success: false, message: "Por favor ingresa un email válido." },
        { status: 400 }
      );
    }

    // Send email via Resend
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      console.error("[Contact Form] Delivery is unavailable: RESEND_API_KEY is not configured.");
      return NextResponse.json(
        { success: false, message: "No pudimos enviar tu consulta. Intenta nuevamente o contáctanos por WhatsApp." },
        { status: 503 }
      );
    }

    const recipients = [
      "monserrat.tome@symbiosischile.com",
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
        subject: `[Symbiosis Chile] Nueva consulta: ${service.trim()}`,
        reply_to: normalizedEmail,
        text: [
          `Servicio: ${service.trim()}`,
          `Desafío: ${typeof challenge === "string" && challenge.trim() ? challenge.trim() : "(sin especificar)"}`,
          `Nombre: ${name.trim()}`,
          `Email: ${normalizedEmail}`,
          `Fecha: ${new Date().toLocaleString("es-CL", { timeZone: "America/Santiago" })}`,
        ].join("\n"),
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!res.ok) {
      console.error(`[Contact Form] Resend rejected the message (HTTP ${res.status}).`);
      return NextResponse.json(
        { success: false, message: "No pudimos enviar tu consulta. Intenta nuevamente o contáctanos por WhatsApp." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Tu consulta fue enviada. Te contactaremos pronto.",
    });
  } catch (error) {
    const reason = error instanceof Error ? error.name : "UnknownError";
    console.error(`[Contact Form] Delivery request failed (${reason}).`);
    return NextResponse.json(
      { success: false, message: "No pudimos enviar tu consulta. Intenta nuevamente o contáctanos por WhatsApp." },
      { status: 502 }
    );
  }
}
