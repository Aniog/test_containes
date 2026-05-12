import { useState } from 'react';

const APPS = [
  { name: 'Safari',       icon: '🧭', color: 'from-blue-400 to-blue-600' },
  { name: 'Photos',       icon: '🌅', color: 'from-yellow-300 to-pink-400' },
  { name: 'Music',        icon: '🎵', color: 'from-pink-500 to-rose-600' },
  { name: 'TV',           icon: '📺', color: 'from-slate-600 to-slate-800' },
  { name: 'Maps',         icon: '🗺️', color: 'from-green-400 to-teal-500' },
  { name: 'Mail',         icon: '✉️', color: 'from-sky-400 to-blue-500' },
  { name: 'Calendar',     icon: '📅', color: 'from-red-400 to-red-600' },
  { name: 'Arcade',       icon: '🎮', color: 'from-purple-500 to-indigo-600' },
  { name: 'Notes',        icon: '📝', color: 'from-yellow-400 to-amber-500' },
  { name: 'Environments', icon: '🌌', color: 'from-indigo-500 to-violet-700' },
  { name: 'Mindfulness',  icon: '🧘', color: 'from-teal-400 to-cyan-500' },
  { name: 'Settings',     icon: '⚙️', color: 'from-gray-500 to-gray-700' },
];

const AppIcon = ({ app, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex flex-col items-center gap-2 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(app.name)}
      style={{ transform: hovered ? 'scale(1.12) translateY(-4px)' : 'scale(1)', transition: 'transform 0.2s cubic-bezier(0.34,1.56,0.64,1)' }}
    >
      <div
        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${app.color} flex items-center justify-center text-3xl shadow-lg`}
        style={{
          boxShadow: hovered
            ? '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.15)'
            : '0 4px 16px rgba(0,0,0,0.3)',
          backdropFilter: 'blur(8px)',
        }}
      >
        {app.icon}
      </div>
      <span className="text-white/85 text-xs font-medium tracking-wide">{app.name}</span>
    </div>
  );
};

const AppGrid = ({ onAppOpen }) => (
  <div className="grid grid-cols-6 gap-x-8 gap-y-6 px-4">
    {APPS.map((app) => (
      <AppIcon key={app.name} app={app} onClick={onAppOpen} />
    ))}
  </div>
);

export default AppGrid;
