import React from 'react';

const HomeHome: React.FC = () => {
  return (
    <div id="home" className="pt-16">
      <div className="flex items-center mb-4 text-xl">
        <span className="text-xl mr-2 text-slate-400">$ </span>
        <span className="text-xl text-cyan-400">cd Home</span>
      </div>
      <div className="border border-teal-700 p-6 mb-8 rounded-md">
        <h1 className="text-4xl font-bold mb-2 text-cyan-400">JOHN_DOE <span className="text-2xl">👨‍💻</span></h1>
        <p className="text-xl text-slate-300">&gt; Développeur Fullstack</p>
      </div>
      
      <div className="mt-16">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-2 text-slate-400">$ </span>
          <span className="text-2xl text-cyan-400">cat about-me.txt</span>
        </div>
        <div className="border border-teal-700 p-6 mb-8 rounded-md">
          <div className="pl-4 border-l-2 border-teal-700">
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
