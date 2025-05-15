import React, { useState, useEffect } from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import HomeHome from '../components/HomeHome';
import HomeSkills from '../components/HomeSkills';
import HomeProjects from '../components/HomeProjects';
import HomeContact from '../components/HomeContact';

const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [background, setBackground] = useState<string>('bg-dots-wave');
  const [showBackgroundSelector, setShowBackgroundSelector] = useState<boolean>(false);
  const [menuAnimation, setMenuAnimation] = useState<string>('');

  const backgrounds = [
    { name: 'Base', class: 'bg-dots-wave' },
    { name: 'Second', class: 'bg-second' },
  ];

  const updateActiveSection = () => {
    const homeSection = document.getElementById('home');
    const skillsSection = document.getElementById('skills');
    const projectsSection = document.getElementById('projects');
    const contactSection = document.getElementById('contact');

    const scrollPosition = window.scrollY;

    // Fonction pour vérifier si une section est en vue
    const isSectionInView = (section: HTMLElement | null, position: number) => {
      if (!section) return false;
      const sectionTop = section.offsetTop - 100;
      const sectionBottom = sectionTop + section.offsetHeight;
      return position >= sectionTop && position < sectionBottom;
    };

    // Déterminer quelle section est active
    if (isSectionInView(contactSection, scrollPosition)) {
      setActiveSection('contact');
    } else if (isSectionInView(projectsSection, scrollPosition)) {
      setActiveSection('projects');
    } else if (isSectionInView(skillsSection, scrollPosition)) {
      setActiveSection('skills');
    } else {
      setActiveSection('home');
    }
  };

  useEffect(() => {
    // Optimiser la performance avec debounce
    const debouncedUpdateActiveSection = debounce(updateActiveSection, 50);

    // Ajouter l'écouteur d'événement
    window.addEventListener('scroll', debouncedUpdateActiveSection);

    // Appel initial
    updateActiveSection();

    // Nettoyer l'écouteur d'événement
    return () => {
      window.removeEventListener('scroll', debouncedUpdateActiveSection);
    };
  }, []);

  const debounce = (func: Function, delay: number) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return function (...args: any[]) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const toggleBackgroundSelector = () => {
    if (showBackgroundSelector) {
      // Animation de sortie
      setMenuAnimation('animate-fadeOutDown');
      setTimeout(() => {
        setShowBackgroundSelector(false);
        setMenuAnimation('');
      }, 300);
    } else {
      // Animation d'entrée
      setShowBackgroundSelector(true);
      setMenuAnimation('animate-fadeInUp');
    }
  };

  const changeBackground = (bgClass: string) => {
    setBackground(bgClass);
    setShowBackgroundSelector(false);
  };

  return (
    <div className={`min-h-screen ${background} text-slate-400 overflow-x-hidden w-full`}>
      <div className="dots-layer" aria-hidden="true"></div>
      <Menu activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="max-w-[1200px] mx-auto px-4 flex-grow w-full text-sm leading-relaxed">
        <HomeHome />
        <HomeSkills />
        <HomeProjects />
        <HomeContact />
      </main>
      <Footer />
      
      {/* Sélecteur de background */}
      <aside className="fixed bottom-6 left-6 z-50">
        {showBackgroundSelector && (
          <section className={`bg-gray-800 rounded-lg p-2 mb-2 shadow-lg ${menuAnimation}`} role="menu" aria-label="Options de fond d'écran">
            {backgrounds.map((bg) => (
              <button
                key={bg.name}
                onClick={() => changeBackground(bg.class)}
                className={`block w-full text-left px-3 py-2 rounded ${
                  background === bg.class ? 'bg-gray-700' : 'hover:bg-gray-700'
                }`}
                role="menuitem"
                aria-pressed={background === bg.class}
              >
                {bg.name}
              </button>
            ))}
          </section>
        )}
        <button
          onClick={toggleBackgroundSelector}
          className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full shadow-lg border-2 border-transparent hover:border-cyan-400 transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-cyan-400/20"
          aria-expanded={showBackgroundSelector}
          aria-label="Changer le fond d'écran"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
          </svg>
        </button>
      </aside>
    </div>
  );
};

export default Home;