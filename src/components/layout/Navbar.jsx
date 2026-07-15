import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Shop', href: '/shop' },
  { name: 'Collections', href: '/shop' },
  { name: 'About', href: '/#about' },
  { name: 'Journal', href: '/#journal' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();
  const location = useLocation();

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

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-luxury',
          scrolled
            ? 'bg-cream-100/95 backdrop-blur-md shadow-card'
            : 'bg-transparent'
        )}
      >
        <nav className="max-w-[1440px] mx-auto flex items-center justify-between h-16 md:h-20 px-5 md:px-10 lg:px-16">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 -ml-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5 text-charcoal-800" />
            ) : (
              <Menu className="w-5 h-5 text-charcoal-800" />
            )}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={cn(
              'font-serif text-xl md:text-2xl tracking-[0.15em] transition-colors duration-300',
              scrolled ? 'text-charcoal-800' : 'text-charcoal-800'
            )}
          >
            VELMORA
          </Link>

          {/* Center links — desktop */}
          <div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  'text-body-sm uppercase tracking-[0.1em] transition-colors duration-300',
                  scrolled ? 'text-charcoal-700 hover:text-charcoal-900' : 'text-charcoal-600 hover:text-charcoal-900'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button
              className="p-2 -mr-2"
              aria-label="Search"
            >
              <Search className={cn('w-5 h-5 transition-colors', scrolled ? 'text-charcoal-700' : 'text-charcoal-700')} />
            </button>
            <button
              onClick={toggleCart}
              className="p-2 -mr-2 relative"
              aria-label="Cart"
            >
              <ShoppingBag className={cn('w-5 h-5 transition-colors', scrolled ? 'text-charcoal-700' : 'text-charcoal-700')} />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 flex items-center justify-center bg-gold-500 text-white text-[10px] font-medium rounded-full leading-none">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          'fixed inset-0 z-40 lg:hidden transition-all duration-400',
          mobileOpen ? 'visible' : 'invisible'
        )}
      >
        <div
          className={cn(
            'absolute inset-0 bg-charcoal-900/40 transition-opacity duration-400',
            mobileOpen ? 'opacity-100' : 'opacity-0'
          )}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            'absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-cream-100 shadow-elevated transition-transform duration-400 ease-luxury',
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="p-6 pt-20">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-heading-3 font-serif text-charcoal-800 hover:text-gold-500 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="hairline-divider mt-8 mb-6" />
            <p className="text-body-sm text-charcoal-400 uppercase tracking-wider">Help & Info</p>
            <div className="flex flex-col gap-4 mt-4">
              <span className="text-body text-charcoal-600">Shipping & Returns</span>
              <span className="text-body text-charcoal-600">Contact Us</span>
              <span className="text-body text-charcoal-600">FAQ</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
