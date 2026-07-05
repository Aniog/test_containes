import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const navLinks = [
  { name: 'Shop', path: '/shop' },
  { name: 'Collections', path: '/shop' },
  { name: 'About', path: '/#about' },
  { name: 'Journal', path: '/#journal' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 -ml-2 text-charcoal-700"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-2xl lg:text-3xl font-medium tracking-wider text-charcoal-700"
          >
            VELMORA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="font-sans text-sm tracking-wider uppercase text-charcoal-600 hover:text-charcoal-700 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center space-x-4">
            <button
              className="p-2 text-charcoal-600 hover:text-charcoal-700 transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 text-charcoal-600 hover:text-charcoal-700 transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold-400 text-cream-50 text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-cream-50 border-t border-cream-200">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block font-sans text-base tracking-wider uppercase text-charcoal-700 hover:text-gold-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
