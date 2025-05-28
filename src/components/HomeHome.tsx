import React from 'react';

const HomeHome: React.FC = () => {
  return (
    <header id="home" className="pt-16">
      {/* H1 invisible pour le SEO avec mots-clés optimisés */}
      <h1 className="sr-only">
        Louis ERVAY - Développeur Backend Java Spring Boot Python Django JPA Hibernate API REST React TypeScript Alternance Master Concepteur Développeur Applications Portfolio
      </h1>
      
      <div className="flex items-center mb-4 text-xl">
        <h2 className="text-2xl font-bold text-cyan-400">Accueil</h2>
      </div>
      <article className="border border-slate-400 p-6 mb-8 rounded-md hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_10px_rgba(34,211,238,0.2)]">
        
        <div className="pl-4 border-l-2 border-slate-400">
          <div className="text-4xl font-bold mb-2 text-amber-400">Louis ERVAY</div>
          <p className="text-slate-300 mb-4">Développeur Backend | JAVA Spring Boot | PYTHON Django | JPA Hibernate | APIs REST | React TypeScript</p>
          <p className="mb-4">
            Passionné par le développement backend robuste et performant, je conçois des solutions techniques innovantes avec Java Spring Boot et Python Django. 
            Expert en APIs REST, microservices et architecture logicielle moderne.
          </p>
          <p>
            <strong>Bac + 3 Concepteur Développeur d'Applications</strong> avec des expériences concrètes en architectures Backend, intégration API REST et développement ERP.<br/>
          </p>
          
          {/* Mots-clés SEO invisibles */}
          <div className="sr-only" aria-hidden="true">
            Développeur Java Spring Boot Python Django API REST JPA Hibernate React TypeScript alternance master développement web backend frontend portfolio Louis ERVAY concepteur développeur applications
          </div>
        </div>
      </article>
  
    </header>
  );
};

export default HomeHome;
