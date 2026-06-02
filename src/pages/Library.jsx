import { BookOpen, Database, Cpu, Layers } from 'lucide-react';
import LibraryIndex from '../components/library/LibraryIndex';

const META_STATS = [
  { label: 'TOTAL ENTRIES', value: '10', color: '#00FFFF', icon: Database },
  { label: 'CATEGORIES', value: '05', color: '#FF00FF', icon: Layers },
  { label: 'DISCIPLINES', value: '04', color: '#00FF41', icon: Cpu },
  { label: 'YEAR RANGE', value: '1910-1998', color: '#FFB300', icon: BookOpen },
];

export default function Library() {
  return (
    <div className="bg-black min-h-screen">
      {/* Page header */}
      <div
        className="bg-pixel-grid py-16 px-4 md:px-8"
        style={{ borderBottom: '1px solid rgba(0,255,255,0.2)' }}
      >
        <div className="max-w-7xl mx-auto">
          <div
            className="font-pixel text-neon-green text-glow-green mb-4"
            style={{ fontSize: '9px', letterSpacing: '0.3em' }}
          >
            ARCHIVE / TECHNICAL
          </div>
          <h1
            className="font-pixel text-white mb-4"
            style={{
              fontSize: 'clamp(16px, 3vw, 32px)',
              textShadow: '0 0 20px rgba(255,255,255,0.3)',
              letterSpacing: '0.05em',
            }}
          >
            BIT-
            <span style={{ color: '#00FF41', textShadow: '0 0 20px #00FF41' }}>LIBRARY</span>
          </h1>
          <p className="font-mono-tech text-neon-cyan/70 max-w-2xl" style={{ fontSize: '14px', lineHeight: '1.8' }}>
            A technical index of light-emitting technologies. Pixel-perfect documentation of LED physics,
            fiber optics, gas discharge, and display systems. Expand any entry to view specifications.
          </p>

          {/* Meta stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {META_STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="p-4 flex items-center gap-3"
                  style={{
                    background: '#0A0A0A',
                    border: `1px solid ${stat.color}`,
                    boxShadow: `0 0 8px ${stat.color}20`,
                  }}
                >
                  <div
                    className="w-8 h-8 flex items-center justify-center shrink-0"
                    style={{ border: `1px solid ${stat.color}`, boxShadow: `0 0 8px ${stat.color}` }}
                  >
                    <Icon size={14} color={stat.color} />
                  </div>
                  <div>
                    <div
                      className="font-pixel"
                      style={{ fontSize: '12px', color: stat.color, textShadow: `0 0 8px ${stat.color}` }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="font-mono-tech"
                      style={{ fontSize: '10px', color: 'rgba(0,255,255,0.4)', letterSpacing: '0.05em' }}
                    >
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Terminal prompt decoration */}
      <div
        className="px-4 md:px-8 py-4"
        style={{ borderBottom: '1px solid rgba(0,255,255,0.1)', background: '#050505' }}
      >
        <div className="max-w-7xl mx-auto font-mono-tech text-xs" style={{ color: 'rgba(0,255,255,0.4)' }}>
          <span style={{ color: '#00FF41' }}>LUMENPIXEL</span>
          <span style={{ color: 'rgba(0,255,255,0.3)' }}> @ </span>
          <span style={{ color: '#FF00FF' }}>BIT-LIBRARY</span>
          <span style={{ color: 'rgba(0,255,255,0.3)' }}> ~ </span>
          <span>$ list --all --verbose</span>
          <span className="animate-blink ml-1" style={{ color: '#00FFFF' }}>█</span>
        </div>
      </div>

      {/* Library content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <LibraryIndex />
      </div>

      {/* Footer note */}
      <div
        className="px-4 md:px-8 py-6"
        style={{ borderTop: '1px solid rgba(0,255,255,0.1)', background: '#050505' }}
      >
        <div className="max-w-7xl mx-auto font-mono-tech text-xs" style={{ color: 'rgba(0,255,255,0.3)' }}>
          <span style={{ color: '#00FF41' }}>STATUS:</span> ALL ENTRIES VERIFIED &nbsp;|&nbsp;
          <span style={{ color: '#00FF41' }}>INTEGRITY:</span> 100% &nbsp;|&nbsp;
          <span style={{ color: '#FFB300' }}>LAST SYNC:</span> 2026-06-02T00:00:00Z
        </div>
      </div>
    </div>
  );
}
