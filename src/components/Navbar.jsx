import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
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
        'fixed top-0 w-full z-50 transition-all duration-500 py-6 px-6 md:px-12 flex items-center justify-between',
        isScrolled || !isHome ? 'bg-white shadow-sm text-velmora-charcoal' : 'bg-transparent text-white'
      )}
    >
      {/* Left: Logo */}
      <div className="flex-1">
        <Link to="/" className="text-2xl font-serif tracking-widest-extra font-medium">
          VELMORA
        </Link>
      </div>

      {/* Center: Desktop Links */}
      <div className="hidden md:flex flex-1 justify-center space-x-10">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="text-xs uppercase tracking-widest-extra hover:opacity-70 transition-opacity"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Right: Icons */}
      <div className="flex-1 flex justify-end items-center space-x-6">
        <button className="hover:opacity-70 transition-opacity">
          <Search size={20} />
        </button>
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative hover:opacity-70 transition-opacity"
        >
          <ShoppingBag size={20} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-velmora-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
        <button
          className="md:hidden hover:opacity-70 transition-opacity"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white text-velmora-charcoal flex flex-col items-center py-8 space-y-6 md:hidden shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm uppercase tracking-widest-extra"
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
