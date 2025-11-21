import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ICONS } from '../constants';
import { AppRoute } from '../types';
import AIPartner from './AIPartner';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isLanding = location.pathname === '/';
  const [isAIOpen, setIsAIOpen] = useState(false);

  const NavItem = ({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
          isActive 
            ? 'bg-gradient-to-r from-indigo-600/20 to-purple-600/20 text-white border border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.2)]' 
            : 'text-gray-400 hover:bg-white/5 hover:text-white'
        }`}
      >
        <span className={`transition-colors ${isActive ? 'text-indigo-400' : 'group-hover:text-indigo-400'}`}>
          {icon}
        </span>
        <span className="font-medium">{label}</span>
      </Link>
    );
  };

  if (isLanding) return <>{children}</>;

  return (
    <div className="flex h-screen bg-[#020617] overflow-hidden text-slate-100">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 flex flex-col bg-[#020617] relative z-10">
        <div className="p-6">
          <Link to={AppRoute.DASHBOARD} className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
              W
            </div>
            <span className="text-xl font-display font-bold tracking-tight text-white">
              Wholesale<span className="text-indigo-400">AI</span>
            </span>
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          <NavItem to={AppRoute.DASHBOARD} icon={ICONS.Dashboard} label="Dashboard" />
          <NavItem to={AppRoute.FEED} icon={ICONS.Feed} label="Deal Feed" />
          <NavItem to={AppRoute.NETWORK} icon={ICONS.Network} label="My Network" />
          <NavItem to={AppRoute.TOOLKIT} icon={ICONS.Toolkit} label="Toolkit" />
          <hr className="border-white/5 my-4" />
          <div className="px-4 py-2 text-xs font-mono text-gray-500 uppercase tracking-wider">Groups</div>
          <button className="flex w-full items-center gap-3 px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            Atlanta Wholesalers
          </button>
          <button className="flex w-full items-center gap-3 px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
            Texas SubTo Mastery
          </button>
        </nav>

        <div className="p-4 border-t border-white/5">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 border border-white/5">
            <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-sm font-bold">
              JD
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-white truncate">John Doe</div>
              <div className="text-xs text-gray-500">Pro Member</div>
            </div>
            <button className="text-gray-400 hover:text-white">{ICONS.Settings}</button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 relative overflow-hidden">
        {/* Top Bar */}
        <header className="h-16 border-b border-white/5 bg-[#020617]/80 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-20">
          <div className="flex-1 max-w-xl relative">
            <input 
              type="text" 
              placeholder="Search deals, buyers, or documents..." 
              className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 transition-all"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              {ICONS.Search}
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
              {ICONS.Bell}
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            {/* AI Toggle Button */}
            <button 
              onClick={() => setIsAIOpen(!isAIOpen)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isAIOpen 
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)] border border-indigo-400/50' 
                  : 'bg-white/5 text-indigo-300 hover:bg-white/10 border border-indigo-500/30'
              }`}
            >
              {ICONS.Sparkles}
              <span>AI Partner</span>
            </button>
          </div>
        </header>

        {/* Page Content Scrollable Area */}
        <div className="flex-1 overflow-y-auto scrollbar-thin p-8 relative">
          {children}
        </div>

        {/* Decorative Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] mix-blend-screen"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] mix-blend-screen"></div>
        </div>
      </main>

      {/* Persistent AI Sidebar */}
      <AIPartner isOpen={isAIOpen} toggle={() => setIsAIOpen(!isAIOpen)} />
    </div>
  );
};

export default Layout;
