import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/lib/CartContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { setIsCartOpen, cartCount } = useCart();

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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between',
        isScrolled || !isHome
          ? 'bg-white border-b border-[#E5E5E5] text-[#1A1A1A]'
          : 'bg-transparent text-white'
      )}
    >
      <div className="flex-1 hidden md:flex gap-8 items-center text-sm font-medium tracking-wide">
        <Link to="/shop" className="hover:opacity-60 transition-opacity">SHOP</Link>
        <Link to="/collections" className="hover:opacity-60 transition-opacity">COLLECTIONS</Link>
      </div>

      <div className="md:flex gap-8 items-center text-sm font-medium tracking-wide hidden">
        {/* Journals link would go here if center nav was needed, but instructions said left center right */}
      </div>

      <Link to="/" className="flex-1 text-center md:flex-none">
        <span className="text-2xl font-serif tracking-widest font-medium">VELMORA</span>
      </Link>

      <div className="flex-1 hidden md:flex justify-end gap-6 items-center">
        <Link to="/about" className="text-sm font-medium tracking-wide hover:opacity-60 transition-opacity">ABOUT</Link>
        <Link to="/journal" className="text-sm font-medium tracking-wide hover:opacity-60 transition-opacity">JOURNAL</Link>
        <button className="hover:opacity-60 transition-opacity">
          <Search size={20} strokeWidth={1.5} />
        </button>
        <button onClick={() => setIsCartOpen(true)} className="hover:opacity-60 transition-opacity relative">
          <ShoppingBag size={20} strokeWidth={1.5} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-[#D4AF37] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden flex items-center justify-between w-full">
        <button onClick={() => setIsMobileMenuOpen(true)}>
          <Menu size={24} />
        </button>
        <Link to="/" className="absolute left-1/2 -translate-x-1/2">
          <span className="text-xl font-serif tracking-widest font-medium">VELMORA</span>
        </Link>
        <button onClick={() => setIsCartOpen(true)} className="relative">
          <ShoppingBag size={24} strokeWidth={1.5} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-[#D4AF37] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-[60] flex flex-col p-6 animate-in slide-in-from-left">
          <div className="flex justify-end">
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col gap-8 mt-12 text-2xl font-serif tracking-widest">
            <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>SHOP</Link>
            <Link to="/collections" onClick={() => setIsMobileMenuOpen(false)}>COLLECTIONS</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</Link>
            <Link to="/journal" onClick={() => setIsMobileMenuOpen(false)}>JOURNAL</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
