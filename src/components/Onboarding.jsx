import React from 'react';
import { FileSearch, Map, Terminal, ShieldCheck, Rocket } from 'lucide-react';

const steps = [
  { num: '1', title: 'Data Gathering', desc: 'Start with your project', icon: FileSearch },
  { num: '2', title: 'Planning', desc: 'Map out your journey', icon: Map },
  { num: '3', title: 'Development', desc: 'Build your solution', icon: Terminal },
  { num: '4', title: 'Testing', desc: 'Ensure quality delivery', icon: ShieldCheck },
  { num: '5', title: 'Deployment', desc: 'Launch to production', icon: Rocket }
];

const Onboarding = () => {
  return (
    <section id="onboarding" className="py-12 relative bg-slate-950 border-t border-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none z-0"></div>
        
      <div className="w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl mb-4">Our Onboarding Process</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            Our approach is simple: listen deeply, design smart, build fast. Here’s how we bring your vision to life with clarity and care.
          </p>
        </div>

        {/* Process Cards */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch gap-4 lg:gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="flex-1 min-w-[200px] max-w-full sm:max-w-[250px] bg-gradient-to-bl from-slate-800 via-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-6 min-h-[220px] flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 shadow-xl">
                <div className="w-12 h-12 rounded-lg bg-slate-800/80 flex items-center justify-center mb-4 border border-slate-700">
                   <Icon size={24} className="text-slate-300" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-1">{step.num}. {step.title}</h3>
                  <p className="text-sm text-gray-400">{step.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
            <button className="bg-white text-black font-medium py-3 px-8 rounded-full hover:bg-gray-100 transition-colors inline-block">
                Get Started
            </button>
        </div>

      </div>
    </section>
  );
};

export default Onboarding;
