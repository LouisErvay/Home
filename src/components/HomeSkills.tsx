import React from 'react';

const HomeSkills: React.FC = () => {
  return (
    <div id="skills" className="mt-16 scroll-mt-16">
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-2 text-slate-400">$ </span>
        <span className="text-2xl text-cyan-400">cd ../Skills</span>
      </div>
      <div className="border border-teal-700 p-6 mb-8 rounded-md">
        <div className="space-y-3">
          <div className="border-b border-teal-700 py-2">
            <span className="text-amber-400 opacity-90">React.js</span>
          </div>
          <div className="border-b border-teal-700 py-2">
            <span className="text-amber-400 opacity-90">JavaScript</span>
          </div>
          <div className="border-b border-teal-700 py-2">
            <span className="text-amber-400 opacity-90">TypeScript</span>
          </div>
          <div className="border-b border-teal-700 py-2">
            <span className="text-amber-400 opacity-90">Node.js</span>
          </div>
          <div className="border-b border-teal-700 py-2">
            <span className="text-amber-400 opacity-90">TailwindCSS</span>
          </div>
          <div className="py-2">
            <span className="text-amber-400 opacity-90">Git</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSkills;
