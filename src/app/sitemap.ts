import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://symbiosischile.com';

  // Páginas estáticas principales
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/#servicios`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#contacto`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  // Simulación de artículos de blog futuros (Topic Clusters)
  const blogArticles = [
    {
      url: `${baseUrl}/blog/ley-rep-guia-completa-2026`,
      lastModified: new Date('2026-03-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/economia-circular-empresas-chile`,
      lastModified: new Date('2026-03-10'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/evaluacion-impacto-ambiental-seia-paso-a-paso`,
      lastModified: new Date('2026-03-05'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
  ];

  return [...staticPages, ...blogArticles];
}
