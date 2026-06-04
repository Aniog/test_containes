import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Descending', icon: '↓' },
  { to: '/reef', label: 'The Reef', icon: '🪸' },
  { to: '/luminous', label: 'Luminous Life', icon: '✦' },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(0, 3, 20, 0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,255,255,0.1)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 no-underline">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center animate-pulse-glow"
            style={{
              background: 'radial-gradient(circle, #00FFFF 0%, #000080 100%)',
              boxShadow: '0 0 16px rgba(0,255,255,0.5)',
            }}
          />
          <span
            className="font-cinzel font-bold text-xl tracking-widest"
            style={{ color: '#fff', textShadow: '0 0 20px rgba(0,255,255,0.4)' }}
          >
            ABYSSOS
          </span>
        </NavLink>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className="no-underline"
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 18px',
                borderRadius: '9999px',
                fontFamily: 'Cinzel, serif',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                transition: 'all 0.3s ease',
                background: isActive ? 'rgba(0,255,255,0.12)' : 'transparent',
                color: isActive ? '#00FFFF' : 'rgba(255,255,255,0.7)',
                border: isActive ? '1px solid rgba(0,255,255,0.3)' : '1px solid transparent',
                boxShadow: isActive ? '0 0 16px rgba(0,255,255,0.2)' : 'none',
              })}
            >
              <span style={{ fontSize: '0.9em' }}>{link.icon}</span>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="rounded-full transition-all duration-300"
              style={{
                width: '22px',
                height: '2px',
                background: '#00FFFF',
                transform: menuOpen
                  ? i === 0 ? 'rotate(45deg) translate(5px, 5px)'
                  : i === 1 ? 'opacity: 0'
                  : 'rotate(-45deg) translate(5px, -5px)'
                  : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6"
          style={{
            background: 'rgba(0, 3, 20, 0.95)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(0,255,255,0.1)',
          }}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className="no-underline flex items-center gap-3 py-3 border-b"
              style={({ isActive }) => ({
                color: isActive ? '#00FFFF' : 'rgba(255,255,255,0.7)',
                borderColor: 'rgba(0,255,255,0.1)',
                fontFamily: 'Cinzel, serif',
                fontSize: '0.9rem',
                letterSpacing: '0.08em',
              })}
            >
              <span>{link.icon}</span>
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;
