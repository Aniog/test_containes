import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import CartDrawer from '@/components/layout/CartDrawer';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { cartCount, isCartOpen, setIsCartOpen } = useCart();
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';

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
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/shop?category=all' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isHomePage && !isScrolled
            ? 'bg-transparent'
            : 'bg-cream-100 shadow-subtle'
        }`}
      >
        <nav className="container-wide">
          <div className="flex items-center justify-between h-[72px]">
            {/* Left: Logo */}
            <Link 
              to="/" 
              className={`font-serif text-2xl tracking-ultra-wide transition-colors duration-300 ${
                isHomePage && !isScrolled ? 'text-white' : 'text-charcoal'
              }`}
            >
              VELMORA
            </Link>

            {/* Center: Navigation Links - Desktop */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`nav-link transition-colors duration-300 ${
                    isHomePage && !isScrolled ? 'text-white/90 hover:text-white' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right: Icons */}
            <div className="flex items-center gap-6">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`p-2 transition-colors duration-300 ${
                  isHomePage && !isScrolled
                    ? 'text-white hover:text-gold'
                    : 'text-charcoal hover:text-gold'
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" strokeWidth={1.5} />
              </button>

              <button
                onClick={() => setIsCartOpen(true)}
                className={`p-2 transition-colors duration-300 relative ${
                  isHomePage && !isScrolled
                    ? 'text-white hover:text-gold'
                    : 'text-charcoal hover:text-gold'
                }`}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-white text-xs font-medium rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 md:hidden transition-colors duration-300 ${
                  isHomePage && !isScrolled
                    ? 'text-white hover:text-gold'
                    : 'text-charcoal hover:text-gold'
                }`}
                aria-label="Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" strokeWidth={1.5} />
                ) : (
                  <Menu className="w-5 h-5" strokeWidth={1.5} />
                )}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {isSearchOpen && (
            <div className="absolute left-0 right-0 top-full bg-cream-100 border-t border-taupe p-4 animate-slide-down">
              <div className="container-narrow">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal-light" strokeWidth={1.5} />
                  <input
                    type="text"
                    placeholder="Search for earrings, necklaces, huggies..."
                    className="w-full pl-12 pr-4 py-3 bg-white border border-taupe focus:border-gold focus:outline-none transition-colors"
                    autoFocus
                  />
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        <div
          className={`absolute inset-0 bg-charcoal/50 transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 bottom-0 w-80 bg-cream-100 shadow-hover transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full p-8">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="self-end p-2 text-charcoal hover:text-gold transition-colors"
            >
              <X className="w-6 h-6" strokeWidth={1.5} />
            </button>

            <div className="flex flex-col gap-6 mt-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="font-serif text-2xl text-charcoal hover:text-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Cart Drawer */}
      <CartDrawer />
    </>
  );
};

export default Navigation;
