import React, { useState } from 'react';

interface Project {
  id: number;
  emoji: string;
  imageUrl?: string;
  title: string;
  description: string;
  contexte: string;
  fonctionnalites: string[];
  technologies: string[];
  github?: string;
  videoUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Fonction pour formater les technologies avec "&"
  const formatTechnologies = (technologies: string[]) => {
    return technologies.join(' & ');
  };

  // Fonction pour extraire l'ID de la vidéo YouTube
  const getYouTubeVideoId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    return match ? match[1] : null;
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <article className="border border-slate-400 p-6 mb-6 rounded-md hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_10px_rgba(34,211,238,0.2)]">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Partie gauche - Informations */}
        <div className="flex-1">
          {/* En-tête du projet */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <figure className="mr-4">
                {project.imageUrl ? (
                  <img 
                    src={project.imageUrl} 
                    alt={`Logo du projet ${project.title} - ${project.technologies.join(', ')}`}
                    className="w-12 h-12 object-contain"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-3xl" role="img" aria-label={`Icône du projet ${project.title}`}>{project.emoji}</span>
                )}
              </figure>
              <div>
                <h3 className="text-xl font-bold text-slate-400 mb-1">{project.title}</h3>
                <p className="text-amber-400 font-semibold">{formatTechnologies(project.technologies)}</p>
              </div>
            </div>
            
            {/* Bouton GitHub à droite du titre - desktop seulement */}
            {project.github && (
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-md transition"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
            )}
          </div>

          {/* Description */}
          <section className="mb-4">
            <p className="text-slate-400">{project.description}</p>
          </section>

          {/* Bouton d'expansion pour mobile - avant le contexte (seulement quand fermé) */}
          {!isExpanded && (
            <button 
              onClick={toggleExpanded}
              className="lg:hidden flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-4"
            >
              <svg 
                className="w-4 h-4 mr-2 transition-transform"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              Tout afficher
            </button>
          )}

          {/* Contenu qui peut être réduit/étendu */}
          <div className={`overflow-hidden transition-all duration-300 ${!isExpanded ? 'lg:max-h-16 max-h-0' : 'max-h-none'}`}>
            {/* Contexte */}
            <section className="mb-4">
              <h4 className="text-lg font-semibold text-slate-300 mb-2">Contexte</h4>
              <p className="text-slate-400 pl-4 whitespace-pre-line">{project.contexte}</p>
            </section>
            
            {/* Fonctionnalités */}
            <section className="mb-4">
              <h4 className="text-lg font-semibold text-slate-300 mb-2">Fonctionnalités</h4>
              <ul className="list-disc pl-8 text-slate-400">
                {project.fonctionnalites.map((fonctionnalite, index) => (
                  <li key={index}>{fonctionnalite}</li>
                ))}
              </ul>
            </section>

            {/* Boutons pour mobile - vidéo et GitHub côte à côte - après les fonctionnalités */}
            <div className="lg:hidden mb-4 flex gap-3">
              {project.videoUrl && (
                <a 
                  href={project.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-md transition"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                  Vidéo
                </a>
              )}
              {project.github && (
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-md transition"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
              )}
            </div>

            {/* Bouton d'expansion pour mobile - après les boutons (seulement quand ouvert) */}
            {isExpanded && (
              <button 
                onClick={toggleExpanded}
                className="lg:hidden flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-4"
              >
                <svg 
                  className="w-4 h-4 mr-2 transition-transform rotate-180"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                Réduire
              </button>
            )}
          </div>

          {/* Bouton d'expansion - seulement sur desktop */}
          <button 
            onClick={toggleExpanded}
            className="hidden lg:flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-4"
          >
            <svg 
              className={`w-4 h-4 mr-2 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            {isExpanded ? 'Réduire' : 'Tout afficher'}
          </button>
        </div>

        {/* Partie droite - Lecteur YouTube (desktop seulement) */}
        {project.videoUrl && (
          <div className="hidden lg:block w-96 flex-shrink-0">
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${getYouTubeVideoId(project.videoUrl)}`}
                title={`Vidéo de ${project.title}`}
                className="w-full h-full rounded-md"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard; 