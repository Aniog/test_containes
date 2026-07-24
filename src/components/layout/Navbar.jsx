import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { cartCount, setIsCartOpen } = useCart();
  
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
        'fixed top-0 left-0 w-full z-50 transition-all duration-500',
        isScrolled || !isHome ? 'bg-cream/95 backdrop-blur-sm border-b border-charcoal/5 py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className={cn(
              "font-serif text-2xl md:text-3xl tracking-widest-editorial",
              isScrolled || !isHome ? "text-charcoal" : "text-white"
            )}
          >
            VELMORA
          </Link>

          {/* Desktop Links */}
          <div className={cn(
            "hidden md:flex items-center gap-10 font-sans text-xs tracking-[0.2em] uppercase font-medium",
            isScrolled || !isHome ? "text-charcoal" : "text-white"
          )}>
            <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
            <Link to="/collections" className="hover:text-gold transition-colors">Collections</Link>
            <Link to="/about" className="hover:text-gold transition-colors">About</Link>
            <Link to="/journal" className="hover:text-gold transition-colors">Journal</Link>
          </div>

          {/* Right Icons */}
          <div className={cn(
            "flex items-center gap-5 md:gap-8",
            isScrolled || !isHome ? "text-charcoal" : "text-white"
          )}>
            <button className="hover:text-gold transition-colors">
              <Search className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
            </button>
            <button 
              className="relative hover:text-gold transition-colors"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              className="md:hidden hover:text-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-cream z-[60] flex flex-col p-8 animate-in fade-in slide-in-from-right duration-300">
          <div className="flex justify-between items-center mb-16">
            <span className="font-serif text-2xl tracking-widest-editorial text-charcoal">VELMORA</span>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X className="w-8 h-8 text-charcoal" strokeWidth={1.5} />
            </button>
          </div>
          <div className="flex flex-col gap-8 font-serif text-3xl text-charcoal">
            <Link to="/shop">Shop</Link>
            <Link to="/collections">Collections</Link>
            <Link to="/about">About</Link>
            <Link to="/journal">Journal</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
