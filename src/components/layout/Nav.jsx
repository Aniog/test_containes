import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { to: '/', label: 'The Roots' },
  { to: '/micro-forest', label: 'Micro-Forest' },
  { to: '/the-outlook', label: 'The Outlook' },
];

export default function Nav() {
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-forest-deep/95 backdrop-blur-sm border-b border-mist-grey/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Wordmark */}
        <NavLink to="/" className="flex flex-col leading-none">
          <span
            className="text-fog-white font-display text-xl md:text-2xl font-black tracking-tight"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Ancient
          </span>
          <span
            className="text-mist-grey text-xs font-body uppercase tracking-[0.3em] font-semibold"
          >
            Canopy
          </span>
        </NavLink>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `text-xs font-semibold uppercase tracking-[0.2em] transition-colors duration-500 ${
                    isActive
                      ? 'text-fog-white border-b border-mist-grey/60 pb-0.5'
                      : 'text-mist-grey hover:text-mist-light'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-mist-light p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-600 ${
          menuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        } bg-forest-deep/98 border-b border-mist-grey/20`}
      >
        <ul className="flex flex-col px-6 py-4 gap-5">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `text-sm font-semibold uppercase tracking-[0.2em] transition-colors duration-500 ${
                    isActive ? 'text-fog-white' : 'text-mist-grey'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
