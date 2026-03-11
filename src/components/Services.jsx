import React from 'react';
import { Settings } from 'lucide-react';

const services = [
  { title: 'Custom System Development', desc: 'We build tailored software solutions from scratch, built around your unique business processes — no templates, no limitations.' },
  { title: 'Admin Dashboards & CRM Systems', desc: 'Gain full control over your business with powerful dashboards, customer databases, analytics, and permission-based access.' },
  { title: 'Mobile App & Web App Development', desc: 'We design and develop sleek, scalable apps for iOS, Android, and web — fully custom, user-friendly, and built to grow.' },
  { title: 'E-commerce / Online Store Systems', desc: 'Launch a fully functional e-commerce store with seamless cart checkout, secure payment gateways, and upsell tools.' }
];

const Services = () => {
  return (
    <section id="services" className="py-12 relative bg-slate-950 overflow-hidden">
        {/* Abstract Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 opacity-80 z-0"></div>
        
      <div className="w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
           <div className="flex items-center justify-center gap-3 mb-4">
             <div className="bg-slate-800 p-3 rounded-xl inline-block">
                <Settings className="text-white" size={32} />
             </div>
             <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">Our Services</h2>
          </div>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            Explore the full stack of what we build — from custom systems to full-scale automation. Designed to solve real business problems.
          </p>
        </div>

        {/* Zig-Zag Services Layout */}
        <div className="flex flex-col gap-20 lg:gap-32 mt-16">
          {services.map((service, idx) => {
            const isEven = idx % 2 === 0;
            return (
                <div key={idx} className={`flex flex-col gap-10 lg:gap-16 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    
                    {/* Text Content */}
                    <div className="flex-1 space-y-6 text-center lg:text-left">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 mb-2">
                             <span className="text-xl font-bold text-slate-300">0{idx + 1}</span>
                        </div>
                        <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">{service.title}</h3>
                        <p className="text-lg text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                            {service.desc}
                        </p>
                        <ul className="space-y-3 pt-4 text-left max-w-sm mx-auto lg:mx-0">
                           <li className="flex items-start gap-3 text-slate-300">
                             <div className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2"></div>
                             <span>Custom architecture designed for your use case</span>
                           </li>
                           <li className="flex items-start gap-3 text-slate-300">
                             <div className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2"></div>
                             <span>Secure, scalable, and fully owned by you</span>
                           </li>
                        </ul>
                    </div>

                    {/* Image / Visual Content */}
                    <div className="flex-1 w-full max-w-2xl">
                        <div className="aspect-[4/3] rounded-3xl bg-slate-900 border border-slate-800 p-2 relative group overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-transparent z-0"></div>
                            
                            {/* Inner Mockup Image Placeholder */}
                            <div className="w-full h-full bg-slate-950 rounded-2xl border border-slate-800/80 relative z-10 flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-x-0 top-0 h-10 border-b border-slate-800 flex items-center px-4 gap-2 bg-slate-900/50">
                                   <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                                   <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                                   <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                                </div>
                                
                                {/* Placeholder Graphic */}
                                <div className="flex flex-col items-center justify-center text-slate-600 transition-transform duration-700 group-hover:scale-105">
                                    <Settings size={48} className="mb-4 opacity-50" />
                                    <span className="font-medium tracking-widest text-sm uppercase">Interface Preview</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
