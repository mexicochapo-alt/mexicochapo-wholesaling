
import React, { useState } from 'react';
import { ICONS, MOCK_DEALS } from '../constants';
import { Deal } from '../types';

const DealCard: React.FC<{ deal: Deal }> = ({ deal }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="glass-panel rounded-2xl overflow-hidden border border-white/5 shadow-xl animate-fade-in-up transition-all duration-300 hover:border-white/10">
      {/* Card Header */}
      <div className="p-4 flex items-center justify-between border-b border-white/5 bg-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-purple-500/20">
            {deal.postedBy.substring(0, 2).toUpperCase()}
          </div>
          <div>
            <p className="text-sm font-bold text-white flex items-center gap-2">
              {deal.postedBy}
              <span className="px-2 py-0.5 rounded-full bg-white/10 text-[10px] font-normal text-gray-400">PRO</span>
            </p>
            <p className="text-xs text-gray-400">{deal.postedAt} • {deal.city}, {deal.state}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${
          deal.financeType === 'Subject-To' ? 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20' :
          deal.financeType === 'Seller Finance' ? 'bg-purple-500/10 text-purple-300 border-purple-500/20' :
          deal.financeType === 'Novation' ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20' :
          'bg-blue-500/10 text-blue-300 border-blue-500/20'
        }`}>
          {deal.financeType}
        </span>
      </div>

      {/* Card Media */}
      <div className="relative h-64 bg-gray-900 group cursor-pointer overflow-hidden" onClick={() => setIsExpanded(!isExpanded)}>
        <img 
          src={deal.imageUrl} 
          alt="Property" 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90"></div>
        
        <div className="absolute bottom-4 left-4 z-10">
          <h3 className="text-2xl font-display font-bold text-white drop-shadow-lg flex items-center gap-2">
            ${deal.price.toLocaleString()}
          </h3>
          <p className="text-sm text-gray-300 flex items-center gap-1">
             Purchase Price
          </p>
        </div>
        
        <div className="absolute bottom-4 right-4 flex gap-2 z-10">
          <div className="glass-panel px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-md">
            <p className="text-[10px] text-gray-400 uppercase tracking-wide">ARV</p>
            <p className="text-sm font-bold text-white">${deal.arv.toLocaleString()}</p>
          </div>
          <div className="glass-panel px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-md bg-emerald-900/20 border-emerald-500/20">
            <p className="text-[10px] text-emerald-400 uppercase tracking-wide">Est. Profit</p>
            <p className="text-sm font-bold text-emerald-400">${(deal.arv - deal.price - deal.repairs).toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Collapsed Quick Stats */}
      <div className="p-4 grid grid-cols-2 gap-4 bg-[#020617]/30">
         <div className="col-span-2 flex justify-between text-sm text-gray-400 border-b border-white/5 pb-4 mb-2">
            <div className="flex items-center gap-1.5">
              <span className="text-indigo-400">{ICONS.Building}</span> 
              <span className="text-gray-300">{deal.type}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-orange-400">{ICONS.Toolkit}</span> 
              <span className="text-gray-300">Repairs: ${deal.repairs.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-400">{ICONS.Dollar}</span> 
              <span className="text-gray-300">Fee: ${deal.assignmentFee.toLocaleString()}</span>
            </div>
         </div>
      </div>

      {/* Expanded Details Section */}
      <div className={`overflow-hidden transition-all duration-500 ease-in-out bg-[#020617]/50 ${isExpanded ? 'max-h-[800px] opacity-100 border-t border-white/5' : 'max-h-0 opacity-0'}`}>
        <div className="p-5 space-y-6">
            {/* Property Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/5 rounded-xl p-3 text-center border border-white/5">
                    <div className="text-indigo-400 mb-1 flex justify-center">{ICONS.Bed}</div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Bedrooms</p>
                    <p className="font-display font-bold text-white text-lg">{deal.beds}</p>
                </div>
                <div className="bg-white/5 rounded-xl p-3 text-center border border-white/5">
                    <div className="text-indigo-400 mb-1 flex justify-center">{ICONS.Bath}</div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Bathrooms</p>
                    <p className="font-display font-bold text-white text-lg">{deal.baths}</p>
                </div>
                <div className="bg-white/5 rounded-xl p-3 text-center border border-white/5">
                    <div className="text-indigo-400 mb-1 flex justify-center">{ICONS.Sqft}</div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Sqft</p>
                    <p className="font-display font-bold text-white text-lg">{deal.sqft.toLocaleString()}</p>
                </div>
            </div>

            {/* Description */}
            <div>
                <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                   {ICONS.Check} Investor Notes
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed border-l-2 border-indigo-500/50 pl-4 italic">
                   "{deal.description}"
                </p>
            </div>

            {/* Repair Breakdown Mockup */}
            <div>
                <h4 className="text-sm font-bold text-white mb-3">Repair Breakdown Estimate</h4>
                <div className="space-y-2">
                    <div className="flex justify-between text-xs text-gray-400">
                        <span>Roof & Exterior</span>
                        <span>$12,500</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-1.5">
                        <div className="bg-indigo-500 h-1.5 rounded-full w-[30%]"></div>
                    </div>
                    
                    <div className="flex justify-between text-xs text-gray-400 mt-2">
                        <span>Interior (Kitchen/Bath)</span>
                        <span>${(deal.repairs - 12500).toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-1.5">
                        <div className="bg-purple-500 h-1.5 rounded-full w-[60%]"></div>
                    </div>
                </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-32 w-full bg-white/5 rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/-84.3880,33.7490,13,0/800x200@2x?access_token=YOUR_TOKEN')] bg-cover bg-center opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <button className="relative z-10 px-4 py-2 bg-black/80 backdrop-blur-md rounded-lg text-xs font-bold text-white border border-white/10 hover:bg-indigo-600 hover:border-indigo-500 transition-all">
                    View on Maps
                </button>
            </div>
        </div>
      </div>

      {/* Actions Footer */}
      <div className="p-4 bg-white/[0.02]">
         <div className="grid grid-cols-2 gap-3 mb-3">
             <button className="py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-bold uppercase tracking-wide transition-colors flex items-center justify-center gap-2 border border-white/5">
               {ICONS.Heart} Save
             </button>
             <button className="py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-bold uppercase tracking-wide transition-colors flex items-center justify-center gap-2 border border-white/5">
               {ICONS.Share} Share
             </button>
         </div>
         
         <div className="flex gap-3">
             <button 
               onClick={() => setIsExpanded(!isExpanded)}
               className={`flex-1 py-3 rounded-xl text-xs font-bold uppercase tracking-wide transition-all flex items-center justify-center gap-2 border ${
                 isExpanded 
                 ? 'bg-white/5 text-gray-400 border-white/5 hover:bg-white/10' 
                 : 'bg-indigo-600/10 text-indigo-400 border-indigo-500/30 hover:bg-indigo-600/20'
               }`}
             >
               {isExpanded ? (
                 <>Less Info {ICONS.ChevronUp}</>
               ) : (
                 <>View Deal Details {ICONS.ChevronDown}</>
               )}
             </button>
             <button className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wide shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2">
               Make Offer
             </button>
         </div>
      </div>
    </div>
  );
};

const DealFeed: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
            <h1 className="text-2xl font-bold font-display text-white">Live Deal Feed</h1>
            <p className="text-sm text-gray-400">Real-time off-market properties verified by AI.</p>
        </div>
        <div className="flex gap-2">
          <select className="bg-[#0f172a] border border-white/10 rounded-xl text-sm text-gray-300 px-4 py-2.5 focus:border-indigo-500 outline-none cursor-pointer hover:bg-white/5 transition-colors">
            <option>Nationwide</option>
            <option>My State (TX)</option>
            <option>Creative Only</option>
          </select>
          <button className="bg-white text-black hover:bg-gray-200 px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            {ICONS.More} Post Deal
          </button>
        </div>
      </div>

      <div className="space-y-8">
        {(MOCK_DEALS as unknown as Deal[]).map((deal) => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-gray-500 text-sm mb-4">You've reached the end of the list</p>
        <button className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors text-sm font-medium">
            Load More Deals
        </button>
      </div>
    </div>
  );
};

export default DealFeed;
