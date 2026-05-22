import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'Our Story', href: '#story' },
  { label: 'Why Us', href: '#features' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-brown/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="font-display text-2xl font-bold text-cream tracking-wide">
          Napoli's
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-cream/80 hover:text-warm-orange transition font-medium text-sm tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block bg-pizza-red text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-deep-red transition"
        >
          Order Now
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-cream p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-dark-brown border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-cream/80 hover:text-warm-orange transition font-medium"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-pizza-red text-white px-5 py-2 rounded-full text-sm font-semibold text-center hover:bg-deep-red transition"
            onClick={() => setOpen(false)}
          >
            Order Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
