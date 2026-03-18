"use client";

export default function AuthorBio() {
  const authorSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Monserrat Tomé",
    "jobTitle": "Consultora Ambiental Senior",
    "worksFor": {
      "@type": "Organization",
      "name": "Symbiosis Chile",
      "url": "https://symbiosischile.com"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Universidad Austral de Chile"
    },
    "knowsAbout": [
      "Micología",
      "Liquenología",
      "Evaluación de Impacto Ambiental",
      "SEIA",
      "Briófitas"
    ],
    "url": "https://symbiosischile.com",
    "sameAs": [
      "https://www.linkedin.com/in/monserrat-tome"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />
      <div className="author-bio">
        <div className="author-avatar">
          <img src="/img/author-avatar.jpg" alt="Monserrat Tomé" />
        </div>
        <div className="author-content">
          <h4>Sobre la autora</h4>
          <p>
            <strong>Monserrat Tomé</strong> es consultora ambiental senior con más de 10 años 
            de experiencia en evaluación de impacto ambiental, especializada en hongos, líquenes 
            y briófitas. Certificada en SEIA y miembro de la Sociedad Chilena de Micología.
          </p>
        </div>
      </div>
    </>
  );
}
