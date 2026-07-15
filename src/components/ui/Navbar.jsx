import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '../../lib/utils.js';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { setIsCartOpen, cartCount } = useCart();

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
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 px-6 md:px-12 flex items-center justify-between',
        isScrolled || !isHome || isMobileMenuOpen
          ? 'bg-white text-black shadow-sm'
          : 'bg-transparent text-white'
      )}
    >
      <div className="flex-1 hidden md:flex items-center gap-8">
        {navLinks.slice(0, 2).map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="text-sm font-sans uppercase tracking-widest hover:opacity-70 transition-opacity"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="md:hidden flex-1">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <Link
        to="/"
        className="text-2xl md:text-3xl font-serif tracking-[0.2em] font-medium"
      >
        VELMORA
      </Link>

      <div className="flex-1 flex items-center justify-end gap-6 md:gap-8">
        <nav className="hidden md:flex items-center gap-8 mr-8">
          {navLinks.slice(2).map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm font-sans uppercase tracking-widest hover:opacity-70 transition-opacity"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <button className="hover:opacity-70 transition-opacity">
          <Search size={22} strokeWidth={1.5} />
        </button>
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative hover:opacity-70 transition-opacity"
        >
          <ShoppingBag size={22} strokeWidth={1.5} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-sans">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 flex flex-col p-8 gap-6 md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-lg font-serif uppercase tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
