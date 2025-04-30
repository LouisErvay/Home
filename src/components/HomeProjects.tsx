import React from 'react';

const HomeProjects: React.FC = () => {
  return (
    <div id="projects" className="mt-16 scroll-mt-16">
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-2 text-slate-400">$ </span>
        <span className="text-2xl text-cyan-400">cd ../Projects</span>
      </div>
      <div className="border border-teal-700 p-6 mb-8 rounded-md">
        <div className="space-y-6">
          <div className="border border-teal-700 p-4 rounded-sm hover:bg-slate-800 transition">
            <h3 className="text-xl font-bold text-amber-400 opacity-90 mb-2">Projet_Alpha <span>🚀</span></h3>
            <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
            <div className="flex flex-wrap gap-2">
              <span className="border border-teal-700 px-2 py-1 rounded-sm text-slate-300">React</span>
              <span className="border border-teal-700 px-2 py-1 rounded-sm text-slate-300">Node.js</span>
              <span className="border border-teal-700 px-2 py-1 rounded-sm text-slate-300">MongoDB</span>
            </div>
          </div>
          <div className="border border-teal-700 p-4 rounded-sm hover:bg-slate-800 transition">
            <h3 className="text-xl font-bold text-amber-400 opacity-90 mb-2">Projet_Beta <span>🔍</span></h3>
            <p className="mb-3">Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis.</p>
            <div className="flex flex-wrap gap-2">
              <span className="border border-teal-700 px-2 py-1 rounded-sm text-slate-300">TypeScript</span>
              <span className="border border-teal-700 px-2 py-1 rounded-sm text-slate-300">Next.js</span>
              <span className="border border-teal-700 px-2 py-1 rounded-sm text-slate-300">PostgreSQL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProjects;
