import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const Navbar = () => {
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

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        isScrolled || !isHome ? "bg-background shadow-sm border-b border-stone-100 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className={cn("w-5 h-5", !isScrolled && isHome ? "text-white" : "text-foreground")} />
        </button>

        {/* Logo */}
        <Link 
          to="/" 
          className={cn(
            "font-serif text-2xl tracking-[0.2em] font-medium absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 order-2 md:order-1",
            !isScrolled && isHome ? "text-white" : "text-foreground"
          )}
        >
          VELMORA
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12 order-1 md:order-2 flex-grow justify-center">
          <Link to="/shop" className={cn("nav-link", !isScrolled && isHome ? "text-white" : "text-foreground")}>Shop</Link>
          <Link to="/collections" className={cn("nav-link", !isScrolled && isHome ? "text-white" : "text-foreground")}>Collections</Link>
          <Link to="/about" className={cn("nav-link", !isScrolled && isHome ? "text-white" : "text-foreground")}>About</Link>
          <Link to="/journal" className={cn("nav-link", !isScrolled && isHome ? "text-white" : "text-foreground")}>Journal</Link>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4 md:gap-6 order-3">
          <button className="hidden sm:block">
            <Search className={cn("w-5 h-5", !isScrolled && isHome ? "text-white" : "text-foreground")} />
          </button>
          <button 
            className="flex items-center gap-2"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag className={cn("w-5 h-5", !isScrolled && isHome ? "text-white" : "text-foreground")} />
            {cartCount > 0 && (
              <span className="text-[10px] font-sans font-semibold bg-primary text-white w-4 h-4 rounded-full flex items-center justify-center -ml-1">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-[60] flex flex-col p-8 md:hidden animate-fade-in">
          <div className="flex justify-between items-center mb-16">
            <span className="font-serif text-xl tracking-wide font-medium letter-spacing-wide">VELMORA</span>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col gap-8">
            <Link to="/shop" className="font-serif text-3xl italic">Shop All</Link>
            <Link to="/collections" className="font-serif text-3xl italic">Collections</Link>
            <Link to="/about" className="font-serif text-3xl italic">Our Story</Link>
            <Link to="/journal" className="font-serif text-3xl italic">Journal</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
