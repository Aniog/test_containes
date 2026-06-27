import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../lib/CartContext';
import { cn } from '../../lib/utils';

export default function Navbar() {
  const { cartCount, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav 
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled || !isHome || isMobileMenuOpen
          ? 'bg-[var(--color-brand-sand)]/95 backdrop-blur-sm shadow-sm border-b border-[var(--color-brand-stone)] py-4' 
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center text-[var(--color-brand-charcoal)]">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "p-2", 
                isScrolled || !isHome || isMobileMenuOpen ? "text-[var(--color-brand-charcoal)]" : "text-white"
              )}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Links (Left) */}
          <div className="hidden md:flex flex-1 items-center space-x-8">
            <Link to="/shop" className={cn(
              "text-sm tracking-widest uppercase hover:text-[var(--color-brand-gold-dark)] transition-colors",
               isScrolled || !isHome ? "text-[var(--color-brand-charcoal)]" : "text-white"
            )}>Shop</Link>
            <Link to="/shop?category=All" className={cn(
              "text-sm tracking-widest uppercase hover:text-[var(--color-brand-gold-dark)] transition-colors",
               isScrolled || !isHome ? "text-[var(--color-brand-charcoal)]" : "text-white"
            )}>Collections</Link>
            <Link to="/" className={cn(
              "text-sm tracking-widest uppercase hover:text-[var(--color-brand-gold-dark)] transition-colors",
               isScrolled || !isHome ? "text-[var(--color-brand-charcoal)]" : "text-white"
            )}>About</Link>
          </div>

          {/* Logo (Center) */}
          <div className="flex-1 flex justify-center">
            <Link to="/" className={cn(
              "font-serif text-3xl md:text-4xl tracking-widest font-medium",
               isScrolled || !isHome ? "text-[var(--color-brand-charcoal)]" : "text-white"
            )}>
              VELMORA
            </Link>
          </div>

          {/* Icons (Right) */}
          <div className={cn(
            "flex-1 flex justify-end items-center space-x-4 md:space-x-6",
             isScrolled || !isHome ? "text-[var(--color-brand-charcoal)]" : "text-white"
          )}>
            <button className="p-2 hover:text-[var(--color-brand-gold-dark)] transition-colors hidden sm:block">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button 
              className="p-2 hover:text-[var(--color-brand-gold-dark)] transition-colors relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-[var(--color-brand-gold-dark)] text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

          {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[var(--color-brand-sand)] border-b border-[var(--color-brand-stone)] shadow-lg py-4 px-4 flex flex-col space-y-0 text-[var(--color-brand-charcoal)]">
          <Link to="/shop" className="text-sm tracking-widest uppercase hover:bg-[var(--color-brand-stone)] transition-colors py-4 border-b border-[var(--color-brand-stone)]">Shop All</Link>
          <Link to="/shop?category=Earrings" className="text-sm tracking-widest uppercase hover:bg-[var(--color-brand-stone)] transition-colors py-4 border-b border-[var(--color-brand-stone)]">Earrings</Link>
          <Link to="/shop?category=Necklaces" className="text-sm tracking-widest uppercase hover:bg-[var(--color-brand-stone)] transition-colors py-4 border-b border-[var(--color-brand-stone)]">Necklaces</Link>
          <Link to="/shop?category=Huggies" className="text-sm tracking-widest uppercase hover:bg-[var(--color-brand-stone)] transition-colors py-4 border-b border-[var(--color-brand-stone)]">Huggies</Link>
        </div>
      )}
    </nav>
  );
}
