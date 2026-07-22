import { useState } from 'react';
import { Menu, X, Microscope } from 'lucide-react';

const navLinks = [
  { label: 'Explore', href: '#explore' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Organisms', href: '#organisms' },
  { label: 'Science', href: '#science' },
  { label: 'About', href: '#about' },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cosmos-bg/80 backdrop-blur-md border-b border-cosmos-teal/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 text-cosmos-teal font-black text-xl tracking-tight">
          <Microscope className="w-6 h-6" />
          <span>MicroCosmos</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-cosmos-muted hover:text-cosmos-teal text-sm font-medium tracking-wide transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#explore"
          className="hidden md:inline-flex px-5 py-2 rounded-full bg-cosmos-teal text-cosmos-bg text-sm font-bold hover:bg-cosmos-cyan transition-colors"
        >
          Discover Now
        </a>

        <button
          className="md:hidden text-cosmos-muted hover:text-cosmos-teal transition-colors bg-transparent border-0 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-cosmos-surface border-t border-cosmos-teal/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-cosmos-muted hover:text-cosmos-teal text-sm font-medium transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#explore"
            className="mt-2 px-5 py-2 rounded-full bg-cosmos-teal text-cosmos-bg text-sm font-bold text-center hover:bg-cosmos-cyan transition-colors"
            onClick={() => setOpen(false)}
          >
            Discover Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
