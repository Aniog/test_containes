import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import CartDrawer from './CartDrawer';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { openCart, items } = useCartStore();
  const itemCount = items.reduce((count, item) => count + item.quantity, 0);

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
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navClass = cn(
    'fixed top-0 w-full z-50 transition-all duration-300 border-b',
    isHome
      ? isScrolled
        ? 'bg-background/95 backdrop-blur-md border-border text-foreground'
        : 'bg-transparent border-transparent text-white'
      : 'bg-background/95 backdrop-blur-md border-border text-foreground'
  );

  const linkClass = cn(
    'text-sm tracking-wide hover:text-primary transition-colors',
    (!isHome || isScrolled) ? 'text-foreground/80' : 'text-white/90 hover:text-white'
  );

  return (
    <>
      <nav className={navClass}>
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="md:hidden flex-1">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 -ml-2">
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* Center Links (Desktop) */}
          <div className="hidden md:flex flex-1 items-center gap-8">
            <Link to="/shop" className={linkClass}>Shop</Link>
            <Link to="/collections" className={linkClass}>Collections</Link>
          </div>

          {/* Logo */}
          <div className="flex-1 flex justify-center">
            <Link to="/" className="text-2xl md:text-3xl font-serif tracking-widest font-semibold uppercase">
              VELMORA
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <div className="hidden md:flex items-center gap-8 mr-4">
              <Link to="/about" className={linkClass}>About</Link>
              <Link to="/journal" className={linkClass}>Journal</Link>
            </div>
            
            <button className="p-2 -mr-2 hover:text-primary transition-colors cursor-not-allowed">
              <Search className="w-5 h-5" />
            </button>
            <button 
              className="p-2 -mr-2 hover:text-primary transition-colors relative"
              onClick={openCart}
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden fixed inset-0 bg-background z-40 transition-transform duration-300 ease-in-out pt-20 px-6",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          <div className="flex flex-col gap-6 text-xl font-serif">
            <Link to="/shop" className="border-b border-border pb-4">Shop All</Link>
            <Link to="/collections" className="border-b border-border pb-4">Collections</Link>
            <Link to="/about" className="border-b border-border pb-4">Our Story</Link>
            <Link to="/journal" className="border-b border-border pb-4">Journal</Link>
          </div>
        </div>
      </nav>
      <CartDrawer />
    </>
  );
};

export default Navbar;
