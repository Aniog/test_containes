import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || !isHome
            ? 'bg-velmora-cream/95 backdrop-blur-md shadow-soft'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-velmora-charcoal" />
              ) : (
                <Menu className="w-6 h-6 text-velmora-charcoal" />
              )}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="font-serif text-2xl lg:text-3xl tracking-widest text-velmora-charcoal"
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="font-sans text-sm tracking-wider text-velmora-charcoal/80 hover:text-velmora-gold transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-6">
              <button
                className="p-2 hover:text-velmora-gold transition-colors duration-300"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                className="p-2 hover:text-velmora-gold transition-colors duration-300 relative"
                onClick={() => setIsCartOpen(true)}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-velmora-gold text-white text-xs rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-20 left-0 right-0 bg-velmora-cream shadow-soft-lg transition-all duration-300 ${
            isMobileMenuOpen
              ? 'opacity-100 visible translate-y-0'
              : 'opacity-0 invisible -translate-y-4'
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block font-sans text-base tracking-wider text-velmora-charcoal/80 hover:text-velmora-gold transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-20" />
    </>
  );
}