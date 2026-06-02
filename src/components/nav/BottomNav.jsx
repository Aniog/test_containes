import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const NAV_ITEMS = [
  { path: '/', label: 'THE GLITCH', index: '01', sub: 'HOME' },
  { path: '/works', label: 'WORKS', index: '02', sub: 'GALLERY' },
  { path: '/manifesto', label: 'MANIFESTO', index: '03', sub: 'TEXT' },
];

export default function BottomNav({ onNavigate }) {
  const location = useLocation();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50"
      style={{
        background: 'linear-gradient(to top, rgba(5,0,10,0.98) 0%, rgba(20,0,40,0.92) 100%)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
    >
      {/* Top glow line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(to right, transparent 0%, #CCFF00 20%, #CCFF00 80%, transparent 100%)',
          boxShadow: '0 0 16px #CCFF00, 0 0 32px rgba(204,255,0,0.35), 0 0 64px rgba(204,255,0,0.1)',
        }}
      />

      <div className="flex items-stretch" style={{ height: 72 }}>
        {/* Logo mark */}
        <div
          className="flex items-center justify-center px-5 md:px-8 flex-shrink-0"
          style={{
            borderRight: '1px solid rgba(204,255,0,0.12)',
            minWidth: 64,
          }}
        >
          <span
            className="font-display font-black uppercase"
            style={{
              color: '#CCFF00',
              letterSpacing: '0.25em',
              fontSize: '0.7rem',
              textShadow: '0 0 10px rgba(204,255,0,0.5)',
            }}
          >
            A·W
          </span>
        </div>

        {/* Nav items */}
        <div className="flex items-stretch flex-1">
          {NAV_ITEMS.map((item, i) => (
            <NavItem
              key={item.path}
              item={item}
              isActive={location.pathname === item.path}
              isLast={i === NAV_ITEMS.length - 1}
              onNavigate={onNavigate}
            />
          ))}
        </div>

        {/* Right side — diagonal accent block */}
        <div
          className="hidden md:flex items-center px-6 flex-shrink-0 relative overflow-hidden"
          style={{ borderLeft: '1px solid rgba(204,255,0,0.08)', minWidth: 120 }}
        >
          {/* Diagonal stripe decoration */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(204,255,0,0.02) 8px, rgba(204,255,0,0.02) 9px)',
            }}
          />
          <div className="relative z-10">
            <div className="font-mono" style={{ color: 'rgba(204,255,0,0.3)', fontSize: '0.55rem', letterSpacing: '0.2em', lineHeight: 1.8 }}>
              ACID-WAVE
            </div>
            <div className="font-mono" style={{ color: 'rgba(204,255,0,0.15)', fontSize: '0.5rem', letterSpacing: '0.2em' }}>
              COLLECTIVE
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavItem({ item, isActive, isLast, onNavigate }) {
  const [hov, setHov] = useState(false);
  const active = isActive || hov;

  return (
    <button
      onClick={() => onNavigate(item.path)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="relative flex flex-col items-start justify-center px-5 md:px-8 overflow-hidden transition-all duration-300"
      style={{
        flex: 1,
        background: isActive ? 'rgba(204,255,0,0.05)' : 'transparent',
        borderRight: isLast ? 'none' : '1px solid rgba(204,255,0,0.08)',
        cursor: 'pointer',
        border: 'none',
        outline: 'none',
        borderRight: isLast ? 'none' : '1px solid rgba(204,255,0,0.08)',
      }}
    >
      {/* Active/hover background fill */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: 'linear-gradient(135deg, rgba(204,255,0,0.07) 0%, transparent 60%)',
          opacity: active ? 1 : 0,
        }}
      />

      {/* Diagonal stripe on active */}
      {isActive && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'repeating-linear-gradient(-45deg, transparent, transparent 6px, rgba(204,255,0,0.03) 6px, rgba(204,255,0,0.03) 7px)',
          }}
        />
      )}

      {/* Top active bar — diagonal cut */}
      <div
        className="absolute top-0 left-0 right-0 transition-all duration-300"
        style={{
          height: isActive ? 3 : 0,
          background: '#CCFF00',
          boxShadow: isActive ? '0 0 12px #CCFF00, 0 0 24px rgba(204,255,0,0.4)' : 'none',
          clipPath: 'polygon(0 0, 100% 0, calc(100% - 8px) 100%, 8px 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start gap-0.5">
        <span
          className="font-mono transition-colors duration-300"
          style={{
            color: isActive ? '#CCFF00' : 'rgba(204,255,0,0.25)',
            fontSize: '0.55rem',
            letterSpacing: '0.25em',
          }}
        >
          {item.index}
        </span>
        <span
          className="font-display font-black uppercase transition-all duration-300"
          style={{
            color: isActive ? '#CCFF00' : (hov ? 'rgba(240,240,240,0.8)' : 'rgba(240,240,240,0.45)'),
            fontSize: 'clamp(0.65rem, 1.5vw, 0.85rem)',
            letterSpacing: '0.12em',
            textShadow: isActive ? '0 0 14px #CCFF00, 0 0 28px rgba(204,255,0,0.35)' : 'none',
            lineHeight: 1,
          }}
        >
          {item.label}
        </span>
        <span
          className="font-mono hidden md:block transition-colors duration-300"
          style={{
            color: isActive ? 'rgba(204,255,0,0.5)' : 'rgba(255,255,255,0.15)',
            fontSize: '0.5rem',
            letterSpacing: '0.2em',
          }}
        >
          {item.sub}
        </span>
      </div>

      {/* Bottom hover line — slides in */}
      <div
        className="absolute bottom-0 left-0 h-px transition-all duration-400"
        style={{
          width: hov || isActive ? '100%' : '0%',
          background: 'linear-gradient(to right, #CCFF00, rgba(204,255,0,0.3))',
          boxShadow: '0 0 6px rgba(204,255,0,0.4)',
        }}
      />
    </button>
  );
}
