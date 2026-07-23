import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';

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

  const transparentMode = isHome && !isScrolled && !isMobileMenuOpen;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        transparentMode ? 'bg-transparent text-white' : 'bg-background text-foreground border-b border-border shadow-sm'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 -ml-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link to="/" className="text-2xl md:text-3xl font-serif tracking-widest uppercase font-semibold">
          VELMORA
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-wider font-medium">
          <Link to="/shop" className="hover:opacity-70 transition-opacity">Shop</Link>
          <Link to="/shop?category=collections" className="hover:opacity-70 transition-opacity">Collections</Link>
          <Link to="/about" className="hover:opacity-70 transition-opacity">About</Link>
          <Link to="/journal" className="hover:opacity-70 transition-opacity">Journal</Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button className="p-2 -mr-2 md:mr-0 hover:opacity-70 transition-opacity">
            <Search size={20} />
          </button>
          <button 
            className="p-2 relative hover:opacity-70 transition-opacity"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border text-foreground shadow-lg flex flex-col p-6 space-y-6">
          <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className="text-lg uppercase tracking-wider font-medium">Shop</Link>
          <Link to="/shop?category=collections" onClick={() => setIsMobileMenuOpen(false)} className="text-lg uppercase tracking-wider font-medium">Collections</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg uppercase tracking-wider font-medium">About</Link>
          <Link to="/journal" onClick={() => setIsMobileMenuOpen(false)} className="text-lg uppercase tracking-wider font-medium">Journal</Link>
        </div>
      )}
    </header>
  );
};

export default Header;