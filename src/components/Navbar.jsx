import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import CartDrawer from './CartDrawer';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();
  const isHomepage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
  ];

  const transparentNavbar = isHomepage && !isScrolled && !isMobileMenuOpen;

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 w-full z-40 transition-all duration-300 border-b border-transparent',
          transparentNavbar
            ? 'bg-transparent text-white py-6'
            : 'bg-background/95 backdrop-blur-md text-foreground py-4 border-border/50 shadow-sm'
        )}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 -ml-2"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Nav Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 w-1/3">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="text-sm font-medium tracking-wide uppercase hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Logo */}
          <div className="flex justify-center w-1/3">
            <Link to="/" className="text-2xl md:text-3xl font-serif tracking-[0.2em] font-medium">
              VELMORA
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center justify-end gap-4 md:gap-6 w-1/3">
            <button aria-label="Search" className="hover:text-primary transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button 
              aria-label="Cart" 
              className="relative hover:text-primary transition-colors"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-background z-50 transition-transform duration-300 ease-in-out md:hidden flex flex-col",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex justify-between items-center p-4 border-b border-border">
          <span className="text-xl font-serif tracking-[0.2em]">VELMORA</span>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-muted-foreground hover:text-foreground"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col p-8 gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-2xl font-serif hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      <CartDrawer />
    </>
  );
};

export default Navbar;
