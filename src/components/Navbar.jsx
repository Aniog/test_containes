import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-12 py-4",
        isScrolled || mobileMenuOpen || !isHome
          ? "bg-white text-black shadow-sm"
          : "bg-transparent text-white"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-serif tracking-[0.2em] font-medium">
          VELMORA
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10 text-sm uppercase tracking-[0.15em] font-medium">
          <Link to="/shop" className="hover:opacity-60 transition-opacity">Shop</Link>
          <Link to="/collections" className="hover:opacity-60 transition-opacity">Collections</Link>
          <Link to="/about" className="hover:opacity-60 transition-opacity">About</Link>
          <Link to="/journal" className="hover:opacity-60 transition-opacity">Journal</Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-5">
          <button className="hover:opacity-60 transition-opacity">
            <Search className="w-5 h-5" />
          </button>
          <button 
            className="relative hover:opacity-60 transition-opacity"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
          <button 
            className="md:hidden hover:opacity-60 transition-opacity"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "absolute top-full left-0 w-full bg-white text-black transition-all duration-300 overflow-hidden md:hidden",
          mobileMenuOpen ? "max-h-[400px] border-b" : "max-h-0"
        )}
      >
        <div className="p-8 flex flex-col space-y-6 text-center uppercase tracking-widest text-sm font-medium">
          <Link to="/shop" onClick={() => setMobileMenuOpen(false)}>Shop</Link>
          <Link to="/collections" onClick={() => setMobileMenuOpen(false)}>Collections</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link to="/journal" onClick={() => setMobileMenuOpen(false)}>Journal</Link>
        </div>
      </div>
    </nav>
  );
};
