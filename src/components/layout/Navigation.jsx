// Velmora Fine Jewelry - Navigation Component
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { getCartCount, openCart } = useCart();
  const cartCount = getCartCount();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Shop', href: '/collections/all' },
    { name: 'Collections', href: '/collections' },
    { name: 'About', href: '/about' },
    { name: 'Journal', href: '/journal' },
  ];

  const shouldBeTransparent = isHomePage && !isScrolled;

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          shouldBeTransparent
            ? 'bg-transparent'
            : 'bg-[#FAF8F5] shadow-sm'
        )}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={cn(
                'font-serif text-xl md:text-2xl tracking-[0.15em] transition-colors duration-300',
                shouldBeTransparent ? 'text-white' : 'text-[#1A1A1A]'
              )}
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    'text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-300 hover:text-[#B8860B]',
                    shouldBeTransparent
                      ? 'text-white/90'
                      : 'text-[#1A1A1A]'
                  )}
                  style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <button
                className={cn(
                  'p-2 transition-colors duration-300 hover:text-[#B8860B]',
                  shouldBeTransparent ? 'text-white' : 'text-[#1A1A1A]'
                )}
                aria-label="Search"
              >
                <Search size={20} strokeWidth={1.5} />
              </button>

              {/* Cart */}
              <button
                onClick={openCart}
                className={cn(
                  'p-2 transition-colors duration-300 hover:text-[#B8860B] relative',
                  shouldBeTransparent ? 'text-white' : 'text-[#1A1A1A]'
                )}
                aria-label="Open cart"
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#B8860B] text-white text-xs font-medium rounded-full flex items-center justify-center">
                    {cartCount > 9 ? '9+' : cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  'p-2 transition-colors duration-300 md:hidden',
                  shouldBeTransparent ? 'text-white' : 'text-[#1A1A1A]'
                )}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileMenuOpen ? (
                  <X size={24} strokeWidth={1.5} />
                ) : (
                  <Menu size={24} strokeWidth={1.5} />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-[#FAF8F5] transition-transform duration-300 md:hidden',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-2xl font-serif tracking-[0.1em] text-[#1A1A1A] hover:text-[#B8860B] transition-colors"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="mt-auto pb-8">
            <div className="divider mb-6" />
            <p className="text-xs text-[#6B6560] tracking-[0.1em] uppercase">
              Fine Jewelry Since 2019
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;
