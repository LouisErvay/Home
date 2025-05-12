import React from 'react';

const HomeSkills: React.FC = () => {
  return (
    <div id="skills" className="mt-16 scroll-mt-16">
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-2 text-slate-400">$ </span>
        <span className="text-2xl font-bold text-cyan-400">cd ../Skills</span>
      </div>
      <div className="border border-slate-400 p-6 mb-8 rounded-md hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_10px_rgba(34,211,238,0.2)]">
        <div className="space-y-3">
          <div className="border-b border-slate-400 py-2">
            <span className="text-amber-400">React.js</span>
          </div>
          <div className="border-b border-slate-400 py-2">
            <span className="text-amber-400">JavaScript</span>
          </div>
          <div className="border-b border-slate-400 py-2">
            <span className="text-amber-400">TypeScript</span>
          </div>
          <div className="border-b border-slate-400 py-2">
            <span className="text-amber-400">Node.js</span>
          </div>
          <div className="border-b border-slate-400 py-2">
            <span className="text-amber-400">TailwindCSS</span>
          </div>
          <div className="py-2">
            <span className="text-amber-400">Git</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSkills;
