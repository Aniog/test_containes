import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Explore', path: '/explore' },
  { label: 'Mission', path: '/about' },
  { label: 'Submit Memory', path: '/submit', highlight: true },
];

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-space-black/90 backdrop-blur-md border-b border-slate-800/60' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-3 group"
        >
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 rounded-full bg-nebula-blue/20 group-hover:bg-nebula-blue/30 transition-colors" />
            <div className="absolute inset-1 rounded-full bg-nebula-blue/40" />
            <div className="absolute inset-2 rounded-full bg-nebula-blue animate-pulse" />
          </div>
          <span className="font-cinzel text-white font-semibold text-lg tracking-wide">
            Memory Archive
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(link => (
            link.highlight ? (
              <button
                key={link.path}
                onClick={() => navigate(link.path)}
                className="px-4 py-2 bg-nebula-blue hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-all duration-200 font-inter"
              >
                {link.label}
              </button>
            ) : (
              <button
                key={link.path}
                onClick={() => navigate(link.path)}
                className={`text-sm font-inter transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-nebula-blue'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            )
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-slate-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-space-black/95 backdrop-blur-md border-b border-slate-800 px-4 py-4 flex flex-col gap-3">
          {NAV_LINKS.map(link => (
            <button
              key={link.path}
              onClick={() => navigate(link.path)}
              className={`text-left py-2 text-sm font-inter transition-colors ${
                link.highlight
                  ? 'text-nebula-blue font-medium'
                  : location.pathname === link.path
                  ? 'text-white'
                  : 'text-slate-400'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
