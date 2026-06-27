import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCartStore } from '@/lib/cart-store';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { toggleCart, items } = useCartStore();
  
  const isHome = location.pathname === '/';
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

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
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        isScrolled || !isHome 
          ? "bg-white/90 backdrop-blur-md border-b border-stone shadow-sm py-4" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-1">
          <Link 
            to="/" 
            className={cn(
              "text-3xl font-serif tracking-widest transition-colors duration-300",
              isScrolled || !isHome ? "text-accent" : "text-white"
            )}
          >
            VELMORA
          </Link>
        </div>

        {/* Center: Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm uppercase tracking-widest transition-colors duration-300 hover:opacity-70",
                isScrolled || !isHome ? "text-accent" : "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: Icons */}
        <div className="flex-1 flex items-center justify-end space-x-6">
          <button 
            className={cn(
              "p-1 transition-colors duration-300",
              isScrolled || !isHome ? "text-accent" : "text-white"
            )}
          >
            <Search size={22} className="stroke-1.5" />
          </button>
          <button 
            onClick={toggleCart}
            className={cn(
              "p-1 relative transition-colors duration-300",
              isScrolled || !isHome ? "text-accent" : "text-white"
            )}
          >
            <ShoppingBag size={22} className="stroke-1.5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button 
            className={cn(
              "md:hidden p-1 transition-colors duration-300",
              isScrolled || !isHome ? "text-accent" : "text-white"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-stone p-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-accent text-sm uppercase tracking-widest py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
