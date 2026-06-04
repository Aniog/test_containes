import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Microscope } from 'lucide-react';

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/specimens', label: 'Specimens' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/contact', label: 'Lab Notes' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-ink flex items-center justify-center">
            <Microscope className="w-5 h-5 text-parchment" />
          </div>
          <span className="font-serif text-xl font-bold tracking-wide text-ink">
            MicroCosmos
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative px-4 py-2 font-sans text-sm tracking-wide transition-colors duration-300 rounded-md
                ${isActive(link.path)
                  ? 'text-ink font-semibold bg-white/20'
                  : 'text-ink-muted hover:text-ink hover:bg-white/10'
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md text-ink hover:bg-white/20 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-nav border-t border-white/10 px-6 pb-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`block py-3 font-sans text-sm tracking-wide border-b border-white/10 last:border-0
                ${isActive(link.path) ? 'text-ink font-semibold' : 'text-ink-muted'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}