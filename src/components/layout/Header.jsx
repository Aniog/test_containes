import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useStore } from '@/store/useStore';
import CartDrawer from './CartDrawer';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setCartOpen, cart } = useStore();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/shop' },
    { name: 'About', path: '/#' },
    { name: 'Journal', path: '/#' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled || !isHome
            ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-4'
            : 'bg-transparent py-6 text-white'
        )}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex-1 md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className={cn("p-2 -ml-2", isScrolled || !isHome ? "text-foreground" : "text-white")}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={cn(
                  "text-sm font-medium tracking-wide uppercase transition-colors",
                  isScrolled || !isHome ? "text-foreground/80 hover:text-foreground" : "text-white/80 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex-1 flex justify-center">
            <Link to="/" className="inline-block relative">
              <span className={cn(
                "font-serif text-2xl md:text-3xl font-semibold tracking-[0.2em] uppercase transition-colors",
                isScrolled || !isHome ? "text-foreground" : "text-white text-shadow-sm"
              )}>
                Velmora
              </span>
            </Link>
          </div>

          <div className="flex-1 flex items-center justify-end gap-4 md:gap-6 relative">
            <button className={cn(
              "hidden md:block transition-colors",
              isScrolled || !isHome ? "text-foreground/80 hover:text-foreground" : "text-white/80 hover:text-white"
            )}>
              <Search className="w-5 h-5" />
            </button>
            <button 
              className={cn(
                "relative transition-colors",
                isScrolled || !isHome ? "text-foreground/80 hover:text-foreground" : "text-white/80 hover:text-white"
              )}
              onClick={() => setCartOpen(true)}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 z-[60] bg-background transform transition-transform duration-300 md:hidden flex flex-col",
        mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-4 flex justify-between items-center border-b border-border">
          <span className="font-serif text-xl font-semibold tracking-widest uppercase text-foreground">
            Velmora
          </span>
          <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-foreground">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex-1 flex flex-col p-8 gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-2xl font-serif text-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      
      <CartDrawer />
    </>
  );
}