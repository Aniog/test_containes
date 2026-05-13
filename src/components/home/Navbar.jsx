import { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Plants', href: '#plants' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fdf8f0]/90 backdrop-blur-sm border-b border-green-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <Leaf className="w-6 h-6 text-green-700" />
          <span className="font-serif font-bold text-xl text-[#5c3d2e]">Bloom & Grow</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[#5c3d2e] font-medium hover:text-green-700 transition-colors text-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#plants"
          className="hidden md:inline-block bg-green-700 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-green-800 transition-colors"
        >
          Shop Now
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#5c3d2e] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#fdf8f0] border-t border-green-100 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#5c3d2e] font-medium hover:text-green-700 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#plants"
            className="bg-green-700 text-white px-5 py-2 rounded-full text-sm font-medium text-center hover:bg-green-800 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Shop Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
