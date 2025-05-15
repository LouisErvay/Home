import React, { useState } from 'react';
import ModaleProject from './ModaleProject';

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

const projects: Project[] = [
  {
    id: 1,
    emoji: "🚀",
    title: "Projet_Alpha",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.",
    contexte: "Projet personnel réalisé dans le cadre d'une formation pour explorer les possibilités de React et Node.js.",
    fonctionnalites: ["Authentification utilisateur", "Tableau de bord interactif", "Gestion des données en temps réel", "API RESTful"],
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/username/projet-alpha"
  },
  {
    id: 2,
    emoji: "🔍",
    title: "Projet_Beta",
    description: "Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis.",
    contexte: "Développé en collaboration avec une équipe de 3 personnes pour un client dans le secteur e-commerce.",
    fonctionnalites: ["Recherche avancée", "Filtrage par catégories", "Système de paiement sécurisé", "Gestion des stocks"],
    technologies: ["TypeScript", "Next.js", "PostgreSQL"],
    github: "https://github.com/username/projet-beta"
  },
  {
    id: 3,
    emoji: "📊",
    title: "Projet_Gamma",
    description: "Sed commodo, leo at suscipit dictum, quam est porttitor sapien.",
    contexte: "Projet open-source visant à créer un outil de visualisation de données pour les petites entreprises.",
    fonctionnalites: ["Tableaux de bord personnalisables", "Importation de données CSV/Excel", "Génération de rapports PDF", "Partage de visualisations"],
    technologies: ["Vue.js", "Express", "MySQL"],
    github: "https://github.com/username/projet-gamma"
  },
  {
    id: 4,
    emoji: "🛠️",
    title: "Projet_Delta",
    description: "Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec.",
    contexte: "Application développée durant un hackathon de 48h pour résoudre des problèmes de gestion de projets.",
    fonctionnalites: ["Gestion de tâches", "Suivi du temps", "Collaboration en temps réel", "Notifications"],
    technologies: ["Angular", "Firebase", "Tailwind"],
    github: "https://github.com/username/projet-delta"
  },
  {
    id: 5,
    emoji: "🌐",
    title: "Projet_Epsilon",
    description: "Donec nec justo eget felis facilisis fermentum.",
    contexte: "Site web créé pour une association locale afin d'améliorer sa présence en ligne.",
    fonctionnalites: ["Système de blog", "Formulaire de contact", "Galerie d'images", "Calendrier d'événements"],
    technologies: ["Svelte", "GraphQL", "Prisma"],
    github: "https://github.com/username/projet-epsilon"
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
    <div id="projects" className="mt-16 scroll-mt-16">
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-2 text-slate-400">$ </span>
        <span className="text-2xl font-bold text-cyan-400">cd ../Projects</span>
      </div>
      <div className="border border-slate-400 p-6 mb-8 rounded-md hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_10px_rgba(34,211,238,0.2)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="border border-slate-400 p-3 rounded-lg hover:border-cyan-400 hover:scale-[1.02] transition-all cursor-pointer"
              onClick={() => openModal(project)}
            >
              <div className="flex">
                <div className="text-3xl mr-4 self-center">{project.emoji}</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-400 mb-1">{project.title}</h3>
                  <p className="text-amber-400 font-semibold">{formatTechnologies(project.technologies)}</p>
                </div>
              </div>
            </div>
          ))}

        </div>
        <div className="pt-4 text-xs text-slate-400">
          Cliquez sur un projet pour en savoir plus.
        </div>
      </div>

      {selectedProject && (
        <ModaleProject 
          project={selectedProject} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
};

export default HomeProjects;
