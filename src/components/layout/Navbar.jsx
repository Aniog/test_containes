import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { cartCount, setIsCartOpen } = useCart();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 md:px-12 md:py-6',
        isScrolled || !isHome ? 'bg-white/90 backdrop-blur-md shadow-sm py-4 md:py-4' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Branding */}
        <Link to="/" className="text-2xl font-serif tracking-widest text-[#1a1a1a]">
          VELMORA
        </Link>

        {/* Center: Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          <Link to="/shop" className="text-xs uppercase tracking-[0.2em] font-sans hover:text-[#9a7b4f] transition-colors">Shop</Link>
          <Link to="/collections" className="text-xs uppercase tracking-[0.2em] font-sans hover:text-[#9a7b4f] transition-colors">Collections</Link>
          <Link to="/about" className="text-xs uppercase tracking-[0.2em] font-sans hover:text-[#9a7b4f] transition-colors">About</Link>
          <Link to="/journal" className="text-xs uppercase tracking-[0.2em] font-sans hover:text-[#9a7b4f] transition-colors">Journal</Link>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center space-x-6">
          <button aria-label="Search" className="text-stone-900 hover:text-[#9a7b4f] transition-colors">
            <Search className="w-5 h-5 stroke-[1.5px]" />
          </button>
          <button
            aria-label="Toggle Shopping Bag"
            onClick={() => setIsCartOpen(true)}
            className="text-stone-900 hover:text-[#9a7b4f] transition-colors relative"
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.5px]" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#9a7b4f] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
          <button
            aria-label="Toggle Mobile Menu"
            className="md:hidden text-stone-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-stone-100 py-6 px-6 flex flex-col space-y-6 shadow-xl animate-in fade-in slide-in-from-top-4">
          <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className="text-sm uppercase tracking-widest font-sans">Shop</Link>
          <Link to="/collections" onClick={() => setIsMobileMenuOpen(false)} className="text-sm uppercase tracking-widest font-sans">Collections</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-sm uppercase tracking-widest font-sans">About</Link>
          <Link to="/journal" onClick={() => setIsMobileMenuOpen(false)} className="text-sm uppercase tracking-widest font-sans">Journal</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
