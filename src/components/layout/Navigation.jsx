import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navigation = () => {
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
    setIsSearchOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Shop', href: '/shop' },
    { name: 'Collections', href: '/collections' },
    { name: 'About', href: '/about' },
    { name: 'Journal', href: '/journal' },
  ];

  const isTransparent = isHomePage && !isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          isTransparent
            ? 'bg-transparent'
            : 'bg-charcoal shadow-soft'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 -ml-2 ${
                isTransparent ? 'text-ivory' : 'text-ivory'
              }`}
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Left Navigation - Desktop */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-200 hover:opacity-70 ${
                    isTransparent ? 'text-ivory' : 'text-ivory'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl tracking-[0.15em] absolute left-1/2 transform -translate-x-1/2 ${
                isTransparent ? 'text-ivory' : 'text-ivory'
              }`}
            >
              VELMORA
            </Link>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <button
                className={`p-2 -mr-2 transition-opacity duration-200 hover:opacity-70 ${
                  isTransparent ? 'text-ivory' : 'text-ivory'
                }`}
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Cart */}
              <button
                className={`p-2 -mr-2 relative transition-opacity duration-200 hover:opacity-70 ${
                  isTransparent ? 'text-ivory' : 'text-ivory'
                }`}
                onClick={openCart}
                aria-label="Open cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-charcoal text-[10px] font-semibold rounded-full flex items-center justify-center">
                    {cartCount > 9 ? '9+' : cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Second Row */}
        <div className="hidden md:block border-t border-sand/10">
          <div className="max-w-[1440px] mx-auto px-8">
            <nav className="flex items-center justify-center gap-8 h-10">
              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-xs font-medium tracking-[0.15em] uppercase text-ivory/80 transition-colors duration-200 hover:text-ivory"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[60] transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div
          className="absolute inset-0 bg-charcoal/60"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div className="absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-ivory p-6 pt-8">
          <button
            className="absolute top-4 right-4 p-2 text-charcoal"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>

          <Link
            to="/"
            className="font-serif text-2xl tracking-[0.15em] text-charcoal block mb-8"
          >
            VELMORA
          </Link>

          <nav className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block py-3 text-sm font-medium tracking-[0.1em] uppercase text-charcoal border-b border-sand"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-8 pt-8 border-t border-sand">
            <p className="text-xs text-warm-gray tracking-wide">
              Free Worldwide Shipping
            </p>
            <p className="text-xs text-warm-gray tracking-wide mt-1">
              30-Day Returns
            </p>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      <div
        className={`fixed inset-0 z-[60] transform transition-opacity duration-300 ${
          isSearchOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm"
          onClick={() => setIsSearchOpen(false)}
        />
        <div className="absolute top-0 left-0 right-0 bg-ivory p-4 pt-20">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-warm-gray" />
              <input
                type="text"
                placeholder="Search for jewelry..."
                className="w-full pl-12 pr-4 py-4 bg-transparent border-b-2 border-charcoal text-lg text-charcoal placeholder:text-warm-gray focus:outline-none font-sans"
                autoFocus={isSearchOpen}
              />
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-warm-gray hover:text-charcoal"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
