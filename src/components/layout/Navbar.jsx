import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { setIsOpen: openCart, itemCount } = useCart();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between',
        isScrolled || !isHome ? 'bg-background/90 backdrop-blur-md shadow-sm text-foreground' : 'bg-transparent text-white'
      )}
    >
      <div className="flex-1 lg:block hidden">
        <div className="flex gap-8 items-center">
          {navLinks.slice(0, 2).map(link => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="text-xs uppercase tracking-widest hover:opacity-70 transition-opacity"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="lg:hidden flex-1">
        <button onClick={() => setIsMobileMenuOpen(true)}>
          <Menu className="w-5 h-5" />
        </button>
      </div>

      <Link to="/" className="text-2xl font-serif tracking-[0.2em] relative z-[70]">
        VELMORA
      </Link>

      <div className="flex-1 flex justify-end items-center gap-6">
        <div className="lg:flex hidden gap-8 mr-8">
          {navLinks.slice(2).map(link => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="text-xs uppercase tracking-widest hover:opacity-70 transition-opacity"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <button className="hover:opacity-70 transition-opacity">
          <Search className="w-5 h-5" />
        </button>
        <button 
          className="hover:opacity-70 transition-opacity relative"
          onClick={() => openCart(true)}
        >
          <ShoppingBag className="w-5 h-5" />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {itemCount}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 bg-background z-[60] lg:hidden transition-transform duration-500 ease-in-out px-6 py-4 flex flex-col items-center justify-center gap-12",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-4 right-6">
          <X className="w-6 h-6 text-foreground" />
        </button>
        {navLinks.map(link => (
          <Link 
            key={link.name} 
            to={link.path} 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-3xl font-serif tracking-widest uppercase"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
