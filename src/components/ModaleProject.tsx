import React from 'react';

interface Project {
  id: number;
  emoji: string;
  title: string;
  description: string;
  contexte: string;
  fonctionnalites: string[];
  technologies: string[];
  github?: string;
}

interface ModaleProjectProps {
  project: Project;
  onClose: () => void;
}

const ModaleProject: React.FC<ModaleProjectProps> = ({ project, onClose }) => {
  // Empêcher la propagation du clic sur le contenu de la modale
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  // Fonction pour formater les technologies avec "&"
  const formatTechnologies = (technologies: string[]) => {
    return technologies.join(' & ');
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
      onClick={onClose}
      open
    >
      <article 
        className="bg-slate-800 border border-slate-400 rounded-lg p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={handleContentClick}
      >
        <div className="flex items-center mb-3">
          <figure className="text-4xl mr-4">{project.emoji}</figure>
          <h2 className="text-2xl font-bold text-cyan-400">{project.title}</h2>
        </div>
        
        <hr className="border-b border-slate-500 mb-4" />
        
        <section className="mb-5 mt-4">
          <p className="text-slate-400">{project.description}</p>
        </section>
        
        <section className="mb-5">
          <h3 className="text-lg font-semibold text-slate-300 mb-1">Contexte</h3>
          <p className="text-slate-400 pl-8">{project.contexte}</p>
        </section>
        
        <section className="mb-5">
          <h3 className="text-lg font-semibold text-slate-300 mb-1">Fonctionnalités</h3>
          <ul className="list-disc pl-12 text-slate-400">
            {project.fonctionnalites.map((fonctionnalite, index) => (
              <li key={index}>{fonctionnalite}</li>
            ))}
          </ul>
        </section>
        
        <section className="mb-6">
          <h3 className="text-lg font-semibold text-slate-300 mb-1">Technologies</h3>
          <ul className="list-disc pl-12 text-slate-400">
            {project.technologies.map((technologie, index) => (
              <li key={index}>{technologie}</li>
            ))}
          </ul>
        </section>
        
        <div className="flex justify-end space-x-3">
          {project.github && (
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-md transition flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
          )}
          <button 
            className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-md transition"
            onClick={onClose}
          >
            Fermer
          </button>
        </div>
      </article>
    </div>
  );
};

export default ModaleProject;
