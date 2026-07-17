import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { getCartCount, openCart } = useCart();
  const location = useLocation();
  const cartCount = getCartCount();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
  ];

  const shouldBeTransparent = isHomePage && !isScrolled;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          shouldBeTransparent
            ? 'bg-transparent'
            : 'bg-ivory/95 backdrop-blur-md shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`lg:hidden p-2 -ml-2 ${shouldBeTransparent ? 'text-ivory' : 'text-charcoal'}`}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl tracking-wider absolute left-1/2 -translate-x-1/2 ${
                shouldBeTransparent ? 'text-ivory' : 'text-espresso'
              }`}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm tracking-wide font-body font-medium transition-colors duration-200 ${
                    shouldBeTransparent
                      ? 'text-ivory/90 hover:text-ivory'
                      : 'text-charcoal/70 hover:text-charcoal'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-1 md:gap-2">
              <button
                onClick={() => setIsSearchOpen(true)}
                className={`p-2 md:p-3 transition-colors duration-200 ${
                  shouldBeTransparent ? 'text-ivory' : 'text-charcoal'
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={openCart}
                className={`p-2 md:p-3 transition-colors duration-200 relative ${
                  shouldBeTransparent ? 'text-ivory' : 'text-charcoal'
                }`}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold-500 text-ivory text-[10px] font-medium rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-charcoal/50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-ivory animate-slide-in-right">
            <div className="flex items-center justify-between p-4 border-b border-sand">
              <span className="font-serif text-xl tracking-wider text-espresso">VELMORA</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-charcoal"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block py-4 text-lg font-serif text-espresso border-b border-sand/50"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[60] flex items-start justify-center pt-20 md:pt-32">
          <div
            className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
            onClick={() => setIsSearchOpen(false)}
          />
          <div className="relative w-full max-w-2xl mx-4 bg-ivory p-4 md:p-6 shadow-2xl">
            <div className="flex items-center border-b-2 border-espresso pb-3">
              <Search className="w-5 h-5 text-taupe mr-3" />
              <input
                type="text"
                placeholder="Search for jewelry..."
                className="flex-1 bg-transparent text-lg font-body text-charcoal placeholder:text-taupe focus:outline-none"
                autoFocus
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-2 text-taupe hover:text-charcoal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-taupe mt-4">Press Enter to search or ESC to close</p>
          </div>
        </div>
      )}
    </>
  );
}
