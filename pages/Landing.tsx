import React from 'react';
import { Link } from 'react-router-dom';
import { ICONS } from '../constants';
import { AppRoute } from '../types';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#020617]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">W</div>
            <span className="text-xl font-display font-bold">Wholesale<span className="text-indigo-400">AI</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-300 font-medium">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#network" className="hover:text-white transition-colors">Network</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-4">
            <Link to={AppRoute.LOGIN} className="text-sm text-gray-300 hover:text-white">Log in</Link>
            <Link 
              to={AppRoute.DASHBOARD} 
              className="px-5 py-2 rounded-full bg-white text-black text-sm font-bold hover:scale-105 transition-transform"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-full blur-[120px] animate-pulse-slow -z-10"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            v2.0 Now Live: Gemini 3 Pro Integration
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-400">
            Close More Deals With AI<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">That Works Harder Than You.</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            The only real estate platform with a built-in JV partner powered by Gemini. Analyze creative finance deals, generate contracts, and find cash buyers in seconds.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to={AppRoute.DASHBOARD}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg shadow-[0_0_30px_rgba(79,70,229,0.4)] hover:shadow-[0_0_50px_rgba(79,70,229,0.6)] hover:scale-105 transition-all flex items-center gap-2"
            >
              Get Started Free {ICONS.ArrowRight}
            </Link>
            <button className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-colors flex items-center gap-2">
              {ICONS.Play} Watch Demo
            </button>
          </div>
        </div>

        {/* 3D Card Tilt Effect Wrapper would go here, simplifying to static futuristic image for code block limitations */}
        <div className="mt-24 max-w-6xl mx-auto relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-30"></div>
          <div className="relative rounded-2xl bg-[#0f172a] border border-white/10 shadow-2xl overflow-hidden">
            <img 
              src="https://picsum.photos/1200/700" 
              alt="Dashboard Preview" 
              className="w-full opacity-80 mix-blend-lighten hover:opacity-100 transition-opacity duration-700"
            />
            {/* Overlay UI Elements mocking the AI functionality */}
            <div className="absolute top-10 right-10 w-80 bg-black/80 backdrop-blur-xl border border-indigo-500/30 rounded-xl p-4 shadow-2xl transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500 hidden md:block">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center">{ICONS.Sparkles}</div>
                <div className="text-sm font-bold">DealBot Analysis</div>
              </div>
              <div className="space-y-2 text-xs text-gray-300">
                <div className="flex justify-between"><span>ARV:</span> <span className="text-white font-mono">$450,000</span></div>
                <div className="flex justify-between"><span>Repairs:</span> <span className="text-white font-mono">$45,000</span></div>
                <div className="flex justify-between"><span>MAO:</span> <span className="text-emerald-400 font-bold font-mono">$270,000</span></div>
                <div className="h-1 w-full bg-gray-700 rounded-full mt-2"><div className="h-1 w-[70%] bg-emerald-500 rounded-full"></div></div>
                <p className="mt-2 text-white">"This is a solid SubTo candidate. 3.2% interest rate is assumed based on mortgage history."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-32 px-6 relative bg-[#020617]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">{ICONS.AI}</div>
              <h3 className="text-2xl font-display font-bold mb-3">AI JV Partner</h3>
              <p className="text-gray-400 leading-relaxed">Powered by Gemini 3 Pro. It drafts contracts, negotiates with sellers via script, and analyzes deals 24/7.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">{ICONS.Network}</div>
              <h3 className="text-2xl font-display font-bold mb-3">Nationwide Buyers</h3>
              <p className="text-gray-400 leading-relaxed">Instant access to 50,000+ verified cash buyers. Filter by buy-box, creative finance friendly, and more.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">{ICONS.Toolkit}</div>
              <h3 className="text-2xl font-display font-bold mb-3">Creative Toolkit</h3>
              <p className="text-gray-400 leading-relaxed">Calculators for Subject-To, Seller Finance, and Novations. Generate compliant legal docs in one click.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 px-6 border-t border-white/5 relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-center mb-16">Simple Pricing for Serious Wholesalers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Starter', price: 'Free', features: ['3 Deal Analyses/day', 'Basic Contracts', 'Public Feed Access'] },
              { name: 'Pro', price: '$97', period: '/mo', features: ['Unlimited AI Analysis', 'Advanced Creative Docs', 'Buyer Matching', 'Priority Support'], highlight: true },
              { name: 'Elite', price: '$297', period: '/mo', features: ['White Glove Setup', 'Private Mastermind', 'Direct API Access', 'Team Accounts (up to 5)'] }
            ].map((tier, i) => (
              <div key={i} className={`rounded-3xl p-8 border flex flex-col ${tier.highlight ? 'bg-white/10 border-indigo-500 ring-2 ring-indigo-500/20' : 'bg-white/5 border-white/5'}`}>
                <h3 className="font-display font-bold text-xl mb-2">{tier.name}</h3>
                <div className="flex items-end gap-1 mb-8">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-gray-400 text-sm mb-1">{tier.period}</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-gray-300">
                      <span className={`text-emerald-400`}>{ICONS.Check}</span> {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-bold transition-colors ${tier.highlight ? 'bg-indigo-600 hover:bg-indigo-500 text-white' : 'bg-white text-black hover:bg-gray-200'}`}>
                  Choose {tier.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <footer className="py-12 border-t border-white/5 text-center text-gray-500 text-sm">
        <p>© 2025 WholesaleAI Inc. Built with Gemini.</p>
      </footer>
    </div>
  );
};

export default Landing;