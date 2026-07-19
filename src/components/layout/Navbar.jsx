import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Shop', path: '/shop' },
    { label: 'Collections', path: '/shop' },
    { label: 'About', path: '/about' },
    { label: 'Journal', path: '/journal' },
  ];

  const isTransparent = isHome && !scrolled && !mobileOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isTransparent
          ? 'bg-transparent text-white'
          : 'bg-velmora-cream/95 backdrop-blur-sm text-velmora-espresso shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-xl md:text-2xl font-medium tracking-widest"
          >
            VELMORA
          </Link>

          {/* Center Nav - Desktop */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`text-xs font-sans font-medium tracking-widest uppercase transition-colors duration-300 ${
                  isTransparent
                    ? 'hover:text-velmora-gold'
                    : 'hover:text-velmora-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4 md:gap-6">
            <button
              className={`transition-colors duration-300 ${
                isTransparent ? 'hover:text-velmora-gold' : 'hover:text-velmora-gold'
              }`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsCartOpen(true)}
              className={`relative transition-colors duration-300 ${
                isTransparent ? 'hover:text-velmora-gold' : 'hover:text-velmora-gold'
              }`}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-velmora-gold text-white text-[10px] font-semibold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              className="md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-velmora-cream/98 backdrop-blur-md border-t border-velmora-border">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="block text-sm font-sans font-medium tracking-widest uppercase text-velmora-espresso hover:text-velmora-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
