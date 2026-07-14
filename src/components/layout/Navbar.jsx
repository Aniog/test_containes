import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const navLinks = [
  { to: '/shop', label: 'Shop' },
  { to: '/collections', label: 'Collections' },
  { to: '/about', label: 'About' },
  { to: '/journal', label: 'Journal' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

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

  const showTransparent = isHome && !isScrolled;

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-silk',
          showTransparent
            ? 'bg-transparent'
            : 'bg-velmora-ivory/95 backdrop-blur-sm shadow-sm'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={cn(
                'md:hidden p-2 transition-colors',
                showTransparent ? 'text-white' : 'text-velmora-espresso'
              )}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={cn(
                'font-serif text-xl md:text-2xl tracking-extra-wide transition-colors',
                showTransparent ? 'text-white' : 'text-velmora-charcoal'
              )}
            >
              VELMORA
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    'text-sm tracking-wider uppercase transition-colors hover:text-velmora-gold',
                    showTransparent
                      ? 'text-white/90 hover:text-white'
                      : 'text-velmora-espresso'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <button
                className={cn(
                  'p-2 transition-colors',
                  showTransparent ? 'text-white' : 'text-velmora-espresso',
                  'hover:text-velmora-gold'
                )}
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <button
                onClick={() => setIsOpen(true)}
                className={cn(
                  'p-2 transition-colors relative',
                  showTransparent ? 'text-white' : 'text-velmora-espresso',
                  'hover:text-velmora-gold'
                )}
                aria-label="Cart"
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-velmora-gold text-white text-xs rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-velmora-ivory">
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-12">
              <span className="font-serif text-2xl tracking-extra-wide text-velmora-charcoal">
                VELMORA
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-velmora-espresso"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="font-serif text-3xl text-velmora-espresso hover:text-velmora-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
