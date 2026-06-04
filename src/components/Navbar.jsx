import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Microscope } from 'lucide-react';

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/specimens', label: 'Specimen Hub' },
  { path: '/gallery', label: 'Slide Gallery' },
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
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-white/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center gap-2.5 group"
            aria-label="MicroCosmos Home"
          >
            <Microscope className="w-6 h-6 text-ink" strokeWidth={1.5} />
            <span className="font-serif text-xl font-semibold tracking-wide text-ink group-hover:opacity-70 transition-opacity">
              MicroCosmos
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-sans text-sm tracking-wide transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-ink font-medium border-b border-ink pb-0.5'
                    : 'text-charcoal hover:text-ink'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-ink"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden glass-strong border-t border-white/20">
          <div className="px-6 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`font-sans text-sm py-1.5 tracking-wide ${
                  isActive(link.path)
                    ? 'text-ink font-medium'
                    : 'text-charcoal hover:text-ink'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}