import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Shop', path: '/collection' },
    { name: 'Collections', path: '/collection' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' }
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          isScrolled 
            ? 'bg-cream-50/95 backdrop-blur-sm shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Left: Mobile menu + Desktop Nav */}
            <div className="flex items-center">
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden p-2 -ml-2"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5 text-charcoal-800" />
              </button>

              {/* Desktop Nav Links */}
              <div className="hidden md:flex items-center gap-8 ml-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="font-sans text-sm text-charcoal-700 hover:text-charcoal-900 transition-colors tracking-wide"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Center: Logo */}
            <Link 
              to="/" 
              className="absolute left-1/2 transform -translate-x-1/2 font-serif text-2xl md:text-3xl text-charcoal-800 tracking-wide"
            >
              VELMORA
            </Link>

            {/* Right: Icons */}
            <div className="flex items-center gap-4">
              <button 
                className="p-2 hover:bg-cream-100 rounded-full transition-colors hidden md:block"
                aria-label="Search"
              >
                <Search className="w-5 h-5 text-charcoal-700" />
              </button>
              <button 
                onClick={() => setIsCartOpen(true)}
                className="p-2 hover:bg-cream-100 rounded-full transition-colors relative"
                aria-label="Open cart"
              >
                <ShoppingBag className="w-5 h-5 text-charcoal-700" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-charcoal-800 text-cream-50 text-xs flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div 
            className="absolute inset-0 bg-charcoal-900/50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-80 bg-cream-50 animate-slide-in-right">
            <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal-200">
              <span className="font-serif text-xl text-charcoal-800">VELMORA</span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-cream-100 rounded-full transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-charcoal-600" />
              </button>
            </div>
            <div className="px-6 py-8">
              <div className="space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block font-serif text-xl text-charcoal-800 hover:text-gold-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
