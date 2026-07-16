import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Shop', path: '/shop' },
  { name: 'Collections', path: '/collections' },
  { name: 'About', path: '/about' },
  { name: 'Journal', path: '/journal' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled || !isHome
          ? 'bg-cream-50/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 -ml-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-charcoal-900" />
            ) : (
              <Menu className="w-5 h-5 text-charcoal-900" />
            )}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-2xl md:text-3xl font-light tracking-wider text-charcoal-900 hover:text-gold-600 transition-colors"
          >
            VELMORA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'font-sans text-xs tracking-ultra-wide uppercase transition-colors duration-300',
                  location.pathname === link.path
                    ? 'text-gold-600'
                    : 'text-charcoal-700 hover:text-gold-500'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button
              className="p-2 hover:text-gold-500 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-charcoal-700" />
            </button>

            <button
              onClick={toggleCart}
              className="p-2 relative hover:text-gold-500 transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingBag className="w-5 h-5 text-charcoal-700" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold-500 text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden fixed inset-0 top-16 bg-cream-50/98 backdrop-blur-lg transition-all duration-300 ease-in-out',
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 pb-20">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.path}
              className="font-serif text-3xl text-charcoal-900 hover:text-gold-500 transition-colors"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
