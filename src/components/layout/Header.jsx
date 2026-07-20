import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { cn } from '../../lib/utils';
import { CartDrawer } from './CartDrawer';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomepage = location.pathname === '/';
  
  const { toggleCart, itemCount } = useCartStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = cn(
    'fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b',
    {
      'bg-background border-border py-4': isScrolled || !isHomepage,
      'bg-transparent border-transparent py-6': !isScrolled && isHomepage,
      'text-primary': isScrolled || !isHomepage,
      'text-white': !isScrolled && isHomepage,
    }
  );

  return (
    <>
      <header className={navClasses}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button - Left */}
            <div className="md:hidden flex-1">
              <button aria-label="Menu" className="p-2 -ml-2">
                <Menu className="w-5 h-5" />
              </button>
            </div>

            {/* Desktop Nav - Left */}
            <nav className="hidden md:flex flex-1 gap-8 text-sm uppercase tracking-widest font-medium">
              <Link to="/products" className="hover:opacity-70 transition-opacity">Shop</Link>
              <Link to="/collections" className="hover:opacity-70 transition-opacity">Collections</Link>
              <Link to="/about" className="hover:opacity-70 transition-opacity">About</Link>
              <Link to="/journal" className="hover:opacity-70 transition-opacity">Journal</Link>
            </nav>

            {/* Logo - Center */}
            <Link to="/" className="flex-1 md:flex-none text-center">
              <span className="font-serif text-2xl md:text-3xl tracking-widest uppercase">
                Velmora
              </span>
            </Link>

            {/* Icons - Right */}
            <div className="flex-1 flex justify-end gap-4 md:gap-6 items-center">
              <button aria-label="Search" className="p-2 -mr-2 hidden md:block hover:opacity-70 transition-opacity">
                <Search className="w-5 h-5" />
              </button>
              <button 
                onClick={toggleCart} 
                aria-label="Cart" 
                className="p-2 -mr-2 relative hover:opacity-70 transition-opacity"
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount() > 0 && (
                  <span className="absolute top-0 right-0 w-4 h-4 bg-accent text-accent-foreground text-[10px] font-bold flex items-center justify-center rounded-full transform translate-x-1 -translate-y-1">
                    {itemCount()}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
      <CartDrawer />
    </>
  );
}