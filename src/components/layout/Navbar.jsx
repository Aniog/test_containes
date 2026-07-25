import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { label: 'Scores', href: '#scores' },
  { label: 'Teams', href: '#teams' },
  { label: 'News', href: '#news' },
  { label: 'Standings', href: '#standings' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-pitch/95 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 no-underline">
            <div className="w-8 h-8 bg-soccer-green rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-black text-xl tracking-tight">
              KICK<span className="text-soccer-green">OFF</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-400 hover:text-white text-sm font-semibold uppercase tracking-widest transition-colors no-underline"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button className="bg-soccer-green hover:bg-soccer-green-light text-white text-sm font-bold px-5 py-2 rounded-lg transition-colors">
              Watch Live
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-gray-400 hover:text-white bg-transparent border-0 p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-pitch-card border-t border-gray-800 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-300 hover:text-white text-sm font-semibold uppercase tracking-widest no-underline"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button className="bg-soccer-green hover:bg-soccer-green-light text-white text-sm font-bold px-5 py-2 rounded-lg transition-colors w-full mt-2">
            Watch Live
          </button>
        </div>
      )}
    </header>
  );
}
