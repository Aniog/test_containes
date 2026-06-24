import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '@/lib/store';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { items, setIsOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-6 md:px-12 flex items-center',
        isScrolled || !isHome ? 'bg-background shadow-sm border-b' : 'bg-transparent'
      )}
    >
      <div className="flex-1 flex items-center">
        <button className="md:hidden mr-4" onClick={() => setIsMobileMenuOpen(true)}>
          <Menu className={cn("w-5 h-5", isScrolled || !isHome ? "text-foreground" : "text-white")} />
        </button>
        <Link 
          to="/" 
          className={cn(
            "font-serif text-2xl md:text-3xl tracking-[0.1em] transition-colors",
            isScrolled || !isHome ? "text-foreground" : "text-white"
          )}
        >
          VELMORA
        </Link>
      </div>

      <div className="flex-1 hidden md:flex gap-8 items-center justify-center text-[10px] uppercase tracking-[0.2em] font-sans">
        <Link to="/shop" className="hover:opacity-60 transition-opacity whitespace-nowrap">Shop</Link>
        <Link to="/shop" className="hover:opacity-60 transition-opacity whitespace-nowrap">Collections</Link>
        <Link to="/about" className="hover:opacity-60 transition-opacity whitespace-nowrap">About</Link>
        <Link to="/journal" className="hover:opacity-60 transition-opacity whitespace-nowrap">Journal</Link>
      </div>

      <div className="flex-1 flex gap-6 items-center justify-end">
        <button className="hover:opacity-60 transition-opacity hidden md:block">
          <Search className={cn("w-5 h-5", isScrolled || !isHome ? "text-foreground" : "text-white")} />
        </button>
        <button 
          onClick={() => setIsOpen(true)}
          className="hover:opacity-60 transition-opacity relative"
        >
          <ShoppingBag className={cn("w-5 h-5", isScrolled || !isHome ? "text-foreground" : "text-white")} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[8px] w-3.5 h-3.5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-background p-10 flex flex-col items-center justify-center gap-8 uppercase tracking-[0.2em] text-sm animate-in fade-in zoom-in duration-300">
          <button 
            className="absolute top-6 right-6"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
          <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
          <Link to="/collections" onClick={() => setIsMobileMenuOpen(false)}>Collections</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link to="/journal" onClick={() => setIsMobileMenuOpen(false)}>Journal</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
