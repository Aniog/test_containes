import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount, toggleCart } = useCart();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: '/shop', label: 'Shop' },
    { href: '/collections', label: 'Collections' },
    { href: '/about', label: 'About' },
    { href: '/journal', label: 'Journal' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled || !isHomePage
            ? 'bg-cream-50/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-luxury">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 -ml-2 text-charcoal-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-2xl md:text-3xl tracking-wide transition-colors duration-300 ${
                isScrolled || !isHomePage || isMobileMenuOpen
                  ? 'text-charcoal-900'
                  : 'text-charcoal-900'
              }`}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-xs font-sans font-medium tracking-widest uppercase transition-colors duration-200 hover:text-gold-600 ${
                    location.pathname === link.href
                      ? 'text-gold-600'
                      : 'text-charcoal-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button
                className={`p-2 transition-colors duration-200 hover:text-gold-600 ${
                  isScrolled || !isHomePage
                    ? 'text-charcoal-700'
                    : 'text-charcoal-800'
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                onClick={toggleCart}
                className={`relative p-2 transition-colors duration-200 hover:text-gold-600 ${
                  isScrolled || !isHomePage
                    ? 'text-charcoal-700'
                    : 'text-charcoal-800'
                }`}
                aria-label={`Shopping cart with ${itemCount} items`}
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold-600 text-white text-xs font-medium rounded-full flex items-center justify-center">
                    {itemCount > 9 ? '9+' : itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Hairline divider */}
        {!isScrolled && isHomePage && (
          <div className="hairline opacity-30" />
        )}
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-30 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-0 bg-cream-50 transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full pt-20 px-6">
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-lg font-serif tracking-wide transition-colors duration-200 ${
                    location.pathname === link.href
                      ? 'text-gold-600'
                      : 'text-charcoal-900'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pb-8">
              <div className="hairline mb-6" />
              <p className="text-xs text-charcoal-500 tracking-wider uppercase">
                Free Worldwide Shipping
              </p>
              <p className="text-xs text-charcoal-500 tracking-wider uppercase mt-1">
                30-Day Returns
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
