import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="relative bg-slate-950">
      {/* Background with Grid */}
      <div className="absolute inset-x-0 bottom-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(255,255,255,0.05),transparent)] pointer-events-none z-0"></div>
      </div>
      
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 min-h-screen flex flex-col justify-center">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
          
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] leading-tight mb-8">
            <span className="block">Build a System Engineered</span>
            <span className="block">by the Minds Behind</span>
            <span className="glow-sweep block mt-2">9-Figure Growth</span>
          </h1>
          
          <p className="max-w-2xl mx-auto mt-4 text-base sm:text-lg text-gray-400 mb-8 md:mb-12">
            Built For Business Owners, Founders, and Entrepreneurs
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a href="#contact" className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base font-semibold text-black transition-all duration-200 bg-white border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white pump-infinite hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.4)]">
              Scale Me Up
            </a>
          </div>

          {/* Abstract Interface Preview/Image container (Placeholder for the actual 'hero-02.png') */}
          <div className="mt-16 sm:mt-24 w-full max-w-lg mx-auto overflow-hidden rounded-2xl bg-white/5 border border-white/10 shadow-2xl backdrop-blur-sm lg:max-w-4xl aspect-[16/9] flex items-center justify-center">
             <div className="text-white/30 font-medium">Dashboard Interface Preview</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
