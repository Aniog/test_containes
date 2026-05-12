import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Telescope } from 'lucide-react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/knowledge', label: 'Knowledge' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0a0e1a]/95 backdrop-blur-md border-b border-[#1e2a4a]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <Telescope className="w-5 h-5 text-[#f5c842] group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-serif text-lg text-[#f0f4ff] tracking-wide">Starry Night</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm tracking-wide transition-colors duration-200 relative group ${
                location.pathname === to ? 'text-[#f0f4ff]' : 'text-[#8892b0] hover:text-[#f0f4ff]'
              }`}
            >
              {label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-[#f5c842] transition-all duration-300 ${
                  location.pathname === to ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-5 py-2 text-xs font-mono tracking-widest uppercase border border-[#f5c842]/40 text-[#f5c842] rounded-full hover:bg-[#f5c842]/10 transition-all duration-200"
          >
            Ask a Question
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#8892b0] hover:text-[#f0f4ff] transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0a0e1a]/98 backdrop-blur-md border-b border-[#1e2a4a] px-6 py-6 space-y-4">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`block text-sm py-2 transition-colors ${
                location.pathname === to ? 'text-[#f0f4ff]' : 'text-[#8892b0]'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
