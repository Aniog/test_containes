import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setIsCartOpen, cartCount } = useCart();
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
        'fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4 md:px-12',
        isScrolled || !isHome ? 'bg-white text-[#1A1A1A] border-b border-stone-100' : 'bg-transparent text-white'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Logo */}
        <Link to="/" className="text-2xl font-serif tracking-widest uppercase">
          VELMORA
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-xs uppercase tracking-[0.2em] font-medium hover:opacity-70 transition-opacity"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <button className="hover:opacity-70 transition-opacity">
            <Search className="w-5 h-5 flex-shrink-0" />
          </button>
          <button 
            className="relative hover:opacity-70 transition-opacity"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag className="w-5 h-5 flex-shrink-0" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-[#B08D57] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-[60] p-6 flex flex-col">
          <div className="flex justify-end">
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X className="w-6 h-6 text-[#1A1A1A]" />
            </button>
          </div>
          <div className="flex flex-col space-y-8 mt-12 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-serif tracking-widest uppercase text-[#1A1A1A]"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
