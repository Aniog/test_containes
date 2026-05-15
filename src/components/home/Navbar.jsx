import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Our Story', href: '#story' },
  { label: 'Butter', href: '#butter' },
  { label: 'Cheese', href: '#cheese' },
  { label: 'Recipes', href: '#recipes' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm shadow-sm border-b border-brown/10">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="font-playfair text-2xl font-bold text-brown-dark tracking-tight">
          Creamery
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-warm-gray hover:text-brown-dark font-medium text-sm transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#recipes"
          className="hidden md:inline-block bg-butter hover:bg-butter-dark text-brown-dark font-semibold text-sm px-5 py-2 rounded-full transition-colors"
        >
          Shop Now
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-brown-dark p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream border-t border-brown/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-warm-gray hover:text-brown-dark font-medium text-base transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#recipes"
            className="bg-butter hover:bg-butter-dark text-brown-dark font-semibold text-sm px-5 py-2 rounded-full transition-colors text-center"
            onClick={() => setOpen(false)}
          >
            Shop Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
