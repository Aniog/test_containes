import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { Search, ShoppingBag, Menu } from 'lucide-react';
import { cn } from '../../lib/utils';

export function Navbar() {
  const { totalItems, setIsOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = cn(
    "fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b",
    {
      "bg-transparent border-transparent text-primary-foreground": isHome && !isScrolled,
      "bg-background text-foreground border-border shadow-sm": !isHome || isScrolled
    }
  );

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex-1 flex items-center">
          <button className="md:hidden p-2 -ml-2 mr-4">
            <Menu className="w-5 h-5" />
          </button>
          <div className="hidden md:flex space-x-8 text-sm tracking-wide">
            <Link to="/collection" className="hover:text-primary transition-colors">Shop</Link>
            <Link to="/collection" className="hover:text-primary transition-colors">Collections</Link>
            <Link to="/" className="hover:text-primary transition-colors">About</Link>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <Link to="/" className="font-serif text-3xl tracking-[0.2em] uppercase">
            Velmora
          </Link>
        </div>

        <div className="flex-1 flex justify-end items-center space-x-4">
          <button className="p-2 hover:text-primary transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button 
            className="p-2 hover:text-primary transition-colors relative"
            onClick={() => setIsOpen(true)}
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center translate-x-1 -translate-y-1">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}