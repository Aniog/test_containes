import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';

const Navigation = () => {
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

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between',
        isScrolled || !isHome ? 'bg-white text-primary shadow-sm' : 'bg-transparent text-white'
      )}
    >
      {/* Left: Logo */}
      <div className="flex-1">
        <Link to="/" className="text-2xl font-serif tracking-widest font-bold">
          VELMORA
        </Link>
      </div>

      {/* Center: Links */}
      <div className="hidden md:flex items-center gap-8 flex-1 justify-center uppercase tracking-widest text-[10px] font-semibold">
        <Link to="/shop" className="hover:text-accent transition-colors">Shop</Link>
        <Link to="/#" className="hover:text-accent transition-colors">Collections</Link>
        <Link to="/#" className="hover:text-accent transition-colors">About</Link>
        <Link to="/#" className="hover:text-accent transition-colors">Journal</Link>
      </div>

      {/* Right: Icons */}
      <div className="flex-1 flex items-center justify-end gap-4">
        <button className="hover:text-accent transition-colors">
          <Search size={20} strokeWidth={1.5} />
        </button>
        <button 
          onClick={() => setIsCartOpen(true)}
          className="relative hover:text-accent transition-colors"
        >
          <ShoppingBag size={20} strokeWidth={1.5} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {cartCount}
            </span>
          )}
        </button>
        <button 
          className="md:hidden hover:text-accent transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white text-primary border-t p-6 flex flex-col gap-6 md:hidden shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
          <Link to="/shop" className="uppercase tracking-widest text-xs font-semibold">Shop</Link>
          <Link to="/#" className="uppercase tracking-widest text-xs font-semibold">Collections</Link>
          <Link to="/#" className="uppercase tracking-widest text-xs font-semibold">About</Link>
          <Link to="/#" className="uppercase tracking-widest text-xs font-semibold">Journal</Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
