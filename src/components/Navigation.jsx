import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { cn } from '@/lib/utils';
import { CartDrawer } from './CartDrawer';

export const Navigation = () => {
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
    <>
      <nav
        className={cn(
          'fixed top-0 w-full z-40 transition-colors duration-300',
          isScrolled || !isHome ? 'bg-background shadow-sm border-b border-border' : 'bg-transparent',
          (isScrolled || !isHome || isMobileMenuOpen) ? 'text-foreground' : 'text-primary-foreground'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 -ml-2"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center justify-center flex-1 md:flex-none">
              <Link to="/" className="font-serif text-2xl tracking-widest uppercase">
                Velmora
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 items-center flex-1 justify-center">
              <Link to="/shop" className="text-sm uppercase tracking-widest hover:text-accent transition-colors">Shop</Link>
              <Link to="/collections" className="text-sm uppercase tracking-widest hover:text-accent transition-colors">Collections</Link>
              <Link to="/about" className="text-sm uppercase tracking-widest hover:text-accent transition-colors">About</Link>
              <Link to="/journal" className="text-sm uppercase tracking-widest hover:text-accent transition-colors">Journal</Link>
            </div>

            {/* Right icons */}
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:text-accent transition-colors">
                <Search size={20} />
              </button>
              <button 
                className="p-2 hover:text-accent transition-colors relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 bg-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'md:hidden absolute top-20 left-0 w-full bg-background border-b border-border shadow-lg transition-all duration-300 overflow-hidden',
            isMobileMenuOpen ? 'max-h-64 opacity-100 text-foreground' : 'max-h-0 opacity-0'
          )}
        >
          <div className="px-4 py-4 space-y-4 flex flex-col">
            <Link to="/shop" className="text-sm uppercase tracking-widest py-2 border-b border-border">Shop</Link>
            <Link to="/collections" className="text-sm uppercase tracking-widest py-2 border-b border-border">Collections</Link>
            <Link to="/about" className="text-sm uppercase tracking-widest py-2 border-b border-border">About</Link>
            <Link to="/journal" className="text-sm uppercase tracking-widest py-2">Journal</Link>
          </div>
        </div>
      </nav>
      
      <CartDrawer />
    </>
  );
};
