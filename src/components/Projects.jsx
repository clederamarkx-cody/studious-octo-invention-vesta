import React from 'react';
import { Layers } from 'lucide-react';

const projects = [
  { name: 'Safety Pro', desc: 'Financing the Road to Ownership' },
  { name: 'Safety Pro', desc: 'Fashion Meets Function' },
  { name: 'Safety Pro', desc: 'Scalable Income' },
  { name: 'Safety Pro', desc: 'Streetwear Meets System' }
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 bg-slate-950 relative overflow-hidden">
        {/* Subtle top gradient */}
       <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-900 to-transparent z-0"></div>
       
      <div className="w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-0">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
             <div className="bg-slate-800 p-3 rounded-xl inline-block">
                <Layers className="text-white" size={32} />
             </div>
             <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">Our Projects</h2>
          </div>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            From startups to enterprise, we’ve launched platforms that transformed operations, accelerated sales, and unlocked growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 aspect-[4/3] sm:aspect-square lg:aspect-[4/5] hover:border-blue-500/50 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
               {/* Image Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-slate-800 group-hover:scale-105 transition-transform duration-500">
                  <span className="text-slate-600 font-medium">Project Image</span>
              </div>
              <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
                <p className="text-sm text-gray-300">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
