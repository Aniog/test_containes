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
    { name: 'Shop', href: '/shop' },
    { name: 'Collections', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Journal', href: '#' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12 py-4 md:py-6 flex items-center justify-between',
        isScrolled || !isHome
          ? 'bg-velmora-cream/95 backdrop-blur-sm border-b border-neutral-100 py-4 shadow-sm'
          : 'bg-transparent text-white'
      )}
    >
      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Logo */}
      <Link
        to="/"
        className={cn(
          'text-2xl md:text-3xl font-serif tracking-[0.2em] transition-colors',
          isScrolled || !isHome ? 'text-velmora-obsidian' : 'text-white'
        )}
      >
        VELMORA
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            className={cn(
              'text-sm uppercase tracking-widest hover:opacity-70 transition-opacity font-sans',
              isScrolled || !isHome ? 'text-velmora-obsidian' : 'text-white'
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-4 md:gap-6">
        <button
          className={cn(
            'hover:opacity-70 transition-opacity',
            isScrolled || !isHome ? 'text-velmora-obsidian' : 'text-white'
          )}
        >
          <Search className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button
          className={cn(
            'relative hover:opacity-70 transition-opacity',
            isScrolled || !isHome ? 'text-velmora-obsidian' : 'text-white'
          )}
          onClick={() => setIsCartOpen(true)}
        >
          <ShoppingBag className="w-5 h-5 md:w-6 md:h-6" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-velmora-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-velmora-cream z-[60] flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden',
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <button
          className="absolute top-6 left-6 text-velmora-obsidian"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X className="w-8 h-8" />
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-serif uppercase tracking-[0.2em] text-velmora-obsidian"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
