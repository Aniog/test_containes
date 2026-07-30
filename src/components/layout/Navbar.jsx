import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Flavors', href: '#flavors' },
  { label: 'Our Story', href: '#story' },
  { label: 'Fun Facts', href: '#facts' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-3xl font-poppins font-black text-fanta-orange tracking-tight">
            fanta
          </span>
          <span className="text-2xl">🍊</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-poppins font-semibold text-fanta-dark hover:text-fanta-orange transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#flavors"
          className="hidden md:inline-block bg-fanta-orange text-white font-poppins font-bold rounded-full px-6 py-2 hover:bg-orange-600 transition-colors duration-200"
        >
          Find Your Flavor
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden bg-transparent border-none p-1 text-fanta-dark"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-orange-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-poppins font-semibold text-fanta-dark hover:text-fanta-orange transition-colors duration-200 text-lg"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#flavors"
            onClick={() => setOpen(false)}
            className="bg-fanta-orange text-white font-poppins font-bold rounded-full px-6 py-2 text-center hover:bg-orange-600 transition-colors duration-200"
          >
            Find Your Flavor
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
