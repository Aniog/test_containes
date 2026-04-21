import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Specials', href: '#specials' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fffbf5]/90 backdrop-blur-sm border-b border-orange-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-3xl">🍕</span>
          <span
            className="text-2xl font-bold text-red-700"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Napoli's
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-stone-700 hover:text-red-600 font-medium transition-colors text-sm tracking-wide uppercase"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Order Now
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-stone-700 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#fffbf5] border-t border-orange-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-stone-700 hover:text-red-600 font-medium text-base"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-red-600 text-white text-center font-semibold px-5 py-2.5 rounded-full"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Order Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
