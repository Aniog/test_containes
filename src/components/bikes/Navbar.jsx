import { useState } from 'react';
import { Menu, X, Bike } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Categories', href: '#categories' },
  { label: 'Featured', href: '#featured' },
  { label: 'Why Bikes', href: '#why' },
  { label: 'Reviews', href: '#reviews' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#111111]/90 backdrop-blur-md border-b border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 text-neutral-100 hover:text-orange-500 transition-colors">
          <Bike className="w-7 h-7 text-orange-500" />
          <span className="text-xl font-extrabold tracking-tight">VeloRide</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-neutral-400 hover:text-orange-500 transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#featured"
          className="hidden md:inline-flex bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-5 py-2 rounded-full transition-all duration-200 shadow-lg shadow-orange-500/20"
        >
          Shop Now
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-neutral-100 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#1a1a1a] border-t border-[#2a2a2a] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-neutral-300 hover:text-orange-500 font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#featured"
            onClick={() => setOpen(false)}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-5 py-2 rounded-full text-center transition-all duration-200"
          >
            Shop Now
          </a>
        </div>
      )}
    </nav>
  );
}
