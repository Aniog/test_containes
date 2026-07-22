import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';

const Header = () => {
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

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6 px-4 md:px-8',
        isScrolled || !isHome
          ? 'bg-white text-black border-b border-neutral-100 py-4'
          : 'bg-transparent text-white'
      )}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        {/* Left: Mobile Menu Toggle */}
        <div className="flex md:hidden items-center flex-1">
          <button onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Left: Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 flex-1">
          <Link to="/shop" className="text-sm uppercase tracking-widest hover:opacity-60 transition-opacity">Shop</Link>
          <Link to="/collections" className="text-sm uppercase tracking-widest hover:opacity-60 transition-opacity">Collections</Link>
        </nav>

        {/* Center: Logo */}
        <div className="flex justify-center flex-1">
          <Link to="/" className="text-2xl md:text-3xl font-serif tracking-widest text-center">VELMORA</Link>
        </div>

        {/* Center: Desktop Nav Right (Part 2) */}
        <nav className="hidden md:flex items-center space-x-8 flex-1 justify-center">
          <Link to="/about" className="text-sm uppercase tracking-widest hover:opacity-60 transition-opacity">About</Link>
          <Link to="/journal" className="text-sm uppercase tracking-widest hover:opacity-60 transition-opacity">Journal</Link>
        </nav>

        {/* Right: Icons */}
        <div className="flex items-center justify-end space-x-4 md:space-x-6 flex-1">
          <button className="hover:opacity-60 transition-opacity">
            <Search className="w-5 h-5" />
          </button>
          <button 
            className="flex items-center space-x-1 hover:opacity-60 transition-opacity relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-[60] p-6 text-black flex flex-col">
          <div className="flex justify-between items-center mb-12">
            <span className="text-xl font-serif tracking-widest">VELMORA</span>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col space-y-8">
            <Link to="/shop" className="text-2xl font-serif tracking-wide">Shop All</Link>
            <Link to="/collections" className="text-2xl font-serif tracking-wide">Collections</Link>
            <Link to="/about" className="text-2xl font-serif tracking-wide">About Us</Link>
            <Link to="/journal" className="text-2xl font-serif tracking-wide">Journal</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
