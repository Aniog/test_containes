import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { name: 'Shop', path: '/collection' },
  { name: 'Collections', path: '/collection' },
  { name: 'About', path: '/about' },
  { name: 'Journal', path: '/journal' },
];

export default function Navbar() {
  const { isScrolled } = useScrollPosition(80);
  const { cartCount, toggleCart } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleCartClick = (e) => {
    e.preventDefault();
    toggleCart();
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHomePage
            ? 'bg-cream-100 shadow-soft'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 -ml-2 text-charcoal hover:text-gold transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" strokeWidth={1.5} />
            </button>

            {/* Logo */}
            <Link 
              to="/" 
              className={`font-serif text-xl md:text-2xl tracking-ultra-wide font-semibold transition-colors ${
                isScrolled || !isHomePage ? 'text-charcoal' : 'text-charcoal'
              }`}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm tracking-wide uppercase transition-colors hover:text-gold ${
                    isScrolled || !isHomePage 
                      ? 'text-charcoal' 
                      : 'text-charcoal/80 hover:text-charcoal'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center gap-2 md:gap-4">
              <button
                className={`p-2 transition-colors hover:text-gold ${
                  isScrolled || !isHomePage ? 'text-charcoal' : 'text-charcoal/80 hover:text-charcoal'
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" strokeWidth={1.5} />
              </button>
              
              <button
                onClick={handleCartClick}
                className={`p-2 transition-colors hover:text-gold relative ${
                  isScrolled || !isHomePage ? 'text-charcoal' : 'text-charcoal/80 hover:text-charcoal'
                }`}
                aria-label="Shopping cart"
              >
                <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-gold text-white text-xs font-medium rounded-full flex items-center justify-center">
                    {cartCount > 9 ? '9+' : cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Hairline divider */}
        <div className="hairline" />
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div 
            className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-cream-100 shadow-lift animate-slide-in">
            <div className="flex items-center justify-between p-4 border-b border-sand">
              <span className="font-serif text-xl tracking-ultra-wide font-semibold text-charcoal">
                VELMORA
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-charcoal hover:text-gold transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>
            
            <div className="p-6">
              <div className="space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-lg tracking-wide uppercase text-charcoal hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              
              <div className="mt-12 pt-8 border-t border-sand">
                <p className="text-sm text-warm-gray tracking-wide uppercase mb-4">Help</p>
                <div className="space-y-4">
                  <Link
                    to="/shipping"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-charcoal hover:text-gold transition-colors"
                  >
                    Shipping & Returns
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-charcoal hover:text-gold transition-colors"
                  >
                    Contact Us
                  </Link>
                  <Link
                    to="/faq"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-charcoal hover:text-gold transition-colors"
                  >
                    FAQ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slide-in {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
