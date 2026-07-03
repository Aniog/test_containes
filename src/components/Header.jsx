import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from './CartContext';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount, setIsOpen: setCartOpen } = useCart();
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

  const headerClass = cn(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
    isScrolled || !isHome || isMobileMenuOpen
      ? 'bg-background/95 backdrop-blur-md border-b-[0.5px] border-border text-foreground py-4'
      : 'bg-transparent text-primary-foreground py-6'
  );

  const iconClass = cn(
    'w-5 h-5 transition-colors',
    isScrolled || !isHome || isMobileMenuOpen ? 'text-foreground hover:text-foreground/70' : 'text-primary-foreground hover:text-primary-foreground/70'
  );

  return (
    <>
      <header className={headerClass}>
        <div className="container mx-auto px-4 md:px-6 w-full max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Mobile menu toggle */}
            <div className="md:hidden flex-1">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 -ml-2">
                {isMobileMenuOpen ? <X className={iconClass} /> : <Menu className={iconClass} />}
              </button>
            </div>

            {/* Logo */}
            <div className="flex-1 md:flex-none text-center md:text-left">
              <Link to="/" className="inline-block relative z-10">
                <span className={cn(
                  "font-serif tracking-[0.2em] text-2xl font-normal uppercase transition-colors uppercase", 
                  isScrolled || !isHome || isMobileMenuOpen ? "text-foreground" : "text-primary-foreground"
                )}>
                  Velmora
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex flex-1 justify-center space-x-10">
              {[
                { name: 'Shop', path: '/shop' },
                { name: 'Collections', path: '/shop' },
                { name: 'About', path: '/#' },
                { name: 'Journal', path: '/#' },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "text-sm uppercase tracking-widest font-medium transition-colors hover:opacity-70",
                    isScrolled || !isHome ? "text-foreground" : "text-primary-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex-1 flex justify-end items-center space-x-4 md:space-x-6">
              <button className="p-1 hidden md:block">
                <Search className={iconClass} />
              </button>
              <button className="p-1 relative" onClick={() => setCartOpen(true)}>
                <ShoppingBag className={iconClass} />
                {itemCount > 0 && (
                  <span className={cn(
                    "absolute -top-1 -right-1 w-4 h-4 text-[9px] flex items-center justify-center rounded-full font-medium transition-colors",
                    isScrolled || !isHome || isMobileMenuOpen
                      ? "bg-foreground text-background" 
                      : "bg-primary-foreground text-foreground"
                  )}>
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] z-40 bg-background/95 backdrop-blur-md pt-8 px-6 md:hidden">
          <nav className="flex flex-col space-y-6 text-center">
            {[
              { name: 'Shop', path: '/shop' },
              { name: 'Collections', path: '/shop' },
              { name: 'About', path: '/#' },
              { name: 'Journal', path: '/#' },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-xl font-serif uppercase tracking-widest text-foreground hover:text-foreground/70"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-8 flex justify-center">
              <button className="flex items-center space-x-2 text-muted-foreground uppercase tracking-widest text-sm">
                <Search className="w-4 h-4" />
                <span>Search</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}