import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PawPrint } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'The Great Migration' },
  { to: '/species-archive', label: 'Species Archive' },
  { to: '/dust-and-light', label: 'Dust & Light' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-savanna-cream/80 backdrop-blur-md border-b border-warm-sand/60">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link
          to="/"
          className="flex items-center gap-2 group"
          onClick={() => setOpen(false)}
        >
          <PawPrint className="w-6 h-6 text-burnt-orange" />
          <span className="text-xl font-bold text-dark-earth tracking-wide font-serif">
            Serengeti Pulse
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm tracking-widest uppercase font-serif font-semibold transition-colors duration-300 ${
                pathname === link.to
                  ? 'text-burnt-orange border-b-2 border-burnt-orange pb-0.5'
                  : 'text-dust-brown hover:text-burnt-orange'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden p-2 text-dark-earth"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-savanna-cream/95 backdrop-blur-md border-t border-warm-sand/60">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`text-sm tracking-widest uppercase font-serif font-semibold transition-colors ${
                  pathname === link.to
                    ? 'text-burnt-orange'
                    : 'text-dust-brown hover:text-burnt-orange'
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