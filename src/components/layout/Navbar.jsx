import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import CartDrawer from './CartDrawer';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/shop' },
    { name: 'About', path: '/#about' },
    { name: 'Journal', path: '/#journal' },
  ];

  const isHomePage = location.pathname === '/';
  const navTextColor = (isScrolled || isMenuOpen || !isHomePage) ? "text-velmora-charcoal" : "text-white";
  const navBgColor = (isScrolled || isMenuOpen || !isHomePage) ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent";

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        navBgColor,
        isScrolled || isMenuOpen ? "py-4" : "py-6",
        navTextColor
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between font-sans">
        <button 
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>

        <Link 
          to="/" 
          className="text-2xl font-serif font-bold tracking-[0.2em] absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 hover:opacity-70 transition-opacity"
        >
          VELMORA
        </Link>

        <div className="hidden lg:flex items-center space-x-12 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-[10px] uppercase tracking-[0.3em] font-medium hover:text-accent transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-6">
          <button className="hidden md:block hover:text-accent transition-colors duration-300">
            <Search size={18} strokeWidth={1.5} />
          </button>
          <button 
            className="relative hover:text-accent transition-colors duration-300"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-accent text-white text-[8px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      <div 
        className={cn(
          "fixed inset-0 top-[60px] bg-white z-40 transition-all duration-700 lg:hidden",
          isMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-10 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-10 pb-32 text-velmora-charcoal">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-3xl font-serif lowercase tracking-widest hover:text-accent transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      <CartDrawer />
    </nav>
  );
};

export default Navbar;
