import { useState } from 'react';
import { Home } from 'lucide-react';

const DOCK_APPS = [
  { name: 'Safari',  icon: '🧭' },
  { name: 'Mail',    icon: '✉️' },
  { name: 'Music',   icon: '🎵' },
  { name: 'Photos',  icon: '🌅' },
  { name: 'Maps',    icon: '🗺️' },
  { name: 'Settings',icon: '⚙️' },
];

const DockItem = ({ app, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col items-center cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(app.name)}
      style={{ transform: hovered ? 'scale(1.25) translateY(-8px)' : 'scale(1)', transition: 'transform 0.2s cubic-bezier(0.34,1.56,0.64,1)' }}
    >
      {hovered && (
        <div className="absolute -top-8 bg-black/60 backdrop-blur-md text-white text-xs px-2 py-1 rounded-lg whitespace-nowrap border border-white/10">
          {app.name}
        </div>
      )}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
        style={{
          background: 'rgba(255,255,255,0.12)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.2)',
          boxShadow: hovered ? '0 8px 24px rgba(0,0,0,0.4)' : '0 2px 8px rgba(0,0,0,0.2)',
        }}
      >
        {app.icon}
      </div>
    </div>
  );
};

const Dock = ({ onAppOpen }) => (
  <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
    <div
      className="flex items-end gap-3 px-5 py-3 rounded-3xl"
      style={{
        background: 'rgba(255,255,255,0.08)',
        backdropFilter: 'blur(40px) saturate(180%)',
        border: '1px solid rgba(255,255,255,0.18)',
        boxShadow: '0 8px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15)',
      }}
    >
      {DOCK_APPS.map((app) => (
        <DockItem key={app.name} app={app} onClick={onAppOpen} />
      ))}

      {/* Divider */}
      <div className="w-px h-10 bg-white/20 mx-1" />

      {/* Home button */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer"
        style={{
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.25)',
        }}
      >
        <Home className="w-5 h-5 text-white/80" />
      </div>
    </div>
  </div>
);

export default Dock;
