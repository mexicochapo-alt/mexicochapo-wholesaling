import React from 'react';
import { ICONS, MOCK_DEALS } from '../constants';
import { Deal } from '../types';

const DealFeed: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold font-display text-white">Live Deal Feed</h1>
        <div className="flex gap-2">
          <select className="bg-[#0f172a] border border-white/10 rounded-lg text-sm text-gray-300 px-3 py-2 focus:border-indigo-500 outline-none">
            <option>Nationwide</option>
            <option>My State (TX)</option>
          </select>
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
            {ICONS.More} Post Deal
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {(MOCK_DEALS as unknown as Deal[]).map((deal) => (
          <div key={deal.id} className="glass-panel rounded-2xl overflow-hidden border border-white/5 shadow-xl animate-fade-in-up">
            {/* Card Header */}
            <div className="p-4 flex items-center justify-between border-b border-white/5 bg-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xs">
                  {deal.postedBy.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{deal.postedBy}</p>
                  <p className="text-xs text-gray-400">{deal.postedAt} • {deal.city}, {deal.state}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                deal.financeType === 'Subject-To' ? 'bg-indigo-500/20 text-indigo-300' :
                deal.financeType === 'Seller Finance' ? 'bg-purple-500/20 text-purple-300' :
                'bg-emerald-500/20 text-emerald-300'
              }`}>
                {deal.financeType}
              </span>
            </div>

            {/* Card Media */}
            <div className="relative h-64 bg-gray-900 group cursor-pointer">
              <img 
                src={deal.imageUrl} 
                alt="Property" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-2xl font-display font-bold text-white drop-shadow-lg">
                  ${deal.price.toLocaleString()}
                </h3>
                <p className="text-sm text-gray-300">Purchase Price</p>
              </div>
              <div className="absolute bottom-4 right-4 flex gap-2">
                <div className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
                  <p className="text-xs text-gray-400">ARV</p>
                  <p className="text-sm font-bold text-white">${deal.arv.toLocaleString()}</p>
                </div>
                <div className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
                  <p className="text-xs text-gray-400">Est. Profit</p>
                  <p className="text-sm font-bold text-emerald-400">${(deal.arv - deal.price - deal.repairs).toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* Card Actions */}
            <div className="p-4 grid grid-cols-2 gap-4">
               <div className="col-span-2 flex gap-4 text-sm text-gray-400 border-b border-white/5 pb-4 mb-2">
                 <div className="flex items-center gap-2"><span className="text-white">{deal.type}</span></div>
                 <div className="flex items-center gap-2">Repairs: <span className="text-white">${deal.repairs.toLocaleString()}</span></div>
                 <div className="flex items-center gap-2">Fee: <span className="text-white">${deal.assignmentFee.toLocaleString()}</span></div>
               </div>

               <div className="flex gap-4">
                 <button className="flex-1 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 text-sm font-medium transition-colors flex items-center justify-center gap-2">
                   {ICONS.Heart} Like
                 </button>
                 <button className="flex-1 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 text-sm font-medium transition-colors flex items-center justify-center gap-2">
                   {ICONS.Share} Share
                 </button>
               </div>
               <button className="col-span-1 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold shadow-lg shadow-indigo-500/20 transition-all flex items-center justify-center gap-2">
                 Contact Dispo
               </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealFeed;