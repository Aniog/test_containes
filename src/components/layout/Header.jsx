import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  const { cartCount, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Shop', path: '/collections/all' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled || !isHome || isMobileMenuOpen
          ? 'bg-background text-foreground shadow-sm py-4'
          : 'bg-transparent text-white py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        
        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex-1">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 -ml-2">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Logo */}
        <div className="flex-1 md:flex-none text-center md:text-left">
          <Link to="/" className="font-serif text-2xl md:text-3xl tracking-widest uppercase inline-block">
            Velmora
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex flex-1 justify-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm tracking-widest uppercase hover:opacity-70 transition-opacity"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex-1 flex justify-end items-center space-x-4">
          <button aria-label="Search" className="p-2 hover:opacity-70 transition-opacity">
            <Search size={20} />
          </button>
          <button 
            aria-label="Cart" 
            className="p-2 hover:opacity-70 transition-opacity relative"
            onClick={openCart}
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute top-1 right-0 bg-gold-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center pointer-events-none">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background text-foreground border-t border-stone-200 p-4 md:hidden shadow-lg h-screen">
          <nav className="flex flex-col space-y-6 mt-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-lg tracking-widest uppercase border-b border-stone-100 pb-2"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;