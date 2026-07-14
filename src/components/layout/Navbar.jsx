import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

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
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between',
        isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-gray-100 py-3 shadow-sm' : 'bg-transparent text-white'
      )}
    >
      <div className="flex-1 flex items-center space-x-8">
        <div className="hidden md:flex space-x-6 text-sm uppercase tracking-widest font-medium">
          <Link to="/shop" className="hover:text-accent transition-colors">Shop</Link>
          <Link to="/collections" className="hover:text-accent transition-colors">Collections</Link>
          <Link to="/about" className="hover:text-accent transition-colors">About</Link>
          <Link to="/journal" className="hover:text-accent transition-colors">Journal</Link>
        </div>
        <button className="md:hidden">
          <Menu className={cn("w-5 h-5", !isScrolled && "text-white")} />
        </button>
      </div>

      <div className="flex-1 text-center">
        <Link to="/" className="text-2xl md:text-3xl font-serif tracking-widest font-semibold italic">
          VELMORA
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-end space-x-5">
        <button className="hidden md:block">
          <Search className={cn("w-5 h-5", isScrolled ? "text-foreground" : "text-white")} />
        </button>
        <button onClick={() => setIsCartOpen(true)} className="relative group">
          <ShoppingBag className={cn("w-5 h-5", isScrolled ? "text-foreground" : "text-white")} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
