import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md border-b-[0.5px] border-border py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Left: Mobile Menu Toggle / Logo Desktop */}
        <div className="flex items-center gap-4 flex-1">
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <Link to="/" className="hidden md:block font-serif text-3xl tracking-wide font-medium text-foreground">
            VELMORA
          </Link>
        </div>

        {/* Center: Mobile Logo / Desktop Navigation */}
        <div className="flex-1 flex justify-center">
          <Link to="/" className="md:hidden font-serif text-2xl tracking-wide font-medium text-foreground">
            VELMORA
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/shop" className="text-sm font-medium tracking-wide uppercase hover:text-primary transition-colors">
              Shop
            </Link>
            <Link to="/collections" className="text-sm font-medium tracking-wide uppercase hover:text-primary transition-colors">
              Collections
            </Link>
            <Link to="/about" className="text-sm font-medium tracking-wide uppercase hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/journal" className="text-sm font-medium tracking-wide uppercase hover:text-primary transition-colors">
              Journal
            </Link>
          </nav>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center justify-end gap-4 flex-1">
          <button aria-label="Search" className="text-foreground hover:text-primary transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button 
            aria-label="Cart" 
            className="text-foreground hover:text-primary transition-colors relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-50 flex flex-col md:hidden animate-in fade-in slide-in-from-left-4">
          <div className="container mx-auto px-4 py-5 flex items-center justify-between border-b-[0.5px] border-border">
            <Link to="/" className="font-serif text-2xl tracking-wide font-medium text-foreground" onClick={() => setIsMobileMenuOpen(false)}>
              VELMORA
            </Link>
            <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close Menu">
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col container mx-auto px-4 py-8 gap-6">
            <Link to="/shop" className="text-xl font-serif hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
            <Link to="/collections" className="text-xl font-serif hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Collections</Link>
            <Link to="/about" className="text-xl font-serif hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link to="/journal" className="text-xl font-serif hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Journal</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;