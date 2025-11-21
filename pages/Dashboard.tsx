import React from 'react';
import { ICONS } from '../constants';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const stats = [
  { label: 'Active Deals', value: '12', change: '+2', icon: ICONS.Case, color: 'indigo' },
  { label: 'Cash Buyers', value: '1,403', change: '+12%', icon: ICONS.Network, color: 'purple' },
  { label: 'Pending Rev', value: '$45.2k', change: '+8%', icon: ICONS.Dollar, color: 'emerald' },
  { label: 'AI Suggestions', value: '8', change: 'New', icon: ICONS.Sparkles, color: 'orange' },
];

const pipelineData = [
  { name: 'Lead', count: 15 },
  { name: 'Contacted', count: 8 },
  { name: 'Contract', count: 4 },
  { name: 'Assigned', count: 2 },
  { name: 'Closed', count: 5 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-white">Dashboard</h1>
          <p className="text-gray-400 mt-1">Welcome back, John. The market is heating up.</p>
        </div>
        <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium flex items-center gap-2 transition-colors shadow-lg shadow-indigo-500/20">
          {ICONS.Sparkles} Find Deals with AI
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors relative overflow-hidden group">
            <div className={`absolute top-0 right-0 p-24 rounded-full bg-${stat.color}-500/5 blur-2xl group-hover:bg-${stat.color}-500/10 transition-colors`}></div>
            <div className="flex justify-between items-start relative z-10">
              <div>
                <p className="text-sm text-gray-400 font-medium mb-1">{stat.label}</p>
                <h3 className="text-3xl font-display font-bold text-white">{stat.value}</h3>
              </div>
              <div className={`p-3 rounded-xl bg-${stat.color}-500/10 text-${stat.color}-400`}>
                {stat.icon}
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm relative z-10">
              <span className="text-emerald-400 font-medium flex items-center gap-1">
                {ICONS.Trend} {stat.change}
              </span>
              <span className="text-gray-500">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass-panel p-6 rounded-2xl border border-white/5">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            Deal Pipeline 
            <span className="text-xs font-normal text-gray-500 px-2 py-1 rounded-full bg-white/5">Live</span>
          </h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={pipelineData}>
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                  itemStyle={{ color: '#e2e8f0' }}
                  cursor={{ fill: '#1e293b', opacity: 0.4 }}
                />
                <Bar dataKey="count" fill="#6366f1" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-white/5">
           <h3 className="text-lg font-bold text-white mb-6">Deal Types</h3>
           <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={[
                    { name: 'SubTo', value: 400 },
                    { name: 'Cash', value: 300 },
                    { name: 'Novation', value: 100 },
                    { name: 'Seller Fin', value: 200 }
                  ]}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  <Cell fill="#6366f1" />
                  <Cell fill="#a855f7" />
                  <Cell fill="#10b981" />
                  <Cell fill="#f59e0b" />
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '8px', color: '#fff' }} />
              </PieChart>
            </ResponsiveContainer>
           </div>
           <div className="flex justify-center gap-4 text-xs text-gray-400 mt-4">
              <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-indigo-500"></div> SubTo</div>
              <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-purple-500"></div> Cash</div>
              <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-orange-500"></div> Seller Fin</div>
           </div>
        </div>
      </div>

      {/* Kanban Lite (Task List) */}
      <div className="glass-panel rounded-2xl border border-white/5 overflow-hidden">
        <div className="p-6 border-b border-white/5 flex justify-between items-center">
          <h3 className="text-lg font-bold text-white">Recent Activity</h3>
          <button className="text-sm text-indigo-400 hover:text-indigo-300">View All</button>
        </div>
        <div className="divide-y divide-white/5">
          {[
            { title: 'Contract sent to 123 Maple Ave', time: '2h ago', status: 'Pending', type: 'contract' },
            { title: 'New cash buyer added: Opendoor Inc', time: '4h ago', status: 'Done', type: 'network' },
            { title: 'AI Analysis: 445 Oak Dr fits buybox', time: '5h ago', status: 'New', type: 'ai' }
          ].map((item, i) => (
            <div key={i} className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${
                  item.type === 'ai' ? 'bg-orange-500/10 text-orange-400' : 
                  item.type === 'network' ? 'bg-purple-500/10 text-purple-400' : 
                  'bg-blue-500/10 text-blue-400'
                }`}>
                  {item.type === 'ai' ? ICONS.Sparkles : item.type === 'network' ? ICONS.Network : ICONS.Case}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.time}</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-300">
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;