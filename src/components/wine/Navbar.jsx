import { useState } from 'react';
import { Menu, X, Wine } from 'lucide-react';

const navLinks = [
  { label: 'Our Story', href: '#story' },
  { label: 'Collection', href: '#collection' },
  { label: 'Regions', href: '#regions' },
  { label: 'Pairings', href: '#pairings' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-wine-deep/90 backdrop-blur-md border-b border-wine-border">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 text-wine-cream font-serif text-xl font-semibold tracking-wide">
          <Wine className="w-5 h-5 text-wine-gold" />
          Vino
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-wine-muted hover:text-wine-cream text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#collection"
          className="hidden md:inline-block border border-wine-gold text-wine-gold hover:bg-wine-gold/10 px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-200"
        >
          Shop Now
        </a>

        <button
          className="md:hidden text-wine-cream bg-transparent border-none p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-wine-deep border-t border-wine-border px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-wine-muted hover:text-wine-cream text-base font-medium tracking-wide transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#collection"
            onClick={() => setOpen(false)}
            className="border border-wine-gold text-wine-gold text-center px-5 py-2 rounded-full text-sm font-semibold tracking-wide mt-2"
          >
            Shop Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
