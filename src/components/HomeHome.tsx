import React from 'react';

const HomeHome: React.FC = () => {
  return (
    <div id="home" className="pt-16">
      <div className="flex items-center mb-4 text-xl">
        <span className="text-xl mr-2 text-slate-400">$ </span>
        <span className="text-xl font-bold text-cyan-400">cd Home</span>
      </div>
      <div className="border border-slate-400 p-6 mb-8 rounded-md hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_10px_rgba(34,211,238,0.2)]">
        <h1 className="text-4xl font-bold mb-2 text-amber-400">JOHN_DOE <span className="text-2xl">👨‍💻</span></h1>
        <p className="text-xl text-slate-300">&gt; Développeur Fullstack</p>
      </div>
      
      <div className="mt-16">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-2 text-slate-400">$ </span>
          <span className="text-2xl font-bold text-cyan-400">cat about-me.txt</span>
        </div>
        <div className="border border-slate-400 p-6 mb-8 rounded-md hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_10px_rgba(34,211,238,0.2)]">
          <div className="pl-4 border-l-2 border-slate-400">
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. <span className="text-amber-400">✨</span>
            </p>
            <p>
              Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHome;
