import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Articles', href: '#articles' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const BakeryNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-warm-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="text-2xl font-playfair font-bold text-brown-dark">
            La Maison
          </span>
          <span className="text-amber text-2xl">✦</span>
          <span className="text-lg font-playfair text-brown-light italic">Bakery</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-brown font-medium hover:text-amber transition-colors text-sm tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block bg-amber text-warm-white rounded-full px-6 py-2 text-sm font-semibold hover:bg-amber-light transition-colors"
        >
          Order Now
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-brown-dark p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-warm-white border-t border-amber/20 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-brown font-medium hover:text-amber transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mt-4 inline-block bg-amber text-warm-white rounded-full px-6 py-2 text-sm font-semibold"
            onClick={() => setOpen(false)}
          >
            Order Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default BakeryNav;
