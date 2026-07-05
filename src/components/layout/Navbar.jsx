import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import useCartStore from '@/lib/store';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  const { itemCount, openCart } = useCartStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = cn(
    "fixed top-0 left-0 right-0 w-full z-40 transition-all duration-300 px-6 py-4 flex items-center justify-between",
    {
      "bg-background/95 backdrop-blur-md border-b border-border shadow-sm": isScrolled || !isHome,
      "bg-transparent text-primary-foreground": !isScrolled && isHome
    }
  );

  const iconClasses = cn("w-5 h-5", {
    "text-foreground": isScrolled || !isHome,
    "text-primary-foreground": !isScrolled && isHome
  });

  const linkClasses = cn("text-sm uppercase tracking-widest hover:opacity-70 transition-opacity", {
    "text-foreground": isScrolled || !isHome,
    "text-primary-foreground": !isScrolled && isHome
  });

  return (
    <nav className={navClasses}>
      {/* Mobile Menu */}
      <div className="md:hidden flex-1">
        <Sheet>
          <SheetTrigger asChild>
            <button className={iconClasses}>
              <Menu className="w-5 h-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-6 mt-10">
              <Link to="/" className="text-xl uppercase tracking-widest font-serif" onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))}>Home</Link>
              <Link to="/shop" className="text-xl uppercase tracking-widest font-serif" onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))}>Shop All</Link>
              <Link to="/shop?category=earrings" className="text-xl uppercase tracking-widest font-serif" onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))}>Earrings</Link>
              <Link to="/shop?category=necklaces" className="text-xl uppercase tracking-widest font-serif" onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))}>Necklaces</Link>
              <Link to="/shop?category=huggies" className="text-xl uppercase tracking-widest font-serif" onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))}>Huggies</Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Links - Left */}
      <div className="hidden md:flex flex-1 gap-8">
        <Link to="/shop" className={linkClasses}>Shop All</Link>
        <Link to="/shop?category=earrings" className={linkClasses}>Earrings</Link>
      </div>

      {/* Logo - Center */}
      <Link to="/" className={cn("text-2xl font-serif tracking-[0.2em] font-medium flex-shrink-0 mx-4", {
        "text-foreground": isScrolled || !isHome,
        "text-primary-foreground": !isScrolled && isHome
      })}>
        VELMORA
      </Link>

      {/* Right Icons */}
      <div className="flex-1 flex justify-end items-center gap-6">
        <div className="hidden md:flex gap-8 mr-6">
          <Link to="/shop?category=necklaces" className={linkClasses}>Necklaces</Link>
          <Link to="/shop?category=huggies" className={linkClasses}>Huggies</Link>
        </div>
        <button className="hover:opacity-70 transition-opacity" aria-label="Search">
          <Search className={iconClasses} />
        </button>
        <button 
          className="hover:opacity-70 transition-opacity relative" 
          aria-label="Cart"
          onClick={openCart}
        >
          <ShoppingBag className={iconClasses} />
          {itemCount > 0 && (
            <span className={cn(
              "absolute -top-2 -right-2 w-4 h-4 text-[10px] flex items-center justify-center rounded-full font-medium",
              isScrolled || !isHome ? "bg-primary text-primary-foreground" : "bg-white text-primary"
            )}>
              {itemCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}