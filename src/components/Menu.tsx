import React, { useState } from 'react';

interface MenuProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Menu: React.FC<MenuProps> = ({ activeSection, setActiveSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Gestionnaire de clic pour les liens du menu avec défilement progressif
  const handleMenuClick = (sectionId: string, event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setActiveSection(sectionId);
    setMenuOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 60, // Ajustement pour tenir compte de la hauteur du menu
        behavior: 'smooth'
      });
    }
  };

  // Gestionnaire pour ouvrir/fermer le menu burger
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-900 border-b border-slate-400 z-50 w-full">
      <div className="max-w-[1200px] w-full mx-auto px-4 py-1">
        <div className="flex justify-between items-center">
          <div className="text-base text-cyan-400 truncate">
            <span className="text-amber-400 mr-1">&gt;</span> welcome.sh <span className="text-slate-400 text-xs ml-1">v1.0.0</span>
          </div>
          
          {/* Bouton Menu Burger (mobile) */}
          <button 
            className="md:hidden text-slate-300 hover:text-cyan-400 transition focus:outline-none"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          {/* Menu pour desktop */}
          <ul className="hidden md:flex space-x-4 md:space-x-8 text-base">
            <li>
              <a 
                href="#home" 
                className={`transition ${activeSection === 'home' ? 'text-cyan-400' : 'text-slate-300 hover:text-slate-100'}`}
                onClick={(e) => handleMenuClick('home', e)}
              >
                <span className="mr-1">🏠</span> Accueil
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                className={`transition ${activeSection === 'skills' ? 'text-cyan-400' : 'text-slate-300 hover:text-slate-100'}`}
                onClick={(e) => handleMenuClick('skills', e)}
              >
                <span className="mr-1">🔧</span> Compétences
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className={`transition ${activeSection === 'projects' ? 'text-cyan-400' : 'text-slate-300 hover:text-slate-100'}`}
                onClick={(e) => handleMenuClick('projects', e)}
              >
                <span className="mr-1">📂</span> Projets
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={`transition ${activeSection === 'contact' ? 'text-cyan-400' : 'text-slate-300 hover:text-slate-100'}`}
                onClick={(e) => handleMenuClick('contact', e)}
              >
                <span className="mr-1">📧</span> Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Menu mobile */}
        {menuOpen && (
          <div className="md:hidden mt-1 py-2 border-t border-slate-400 animate-fadeIn">
            <ul className="flex flex-col space-y-2 text-base">
              <li>
                <a 
                  href="#home" 
                  className={`transition block py-0.5 ${activeSection === 'home' ? 'text-cyan-400' : 'text-slate-300 hover:text-slate-100'}`}
                  onClick={(e) => handleMenuClick('home', e)}
                >
                  <span className="mr-1">🏠</span> Accueil
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className={`transition block py-0.5 ${activeSection === 'skills' ? 'text-cyan-400' : 'text-slate-300 hover:text-slate-100'}`}
                  onClick={(e) => handleMenuClick('skills', e)}
                >
                  <span className="mr-1">🔧</span> Compétences
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className={`transition block py-0.5 ${activeSection === 'projects' ? 'text-cyan-400' : 'text-slate-300 hover:text-slate-100'}`}
                  onClick={(e) => handleMenuClick('projects', e)}
                >
                  <span className="mr-1">📂</span> Projets
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className={`transition block py-0.5 ${activeSection === 'contact' ? 'text-cyan-400' : 'text-slate-300 hover:text-slate-100'}`}
                  onClick={(e) => handleMenuClick('contact', e)}
                >
                  <span className="mr-1">📧</span> Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Menu;
