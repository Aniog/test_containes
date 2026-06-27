import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import CartDrawer from './CartDrawer';

const Navbar = () => {
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
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${isScrolled || !isHome 
            ? 'bg-[var(--color-cream)] shadow-sm' 
            : 'bg-transparent'
          }
        `}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo */}
            <Link 
              to="/" 
              className={`
                font-serif text-2xl md:text-3xl font-medium tracking-wider
                transition-colors duration-300
                ${isScrolled || !isHome 
                  ? 'text-[var(--color-charcoal)]' 
                  : isHome && !isScrolled ? 'text-[var(--color-warm-white)]' 
                  : 'text-[var(--color-charcoal)]'
                }
              `}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`
                    font-sans text-sm tracking-wide
                    transition-colors duration-200
                    ${isScrolled || !isHome 
                      ? 'text-[var(--color-text-secondary)] hover:text-[var(--color-charcoal)]' 
                      : isHome && !isScrolled 
                        ? 'text-[var(--color-warm-white)]/80 hover:text-[var(--color-warm-white)]' 
                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-charcoal)]'
                    }
                  `}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <button 
                className={`
                  p-2 transition-colors duration-200
                  ${isScrolled || !isHome 
                    ? 'text-[var(--color-text-secondary)] hover:text-[var(--color-charcoal)]' 
                    : isHome && !isScrolled 
                      ? 'text-[var(--color-warm-white)]/80 hover:text-[var(--color-warm-white)]' 
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-charcoal)]'
                  }
                `}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              
              <button 
                className={`
                  p-2 relative transition-colors duration-200
                  ${isScrolled || !isHome 
                    ? 'text-[var(--color-text-secondary)] hover:text-[var(--color-charcoal)]' 
                    : isHome && !isScrolled 
                      ? 'text-[var(--color-warm-white)]/80 hover:text-[var(--color-warm-white)]' 
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-charcoal)]'
                  }
                `}
                onClick={() => setIsCartOpen(true)}
                aria-label="Open cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[var(--color-gold)] text-[var(--color-charcoal)] text-xs font-medium rounded-full flex items-center justify-center">
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
        <div className="fixed inset-0 z-[60] md:hidden">
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-0 left-0 bottom-0 w-80 bg-[var(--color-cream)] p-6 animate-slide-up">
            <div className="flex justify-end mb-8">
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-2xl text-[var(--color-charcoal)]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <CartDrawer />
    </>
  );
};

export default Navbar;