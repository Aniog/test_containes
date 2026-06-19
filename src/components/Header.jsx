import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { cartCount, setIsCartOpen } = useCart();
  
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop', href: '/shop' },
    { name: 'Collections', href: '/collections' },
    { name: 'About', href: '/about' },
    { name: 'Journal', href: '/journal' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 md:px-12 py-4 md:py-6',
        isScrolled || !isHome
          ? 'bg-brand-cream/95 backdrop-blur-sm border-b border-brand-charcoal/5 py-3 md:py-4'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className={cn(
            "text-2xl md:text-3xl font-serif tracking-[0.2em] transition-colors duration-500",
            isScrolled || !isHome ? "text-brand-charcoal" : "text-brand-charcoal md:text-white"
          )}
        >
          VELMORA
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm uppercase tracking-widest font-sans transition-colors duration-500 hover:text-brand-gold",
                isScrolled || !isHome ? "text-brand-charcoal" : "text-brand-charcoal md:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Icons */}
        <div className="flex items-center space-x-5 md:space-x-8">
          <button 
            className={cn(
              "transition-colors duration-500 hover:text-brand-gold",
              isScrolled || !isHome ? "text-brand-charcoal" : "text-brand-charcoal md:text-white"
            )}
            aria-label="Search"
          >
            <Search size={22} strokeWidth={1.5} />
          </button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className={cn(
              "relative transition-colors duration-500 hover:text-brand-gold",
              isScrolled || !isHome ? "text-brand-charcoal" : "text-brand-charcoal md:text-white"
            )}
            aria-label="Cart"
          >
            <ShoppingBag size={22} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand-gold text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button 
            className={cn(
              "md:hidden transition-colors duration-500",
              isScrolled || !isHome ? "text-brand-charcoal" : "text-brand-charcoal md:text-white"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 top-[60px] bg-brand-cream z-40 transition-transform duration-500 md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8 p-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-2xl font-serif tracking-widest uppercase text-brand-charcoal"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
