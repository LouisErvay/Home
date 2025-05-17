import React, { useState } from 'react';

interface BackgroundSelectorProps {
  background: string;
  setBackground: (bg: string) => void;
}

const BackgroundSelector: React.FC<BackgroundSelectorProps> = ({ background, setBackground }) => {
  const [showBackgroundSelector, setShowBackgroundSelector] = useState<boolean>(false);
  const [menuAnimation, setMenuAnimation] = useState<string>('');

  const backgrounds = [
    { name: 'Base', class: 'bg-dots-wave' },
    { name: 'Clear', class: 'bg-clear' },
  ];

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
  );
};

export default BackgroundSelector;
