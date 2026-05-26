import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTheme, themes } from '@/context/ThemeContext';

const navLinks = [
  { label: 'Tricks', href: '#tricks' },
  { label: 'Gear', href: '#gear' },
  { label: 'Community', href: '#community' },
  { label: 'About', href: '#about' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
      {/* Theme switcher bar */}
      <div className="border-b border-zinc-800 px-6 md:px-12 py-1.5 flex items-center gap-1.5">
        <span className="text-zinc-600 text-xs font-bold uppercase tracking-widest mr-2 hidden sm:block">
          Theme:
        </span>
        {Object.values(themes).map((t) => (
          <NavLink
            key={t.key}
            to={t.path}
            title={t.name}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest transition-all border ${
              theme.key === t.key
                ? 'border-zinc-500 text-zinc-100 bg-zinc-800'
                : 'border-transparent text-zinc-500 hover:text-zinc-300'
            }`}
          >
            <span
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ backgroundColor: t.color }}
            />
            <span className="hidden sm:inline">{t.name}</span>
          </NavLink>
        ))}
      </div>

      {/* Main nav row */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-14">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="font-display text-3xl tracking-widest leading-none accent-text">
            SKATE
          </span>
          <span className="hidden sm:block text-zinc-500 text-xs font-bold uppercase tracking-widest mt-1">
            Ride Your Way
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-zinc-400 hover-accent-text text-sm font-bold uppercase tracking-widest transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#community"
          className="hidden md:inline-flex items-center accent-bg accent-text-on font-bold uppercase tracking-widest text-sm px-5 py-2 rounded-full hover-accent-bg transition"
        >
          Join the Crew
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-zinc-100 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-zinc-300 hover-accent-text font-bold uppercase tracking-widest text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#community"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center accent-bg accent-text-on font-bold uppercase tracking-widest text-sm px-5 py-2 rounded-full transition mt-2"
          >
            Join the Crew
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

