import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Equipment', path: '/equipment' },
  { label: 'Rules', path: '/rules' },
  { label: 'Techniques', path: '/techniques' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <span className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-black text-sm select-none">
            PP
          </span>
          <span className="text-white font-bold text-lg tracking-tight">
            Ping<span className="text-orange-400">Pro</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors ${
                pathname === link.path
                  ? 'text-orange-400'
                  : 'text-slate-300 hover:text-orange-400'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white p-1"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`text-base font-medium transition-colors ${
                pathname === link.path
                  ? 'text-orange-400'
                  : 'text-slate-300 hover:text-orange-400'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
