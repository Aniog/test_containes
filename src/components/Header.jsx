import React from 'react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useStore } from '../lib/store';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const { openCart, getCartCount } = useStore();
  const cartCount = getCartCount();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          
          {/* Mobile Menu Button */}
          <div className="w-1/4 flex md:hidden">
            <button 
              className="p-2 -ml-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-1 md:flex-none flex items-center justify-center md:w-1/4">
            <a href="/" className="text-2xl md:text-3xl font-serif tracking-widest text-primary flex-shrink-0">
              VELMORA
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center gap-8 flex-1 w-2/4">
            <a href="/shop" className="text-sm tracking-widest uppercase hover:text-accent transition-colors">Shop</a>
            <a href="/collections" className="text-sm tracking-widest uppercase hover:text-accent transition-colors">Collections</a>
            <a href="/about" className="text-sm tracking-widest uppercase hover:text-accent transition-colors">About</a>
            <a href="/journal" className="text-sm tracking-widest uppercase hover:text-accent transition-colors">Journal</a>
          </nav>

// Right Icons
          <div className="flex items-center justify-end gap-2 md:gap-4 w-1/4">
            <button className="p-2 hover:text-accent transition-colors hidden md:block">
              <Search size={20} />
            </button>
            <button 
              className="p-2 hover:text-accent transition-colors relative"
              onClick={openCart}
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-accent text-accent-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <nav className="flex flex-col py-4 px-4">
              <a href="/shop" className="py-4 border-b border-border/50 text-sm tracking-widest uppercase">Shop</a>
              <a href="/collections" className="py-4 border-b border-border/50 text-sm tracking-widest uppercase">Collections</a>
              <a href="/about" className="py-4 border-b border-border/50 text-sm tracking-widest uppercase">About</a>
              <a href="/journal" className="py-4 text-sm tracking-widest uppercase">Journal</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
