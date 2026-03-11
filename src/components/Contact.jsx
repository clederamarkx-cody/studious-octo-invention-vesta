import React from 'react';
import { Send, Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative bg-slate-950 overflow-hidden border-t border-slate-800">
      
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Side: Copy & Info */}
            <div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
                    Ready to build your <span className="text-slate-400">unfair advantage?</span>
                </h2>
                <p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
                    Stop competing on features and start competing on infrastructure. Let's engineer a system that makes your business impossible to catch.
                </p>
                
                <div className="space-y-6">
                    <div className="flex items-center gap-4 border border-slate-800 bg-slate-900/50 p-4 rounded-2xl max-w-md">
                        <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
                           <Mail className="text-slate-300" size={20} />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-400 mb-1">Direct Email</p>
                            <a href="mailto:hello@vestainc.com" className="text-white hover:text-slate-300 transition-colors font-medium">hello@vestainc.com</a>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 border border-slate-800 bg-slate-900/50 p-4 rounded-2xl max-w-md">
                        <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
                           <MessageSquare className="text-slate-300" size={20} />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-400 mb-1">Support & Consults</p>
                            <p className="text-white font-medium">Average reply in <span className="text-slate-300">&lt; 2 hours</span></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="relative">
                {/* Decorative glow backing */}
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-800 to-slate-900 rounded-3xl transform rotate-2 z-0 opacity-50"></div>
                
                <form className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 relative z-10 shadow-2xl" onSubmit={(e) => e.preventDefault()}>
                    <h3 className="text-2xl font-semibold text-white mb-8">Let's discuss your system.</h3>
                    
                    <div className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">First Name</label>
                                <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-slate-500 transition-colors" placeholder="John" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Company Name</label>
                                <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-slate-500 transition-colors" placeholder="Acme Corp" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-400">Work Email</label>
                            <input type="email" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-slate-500 transition-colors" placeholder="john@company.com" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-400">Project Overview</label>
                            <textarea rows="4" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-slate-500 transition-colors resize-none" placeholder="Tell us about the bottlenecks you want to solve..."></textarea>
                        </div>

                        <button type="submit" className="w-full bg-white text-black font-semibold rounded-xl py-4 px-6 hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 mt-4">
                            <span>Submit Request</span>
                            <Send size={18} />
                        </button>
                    </div>
                    <p className="text-xs text-slate-500 text-center mt-6">Your data is completely secure. We only use this to schedule your demo.</p>
                </form>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
