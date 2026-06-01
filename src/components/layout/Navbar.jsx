import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Archive, Search } from 'lucide-react';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/explore', label: 'Explore' },
  { to: '/about', label: 'About' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-space-950/90 backdrop-blur-md border-b border-slate-800/60 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 rounded-full bg-nebula-600/30 group-hover:bg-nebula-600/50 transition-all duration-300" />
            <Archive className="w-5 h-5 text-nebula-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
          <div>
            <span className="font-cinzel text-lg font-bold text-slate-100 tracking-wide">
              Mnemosynē
            </span>
            <span className="hidden sm:block font-mono text-xs text-nebula-400 tracking-widest uppercase -mt-0.5">
              Archive
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`font-mono text-sm tracking-widest uppercase transition-colors duration-200 ${
                location.pathname === to
                  ? 'text-nebula-400'
                  : 'text-slate-400 hover:text-slate-100'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/explore"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-nebula-600/50 text-nebula-400 font-mono text-sm tracking-wide hover:bg-nebula-600/10 hover:border-nebula-500 transition-all duration-200"
          >
            <Search className="w-4 h-4" />
            Search Memories
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-slate-400 hover:text-slate-100 transition-colors"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-space-950/95 backdrop-blur-md border-t border-slate-800/60 px-4 py-6 flex flex-col gap-4">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`font-mono text-sm tracking-widest uppercase py-2 transition-colors ${
                location.pathname === to ? 'text-nebula-400' : 'text-slate-400'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/explore"
            className="mt-2 flex items-center gap-2 px-4 py-3 rounded-lg border border-nebula-600/50 text-nebula-400 font-mono text-sm tracking-wide text-center justify-center"
          >
            <Search className="w-4 h-4" />
            Search Memories
          </Link>
        </div>
      )}
    </header>
  );
}
