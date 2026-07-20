import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
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
    { name: 'Collections', path: '/shop/collections' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 px-6 md:px-12 flex items-center justify-between',
        isScrolled || !isHome ? 'bg-white text-zinc-900 shadow-sm py-4' : 'bg-transparent text-white'
      )}
    >
      {/* Left: Logo */}
      <Link to="/" className="text-2xl font-serif tracking-widest font-bold">
        VELMORA
      </Link>

      {/* Center: Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="uppercase-spaced text-xs hover:opacity-70 transition-soft"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-6">
        <button className="hover:opacity-70 transition-soft">
          <Search size={20} />
        </button>
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative hover:opacity-70 transition-soft"
        >
          <ShoppingBag size={20} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {cartCount}
            </span>
          )}
        </button>
        <button
          className="md:hidden hover:opacity-70 transition-soft"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white text-zinc-900 border-t flex flex-col p-6 gap-4 md:hidden animate-fade-in shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="uppercase-spaced text-sm py-2"
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
