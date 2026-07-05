import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';

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

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-12 py-4 flex items-center justify-between',
          isScrolled || !isHome
            ? 'bg-secondary/90 backdrop-blur-md border-b border-border py-3'
            : 'bg-transparent'
        )}
      >
        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className={cn('w-6 h-6', !isScrolled && isHome ? 'text-white' : 'text-primary')} />
        </button>

        {/* Logo */}
        <Link to="/" className="flex-1 md:flex-none text-center md:text-left">
          <span className={cn(
            'text-2xl font-serif tracking-widest',
            !isScrolled && isHome ? 'text-white' : 'text-primary'
          )}>
            VELMORA
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-sm uppercase tracking-widest hover:opacity-70 transition-opacity',
                !isScrolled && isHome ? 'text-white' : 'text-primary'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <button className="p-2">
            <Search className={cn('w-5 h-5', !isScrolled && isHome ? 'text-white' : 'text-primary')} />
          </button>
          <button
            className="p-2 relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag className={cn('w-5 h-5', !isScrolled && isHome ? 'text-white' : 'text-primary')} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-secondary flex flex-col p-6 animate-in slide-in-from-left duration-300">
          <div className="flex items-center justify-between mb-12">
            <span className="text-2xl font-serif tracking-widest">VELMORA</span>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-2xl font-serif tracking-widest uppercase"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
