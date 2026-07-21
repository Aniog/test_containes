import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { cartCount, setIsCartOpen } = useCart();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop All', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' }
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12",
      isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border py-4 text-foreground shadow-sm" 
                 : (isHome ? "bg-transparent py-6 text-white" : "bg-background border-b border-border py-4 text-foreground")
    )}>
      <div className="max-w-[1800px] mx-auto flex items-center justify-between">
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden p-2 -ml-2 hover:opacity-70"
        >
          <Menu className="w-6 h-6" />
        </button>

        <div className="hidden md:flex items-center gap-8 capitalize text-[11px] font-sans font-medium tracking-[0.2em]">
          {navLinks.slice(0, 2).map((link) => (
            <Link key={link.name} to={link.path} className="hover:opacity-60 transition-opacity">
              {link.name}
            </Link>
          ))}
        </div>

        <Link to="/" className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
          <span className="font-serif text-2xl md:text-3xl tracking-[0.3em] uppercase">VELMORA</span>
          <span className="hidden md:block text-[7px] tracking-[0.5em] uppercase mt-1 opacity-70">Fine Jewelry</span>
        </Link>

        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden md:flex items-center gap-8 capitalize text-[11px] font-sans font-medium tracking-[0.2em]">
            {navLinks.slice(2).map((link) => (
              <Link key={link.name} to={link.path} className="hover:opacity-60 transition-opacity">
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-2 md:gap-6">
            <button className="p-2 hover:opacity-60 transition-opacity">
              <Search className="w-5 h-5 stroke-[1.5]" />
            </button>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="p-2 hover:opacity-60 transition-opacity relative"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-primary text-[8px] flex items-center justify-center rounded-full text-white font-sans">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-[60] flex flex-col p-12 text-foreground">
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-8 right-8"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="mt-12 flex flex-col gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-serif text-4xl uppercase tracking-widest hover:italic transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
