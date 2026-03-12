import React from 'react';
import { Activity, Users, DollarSign, TrendingUp, BarChart2, Shield, Zap } from 'lucide-react';

const DashboardMockup = () => {
  return (
    <div className="w-full h-full bg-slate-950 rounded-2xl flex flex-col font-sans overflow-hidden border border-slate-800/80 relative">
      
      {/* Abstract Background Glow inside the Mockup */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none z-0"></div>

      {/* Top Navigation Bar */}
      <div className="h-12 border-b border-white/5 flex items-center justify-between px-4 bg-slate-900/50 backdrop-blur-md z-10">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
          </div>
          <div className="w-px h-4 bg-slate-800 mx-2"></div>
          <div className="h-4 w-24 bg-slate-800 rounded animate-pulse"></div>
        </div>
        <div className="flex items-center gap-3">
          <Shield size={14} className="text-slate-500" />
          <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700"></div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex p-4 sm:p-6 gap-6 z-10">
        
        {/* Sidebar (Hidden on very small screens) */}
        <div className="hidden sm:flex flex-col gap-3 w-48 border-r border-white/5 pr-6">
          <div className="h-2 w-16 bg-slate-800 rounded mb-4"></div>
          {[Activity, Users, DollarSign, BarChart2, Zap].map((Icon, i) => (
            <div key={i} className={`flex items-center gap-3 p-2 rounded-lg ${i === 0 ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'text-slate-500 hover:bg-slate-800/50 hover:text-slate-300'} transition-colors`}>
              <Icon size={16} />
              <div className={`h-1.5 w-16 rounded ${i === 0 ? 'bg-blue-400/50' : 'bg-slate-700'}`}></div>
            </div>
          ))}
        </div>

        {/* Dashboard Canvas */}
        <div className="flex-1 flex flex-col gap-6">
          
          {/* Header */}
          <div className="flex justify-between items-end">
             <div>
                <div className="h-2 w-20 bg-slate-600 rounded mb-2"></div>
                <div className="h-6 w-40 bg-white rounded"></div>
             </div>
             <div className="h-8 w-24 bg-slate-800 rounded-lg border border-slate-700"></div>
          </div>

          {/* Top Stat Cards */}
          <div className="grid grid-cols-3 gap-4">
             {[
               { icon: DollarSign, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
               { icon: Users, color: 'text-blue-400', bg: 'bg-blue-400/10' },
               { icon: TrendingUp, color: 'text-indigo-400', bg: 'bg-indigo-400/10' }
             ].map((stat, i) => (
               <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 flex flex-col gap-3 hover:-translate-y-1 transition-transform duration-300">
                  <div className={`w-8 h-8 rounded-lg ${stat.bg} flex items-center justify-center`}>
                    <stat.icon size={16} className={stat.color} />
                  </div>
                  <div>
                    <div className="h-4 w-16 bg-white rounded mb-1.5"></div>
                    <div className="h-2 w-10 bg-slate-600 rounded"></div>
                  </div>
               </div>
             ))}
          </div>

          {/* Main Chart Area */}
          <div className="flex-1 bg-slate-900/50 border border-slate-800 rounded-xl p-4 sm:p-6 flex flex-col">
             <div className="flex justify-between items-center mb-6">
               <div className="h-3 w-24 bg-slate-600 rounded"></div>
               <div className="flex gap-2">
                 <div className="h-2 w-8 bg-slate-700 rounded"></div>
                 <div className="h-2 w-8 bg-blue-500 rounded"></div>
               </div>
             </div>
             
             {/* Fake Bar Chart */}
             <div className="flex-1 flex items-end justify-between gap-2 sm:gap-4 pt-4 border-b border-slate-800 pb-2">
                {[40, 70, 45, 90, 65, 100, 85].map((height, i) => (
                   <div key={i} className="w-full flex flex-col justify-end items-center gap-2 group cursor-pointer">
                      <div 
                        className={`w-full rounded-t-md transition-all duration-700 ${i === 5 ? 'bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]' : 'bg-slate-700 group-hover:bg-slate-500'}`}
                        style={{ height: `${height}%` }}
                      ></div>
                   </div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DashboardMockup;
