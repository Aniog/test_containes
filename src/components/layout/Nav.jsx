import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/projects', label: 'Projects' },
  { to: '/materials', label: 'Materials' },
  { to: '/philosophy', label: 'Philosophy' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  // On home page before scroll: transparent with light text over hero image
  // On home page after scroll, or any other page: solid white bar with dark text
  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${transparent ? 'bg-transparent' : 'bg-ma-white border-b border-ma-stone'}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link
          to="/"
          className={`font-display text-xl md:text-2xl font-light tracking-ultra transition-colors duration-500
            ${transparent ? 'text-white drop-shadow-sm' : 'text-ma-ink'}
          `}
        >
          MA<span className="font-normal italic"> (Space)</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-xs tracking-widest uppercase font-light transition-colors duration-500
                ${location.pathname.startsWith(to)
                  ? transparent
                    ? 'text-white border-b border-white pb-0.5'
                    : 'text-ma-ink border-b border-ma-ink pb-0.5'
                  : transparent
                    ? 'text-white/80 hover:text-white'
                    : 'text-ma-concrete hover:text-ma-ink'
                }
              `}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className={`md:hidden p-1 transition-colors duration-500
            ${transparent ? 'text-white' : 'text-ma-ink'}
          `}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden bg-ma-white border-t border-ma-stone overflow-hidden transition-all duration-400
          ${open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <nav className="flex flex-col px-6 py-6 gap-6">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-xs tracking-widest uppercase font-light text-ma-concrete hover:text-ma-ink transition-colors duration-400
                ${location.pathname.startsWith(to) ? 'text-ma-ink' : ''}
              `}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
