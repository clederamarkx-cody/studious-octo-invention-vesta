import React from 'react';
import { Target } from 'lucide-react';

const logos = [
  { name: 'Logo 1', text: 'Brand A' },
  { name: 'Logo 2', text: 'Brand B' },
  { name: 'Logo 3', text: 'Brand C' },
  { name: 'Logo 4', text: 'Brand D' },
  { name: 'Logo 5', text: 'Brand E' },
  { name: 'Logo 6', text: 'Brand F' },
  { name: 'Logo 7', text: 'Brand G' }
];

const Partners = () => {
  return (
    <section id="partners" className="py-12 relative bg-slate-950 overflow-hidden border-t border-slate-800">
       <div className="w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
          
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
             <div className="bg-slate-800 p-4 rounded-full inline-block shadow-[0_0_20px_5px_rgba(30,41,59,0.5)]">
                <Target className="text-white" size={32} />
             </div>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white mb-4 sm:text-4xl md:text-5xl">Vesta’s Partner Network</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-400">
            Trusted by disruptive startups, scaling brands, and serious founders. These are the companies we’ve built with — and grown with.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative flex overflow-hidden py-10 fade-edges">
            {/* We duplicate the content to ensure a seamless infinite loop */}
            <div className="flex whitespace-nowrap animate-marquee items-center">
              {[...logos, ...logos].map((logo, idx) => (
                <div key={idx} className="mx-8 sm:mx-12 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center font-bold text-slate-400">
                     {logo.name.split(' ')[1]}
                  </div>
                </div>
              ))}
            </div>
             {/* Duplicate again for the true infinite scroll feel on wide screens */}
            <div className="flex whitespace-nowrap animate-marquee items-center absolute top-10 left-full">
              {[...logos, ...logos].map((logo, idx) => (
                <div key={idx} className="mx-8 sm:mx-12 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center font-bold text-slate-400">
                     {logo.name.split(' ')[1]}
                  </div>
                </div>
              ))}
            </div>
        </div>

        {/* Bottom Banner CTA */}
        <div className="mt-24 w-full bg-gradient-to-b from-slate-800 to-slate-900 rounded-3xl p-10 sm:p-16 flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent)] pointer-events-none"></div>
            
            <Target className="text-white mb-6" size={48} />
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-light mb-4 tracking-tight">
               You're About to Build a System That Wins
            </h2>
            <p className="text-xl text-[#ffffff80] mb-8 max-w-2xl leading-relaxed">
               While they scramble, you'll systematize.<br />That's how you win every time.
            </p>
            
            <a href="#contact" className="bg-white text-black font-medium py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 pump-infinite hover:shadow-[0_0_20px_5px_rgba(255,255,255,0.3)] z-10">
               Book Your Free Demo Call
            </a>
        </div>

       </div>
       {/* CSS trick to fade the edges of the marquee container */}
       <style dangerouslySetInnerHTML={{__html: `
         .fade-edges {
           mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
           -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
         }
       `}} />
    </section>
  );
};

export default Partners;
