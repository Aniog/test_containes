import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const items = useCart((state) => state.items);
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

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
        isScrolled || !isHome ? 'bg-white shadow-sm text-primary' : 'bg-transparent text-white'
      )}
    >
      {/* Left: Logo */}
      <div className="flex-1">
        <Link to="/" className="text-2xl font-serif tracking-widest font-bold">
          VELMORA
        </Link>
      </div>

      {/* Center: Links */}
      <div className="hidden md:flex items-center space-x-8 flex-1 justify-center uppercase text-xs tracking-widest font-medium">
        <Link to="/shop" className="hover:text-accent transition-colors">Shop</Link>
        <Link to="/collections" className="hover:text-accent transition-colors">Collections</Link>
        <Link to="/about" className="hover:text-accent transition-colors">About</Link>
        <Link to="/journal" className="hover:text-accent transition-colors">Journal</Link>
      </div>

      {/* Right: Icons */}
      <div className="flex-1 flex items-center justify-end space-x-4">
        <button className="p-2 hover:text-accent transition-colors">
          <Search size={20} />
        </button>
        <Link to="/cart" className="p-2 hover:text-accent transition-colors relative">
          <ShoppingBag size={20} />
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 bg-accent text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </Link>
        <button 
          className="md:hidden p-2 hover:text-accent transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white text-primary p-6 shadow-lg md:hidden flex flex-col space-y-4 text-sm tracking-widest uppercase font-medium border-t border-border">
          <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
          <Link to="/collections" onClick={() => setIsMobileMenuOpen(false)}>Collections</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link to="/journal" onClick={() => setIsMobileMenuOpen(false)}>Journal</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
