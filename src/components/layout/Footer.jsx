import { NavLink } from 'react-router-dom';
import { Zap, Github, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className="bg-black mt-0"
      style={{ borderTop: '1px solid #00FFFF', boxShadow: '0 0 20px rgba(0,255,255,0.15)' }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 flex items-center justify-center"
                style={{ border: '1px solid #00FFFF', boxShadow: '0 0 12px #00FFFF' }}
              >
                <Zap size={16} color="#00FFFF" />
              </div>
              <span className="font-pixel text-neon-cyan text-glow-cyan" style={{ fontSize: '10px' }}>
                LUMENPIXEL
              </span>
            </div>
            <p className="font-mono-tech text-neon-cyan/60 text-sm leading-relaxed">
              HIGH-DEFINITION PIXEL ART.<br />
              LIGHT AS DATA. DATA AS LIGHT.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="font-pixel text-neon-magenta text-glow-magenta mb-4"
              style={{ fontSize: '9px', letterSpacing: '0.15em' }}
            >
              NAVIGATION
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { label: 'THE MATRIX', path: '/' },
                { label: 'LIGHT GALLERY', path: '/gallery' },
                { label: 'BIT-LIBRARY', path: '/library' },
              ].map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className="font-mono-tech text-neon-cyan/70 hover:text-neon-cyan text-sm no-underline transition-colors"
                >
                  &gt; {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* System info */}
          <div>
            <h4
              className="font-pixel text-neon-green text-glow-green mb-4"
              style={{ fontSize: '9px', letterSpacing: '0.15em' }}
            >
              SYSTEM STATUS
            </h4>
            <div className="space-y-2 font-mono-tech text-sm">
              {[
                { label: 'RENDER ENGINE', value: 'ACTIVE', color: '#00FF41' },
                { label: 'LED MATRIX', value: 'ONLINE', color: '#00FF41' },
                { label: 'PIXEL DEPTH', value: '32-BIT', color: '#00FFFF' },
                { label: 'REFRESH RATE', value: '144Hz', color: '#FFB300' },
              ].map((stat) => (
                <div key={stat.label} className="flex justify-between items-center">
                  <span className="text-neon-cyan/50">{stat.label}</span>
                  <span style={{ color: stat.color, textShadow: `0 0 6px ${stat.color}` }}>
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(0,255,255,0.15)' }}
        >
          <span className="font-mono-tech text-neon-cyan/40 text-xs">
            © 2026 LUMENPIXEL. ALL PIXELS RESERVED.
          </span>
          <div className="flex items-center gap-4">
            {[Github, Twitter, Instagram].map((Icon, i) => (
              <button
                key={i}
                className="text-neon-cyan/50 hover:text-neon-cyan transition-colors p-1"
                style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
              >
                <Icon size={16} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
