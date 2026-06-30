import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu } from 'lucide-react';
import { useCart } from './CartProvider';
import { cn } from '@/lib/utils';

const Header = () => {
  const { itemCount, setIsOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = cn(
    "fixed top-0 w-full z-40 transition-all duration-300 ease-in-out px-6 py-4 flex items-center justify-between",
    {
      "bg-transparent text-primary-foreground": isHome && !scrolled,
      "bg-background/95 backdrop-blur-md text-foreground border-b border-border": !isHome || scrolled,
    }
  );

  return (
    <header className={headerClass}>
      <div className="flex-1 flex items-center">
         <button className="lg:hidden mr-4">
           <Menu className="w-5 h-5" />
         </button>
         <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
           <Link to="/shop" className="hover:opacity-70 transition-opacity uppercase">Shop</Link>
           <Link to="/shop" className="hover:opacity-70 transition-opacity uppercase">Collections</Link>
           <Link to="#" className="hover:opacity-70 transition-opacity uppercase">About</Link>
           <Link to="#" className="hover:opacity-70 transition-opacity uppercase">Journal</Link>
         </nav>
      </div>

      <div className="flex-1 flex justify-center">
        <Link to="/">
          <span className="font-serif text-3xl tracking-widest uppercase">Velmora</span>
        </Link>
      </div>

      <div className="flex-1 flex justify-end items-center gap-6">
        <button className="hover:opacity-70 transition-opacity">
          <Search className="w-5 h-5" />
        </button>
        <button className="hover:opacity-70 transition-opacity relative group" onClick={() => setIsOpen(true)}>
          <ShoppingBag className="w-5 h-5" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 w-4 h-4 bg-primary text-primary-foreground text-[10px] rounded-full flex items-center justify-center font-medium leading-none">
              {itemCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;