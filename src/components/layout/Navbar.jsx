import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

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
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 px-6 md:px-12 flex items-center justify-between',
        isScrolled || !isHome ? 'bg-white shadow-sm py-3' : 'bg-transparent'
      )}
    >
      {/* Left Links */}
      <div className="hidden lg:flex items-center space-x-8">
        {navLinks.slice(0, 2).map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={cn(
              'text-sm uppercase tracking-velmora transition-colors hover:text-velmora-gold',
              isScrolled || !isHome ? 'text-charcoal' : 'text-white'
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="lg:hidden"
        onClick={() => setIsMobileMenuOpen(true)}
      >
        <Menu className={cn('w-6 h-6', isScrolled || !isHome ? 'text-charcoal' : 'text-white')} />
      </button>

      {/* Center Logo */}
      <Link to="/" className="absolute left-1/2 -translate-x-1/2">
        <h1
          className={cn(
            'text-2xl md:text-3xl font-serif tracking-widest transition-colors',
            isScrolled || !isHome ? 'text-charcoal' : 'text-white'
          )}
        >
          VELMORA
        </h1>
      </Link>

      {/* Right Icons / Links */}
      <div className="flex items-center space-x-6">
        <div className="hidden lg:flex items-center space-x-8 mr-8">
          {navLinks.slice(2).map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-sm uppercase tracking-velmora transition-colors hover:text-velmora-gold',
                isScrolled || !isHome ? 'text-charcoal' : 'text-white'
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        <button className="hidden md:block">
          <Search className={cn('w-5 h-5', isScrolled || !isHome ? 'text-charcoal' : 'text-white')} />
        </button>
        
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative group"
        >
          <ShoppingBag className={cn('w-5 h-5', isScrolled || !isHome ? 'text-charcoal' : 'text-white')} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-velmora-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-white z-[60] transition-transform duration-500 lg:hidden',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="p-6 flex justify-between items-center border-b border-velmora-divider">
          <h2 className="text-xl font-serif tracking-widest">VELMORA</h2>
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <X className="w-6 h-6 text-charcoal" />
          </button>
        </div>
        <div className="p-8 flex flex-col space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-serif tracking-velmora text-charcoal"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
