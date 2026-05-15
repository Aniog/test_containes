import { useState } from 'react';
import { Menu, X, PawPrint } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Available Dogs', href: '#dogs' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-stone-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2 text-amber-700 font-bold text-xl">
          <PawPrint className="w-6 h-6" />
          <span>Paws &amp; Tails</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-stone-600 hover:text-amber-700 font-medium transition-colors text-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded-full px-5 py-2 text-sm transition-colors"
        >
          Inquire Now
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-stone-700 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 px-4 pb-4">
          <ul className="flex flex-col gap-3 pt-3">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block text-stone-700 hover:text-amber-700 font-medium py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mt-4 block text-center bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded-full px-5 py-2 text-sm transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Inquire Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
