import React from 'react';
import ProjectCard from './ProjectCard';

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
    description: "Plateforme pour soutenir la création et la gestion de projets, avec l'assistance de l'IA.",
    contexte: "Projet de groupe réalisé dans le cadre d'une formation pour explorer les possibilités de React, Django et l'IA. \n\nJ'ai réalisé le backend, Token JWT, Sécurité, Permissions, Exceptions, Models, Vues, Serializers",
    fonctionnalites: ["Authentification utilisateur", "Création de projet assistée par IA", "Gestion d'un projet par catégorie et par tâches", "Invitation d'autres utilisateurs à son projet, gestion des permissions"],
    technologies: ["React", "TypeScript", "Django", "SQLite"],
    github: "https://github.com/Theorhd/buildIt",
    videoUrl: "https://www.youtube.com/watch?v=EWYAAEtVP_s&ab_channel=LouisErvay"
  },
  {
    id: 2,
    emoji: "🎶",
    title: "MusicApp",
    description: "Application de gestion de musiques permettant de lire et scanner dans un dossier donné tous les sous-dossiers et fichiers audio compatibles.",
    contexte: "Projet personnel développé seul. \nIl me permet de gérer mes musiques et de les écouter comme je le souhaite.",
    fonctionnalites: ["Fonctions d'un lecteur de base", "Filtrage par tags"],
    technologies: ["Python", "DearPyGui", "Pygame", "SQLite"],
    github: "https://github.com/LouisErvay/MusicApp",
    videoUrl: "https://www.youtube.com/watch?v=8I0iEBEAsuY&ab_channel=LouisErvay"
  }
];

const HomeProjects: React.FC = () => {
  return (
    <section id="projects" className="mt-16 scroll-mt-16">
      <div className="flex items-center mb-4">
        <h2 className="text-2xl font-bold text-cyan-400">Projets de Développement</h2>
      </div>
      
      <div className="space-y-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      {/* Contenu SEO invisible */}
      <div className="sr-only" aria-hidden="true">
        Projets de développement web applications Java Spring Boot Python Django React TypeScript portfolio développeur backend frontend API REST
      </div>
    </section>
  );
};

export default HomeProjects;
