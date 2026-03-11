import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-16 px-4 border-t border-slate-800">
      <div className="max-w-7xl mx-auto bg-slate-900 rounded-3xl p-8 sm:p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8">
          
          {/* Brand Column */}
          <div className="flex flex-col items-start gap-4">
            <div className="w-8 h-8 rounded bg-slate-200 mb-2"></div>
            <span className="text-white font-bold text-xl tracking-tight">Vesta</span>
          </div>

          {/* Links 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Menu</h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Our Portfolio</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Platform</h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li><a href="#onboarding" className="hover:text-white transition-colors">The Process</a></li>
              <li><a href="#partners" className="hover:text-white transition-colors">Our Network</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Sales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Links 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Social</h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter (X)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6">
          <a href="#contact" className="bg-slate-800 text-white py-4 px-8 rounded-full text-center hover:bg-slate-700 transition-all font-medium text-sm w-full sm:w-auto">
            Send Us Message
          </a>
          
          <div className="flex gap-4">
             {/* Social placeholders, mapping the original svg layout conceptually */}
            <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-slate-700 transition-all">
              <span className="text-white flex items-center justify-center font-bold">T</span>
            </a>
            <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-slate-700 transition-all text-white">
              <Twitter size={20} />
            </a>
            <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-slate-700 transition-all text-white">
              <Facebook size={20} />
            </a>
            <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-slate-700 transition-all text-white">
              <Instagram size={20} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
