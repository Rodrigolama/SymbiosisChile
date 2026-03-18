import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Symbiosis Chile — Consultoría e Investigación Ambiental",
  description:
    "Especialistas en investigación y gestión ambiental de Hongos, Líquenes y Briófitas. Cumplimiento SEIA garantizado.",
  keywords: [
    "consultoría ambiental",
    "hongos chile",
    "líquenes",
    "briófitas",
    "SEIA",
    "evaluación impacto ambiental",
    "micología",
    "sostenibilidad",
    "economía circular",
    "ley REP"
  ],
  authors: [{ name: "Monserrat Tomé" }],
  openGraph: {
    title: "Symbiosis Chile — Consultoría e Investigación Ambiental",
    description: "Especialistas en investigación y gestión ambiental de Hongos, Líquenes y Briófitas. Cumplimiento SEIA garantizado.",
    url: "https://symbiosischile.com",
    siteName: "Symbiosis Chile",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Symbiosis Chile — Consultoría Ambiental",
    description: "Especialistas en investigación y gestión ambiental de Hongos, Líquenes y Briófitas",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Google Tag Manager - Head */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-K235XMRN');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager - Body (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K235XMRN"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
