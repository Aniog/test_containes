import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu } from 'lucide-react';
import { useCart } from '../../context/CartContext.jsx';
import { cn } from '../../lib/utils.js';

export default function Navbar() {
  const { cartCount, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = cn(
    "fixed top-0 w-full z-40 transition-all duration-300 ease-in-out font-sans border-b border-transparent",
    {
      "bg-transparent text-white": isHome && !isScrolled,
      "bg-background/95 backdrop-blur-md text-foreground border-border": !isHome || isScrolled
    }
  );

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Mobile Menu */}
        <div className="lg:hidden flex-1">
          <button className="p-2 -ml-2">
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {/* Logo */}
        <div className="flex-1 lg:flex-none text-center lg:text-left">
          <Link to="/" className="text-2xl lg:text-3xl font-serif tracking-[0.15em] uppercase hover:opacity-80 transition-opacity block">
            Velmora
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex flex-1 justify-center gap-10 text-sm font-medium tracking-wide uppercase">
          <Link to="/shop" className="hover:opacity-70 transition-opacity">Shop</Link>
          <Link to="/collections" className="hover:opacity-70 transition-opacity">Collections</Link>
          <Link to="/about" className="hover:opacity-70 transition-opacity">About</Link>
          <Link to="/journal" className="hover:opacity-70 transition-opacity">Journal</Link>
        </div>

        {/* Icons */}
        <div className="flex-1 flex justify-end items-center gap-4 lg:gap-6">
          <button className="p-2 hover:opacity-70 transition-opacity hidden sm:block">
            <Search className="w-5 h-5" />
          </button>
          
          <button 
            className="p-2 hover:opacity-70 transition-opacity relative group"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 bg-accent text-accent-foreground text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>

      </div>
    </nav>
  );
}