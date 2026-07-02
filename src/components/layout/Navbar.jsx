import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu } from 'lucide-react';
import { useCart } from '../cart/CartContext';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { setIsOpen, cartTotalCount } = useCart();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = cn(
    'fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out',
    {
      'bg-transparent text-white pt-6 pb-4': !isScrolled && isHome,
      'bg-background text-foreground shadow-sm py-4': isScrolled || !isHome,
    }
  );

  const iconClass = cn('w-5 h-5 transition-colors hover:text-primary');

  return (
    <header className={navClass}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        
        {/* Left: Mobile Menu / Desktop Logo if layout needs it, but spec says:
           Left: Logo, Center: Links, Right: Icons. We'll adjust it.
           Wait, spec: Left: serif logo "VELMORA". Center links: Shop, Collections, About, Journal. Right: search + cart icons. 
        */}
        <div className="flex items-center w-1/4">
          <Link to="/" className="font-serif text-2xl tracking-widest font-semibold">
            VELMORA
          </Link>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center gap-8 w-2/4">
          <Link to="/collections/all" className="uppercase tracking-widest text-sm hover:text-primary transition-colors">Shop</Link>
          <Link to="/collections/all" className="uppercase tracking-widest text-sm hover:text-primary transition-colors">Collections</Link>
          <Link to="#" className="uppercase tracking-widest text-sm hover:text-primary transition-colors">About</Link>
          <Link to="#" className="uppercase tracking-widest text-sm hover:text-primary transition-colors">Journal</Link>
        </nav>

        {/* Right: Icons */}
        <div className="flex items-center justify-end gap-5 w-1/4">
          <button aria-label="Search" className="hidden md:block">
            <Search className={iconClass} />
          </button>
          <button 
            aria-label="Cart" 
            className="relative"
            onClick={() => setIsOpen(true)}
          >
            <ShoppingBag className={iconClass} />
            {cartTotalCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-primary text-primary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                {cartTotalCount}
              </span>
            )}
          </button>
          <button aria-label="Menu" className="md:hidden">
            <Menu className={iconClass} />
          </button>
        </div>
        
      </div>
    </header>
  );
}
