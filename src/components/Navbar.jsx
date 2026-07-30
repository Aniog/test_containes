import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Flavors', href: '#flavors' },
  { label: 'Our Story', href: '#story' },
  { label: 'Sustainability', href: '#sustainability' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="text-3xl font-black text-sprite-green tracking-tight font-poppins">
            SPRITE
          </span>
          <span className="text-xs font-bold text-sprite-lime uppercase tracking-widest hidden sm:block">
            ®
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-gray-700 font-semibold hover:text-sprite-green transition-colors text-sm uppercase tracking-wide font-poppins"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#flavors"
          className="hidden md:inline-flex items-center bg-sprite-green text-white rounded-full px-6 py-2 font-bold text-sm hover:bg-sprite-dark transition-colors font-poppins"
        >
          Find a Flavor
        </a>

        <button
          className="md:hidden text-gray-700 hover:text-sprite-green transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-gray-700 font-semibold hover:text-sprite-green transition-colors text-sm uppercase tracking-wide font-poppins"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#flavors"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center bg-sprite-green text-white rounded-full px-6 py-2 font-bold text-sm hover:bg-sprite-dark transition-colors font-poppins"
          >
            Find a Flavor
          </a>
        </div>
      )}
    </nav>
  );
}
