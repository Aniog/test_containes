import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setIsCartOpen, cartCount } = useCart();
  const location = useLocation();
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

  const headerClasses = cn(
    "fixed top-0 left-0 w-full z-40 transition-all duration-500 py-6",
    isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm py-4" : (isHome ? "bg-transparent text-white" : "bg-white text-brand-charcoal")
  );

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>

        {/* Brand Name - Left for visual weight balance although centered links requested */}
        <div className="flex-1 hidden md:block">
           {/* Placeholder for left spacing if needed, but we'll follow prompt: Left logo, center links */}
        </div>
        
        <Link to="/" className="text-2xl font-serif font-bold tracking-[0.2em] hover:opacity-80 transition-opacity">
          VELMORA
        </Link>

        {/* Desktop Nav - Center Links */}
        <nav className="hidden md:flex flex-1 justify-center space-x-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-[10px] uppercase tracking-widestest hover:opacity-100 opacity-70 transition-opacity"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Icons */}
        <div className="flex-1 flex justify-end items-center space-x-6">
          <button className="hover:opacity-60 transition-opacity hidden sm:block">
            <Search size={20} />
          </button>
          <button 
            className="hover:opacity-60 transition-opacity relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand-gold text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-white z-50 transition-transform duration-500 transform",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-8 h-full flex flex-col">
          <div className="flex justify-end">
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
              <X size={28} />
            </button>
          </div>
          <div className="mt-12 space-y-8 flex flex-col items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-serif uppercase tracking-widestest"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
