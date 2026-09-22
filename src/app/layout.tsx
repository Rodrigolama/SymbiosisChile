import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://symbiosischile.com"),
  title: "Consultoría ambiental en hongos y líquenes | Symbiosis Chile",
  description:
    "Estudios ambientales de hongos, líquenes y briófitas en Chile: muestreo, identificación taxonómica e informes técnicos para proyectos.",
  keywords: [
    "consultoría ambiental",
    "hongos chile",
    "líquenes",
    "briófitas",
    "SEIA",
    "evaluación impacto ambiental",
    "micología",
    "sostenibilidad",
    "micorrizas",
    "estudios ambientales chile"
  ],
  authors: [{ name: "Monserrat Tomé" }],
  creator: "Symbiosis Chile",
  publisher: "Symbiosis Chile",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    title: "Consultoría ambiental en hongos y líquenes | Symbiosis Chile",
    description: "Estudios ambientales de hongos, líquenes y briófitas en Chile: muestreo, identificación taxonómica e informes técnicos para proyectos.",
    url: "https://symbiosischile.com/",
    siteName: "Symbiosis Chile",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/img/hero-fungi.jpg",
        width: 1920,
        height: 1280,
        alt: "Hongos en un entorno natural — Symbiosis Chile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultoría ambiental en hongos y líquenes | Symbiosis Chile",
    description: "Estudios ambientales de hongos, líquenes y briófitas en Chile.",
    images: ["/img/hero-fungi.jpg"],
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Symbiosis Chile",
    url: "https://symbiosischile.com/",
    logo: "https://symbiosischile.com/img/logofinal.png",
    email: "monserrat.tome@symbiosischile.com",
    telephone: "+56 9 6207 0062",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Caspana #710",
      addressLocality: "Valdivia",
      addressCountry: "CL",
    },
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager - Body (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K235XMRN" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />

        {children}
        <WhatsAppButton />

        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-K235XMRN');
        `}</Script>

        {/* Google tag (gtag.js) - Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18008420048"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18008420048');
          gtag('config', 'G-2R5PYZSMDB');
        `}</Script>

      </body>
    </html>
  );
}
