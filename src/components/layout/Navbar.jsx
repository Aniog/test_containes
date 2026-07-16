import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils.js';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setIsCartOpen, cartItems } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-4 flex items-center justify-between',
        isScrolled || !isHome ? 'bg-white text-primary shadow-sm' : 'bg-transparent text-white'
      )}
    >
      <div className="flex items-center space-x-4 md:space-x-0">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <Link
          to="/"
          className="font-serif text-2xl md:text-3xl tracking-[0.2em] font-medium"
        >
          VELMORA
        </Link>
      </div>

      <div className="hidden md:flex items-center space-x-10">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="text-xs uppercase tracking-widest-plus hover:opacity-70 transition-opacity font-medium"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center space-x-6">
        <button className="hidden md:block hover:opacity-70">
          <Search size={20} />
        </button>
        <button onClick={() => setIsCartOpen(true)} className="flex items-center space-x-1 hover:opacity-70 relative">
          <ShoppingBag size={20} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-2 bg-accent text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white text-primary p-6 md:hidden flex flex-col space-y-4 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm uppercase tracking-widest-plus py-2"
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
