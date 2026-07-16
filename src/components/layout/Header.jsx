import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../CartContext';
import { cn } from '@/lib/utils';

export default function Header() {
  const { openCart, cartCount } = useCart();
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
  }, [location.pathname]);

  const headerBgClass = isScrolled || !isHome || isMobileMenuOpen
    ? 'bg-background shadow-sm text-foreground'
    : 'bg-transparent text-white'; // assuming white text over hero background

  return (
    <header className={cn("fixed top-0 w-full z-30 transition-all duration-300", headerBgClass)}>
      {/* Top trust bar */}
      <div className="bg-primary text-primary-foreground text-xs py-2 text-center tracking-widest hidden md:block">
        FREE WORLDWIDE SHIPPING &middot; 30-DAY RETURNS &middot; 18K GOLD PLATED &middot; HYPOALLERGENIC
      </div>

      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex-1 md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex flex-1 gap-8 text-sm uppercase tracking-widest">
          <Link to="/shop" className="hover:opacity-70 transition-opacity">Shop</Link>
          <Link to="/shop?category=collections" className="hover:opacity-70 transition-opacity">Collections</Link>
          <Link to="/about" className="hover:opacity-70 transition-opacity">About</Link>
          <Link to="/journal" className="hover:opacity-70 transition-opacity">Journal</Link>
        </nav>

        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="text-3xl md:text-4xl font-serif tracking-widest uppercase">
            Velmora
          </Link>
        </div>

        {/* Icons */}
        <div className="flex-1 flex justify-end gap-6 items-center">
          <button className="hover:opacity-70 transition-opacity hidden md:block">
            <Search className="w-5 h-5" />
          </button>
          <button onClick={openCart} className="relative hover:opacity-70 transition-opacity">
            <ShoppingBag className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-accent text-accent-foreground text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-medium">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-t border-border shadow-lg">
          <nav className="flex flex-col text-center divide-y divide-border">
            <Link to="/shop" className="py-4 text-sm uppercase tracking-widest hover:bg-secondary">Shop</Link>
            <Link to="/shop?category=collections" className="py-4 text-sm uppercase tracking-widest hover:bg-secondary">Collections</Link>
            <Link to="/about" className="py-4 text-sm uppercase tracking-widest hover:bg-secondary">About</Link>
            <Link to="/journal" className="py-4 text-sm uppercase tracking-widest hover:bg-secondary">Journal</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
