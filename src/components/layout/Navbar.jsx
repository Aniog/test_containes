import { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const navLinks = [
  { label: 'Biology', href: '#biology' },
  { label: 'Space', href: '#space' },
  { label: 'Environment', href: '#environment' },
  { label: 'Technology', href: '#technology' },
  { label: 'Health', href: '#health' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-forest text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-sage rounded-full p-1.5">
              <Leaf className="w-5 h-5 text-forest" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              Nature<span className="text-sage">Scope</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-sage transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Subscribe button */}
          <div className="hidden md:block">
            <a
              href="#newsletter"
              className="bg-sage text-forest text-sm font-semibold px-5 py-2 rounded-full hover:bg-white transition-colors"
            >
              Subscribe
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-forest border-t border-white/10 px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-2.5 text-sm font-medium text-white/80 hover:text-sage transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#newsletter"
            className="mt-3 block text-center bg-sage text-forest text-sm font-semibold px-5 py-2 rounded-full hover:bg-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Subscribe
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
