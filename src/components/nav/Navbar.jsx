import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Tricks', href: '#tricks' },
  { label: 'Gear', href: '#gear' },
  { label: 'Community', href: '#community' },
  { label: 'About', href: '#about' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="font-display text-3xl text-skate-yellow tracking-widest leading-none">
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
                className="text-zinc-400 hover:text-skate-yellow text-sm font-bold uppercase tracking-widest transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#community"
          className="hidden md:inline-flex items-center bg-skate-yellow text-zinc-950 font-bold uppercase tracking-widest text-sm px-5 py-2 rounded-full hover:bg-yellow-300 transition"
        >
          Join the Crew
        </a>

        {/* Mobile menu toggle */}
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
              className="text-zinc-300 hover:text-skate-yellow font-bold uppercase tracking-widest text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#community"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center bg-skate-yellow text-zinc-950 font-bold uppercase tracking-widest text-sm px-5 py-2 rounded-full hover:bg-yellow-300 transition mt-2"
          >
            Join the Crew
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
