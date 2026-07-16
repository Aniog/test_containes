import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { openCart, totalItems, isOpen } = useCartStore();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNavTextColor = () => {
    if (isOpen) return 'text-foreground';
    if (!isHome) return 'text-foreground';
    if (isScrolled) return 'text-foreground';
    return 'text-white';
  };

  const navClass = `fixed w-full z-40 transition-all duration-300 ${
    isScrolled || !isHome
      ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-4'
      : 'bg-transparent py-6'
  } ${getNavTextColor()}`;

  return (
    <nav className={navClass}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Mobile Menu */}
        <div className="md:hidden flex-1">
          <button className="p-2 -ml-2 hover:opacity-70 transition-opacity">
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {/* Logo */}
        <Link to="/" className="font-serif text-2xl tracking-widest uppercase md:flex-1 text-center md:text-left">
          Velmora
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center justify-center space-x-8 lg:space-x-12 flex-1 text-sm uppercase tracking-widest font-medium">
          <Link to="/collections" className="hover:text-accent transition-colors">Shop</Link>
          <Link to="/collections" className="hover:text-accent transition-colors">Collections</Link>
          <Link to="/about" className="hover:text-accent transition-colors">About</Link>
          <Link to="/journal" className="hover:text-accent transition-colors">Journal</Link>
        </div>

        {/* Icons */}
        <div className="flex items-center justify-end space-x-4 md:space-x-6 flex-1">
          <button className="p-2 -mr-2 hover:opacity-70 transition-opacity">
            <Search className="w-5 h-5" />
          </button>
          <button 
            className="p-2 -mr-2 hover:opacity-70 transition-opacity relative"
            onClick={openCart}
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-accent text-accent-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center translate-x-1/4 -translate-y-1/4">
                {totalItems}
              </span>
            )}
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;