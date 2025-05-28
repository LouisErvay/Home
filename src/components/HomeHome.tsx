import React from 'react';

const HomeHome: React.FC = () => {
  return (
    <header id="home" className="pt-16">
      <div className="flex items-center mb-4 text-xl">
        <span className="text-2xl font-bold text-cyan-400">Home</span>
      </div>
      <article className="border border-slate-400 p-6 mb-8 rounded-md hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_10px_rgba(34,211,238,0.2)]">
        
        <div className="pl-4 border-l-2 border-slate-400">
          <h1 className="text-4xl font-bold mb-2 text-amber-400">Louis ERVAY</h1>
          <p className="text-slate-300 mb-4">Développeur Backend | JAVA | PYTHON | Spring Boot | JPA | Django | APIs</p>
          <p className="mb-4">
            Passionné par le développement robuste et performant, je mets à profit mes compétences pour créer des solutions efficaces et durables. <span className="text-amber-400">✨</span>
          </p>
          <p>
            Bac + 3 Concepteur Développeur d'Applications avec des expériences en ERP, Backend et API REST.<br/>
            Je cherche actuellement une alternance pour confirmer ma formation et poursuivre en Master.
          </p>
        </div>
      </article>
  
    </header>
  );
};

export default HomeHome;
