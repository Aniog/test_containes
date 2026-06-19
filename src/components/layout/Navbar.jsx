import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useStore } from '@/store';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleCart, cart } = useStore();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  const navClass = `fixed w-full z-40 transition-all duration-300 ${
    isScrolled || !isHome || isMobileMenuOpen
      ? 'bg-background text-foreground border-b border-border py-4' 
      : 'bg-transparent text-primary-foreground py-6'
  }`;

  return (
    <>
      <nav className={navClass}>
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Links - Left */}
          <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest font-medium">
            <Link to="/shop" className="hover:text-accent transition-colors">Shop</Link>
            <Link to="/collections" className="hover:text-accent transition-colors">Collections</Link>
          </div>

          {/* Logo - Center */}
          <Link to="/" className="text-3xl font-serif tracking-widest font-medium absolute left-1/2 -translate-x-1/2">
            VELMORA
          </Link>

          {/* Icons - Right */}
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest font-medium mr-8">
              <Link to="/about" className="hover:text-accent transition-colors">About</Link>
              <Link to="/journal" className="hover:text-accent transition-colors">Journal</Link>
            </div>
            
            <button className="p-2 hover:text-accent transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button 
              className="p-2 hover:text-accent transition-colors relative"
              onClick={toggleCart}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute top-0 right-0 bg-accent text-accent-foreground text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center translate-x-1 -translate-y-1">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-30 pt-24 px-6">
          <div className="flex flex-col space-y-6 text-2xl font-serif">
            <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
            <Link to="/collections" onClick={() => setIsMobileMenuOpen(false)}>Collections</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link to="/journal" onClick={() => setIsMobileMenuOpen(false)}>Journal</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;