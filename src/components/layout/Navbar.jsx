import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCartStore } from '@/store/cartStore';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openCart, itemCount } = useCartStore();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled || !isHome || isMobileMenuOpen
      ? 'bg-background/95 backdrop-blur-sm border-b border-border text-foreground shadow-sm py-4'
      : 'bg-transparent text-primary-foreground py-6'
  }`;

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center max-w-7xl">
        
        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex-1">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 -ml-2">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Links (Left) */}
        <div className="hidden md:flex gap-8 flex-1">
          <Link to="/shop" className="text-sm uppercase tracking-widest hover:opacity-70 transition-opacity">Shop</Link>
          <Link to="/collections" className="text-sm uppercase tracking-widest hover:opacity-70 transition-opacity">Collections</Link>
        </div>

        {/* Logo (Center) */}
        <Link to="/" className="flex-none text-center">
          <span className="font-serif text-3xl tracking-[0.2em] uppercase">Velmora</span>
        </Link>

        {/* Right Icons */}
        <div className="flex gap-4 md:gap-6 flex-1 justify-end items-center">
          <div className="hidden md:flex gap-8 mr-4">
            <Link to="/about" className="text-sm uppercase tracking-widest hover:opacity-70 transition-opacity">About</Link>
            <Link to="/journal" className="text-sm uppercase tracking-widest hover:opacity-70 transition-opacity">Journal</Link>
          </div>
          <button className="hover:opacity-70 transition-opacity">
            <Search className="w-5 h-5" />
          </button>
          <button onClick={openCart} className="hover:opacity-70 transition-opacity relative group pt-1">
            <ShoppingBag className="w-5 h-5 inline-block" />
            <span className="absolute -top-1 -right-2 text-[10px] w-4 h-4 flex items-center justify-center bg-accent text-accent-foreground rounded-full">
              {itemCount()}
            </span>
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-b border-border shadow-md md:hidden animate-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col py-6 px-8 gap-6 text-foreground">
            <Link to="/shop" className="text-lg font-serif uppercase tracking-widest border-b border-border pb-2">Shop All</Link>
            <Link to="/collections" className="text-lg font-serif uppercase tracking-widest border-b border-border pb-2">Collections</Link>
            <Link to="/about" className="text-lg font-serif uppercase tracking-widest border-b border-border pb-2">Our Story</Link>
            <Link to="/journal" className="text-lg font-serif uppercase tracking-widest border-b border-border pb-2">Journal</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;