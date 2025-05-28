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
    name: "Python", 
    level: 85, 
    category: "LANGUAGE", 
    desc: "Django, FastAPI, Tensorflow, PyTorch, Keras, Scikit-learn, Pandas, Numpy, Matplotlib" 
  },
  { 
    pid: 1002, 
    name: "Java", 
    level: 80, 
    category: "LANGUAGE", 
    desc: "Spring Boot, Hibernate, JPA, JUnit, Mockito, Maven, Gradle" 
  },
  { 
    pid: 1003, 
    name: "JavaScript / TypeScript", 
    level: 85, 
    category: "LANGUAGE", 
    desc: "React, Data flow, API communication" 
  },
  { 
    pid: 1005, 
    name: "SQL", 
    level: 80, 
    category: "DATABASE", 
    desc: "MySQL, MariaDB, SQLite, PostgreSQL | Jointures, Subqueries, Normalization" 
  },
  { 
    pid: 1006, 
    name: "HTML/CSS", 
    level: 85, 
    category: "FRONTEND", 
    desc: "HTML, CSS, Tailwind, SASS" 
  },
  { 
    pid: 1007, 
    name: "Git", 
    level: 70, 
    category: "TOOL", 
    desc: "GitHub, GitLab, GitFlow, CI/CD" 
  },
  { 
    pid: 1008, 
    name: "Gestion de projet", 
    level: 55, 
    category: "SOFTSKILL", 
    desc: "Agile, Scrum, Kanban, Jira, Trello" 
  },
  { 
    pid: 1009, 
    name: "Tests", 
    level: 65, 
    category: "QUALITY", 
    desc: "JUnit, Mockito, Jest, Selenium, HTTPie, Postman" 
  },
  { 
    pid: 1010, 
    name: "Docker", 
    level: 50, 
    category: "TOOL", 
    desc: "Docker, Docker Compose, Docker Swarm" 
  },
  { 
    pid: 1011, 
    name: "CI/CD", 
    level: 50, 
    category: "DEVOPS", 
    desc: "GitHub Actions, Test, Build, Deploy" 
  }
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

// Fonction pour obtenir la couleur stroke SVG en fonction du niveau
const getLevelStrokeColor = (level: number): string => {
  if (level >= 80) return '#10b981'; // green-500
  if (level <= 20) return '#ef4444'; // red-500
  
  if (level < 35) return '#f97316';   // orange-500
  if (level < 50) return '#eab308';   // yellow-500
  if (level < 65) return '#84cc16';   // lime-500
  return '#10d9b4';                   // emerald-500
};

const HomeSkills: React.FC = () => {
  const [sortColumn, setSortColumn] = useState<keyof Skill>('pid');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);

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

  return (
    <section id="skills" className="mt-16 scroll-mt-16">
      <div className="flex items-center mb-4">
        <span className="text-2xl font-bold text-cyan-400">Skills</span>
      </div>

      {/* Contrôles de tri */}
      <nav className="mb-6 flex space-x-2 text-sm" aria-label="Tri des compétences">
        <button 
          className={`px-3 py-1 rounded ${sortColumn === 'pid' ? 'bg-blue-900' : 'bg-slate-700'} text-white hover:bg-slate-600 transition-all duration-300`}
          onClick={() => handleSort('pid')}
        >
          PID {sortColumn === 'pid' && (sortDirection === 'asc' ? '↑' : '↓')}
        </button>
        <button 
          className={`px-3 py-1 rounded ${sortColumn === 'name' ? 'bg-blue-900' : 'bg-slate-700'} text-white hover:bg-slate-600 transition-all duration-300`}
          onClick={() => handleSort('name')}
        >
          Nom {sortColumn === 'name' && (sortDirection === 'asc' ? '↑' : '↓')}
        </button>
        <button 
          className={`px-3 py-1 rounded ${sortColumn === 'level' ? 'bg-blue-900' : 'bg-slate-700'} text-white hover:bg-slate-600 transition-all duration-300`}
          onClick={() => handleSort('level')}
        >
          Niveau {sortColumn === 'level' && (sortDirection === 'asc' ? '↓' : '↑')}
        </button>
        <button 
          className={`px-3 py-1 rounded ${sortColumn === 'category' ? 'bg-blue-900' : 'bg-slate-700'} text-white hover:bg-slate-600 transition-all duration-300`}
          onClick={() => handleSort('category')}
        >
          Catégorie {sortColumn === 'category' && (sortDirection === 'asc' ? '↑' : '↓')}
        </button>
      </nav>
      
      {/* Affichage en cercles interactifs */}
      <article className="border border-slate-400 rounded-md p-6 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_10px_rgba(34,211,238,0.2)]">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8 lg:gap-12 justify-items-center pt-6 md:pt-8">
          {sortedSkills.map((skill) => (
            <div 
              key={skill.pid}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Badge catégorie repositionné à droite */}
              <div className="absolute -top-3 md:-top-6 -right-2 md:-right-4 bg-cyan-400 text-slate-900 text-xs font-bold px-1.5 md:px-2 py-0.5 md:py-1 rounded-full">
                {skill.category}
              </div>

              {/* Cercle principal sans bordure - responsive */}
              <div className="w-24 md:w-32 lg:w-36 h-24 md:h-32 lg:h-36 rounded-full bg-slate-800 flex flex-col items-center justify-center hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300">
                <div className="text-center">
                  <div className="text-xs font-mono text-slate-300 mb-0.5 md:mb-1">#{skill.pid}</div>
                  <div className="text-[10px] md:text-sm font-bold text-amber-400 mb-0.5 md:mb-1 px-1 md:px-2 text-center leading-tight">{skill.name}</div>
                  <div className={`text-sm md:text-base lg:text-lg font-bold ${getLevelColor(skill.level).replace('bg-', 'text-')}`}>
                    {skill.level}%
                  </div>
                </div>
              </div>
              
              {/* Barre de progression circulaire avec couleur du niveau - responsive */}
              <svg className="absolute inset-0 w-24 md:w-32 lg:w-36 h-24 md:h-32 lg:h-36 transform -rotate-90">
                {/* Petit cercle pour mobile et tablette */}
                <circle
                  cx="48"
                  cy="48"
                  r="42"
                  stroke={getLevelStrokeColor(skill.level)}
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 42}`}
                  strokeDashoffset={`${2 * Math.PI * 42 * (1 - skill.level / 100)}`}
                  strokeLinecap="round"
                  className="md:hidden"
                />
                {/* Cercle moyen pour tablette */}
                <circle
                  cx="64"
                  cy="64"
                  r="58"
                  stroke={getLevelStrokeColor(skill.level)}
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 58}`}
                  strokeDashoffset={`${2 * Math.PI * 58 * (1 - skill.level / 100)}`}
                  strokeLinecap="round"
                  className="hidden md:block lg:hidden"
                />
                {/* Grand cercle pour desktop */}
                <circle
                  cx="72"
                  cy="72"
                  r="66"
                  stroke={getLevelStrokeColor(skill.level)}
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 66}`}
                  strokeDashoffset={`${2 * Math.PI * 66 * (1 - skill.level / 100)}`}
                  strokeLinecap="round"
                  className="hidden lg:block"
                />
              </svg>
              
              {/* Tooltip au survol */}
              {hoveredSkill === skill && (
                <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-slate-900 border border-cyan-400 rounded-lg p-3 text-xs text-slate-300 w-64 max-w-[90vw] md:w-64 z-10 
                               before:content-[''] before:absolute before:-top-1 before:left-1/2 before:transform before:-translate-x-1/2 before:w-2 before:h-2 before:bg-cyan-400 before:rotate-45">
                  <div className="text-amber-400 font-bold mb-1">{skill.name}</div>
                  <div className="italic">{skill.desc}</div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-slate-600 text-xs text-slate-400 text-center">
          Survol pour voir les détails • Utilisez les boutons de tri
        </div>
      </article>
    </section>
  );
};

export default HomeSkills;
