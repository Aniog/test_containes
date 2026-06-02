import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'THE MATRIX', path: '/' },
  { label: 'LIGHT GALLERY', path: '/gallery' },
  { label: 'BIT-LIBRARY', path: '/library' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-black"
      style={{ borderBottom: '1px solid #00FFFF', boxShadow: '0 0 20px rgba(0,255,255,0.2)' }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 no-underline">
            <div
              className="w-8 h-8 flex items-center justify-center"
              style={{ border: '1px solid #00FFFF', boxShadow: '0 0 12px #00FFFF' }}
            >
              <Zap size={16} color="#00FFFF" />
            </div>
            <span
              className="font-pixel text-neon-cyan text-glow-cyan hidden sm:block"
              style={{ fontSize: '10px', letterSpacing: '0.15em' }}
            >
              LUMENPIXEL
            </span>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-0">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `font-pixel px-6 py-5 text-xs tracking-widest transition-all duration-150 no-underline block ${
                    isActive
                      ? 'text-black bg-neon-cyan'
                      : 'text-neon-cyan hover:text-white hover:bg-neon-cyan/10'
                  }`
                }
                style={{ fontSize: '9px' }}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Status indicator */}
          <div className="hidden md:flex items-center gap-2">
            <div
              className="w-2 h-2 bg-neon-green animate-pulse"
              style={{ boxShadow: '0 0 6px #00FF41' }}
            />
            <span className="font-mono-tech text-neon-green text-xs" style={{ fontSize: '11px' }}>
              SYS:ONLINE
            </span>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-neon-cyan p-2"
            style={{ border: '1px solid #00FFFF', background: 'transparent' }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden bg-black"
          style={{ borderTop: '1px solid rgba(0,255,255,0.3)' }}
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `font-pixel block px-6 py-4 text-xs tracking-widest no-underline transition-all ${
                  isActive
                    ? 'text-black bg-neon-cyan'
                    : 'text-neon-cyan hover:bg-neon-cyan/10'
                }`
              }
              style={{ fontSize: '9px', borderBottom: '1px solid rgba(0,255,255,0.1)' }}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
