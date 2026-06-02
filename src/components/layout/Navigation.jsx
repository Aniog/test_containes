import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Studio' },
  { to: '/archive', label: 'Archive' },
  { to: '/process', label: 'Process' },
  { to: '/journal', label: 'Journal' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-paper/90 backdrop-blur-md shadow-neu-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <span className="font-display text-2xl font-light tracking-[0.3em] text-ink select-none">
            PULP
          </span>
          <span className="w-1 h-1 rounded-full bg-gold opacity-80 group-hover:opacity-100 transition-opacity" />
        </NavLink>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `font-mono text-xs tracking-widest uppercase transition-all duration-300 relative pb-0.5 ${
                    isActive
                      ? 'text-ink after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gold'
                      : 'text-ink-muted hover:text-ink'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="mailto:hello@pulpstudio.com"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-paper shadow-neu text-ink text-xs font-mono tracking-widest uppercase hover:shadow-neu-pressed transition-all duration-200 active:shadow-neu-pressed"
        >
          Enquire
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg bg-paper shadow-neu-sm"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-ink transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-px bg-ink transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-ink transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } bg-paper/95 backdrop-blur-md border-t border-ink/5`}
      >
        <ul className="px-6 py-6 flex flex-col gap-5">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `font-mono text-sm tracking-widest uppercase ${
                    isActive ? 'text-ink' : 'text-ink-muted'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href="mailto:hello@pulpstudio.com"
              className="font-mono text-sm tracking-widest uppercase text-gold"
            >
              Enquire
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
