import React, { useState, useEffect } from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import HomeHome from '../components/HomeHome';
import HomeSkills from '../components/HomeSkills';
import HomeProjects from '../components/HomeProjects';
import HomeContact from '../components/HomeContact';
import BackgroundSelector from '../components/BackgroundSelector';

const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [background, setBackground] = useState<string>('bg-dots-wave');

  const updateActiveSection = () => {
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
    <div className={`min-h-screen ${background} text-slate-400 overflow-x-hidden w-full`}>
      {background === 'bg-dots-wave' && <div className="dots-layer" aria-hidden="true"></div>}
      <Menu activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="max-w-[1200px] mx-auto px-4 flex-grow w-full text-sm leading-relaxed" role="main">
        <HomeHome />
        <HomeSkills />
        <HomeProjects />
        <HomeContact />
        
        {/* Contenu SEO invisible pour améliorer le référencement */}
        <section className="sr-only" aria-hidden="true">
          <h2>Expertise Technique</h2>
          <p>
            Portfolio Louis ERVAY développeur backend full-stack Java Spring Boot Python Django JPA Hibernate 
            API REST microservices React TypeScript JavaScript HTML CSS Tailwind Git Docker CI/CD 
            développement web applications entreprise alternance master informatique concepteur développeur applications
            formation professionnelle expérience ERP base de données SQL MySQL PostgreSQL SQLite
            tests unitaires JUnit Mockito Jest gestion projet agile scrum développeur junior senior
            stage emploi CDI alternance contrat professionnalisation développement logiciel
          </p>
        </section>
      </main>
      <Footer />
      
      <BackgroundSelector background={background} setBackground={setBackground} />
    </div>
  );
};

export default Home;