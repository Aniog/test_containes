import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Nav() {
  const { setIsOpen, itemCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    if (isHome) {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
    } else {
      setIsScrolled(true); // Always solid background on non-home pages
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const navClasses = cn(
    "fixed top-0 w-full z-40 transition-all duration-300 pointer-events-auto",
    {
      "bg-background/95 backdrop-blur-sm border-b border-border/50 text-foreground py-4": isScrolled,
      "bg-gradient-to-b from-black/50 to-transparent text-white py-6 border-b border-transparent": !isScrolled
    }
  );

  const linkClasses = "text-sm font-medium tracking-widest uppercase hover:opacity-70 transition-opacity";

  return (
    <header className={navClasses}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        
        {/* Mobile Menu */}
        <div className="md:hidden flex-1">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 -ml-2" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-12">
                <Link to="/" className="font-serif text-2xl tracking-widest uppercase">Velmora</Link>
                <div className="flex flex-col gap-4 mt-8">
                  <Link to="/products" className={cn(linkClasses, "text-foreground")}>Shop All</Link>
                  <Link to="/products?category=rings" className={cn(linkClasses, "text-foreground")}>Rings</Link>
                  <Link to="/products?category=necklaces" className={cn(linkClasses, "text-foreground")}>Necklaces</Link>
                  <Link to="/products?category=earrings" className={cn(linkClasses, "text-foreground")}>Earrings</Link>
                  <Link to="/about" className={cn(linkClasses, "text-foreground")}>About</Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Links (Left) */}
        <nav className="hidden md:flex flex-1 gap-8">
          <Link to="/products" className={linkClasses}>Shop</Link>
          <Link to="/products?collection=bestsellers" className={linkClasses}>Collections</Link>
          <Link to="/about" className={linkClasses}>About</Link>
          <Link to="/journal" className={linkClasses}>Journal</Link>
        </nav>

        {/* Logo (Center) */}
        <div className="flex-1 flex justify-center md:flex-none">
          <Link to="/" className="font-serif text-2xl md:text-3xl tracking-[0.2em] uppercase shrink-0">
            Velmora
          </Link>
        </div>

        {/* Icons (Right) */}
        <div className="flex-1 flex justify-end items-center gap-4 md:gap-6">
          <button aria-label="Search" className="hover:opacity-70 transition-opacity">
            <Search className="h-5 w-5" />
          </button>
          
          <button 
            onClick={() => setIsOpen(true)}
            aria-label="Cart" 
            className="relative hover:opacity-70 transition-opacity group flex items-center pr-2"
          >
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-accent text-accent-foreground text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}