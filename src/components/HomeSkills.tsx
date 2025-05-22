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
    level: 82, 
    category: "LANGUAGE", 
    desc: "Django, FastAPI, Tensorflow, PyTorch, Keras, Scikit-learn, Pandas, Numpy, Matplotlib" 
  },
  { 
    pid: 1002, 
    name: "Java", 
    level: 70, 
    category: "LANGUAGE", 
    desc: "Spring Boot, Hibernate, JPA, JUnit, Mockito, Maven, Gradle" 
  },
  { 
    pid: 1003, 
    name: "JavaScript/TypeScript", 
    level: 72, 
    category: "LANGUAGE", 
    desc: "React, Data flow, API communication" 
  },
  { 
    pid: 1005, 
    name: "SQL", 
    level: 74, 
    category: "DATABASE", 
    desc: "MySQL, MariaDB, SQLite, PostgreSQL | Jointures, Subqueries, Normalization" 
  },
  { 
    pid: 1006, 
    name: "HTML/CSS", 
    level: 78, 
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
    level: 58, 
    category: "SOFTSKILL", 
    desc: "Agile, Scrum, Kanban, Jira, Trello" 
  },
  { 
    pid: 1009, 
    name: "Tests", 
    level: 70, 
    category: "QUALITY", 
    desc: "JUnit, Mockito, Jest, Selenium, HTTPie, Postman" 
  },
  { 
    pid: 1010, 
    name: "Docker", 
    level: 52, 
    category: "TOOL", 
    desc: "Docker, Docker Compose, Docker Swarm" 
  },
  { 
    pid: 1011, 
    name: "CI/CD", 
    level: 52, 
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
            <span className="w-48 font-bold">NAME</span>
            <span className="flex-1 font-bold">LEVEL</span>
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
                  <h3 className="w-48 font-bold text-amber-400 truncate">{skill.name}</h3>
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
