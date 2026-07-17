import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCartStore } from '../../lib/store';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { cartCount, openCart } = useCartStore();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navClasses = `fixed w-full z-30 transition-all duration-300 ${
    isScrolled || !isHome || isMobileMenuOpen 
      ? 'bg-background/95 backdrop-blur-md text-foreground border-b border-border/50 py-4 shadow-sm' 
      : 'bg-transparent text-white py-6'
  }`;

  const navLinks = [
    { name: 'Shop All', path: '/shop' },
    { name: 'Earrings', path: '/shop?category=earrings' },
    { name: 'Necklaces', path: '/shop?category=necklaces' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex-1">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 -ml-2 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-1 md:flex-none text-center md:text-left">
            <Link to="/" className="font-serif text-3xl tracking-widest block">
              VELMORA
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex flex-1 justify-center space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="text-sm uppercase tracking-widest font-medium hover:opacity-70 transition-opacity"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex-1 flex justify-end items-center space-x-4">
            <button className="p-2 hover:opacity-70 transition-opacity" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button 
              onClick={openCart}
              className="p-2 hover:opacity-70 transition-opacity relative"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount() > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold leading-none text-primary-foreground transform translate-x-1/4 -translate-y-1/4 bg-primary rounded-full">
                  {cartCount()}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'opacity-100 translate-y-0 h-auto py-6' : 'opacity-0 -translate-y-4 h-0 overflow-hidden py-0'
      }`}>
        <div className="px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-foreground text-sm uppercase tracking-widest font-medium block py-2 border-b border-border/40"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4">
            <Link 
              to="/login"
              className="text-foreground text-sm uppercase tracking-widest font-medium block py-2"
            >
              Sign In / Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}