import React, { useState, useEffect } from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import HomeHome from '../components/HomeHome';
import HomeSkills from '../components/HomeSkills';
import HomeProjects from '../components/HomeProjects';
import HomeContact from '../components/HomeContact';

const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

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

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 overflow-x-hidden w-full">
      <Menu activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="max-w-[1200px] mx-auto px-4 flex-grow w-full text-sm leading-relaxed">
        <HomeHome />
        <HomeSkills />
        <HomeProjects />
        <HomeContact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;