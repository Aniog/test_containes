import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import { cn } from '@/lib/utils';
import { CartDrawer } from './CartDrawer';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { openCart, items } = useCartStore();
  
  const isHome = location.pathname === '/';
  
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

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

  const headerClasses = cn(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent',
    {
      'bg-background border-border text-foreground': isScrolled || !isHome || isMobileMenuOpen,
      'bg-transparent text-white': !isScrolled && isHome && !isMobileMenuOpen,
    }
  );

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <>
      <header className={headerClasses}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Desktop Navigation (Left) */}
            <nav className="hidden md:flex flex-1 justify-start gap-8">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm font-medium tracking-wide uppercase hover:opacity-70 transition-opacity"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Logo (Center) */}
            <Link to="/" className="flex-1 flex justify-center md:flex-none">
              <span className="font-serif text-3xl tracking-[0.2em] uppercase font-medium">
                Velmora
              </span>
            </Link>

            {/* Desktop Navigation (Right) & Icons */}
            <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
              <nav className="flex gap-8">
                {navLinks.slice(2).map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-sm font-medium tracking-wide uppercase hover:opacity-70 transition-opacity"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="flex items-center gap-6 border-l border-current pl-6 ml-2 h-6">
                <button aria-label="Search" className="hover:opacity-70 transition-opacity">
                  <Search className="w-5 h-5" />
                </button>
                <button 
                  aria-label="Cart" 
                  className="relative hover:opacity-70 transition-opacity"
                  onClick={openCart}
                >
                  <ShoppingBag className="w-5 h-5" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1.5 -right-2 bg-accent text-accent-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                      {totalItems}
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Icons (Right) */}
            <div className="md:hidden flex items-center gap-4">
              <button aria-label="Search" className=" hover:opacity-70 transition-opacity">
                 <Search className="w-5 h-5" />
              </button>
              <button 
                aria-label="Cart" 
                className="relative hover:opacity-70 transition-opacity"
                onClick={openCart}
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-accent text-accent-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={cn(
            'md:hidden absolute top-20 left-0 w-full bg-background text-foreground border-b border-border transition-all duration-300 ease-in-out overflow-hidden',
            isMobileMenuOpen ? 'max-h-screen border-t' : 'max-h-0 border-transparent border-t-0'
          )}
        >
          <nav className="flex flex-col px-4 pt-4 pb-8 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-lg font-serif tracking-widest uppercase hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      
      <CartDrawer />
    </>
  );
}