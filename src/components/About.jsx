import React from 'react';
import { Target, TrendingUp, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative bg-slate-950 overflow-hidden border-t border-white/5">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full point-events-none translate-x-1/2 -translate-y-1/2 z-0"></div>
      <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full point-events-none -translate-x-1/2 z-0"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 blur-[150px] rounded-full point-events-none -translate-x-1/2 translate-y-1/2 z-0"></div>

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20 items-center">
            <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-semibold mb-6 shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all hover:bg-blue-500/20">
                    <Target size={16} />
                    <span>Who We Are</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                    We engineer <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-white">digital leverage</span> for disruptive brands.
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-xl">
                    Vesta isn't just an agency. We are a team of system architects and software engineers dedicated to turning your manual business workflows into frictionless, scalable technology.
                </p>
                <a href="#projects" className="inline-block text-white font-medium border-b border-white/30 hover:border-white pb-1 transition-colors">
                    Explore Our Work &rarr;
                </a>
            </div>
            
            {/* Visual Stats / Grids */}
            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 rounded-3xl transform rotate-3 scale-105 z-0"></div>
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 relative z-10 shadow-2xl flex flex-col gap-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-black/30 p-6 rounded-2xl border border-white/5 flex flex-col gap-2">
                            <TrendingUp className="text-slate-400 mb-2" size={28} />
                            <span className="text-3xl font-bold text-white">40+</span>
                            <span className="text-sm text-gray-400 font-medium">Systems deployed</span>
                        </div>
                        <div className="bg-black/30 p-6 rounded-2xl border border-white/5 flex flex-col gap-2">
                            <Users className="text-slate-400 mb-2" size={28} />
                            <span className="text-3xl font-bold text-white">2.5M+</span>
                            <span className="text-sm text-gray-400 font-medium">Users managed</span>
                        </div>
                    </div>
                     <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 rounded-2xl flex items-center justify-between text-white border border-slate-600">
                        <div>
                            <span className="block text-2xl font-bold mb-1">99.9%</span>
                            <span className="text-slate-300 text-sm font-medium">Uptime Guarantee</span>
                        </div>
                        <Target size={32} className="opacity-80 text-slate-300" />
                    </div>
                </div>
            </div>
        </div>

        {/* Philosophy Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10 mb-16">
            <div>
                <h3 className="text-xl font-semibold text-white mb-3">01. Bespoke Strategy</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                    We don't do templates. Every platform is meticulously planned and engineered from the ground up to solve your specific operational bottlenecks.
                </p>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-white mb-3">02. Uncompromising Quality</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                    Clean code, scalable architecture, and pixel-perfect design. We build systems that perform reliably under pressure and look incredible doing it.
                </p>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-white mb-3">03. Long-term Partnership</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                    We aren't a launch-and-leave agency. We stay by your side to iterate, optimize, and scale your technology as your business dominates.
                </p>
            </div>
        </div>

        {/* Founder's Note / Authority Block */}
        <div className="mt-12 bg-slate-900/50 border border-slate-800 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row gap-8 items-center md:items-start relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 rounded-full bg-slate-800 border-2 border-slate-700 overflow-hidden flex items-center justify-center relative z-10 shadow-xl">
                 {/* Placeholder for Founder Image */}
                 <span className="text-slate-500 text-sm font-medium uppercase tracking-widest text-center px-2">Founder<br/>Photo</span>
            </div>

            <div className="flex-1 relative z-10 text-center md:text-left">
                <blockquote className="text-xl sm:text-2xl text-slate-300 font-medium leading-relaxed mb-6">
                    "We built Vesta because we were tired of seeing brilliant companies handcuffed by terrible software. We don't just write code—we engineer systems that make your business impossible to catch."
                </blockquote>
                <div>
                   <h4 className="text-lg font-bold text-white">Alex Founder</h4>
                   <p className="text-sm text-blue-400 font-medium">Head of Engineering & Systems</p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default About;
