import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'Our Story', href: '#story' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a0a00]/90 backdrop-blur-sm border-b border-orange-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <span className="text-3xl">🍗</span>
          <span className="text-xl font-extrabold text-orange-400 tracking-tight">Cluck & Crisp</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-orange-100 hover:text-orange-400 font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#menu"
          className="hidden md:inline-block bg-orange-500 hover:bg-orange-400 text-white font-bold px-5 py-2 rounded-full text-sm transition-colors"
        >
          Order Now
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-orange-300 hover:text-orange-400"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#1a0a00] border-t border-orange-900/30 px-4 pb-4">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-orange-100 hover:text-orange-400 font-medium text-base"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#menu"
                onClick={() => setOpen(false)}
                className="inline-block bg-orange-500 hover:bg-orange-400 text-white font-bold px-5 py-2 rounded-full text-sm transition-colors"
              >
                Order Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
