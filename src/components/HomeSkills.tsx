import React, { useState } from 'react';

// Définition du type pour les compétences
type Skill = {
  pid: number;
  name: string;
  level: number;
  category: string;
  desc: string;
};

// Constante contenant la liste des compétences
const skillsList: Skill[] = [
  { 
    pid: 1001, 
    name: "React.js", 
    level: 72, 
    category: "FRONTEND", 
    desc: "Création d'applications web modernes avec des composants réutilisables et un état géré efficacement." 
  },
  { 
    pid: 1002, 
    name: "JavaScript", 
    level: 75, 
    category: "FRONTEND", 
    desc: "Développement d'applications web interactives et dynamiques." 
  },
  { 
    pid: 1003, 
    name: "TypeScript", 
    level: 20, 
    category: "FRONTEND", 
    desc: "Typage statique pour JavaScript, améliorant la qualité du code et la détection d'erreurs." 
  },
  { 
    pid: 1004, 
    name: "Node.js", 
    level: 75, 
    category: "BACKEND", 
    desc: "Création de serveurs et d'APIs performants avec JavaScript côté serveur." 
  },
  { 
    pid: 1005, 
    name: "TailwindCSS", 
    level: 65, 
    category: "FRONTEND", 
    desc: "Framework CSS utilitaire pour créer des interfaces utilisateur personnalisées rapidement." 
  },
  { 
    pid: 1006, 
    name: "Git", 
    level: 30, 
    category: "TOOL", 
    desc: "Gestion de versions et collaboration sur des projets de développement." 
  },
  { 
    pid: 1007, 
    name: "SQL", 
    level: 40, 
    category: "DATABASE", 
    desc: "Conception et interrogation de bases de données relationnelles." 
  },
  { 
    pid: 1008, 
    name: "HTML/CSS", 
    level: 45, 
    category: "FRONTEND", 
    desc: "Création de structures de pages web et stylisation pour une expérience utilisateur optimale." 
  },
  { 
    pid: 1009, 
    name: "Tests", 
    level: 50, 
    category: "QUALITY", 
    desc: "Mise en place de tests unitaires et d'intégration pour assurer la qualité du code." 
  },
  { 
    pid: 1010, 
    name: "CI/CD", 
    level: 75, 
    category: "DEVOPS", 
    desc: "Automatisation des processus d'intégration et de déploiement continus." 
  },
];

// Fonction pour obtenir la couleur de la barre de progression en fonction du niveau
const getLevelColor = (level: number): string => {
  if (level >= 80) return 'bg-green-500'; // Vert pour 80% et plus
  if (level <= 20) return 'bg-red-500';   // Rouge pour 20% et moins
  
  // Entre 20% et 80%, on utilise le spectre de couleurs
  if (level < 35) return 'bg-orange-500';      // Orange pour 20-35%
  if (level < 50) return 'bg-yellow-500';      // Jaune pour 35-50%
  if (level < 65) return 'bg-lime-500';        // Lime pour 50-65%
  return 'bg-emerald-500';                     // Emeraude pour 65-80%
};

const HomeSkills: React.FC = () => {
  const [sortColumn, setSortColumn] = useState<keyof Skill>('pid');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  // Fonction pour trier les compétences
  const sortedSkills = [...skillsList].sort((a, b) => {
    const aValue = a[sortColumn];
    const bValue = b[sortColumn];
    
    if (sortDirection === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  // Fonction pour gérer le tri
  const handleSort = (column: keyof Skill) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  // Inverser le sens des flèches pour le niveau
  const getSortArrow = (column: keyof Skill) => {
    if (column === 'level') {
      return sortDirection === 'asc' ? '↓' : '↑';
    }
    return sortDirection === 'asc' ? '↑' : '↓';
  };

  return (
    <section id="skills" className="mt-16 scroll-mt-16">
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-2 text-slate-400">$ </span>
        <span className="text-2xl font-bold text-cyan-400">cd ../Skills</span>
      </div>
      
      <nav className="mb-3 flex space-x-2 text-sm" aria-label="Tri des compétences">
        <button 
          className={`px-2 py-0.5 rounded ${sortColumn === 'pid' ? 'bg-blue-900' : 'bg-slate-700'} ${hoveredButton === 'pid' ? 'bg-slate-900 text-slate-300' : 'text-white'} flex items-center`}
          onClick={() => handleSort('pid')}
          onMouseEnter={() => setHoveredButton('pid')}
          onMouseLeave={() => setHoveredButton(null)}
          aria-pressed={sortColumn === 'pid'}
        >
          PID
          {sortColumn === 'pid' && (
            <span className="ml-1" aria-hidden="true">
              {getSortArrow('pid')}
            </span>
          )}
        </button>
        <button 
          className={`px-2 py-0.5 rounded ${sortColumn === 'name' ? 'bg-blue-900' : 'bg-slate-700'} ${hoveredButton === 'name' ? 'bg-slate-900 text-slate-300' : 'text-white'} flex items-center`}
          onClick={() => handleSort('name')}
          onMouseEnter={() => setHoveredButton('name')}
          onMouseLeave={() => setHoveredButton(null)}
          aria-pressed={sortColumn === 'name'}
        >
          Nom
          {sortColumn === 'name' && (
            <span className="ml-1" aria-hidden="true">
              {getSortArrow('name')}
            </span>
          )}
        </button>
        <button 
          className={`px-2 py-0.5 rounded ${sortColumn === 'level' ? 'bg-blue-900' : 'bg-slate-700'} ${hoveredButton === 'level' ? 'bg-slate-900 text-slate-300' : 'text-white'} flex items-center`}
          onClick={() => handleSort('level')}
          onMouseEnter={() => setHoveredButton('level')}
          onMouseLeave={() => setHoveredButton(null)}
          aria-pressed={sortColumn === 'level'}
        >
          Niveau
          {sortColumn === 'level' && (
            <span className="ml-1" aria-hidden="true">
              {getSortArrow('level')}
            </span>
          )}
        </button>
        <button 
          className={`px-2 py-0.5 rounded ${sortColumn === 'category' ? 'bg-blue-900' : 'bg-slate-700'} ${hoveredButton === 'category' ? 'bg-slate-900 text-slate-300' : 'text-white'} flex items-center`}
          onClick={() => handleSort('category')}
          onMouseEnter={() => setHoveredButton('category')}
          onMouseLeave={() => setHoveredButton(null)}
          aria-pressed={sortColumn === 'category'}
        >
          Catégorie
          {sortColumn === 'category' && (
            <span className="ml-1" aria-hidden="true">
              {getSortArrow('category')}
            </span>
          )}
        </button>
      </nav>
      
      <article className="border p-4 border-slate-400 rounded-md hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_10px_rgba(34,211,238,0.2)]">
          {/* En-tête */}
          <div className="flex items-center text-xs text-slate-300 pb-2">
            <span className="w-16 text-center">PID</span>
            <span className="w-32 font-bold">NAME</span>
            <span className="flex-1">LEVEL</span>
            <span className="w-24 text-sm font-bold">CAT</span>
          </div>
          
          {/* Liste des compétences */}
          <ul className="divide-y divide-slate-700" role="list">
            {sortedSkills.map((skill) => (
              <li key={skill.pid}>
                <article 
                  className="flex items-center py-2 text-sm cursor-pointer hover:bg-slate-800"
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <span className="w-16 text-center font-mono text-cyan-400">{skill.pid}</span>
                  <h3 className="w-32 font-bold text-amber-400 truncate">{skill.name}</h3>
                  <div className="flex-1 flex items-center">
                    <div className="h-2 bg-slate-700 w-11/12 rounded-full overflow-hidden" role="progressbar" aria-valuenow={skill.level} aria-valuemin={0} aria-valuemax={100}>
                      <div 
                        className={`h-full ${getLevelColor(skill.level)}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="w-24 text-xs font-bold text-slate-300 uppercase">{skill.category}</span>
                </article>
                
                {hoveredSkill === skill && (
                  <aside className="py-2 px-4 text-sm text-slate-300 italic bg-slate-800">
                    {skill.desc}
                  </aside>
                )}
              </li>
            ))}
          </ul>
        
        <div className="pl-4 pt-2 text-xs text-slate-400">
          Survolez une compétence pour voir les détails. Utilisez les boutons pour trier.
        </div>
      </article>
    </section>
  );
};

export default HomeSkills;
