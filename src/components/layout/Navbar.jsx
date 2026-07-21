import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount, toggleCart } = useCart();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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
    { name: 'Shop', href: '/collection' },
    { name: 'Collections', href: '/collection' },
    { name: 'About', href: '/about' },
    { name: 'Journal', href: '/journal' },
  ];

  const shouldBeTransparent = isHomePage && !isScrolled && !isMobileMenuOpen;

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          shouldBeTransparent
            ? 'bg-transparent'
            : 'bg-ivory/95 backdrop-blur-sm shadow-soft'
        )}
      >
        <div className="container-main">
          <div className="flex items-center justify-between h-18 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={cn(
                'font-serif text-xl md:text-2xl tracking-[0.2em] transition-colors duration-300',
                shouldBeTransparent ? 'text-ivory' : 'text-espresso'
              )}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    'text-sm font-medium tracking-wide transition-colors duration-300 relative group',
                    shouldBeTransparent
                      ? 'text-ivory/90 hover:text-ivory'
                      : 'text-cocoa hover:text-espresso'
                  )}
                >
                  {link.name}
                  <span
                    className={cn(
                      'absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full',
                      shouldBeTransparent ? 'bg-ivory' : 'bg-champagne'
                    )}
                  />
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button
                className={cn(
                  'p-2 transition-colors duration-300',
                  shouldBeTransparent
                    ? 'text-ivory hover:text-ivory/80'
                    : 'text-cocoa hover:text-espresso'
                )}
                aria-label="Search"
              >
                <Search className="w-5 h-5" strokeWidth={1.5} />
              </button>

              <button
                onClick={toggleCart}
                className={cn(
                  'p-2 transition-colors duration-300 relative',
                  shouldBeTransparent
                    ? 'text-ivory hover:text-ivory/80'
                    : 'text-cocoa hover:text-espresso'
                )}
                aria-label={`Cart with ${itemCount} items`}
              >
                <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-champagne text-espresso text-xs font-medium rounded-full flex items-center justify-center animate-fade-in">
                    {itemCount > 9 ? '9+' : itemCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  'md:hidden p-2 transition-colors duration-300',
                  shouldBeTransparent
                    ? 'text-ivory hover:text-ivory/80'
                    : 'text-cocoa hover:text-espresso'
                )}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" strokeWidth={1.5} />
                ) : (
                  <Menu className="w-6 h-6" strokeWidth={1.5} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-ivory transition-all duration-500 md:hidden',
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                'font-serif text-3xl tracking-wide opacity-0 transition-all duration-300',
                isMobileMenuOpen && 'opacity-100'
              )}
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : '0ms',
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
