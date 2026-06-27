import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const Navigation = () => {
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

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4 md:px-12',
        isScrolled || !isHome ? 'bg-primary border-b border-black/5' : 'bg-transparent text-white'
      )}
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between font-sans text-sm uppercase tracking-widest">
        {/* Left: Brand */}
        <Link to="/" className="font-serif text-2xl tracking-[0.2em] font-light">
          VELMORA
        </Link>

        {/* Center: Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <Link to="/shop" className="hover:opacity-60 transition-opacity">Shop</Link>
          <Link to="/collections" className="hover:opacity-60 transition-opacity">Collections</Link>
          <Link to="/about" className="hover:opacity-60 transition-opacity">About</Link>
          <Link to="/journal" className="hover:opacity-60 transition-opacity">Journal</Link>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-6">
          <button className="hover:opacity-60 transition-opacity">
            <Search className="w-5 h-5 stroke-[1.5]" />
          </button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2 hover:opacity-60 transition-opacity relative"
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-primary border-b border-black/5 p-8 flex flex-col gap-6 md:hidden text-carbon">
          <Link to="/shop" className="text-lg">Shop</Link>
          <Link to="/collections" className="text-lg">Collections</Link>
          <Link to="/about" className="text-lg">About</Link>
          <Link to="/journal" className="text-lg">Journal</Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
