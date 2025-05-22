import React, { useState } from 'react';
import ModaleProject from './ModaleProject';

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

const projects: Project[] = [
  {
    id: 1,
    emoji: "🛠️",
    imageUrl: "/buildit-logo.png",
    title: "BuildIT",
    description: "Plateforme de gestion de projets assistée par IA",
    contexte: "Projet de groupe réalisé dans le cadre d'une formation pour explorer les possibilités de React, Django et l'IA. \n\nJ'ai réalisé le backend, Token JWT, Sécurité, Permissions, Exceptions, Models, Vues, Serializers",
    fonctionnalites: ["Authentification utilisateur", "Création de projet assistée par IA", "Gestion d'un projet par catégorie et par taches", "Invitation d'autres utilisateur à son projet, gestion des permissions"],
    technologies: ["React", "TypeScript", "Django", "SQLite"],
    github: "https://github.com/Theorhd/buildIt",
    videoUrl: "https://www.youtube.com/watch?v=EWYAAEtVP_s&ab_channel=LouisErvay"
  },
  {
    id: 2,
    emoji: "🎶",
    title: "MusicApp",
    description: "C'est une simple application de gestion de musiques permettant de lire de scanner dans un dossier donner tous les sous-dossiers et fichiers audio compatibles.",
    contexte: "C'est un projet personnel développé seul. \nIl me permet de gérer mes musiques et de les écouter comme je le souhaite.",
    fonctionnalites: ["Fonctions d'un player de base", "Filtrage par tags"],
    technologies: ["Python", "DearPyGui", "Pygames", "SQLite"],
    github: "https://github.com/LouisErvay/MusicApp",
    videoUrl: "https://www.youtube.com/watch?v=8I0iEBEAsuY&ab_channel=LouisErvay"
  }
];

const HomeProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  // Fonction pour formater les technologies avec "&"
  const formatTechnologies = (technologies: string[]) => {
    return technologies.join(' & ');
  };

  return (
    <section id="projects" className="mt-16 scroll-mt-16">
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-2 text-slate-400">$ </span>
        <span className="text-2xl font-bold text-cyan-400">cd ../Projects</span>
      </div>
      <article className="border border-slate-400 p-6 mb-8 rounded-md hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_10px_rgba(34,211,238,0.2)]">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <li 
              key={project.id}
              className="border border-slate-400 p-3 rounded-lg hover:border-cyan-400 hover:scale-[1.02] transition-all cursor-pointer"
              onClick={() => openModal(project)}
            >
              <article className="flex">
                <figure className="mr-4 self-center">
                  {project.imageUrl ? (
                    <img 
                      src={project.imageUrl} 
                      alt={`${project.title} logo`}
                      className="w-12 h-12 object-contain"
                    />
                  ) : (
                    <span className="text-3xl">{project.emoji}</span>
                  )}
                </figure>
                <div>
                  <h3 className="text-xl font-bold text-slate-400 mb-1">{project.title}</h3>
                  <p className="text-amber-400 font-semibold">{formatTechnologies(project.technologies)}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
        <div className="pt-4 text-xs text-slate-400">
          Cliquez sur un projet pour en savoir plus.
        </div>
      </article>

      {selectedProject && (
        <ModaleProject 
          project={selectedProject} 
          onClose={closeModal} 
        />
      )}
    </section>
  );
};

export default HomeProjects;
