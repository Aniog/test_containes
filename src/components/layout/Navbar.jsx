import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsDrawerOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-colors duration-300",
        isScrolled || !isHome ? "bg-background border-b text-foreground" : "bg-transparent text-white"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Mobile menu toggle */}
        <div className="flex-1 md:hidden">
          <button onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Desktop Links */}
        <nav className="flex-1 hidden md:flex items-center gap-8 font-medium text-sm">
          <Link to="/shop" className="hover:opacity-70 transition-opacity">Shop</Link>
          <Link to="/collections" className="hover:opacity-70 transition-opacity">Collections</Link>
          <Link to="/about" className="hover:opacity-70 transition-opacity">About</Link>
          <Link to="/journal" className="hover:opacity-70 transition-opacity">Journal</Link>
        </nav>

        {/* Logo */}
        <div className="flex-1 flex justify-center">
          <Link to="/" className="font-serif text-3xl tracking-widest font-semibold">
            VELMORA
          </Link>
        </div>

        {/* Icons */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <button className="hover:opacity-70 transition-opacity">
            <Search className="w-5 h-5" />
          </button>
          <button 
            className="hover:opacity-70 transition-opacity relative"
            onClick={() => setIsDrawerOpen(true)}
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-primary text-primary-foreground text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-50 flex flex-col pt-20 px-4">
          <button 
            className="absolute top-6 right-4 p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
          <nav className="flex flex-col gap-6 text-2xl font-serif text-foreground">
            <Link to="/shop">Shop All</Link>
            <Link to="/collections">Collections</Link>
            <Link to="/about">About Us</Link>
            <Link to="/journal">Journal</Link>
          </nav>
        </div>
      )}
    </header>
  );
};
