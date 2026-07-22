import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
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
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-12 py-4 md:py-6 flex items-center justify-between",
        isScrolled || !isHome ? "bg-background/95 backdrop-blur-sm border-b border-border py-4" : "bg-transparent text-white"
      )}
    >
      {/* Left: Logo */}
      <Link to="/" className="text-2xl md:text-3xl font-serif tracking-widest font-medium">
        VELMORA
      </Link>

      {/* Center: Desktop Links */}
      <div className="hidden md:flex items-center space-x-10">
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            to={link.path} 
            className="text-xs uppercase tracking-ultra-wide font-medium hover:opacity-70 transition-opacity"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Right: Icons */}
      <div className="flex items-center space-x-6">
        <button className="hover:opacity-70 transition-opacity hidden sm:block">
          <Search className="w-5 h-5" />
        </button>
        <button 
          onClick={() => setIsCartOpen(true)}
          className="relative hover:opacity-70 transition-opacity"
        >
          <ShoppingBag className="w-5 h-5 text-accent" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
        <button 
          className="md:hidden hover:opacity-70 transition-opacity"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-b border-border p-6 flex flex-col space-y-4 md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="text-sm uppercase tracking-ultra-wide font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button className="flex items-center space-x-2 text-sm uppercase tracking-ultra-wide font-medium py-2">
            <Search className="w-4 h-4" />
            <span>Search</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
