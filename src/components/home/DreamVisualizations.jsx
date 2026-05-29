import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis,
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer,
  AreaChart, Area, XAxis, YAxis, CartesianGrid
} from 'recharts';
import { TRENDING_DATA, EMOTION_DATA } from '../../data/dreams';

const RADAR_DATA = [
  { subject: 'Wonder', A: 88 },
  { subject: 'Fear', A: 45 },
  { subject: 'Love', A: 72 },
  { subject: 'Awe', A: 91 },
  { subject: 'Joy', A: 65 },
  { subject: 'Melancholy', A: 38 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="glass-strong rounded-xl p-3 border border-white/10 text-xs font-body">
      <p className="text-purple-300/60 mb-1">{label}</p>
      {payload.map((p, i) => (
        <p key={i} style={{ color: p.color || '#c084fc' }}>{p.name}: {typeof p.value === 'number' ? p.value.toLocaleString() : p.value}</p>
      ))}
    </div>
  );
};

export default function DreamVisualizations() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="font-dream text-3xl sm:text-4xl font-bold text-white mb-3">
          Dream Analytics
        </h2>
        <p className="text-purple-300/60 font-body">Real-time insights into the collective dreamscape</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Trend chart */}
        <div className="lg:col-span-2 glass-strong rounded-2xl p-6 border border-white/10">
          <h3 className="font-dream text-lg font-semibold text-white mb-2">Dream Popularity Trends</h3>
          <p className="text-purple-300/40 text-xs font-body mb-6">Monthly dream purchases by category</p>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={TRENDING_DATA}>
              <defs>
                {[
                  { id: 'cosmic', color: '#2dd4bf' },
                  { id: 'romance', color: '#f472b6' },
                  { id: 'adventure', color: '#fb923c' },
                ].map(({ id, color }) => (
                  <linearGradient key={id} id={id} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                    <stop offset="95%" stopColor={color} stopOpacity={0} />
                  </linearGradient>
                ))}
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="month" tick={{ fill: 'rgba(232,213,255,0.4)', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: 'rgba(232,213,255,0.4)', fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="cosmic" stroke="#2dd4bf" strokeWidth={2} fill="url(#cosmic)" name="Cosmic" />
              <Area type="monotone" dataKey="romance" stroke="#f472b6" strokeWidth={2} fill="url(#romance)" name="Romance" />
              <Area type="monotone" dataKey="adventure" stroke="#fb923c" strokeWidth={2} fill="url(#adventure)" name="Adventure" />
            </AreaChart>
          </ResponsiveContainer>
          <div className="flex gap-4 mt-4 justify-center">
            {[{ label: 'Cosmic', color: '#2dd4bf' }, { label: 'Romance', color: '#f472b6' }, { label: 'Adventure', color: '#fb923c' }].map(({ label, color }) => (
              <div key={label} className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full" style={{ background: color }} />
                <span className="text-xs text-purple-300/50 font-body">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Emotion distribution */}
        <div className="glass-strong rounded-2xl p-6 border border-white/10">
          <h3 className="font-dream text-lg font-semibold text-white mb-2">Emotion Distribution</h3>
          <p className="text-purple-300/40 text-xs font-body mb-4">Platform-wide emotional resonance</p>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie
                data={EMOTION_DATA}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={3}
                dataKey="value"
              >
                {EMOTION_DATA.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-2">
            {EMOTION_DATA.map(e => (
              <div key={e.name} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: e.color }} />
                <span className="text-xs text-purple-300/60 font-body flex-1">{e.name}</span>
                <span className="text-xs font-semibold font-body" style={{ color: e.color }}>{e.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Radar chart */}
        <div className="glass-strong rounded-2xl p-6 border border-white/10">
          <h3 className="font-dream text-lg font-semibold text-white mb-2">Emotional Profile</h3>
          <p className="text-purple-300/40 text-xs font-body mb-4">Average dream emotional signature</p>
          <ResponsiveContainer width="100%" height={220}>
            <RadarChart data={RADAR_DATA}>
              <PolarGrid stroke="rgba(255,255,255,0.1)" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: 'rgba(232,213,255,0.5)', fontSize: 11 }} />
              <Radar name="Emotion" dataKey="A" stroke="#c084fc" fill="#c084fc" fillOpacity={0.2} strokeWidth={2} />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Live stats */}
        <div className="lg:col-span-2 glass-strong rounded-2xl p-6 border border-white/10">
          <h3 className="font-dream text-lg font-semibold text-white mb-6">Platform Live Stats</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Dreams Active', value: '48,291', color: '#c084fc', change: '+12' },
              { label: 'Users Online', value: '3,847', color: '#2dd4bf', change: '+89' },
              { label: 'Dreams Sold Today', value: '1,204', color: '#f472b6', change: '+34' },
              { label: 'New Creators', value: '47', color: '#fbbf24', change: '+8' },
            ].map(stat => (
              <div key={stat.label} className="glass rounded-xl p-4 text-center">
                <p className="font-dream text-xl font-bold mb-1" style={{ color: stat.color }}>{stat.value}</p>
                <p className="text-xs text-purple-300/40 font-body mb-1">{stat.label}</p>
                <span className="text-xs text-green-400 font-body">{stat.change} today</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
