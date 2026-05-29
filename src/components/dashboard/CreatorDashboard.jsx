import { useState } from 'react';
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';
import { TrendingUp, DollarSign, Eye, Star, Plus, Settings, BarChart2, Users, Sparkles } from 'lucide-react';
import { TRENDING_DATA, EMOTION_DATA, DREAMS } from '../../data/dreams';

const REVENUE_DATA = [
  { month: 'Jan', revenue: 1240, sales: 42 },
  { month: 'Feb', revenue: 1890, sales: 67 },
  { month: 'Mar', revenue: 2340, sales: 89 },
  { month: 'Apr', revenue: 3120, sales: 112 },
  { month: 'May', revenue: 4560, sales: 156 },
  { month: 'Jun', revenue: 5890, sales: 198 },
];

const AUDIENCE_DATA = [
  { age: '18-24', value: 28 },
  { age: '25-34', value: 38 },
  { age: '35-44', value: 22 },
  { age: '45-54', value: 8 },
  { age: '55+', value: 4 },
];

function StatCard({ icon: Icon, label, value, change, color }) {
  return (
    <div className="glass-strong rounded-2xl p-5 border border-white/10">
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${color}22` }}>
          <Icon className="w-5 h-5" style={{ color }} />
        </div>
        <span className={`text-xs font-semibold font-body px-2 py-1 rounded-full ${change >= 0 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
          {change >= 0 ? '+' : ''}{change}%
        </span>
      </div>
      <p className="font-dream text-2xl font-bold text-white mb-1">{value}</p>
      <p className="text-purple-300/50 text-xs font-body">{label}</p>
    </div>
  );
}

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="glass-strong rounded-xl p-3 border border-white/10 text-xs font-body">
      <p className="text-purple-300/60 mb-1">{label}</p>
      {payload.map((p, i) => (
        <p key={i} style={{ color: p.color }}>{p.name}: {p.value.toLocaleString()}</p>
      ))}
    </div>
  );
};

export default function CreatorDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const myDreams = DREAMS.slice(0, 4);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart2 },
    { id: 'content', label: 'My Dreams', icon: Sparkles },
    { id: 'audience', label: 'Audience', icon: Users },
    { id: 'revenue', label: 'Revenue', icon: DollarSign },
  ];

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-dream text-3xl sm:text-4xl font-black text-white mb-1">
            Creator Dashboard
          </h1>
          <p className="text-purple-300/50 font-body text-sm">Welcome back, Lyra Voss 🌙</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl glass border border-white/10 text-purple-300 text-sm font-body hover:bg-white/5 transition-all">
            <Settings className="w-4 h-4" />
            <span className="hidden sm:block">Settings</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-body hover:from-purple-500 hover:to-pink-500 transition-all">
            <Plus className="w-4 h-4" />
            <span className="hidden sm:block">New Dream</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 glass rounded-xl p-1 mb-8 w-fit">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-body transition-all ${
              activeTab === id
                ? 'bg-purple-500/30 text-purple-200 border border-purple-500/30'
                : 'text-purple-300/50 hover:text-purple-300'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span className="hidden sm:block">{label}</span>
          </button>
        ))}
      </div>

      {activeTab === 'overview' && (
        <div className="space-y-8">
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard icon={DollarSign} label="Total Revenue" value="12.4 ETH" change={23} color="#fbbf24" />
            <StatCard icon={Eye} label="Total Views" value="284K" change={18} color="#818cf8" />
            <StatCard icon={Star} label="Avg Rating" value="4.9" change={2} color="#f472b6" />
            <StatCard icon={Users} label="Followers" value="12.4K" change={31} color="#2dd4bf" />
          </div>

          {/* Revenue chart */}
          <div className="glass-strong rounded-2xl p-6 border border-white/10">
            <h3 className="font-dream text-lg font-semibold text-white mb-6">Revenue Over Time</h3>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={REVENUE_DATA}>
                <defs>
                  <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#c084fc" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#c084fc" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="month" tick={{ fill: 'rgba(232,213,255,0.4)', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: 'rgba(232,213,255,0.4)', fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="revenue" stroke="#c084fc" strokeWidth={2} fill="url(#revenueGrad)" name="Revenue (USD)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Category trends */}
          <div className="glass-strong rounded-2xl p-6 border border-white/10">
            <h3 className="font-dream text-lg font-semibold text-white mb-6">Platform Dream Trends</h3>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={TRENDING_DATA}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="month" tick={{ fill: 'rgba(232,213,255,0.4)', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: 'rgba(232,213,255,0.4)', fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Line type="monotone" dataKey="cosmic" stroke="#2dd4bf" strokeWidth={2} dot={false} name="Cosmic" />
                <Line type="monotone" dataKey="romance" stroke="#f472b6" strokeWidth={2} dot={false} name="Romance" />
                <Line type="monotone" dataKey="adventure" stroke="#fb923c" strokeWidth={2} dot={false} name="Adventure" />
                <Line type="monotone" dataKey="mystery" stroke="#818cf8" strokeWidth={2} dot={false} name="Mystery" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {activeTab === 'content' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {myDreams.map(dream => (
              <div key={dream.id} className="glass-strong rounded-2xl p-5 border border-white/10 flex gap-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${dream.gradient} flex items-center justify-center text-2xl flex-shrink-0`}>
                  {dream.creator.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-dream text-sm font-bold text-white truncate mb-1">{dream.title}</h4>
                  <div className="flex items-center gap-3 text-xs text-purple-300/50 font-body">
                    <span className="flex items-center gap-1"><Eye className="w-3 h-3" />{(dream.sold * 3).toLocaleString()}</span>
                    <span className="flex items-center gap-1"><Star className="w-3 h-3 text-yellow-400" />{dream.rating}</span>
                    <span className="flex items-center gap-1"><DollarSign className="w-3 h-3 text-green-400" />{dream.price} ETH</span>
                  </div>
                  <div className="mt-2 flex gap-2">
                    <button className="text-xs px-3 py-1 rounded-full glass border border-white/10 text-purple-300/60 hover:text-purple-300 font-body">Edit</button>
                    <button className="text-xs px-3 py-1 rounded-full glass border border-white/10 text-purple-300/60 hover:text-purple-300 font-body">Analytics</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'audience' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-strong rounded-2xl p-6 border border-white/10">
            <h3 className="font-dream text-lg font-semibold text-white mb-6">Age Distribution</h3>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={AUDIENCE_DATA}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="age" tick={{ fill: 'rgba(232,213,255,0.4)', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: 'rgba(232,213,255,0.4)', fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="value" fill="#c084fc" radius={[4, 4, 0, 0]} name="%" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="glass-strong rounded-2xl p-6 border border-white/10">
            <h3 className="font-dream text-lg font-semibold text-white mb-6">Emotional Resonance</h3>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie data={EMOTION_DATA} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={3} dataKey="value">
                  {EMOTION_DATA.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap gap-2 justify-center mt-2">
              {EMOTION_DATA.map(e => (
                <div key={e.name} className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full" style={{ background: e.color }} />
                  <span className="text-xs text-purple-300/50 font-body">{e.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'revenue' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'This Month', value: '5.89 ETH', sub: '≈ $18,450 USD', color: '#fbbf24' },
              { label: 'Total Earned', value: '12.4 ETH', sub: '≈ $38,750 USD', color: '#2dd4bf' },
              { label: 'Pending', value: '0.84 ETH', sub: 'Processing', color: '#c084fc' },
            ].map(item => (
              <div key={item.label} className="glass-strong rounded-2xl p-6 border border-white/10 text-center">
                <p className="text-purple-300/50 text-xs font-body mb-2">{item.label}</p>
                <p className="font-dream text-2xl font-bold mb-1" style={{ color: item.color }}>{item.value}</p>
                <p className="text-purple-300/40 text-xs font-body">{item.sub}</p>
              </div>
            ))}
          </div>

          <div className="glass-strong rounded-2xl p-6 border border-white/10">
            <h3 className="font-dream text-lg font-semibold text-white mb-6">Monthly Sales</h3>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={REVENUE_DATA}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="month" tick={{ fill: 'rgba(232,213,255,0.4)', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: 'rgba(232,213,255,0.4)', fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="sales" fill="#818cf8" radius={[4, 4, 0, 0]} name="Sales" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
}
