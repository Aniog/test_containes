import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/', label: '首页' },
  { to: '/laureates', label: '获奖者' },
  { to: '/history', label: '历史' },
  { to: '/medal', label: '奖章' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (to) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-amber-900/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="text-gold text-2xl font-serif font-bold tracking-wide group-hover:text-gold-light transition-colors">
            ∮
          </span>
          <span className="text-ivory font-serif font-semibold text-lg leading-tight">
            菲尔兹奖
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm font-medium transition-colors ${
                isActive(to)
                  ? 'text-gold'
                  : 'text-ivory/70 hover:text-ivory'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-ivory/80 hover:text-ivory p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy border-t border-amber-900/20 px-4 py-4 flex flex-col gap-4">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={`text-base font-medium transition-colors ${
                isActive(to) ? 'text-gold' : 'text-ivory/70 hover:text-ivory'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
