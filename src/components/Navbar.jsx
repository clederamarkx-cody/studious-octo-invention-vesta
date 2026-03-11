import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="fixed top-0 left-0 w-full max-md:h-[60px] h-[110px] z-50 max-md:backdrop-blur-xl bg-transparent">
      <div className="flex items-center justify-between max-w-[90%] mx-auto h-full">
        <div>
          <a href="/">
            <div className="font-bold text-2xl tracking-tight text-white flex items-center gap-2">
               {/* Simplified Logo representation */}
               <div className="w-8 h-8 rounded bg-blue-500"></div>
               Vesta
            </div>
          </a>
        </div>
        
        {/* Desktop Nav */}
        <div id="nav" className="text-sm text-white/80 hidden md:flex max-w-xs w-full items-center justify-between px-2 gap-4 rounded-full h-[60px] bg-slate-900/30 backdrop-blur-md border border-white/10 relative">
          

          <a 
            className={`transition-all z-10 px-4 py-2 text-center flex-1 outline-none focus:outline-none ${activeTab === 'home' ? 'font-semibold text-white' : 'font-normal text-white/80 hover:text-white'}`} 
            href="#hero"
            onClick={() => setActiveTab('home')}
          >
            Home
          </a>
          <a 
            className={`transition-all z-10 px-4 py-2 text-center flex-1 outline-none focus:outline-none ${activeTab === 'about' ? 'font-semibold text-white' : 'font-normal text-white/80 hover:text-white'}`} 
            href="#about"
            onClick={() => setActiveTab('about')}
          >
            About
          </a>
          <a 
            className={`transition-all z-10 px-4 py-2 text-center flex-1 outline-none focus:outline-none ${activeTab === 'projects' ? 'font-semibold text-white' : 'font-normal text-white/80 hover:text-white'}`} 
            href="#projects"
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </a>
        </div>
        
        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#onboarding">
            <button className="bg-white cursor-pointer text-black flex justify-center items-center gap-2 rounded-full py-3 px-4 hover:bg-white/90 transition-all duration-300 font-medium text-sm">
              Get Started
            </button>
          </a>
        </div>
        
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            className="text-white text-5xl cursor-pointer p-2" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <div 
        className={`md:hidden absolute top-[60px] left-0 w-full bg-slate-900/95 backdrop-blur-xl border-b border-white/10 p-4 flex flex-col gap-4 shadow-xl transition-all duration-300 origin-top overflow-hidden ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}
      >
           <a className="transition-all font-semibold text-white p-2" href="#hero" onClick={() => setIsOpen(false)}>Home</a>
           <a className="transition-all font-normal text-white/80 hover:text-white p-2" href="#about" onClick={() => setIsOpen(false)}>About</a>
             <a className="transition-all font-normal text-white/80 hover:text-white p-2" href="#projects" onClick={() => setIsOpen(false)}>Our Projects</a>
           <a href="#onboarding" className="mt-2" onClick={() => setIsOpen(false)}>
            <button className="bg-white w-full cursor-pointer text-black flex justify-center items-center gap-2 rounded-full py-3 px-4 hover:bg-white/90 transition-all duration-300 font-medium text-sm">
              Get Started
            </button>
          </a>
      </div>
    </div>
  );
};

export default Navbar;
