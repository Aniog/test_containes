import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../lib/CartContext';
import { cn } from '../../lib/utils';

const Header = () => {
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

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 md:px-12',
        isScrolled || !isHome ? 'bg-white border-b border-neutral-100 py-3 shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className="z-50">
          <h1 className={cn(
            'text-2xl md:text-3xl font-serif tracking-widest',
            isScrolled || !isHome ? 'text-neutral-900' : 'text-white md:text-neutral-900'
          )}>
            VELMORA
          </h1>
        </Link>

        {/* Center: Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-12">
          {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className={cn(
                'text-sm uppercase tracking-widest hover:text-[#C5A059] transition-colors',
                isScrolled || !isHome ? 'text-neutral-600' : 'text-neutral-800'
              )}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Right: Icons */}
        <div className="flex items-center space-x-6">
          <button className={cn(
            'hover:text-[#C5A059] transition-colors',
            isScrolled || !isHome ? 'text-neutral-600' : 'text-neutral-800'
          )}>
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsCartOpen(true)}
            className={cn(
              'relative hover:text-[#C5A059] transition-colors',
              isScrolled || !isHome ? 'text-neutral-600' : 'text-neutral-800'
            )}
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#C5A059] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={cn('w-6 h-6', isScrolled || !isHome ? 'text-neutral-900' : 'text-white')} />
            ) : (
              <Menu className={cn('w-6 h-6', isScrolled || !isHome ? 'text-neutral-900' : 'text-white')} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 bg-white z-40 transition-transform duration-500 md:hidden flex flex-col items-center justify-center space-y-8',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            className="text-2xl font-serif uppercase tracking-widest text-neutral-800"
          >
            {item}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
