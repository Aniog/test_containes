import { useState } from 'react';
import { Menu, X, Trophy } from 'lucide-react';

const navLinks = [
  { label: 'Matches', href: '#matches' },
  { label: 'Standings', href: '#standings' },
  { label: 'Scorers', href: '#scorers' },
  { label: 'News', href: '#news' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center group-hover:bg-green-400 transition-colors">
            <Trophy className="w-4 h-4 text-white" />
          </div>
          <span className="text-white font-black text-xl tracking-tight">
            KICK<span className="text-green-500">OFF</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-400 hover:text-white hover:bg-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-xs font-bold text-red-400 uppercase tracking-widest">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            Live Now
          </span>
          <a
            href="#matches"
            className="bg-green-500 hover:bg-green-400 text-white font-bold px-4 py-2 rounded-lg text-sm transition-colors"
          >
            Watch Live
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-800 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-950 border-t border-gray-800 px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-white hover:bg-gray-800 px-4 py-3 rounded-lg text-sm font-medium transition-all"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#matches"
            onClick={() => setOpen(false)}
            className="mt-2 bg-green-500 hover:bg-green-400 text-white font-bold px-4 py-3 rounded-lg text-sm text-center transition-colors"
          >
            Watch Live
          </a>
        </div>
      )}
    </nav>
  );
}
