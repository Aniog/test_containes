import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { path: '/', label: 'The Great Migration' },
  { path: '/species', label: 'Species Archive' },
  { path: '/dust-and-light', label: 'Dust & Light' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-earth-dark/95 backdrop-blur-md border-b border-burnt-orange/20 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex flex-col leading-none group">
          <span className="font-serif text-xl md:text-2xl font-bold tracking-wide transition-colors duration-300" style={{ color: '#d96b35', textShadow: '0 1px 6px rgba(0,0,0,0.8)' }}>
            Serengeti
          </span>
          <span className="font-serif-display text-xs md:text-sm font-light tracking-[0.3em] uppercase" style={{ color: '#d96b35', textShadow: '0 1px 6px rgba(0,0,0,0.8)' }}>
            Pulse
          </span>
        </NavLink>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                end={path === '/'}
                className={({ isActive }) =>
                  `nav-link font-sans text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
                    isActive ? 'active' : ''
                  }`
                }
                style={{ color: '#d96b35', textShadow: '0 1px 6px rgba(0,0,0,0.8)' }}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ color: '#d96b35', textShadow: '0 1px 6px rgba(0,0,0,0.8)' }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-400 overflow-hidden ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="bg-earth-dark/98 backdrop-blur-md border-t border-burnt-orange/20 px-6 py-4 flex flex-col gap-5">
          {navItems.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                end={path === '/'}
                className={({ isActive }) =>
                  `font-serif text-lg transition-colors duration-300 ${
                    isActive ? 'text-burnt-orange-light' : 'text-savanna-warm'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
