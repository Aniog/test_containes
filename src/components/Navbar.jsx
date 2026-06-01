import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Explore', path: '/explore' },
  { label: 'By Era', path: '/explore?filter=era' },
  { label: 'By Emotion', path: '/explore?filter=emotion' },
  { label: 'By Location', path: '/explore?filter=location' },
  { label: 'About', path: '/about' },
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

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-space-black/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-nebula-blue to-aurora-teal flex items-center justify-center text-white text-xs font-bold shadow-[0_0_12px_rgba(79,142,247,0.4)]">
            ✦
          </div>
          <span className="font-cinzel font-bold text-white text-sm md:text-base tracking-wide group-hover:text-nebula-blue transition-colors">
            Memory Archive
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === link.path.split('?')[0]
                  ? 'text-nebula-blue bg-nebula-blue/10'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <Link
            to="/explore"
            className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
          >
            <Search className="w-4 h-4" />
          </Link>
          <Link
            to="/submit"
            className="hidden md:inline-flex px-4 py-2 rounded-lg bg-nebula-blue text-white text-sm font-semibold hover:bg-blue-500 transition-all hover:shadow-[0_0_15px_rgba(79,142,247,0.4)]"
          >
            Preserve Memory
          </Link>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-space-black/95 backdrop-blur-md border-b border-slate-800 px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="px-4 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/submit"
            className="mt-2 px-4 py-3 rounded-lg bg-nebula-blue text-white text-sm font-semibold text-center"
          >
            Preserve a Memory
          </Link>
        </div>
      )}
    </nav>
  );
}
