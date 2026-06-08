import { useState, useEffect } from 'react';
import { Fish, Menu, X, ShoppingCart } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Features', href: '#features' },
  { label: 'Categories', href: '#categories' },
  { label: 'Products', href: '#products' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <Fish className={`w-7 h-7 ${scrolled ? 'text-teal-700' : 'text-white'}`} />
          <span className={`text-xl font-extrabold tracking-tight ${scrolled ? 'text-teal-800' : 'text-white'}`}>
            CastMaster
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-amber-500 ${scrolled ? 'text-teal-800' : 'text-white'}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button className="bg-teal-700 hover:bg-teal-800 text-white rounded-full px-6 py-2 text-sm font-semibold transition-colors flex items-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            Shop Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-teal-800' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-teal-100 shadow-lg">
          <ul className="flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block px-6 py-3 text-teal-800 font-medium hover:bg-teal-50 hover:text-amber-600 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="px-6 pt-3">
              <button className="w-full bg-teal-700 hover:bg-teal-800 text-white rounded-full px-6 py-2 text-sm font-semibold transition-colors">
                Shop Now
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
