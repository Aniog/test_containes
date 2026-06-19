import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500',
        isScrolled || !isHome || isMobileMenuOpen
          ? 'bg-brand-base border-b border-brand-text/10 py-4'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-brand-text"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link
          to="/"
          className={cn(
            'text-2xl font-serif tracking-[0.1em] font-light',
            !isScrolled && isHome && !isMobileMenuOpen ? 'text-brand-text' : 'text-brand-text'
          )}
        >
          VELMORA
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-10">
          <Link to="/shop" className="nav-link">Shop</Link>
          <Link to="/collections" className="nav-link">Collections</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/journal" className="nav-link">Journal</Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <button className="text-brand-text hover:text-brand-accent transition-colors">
            <Search size={20} />
          </button>
          <button
            className="text-brand-text hover:text-brand-accent transition-colors relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[73px] bg-brand-base z-40 flex flex-col p-10 space-y-8 animate-in fade-in slide-in-from-top-4 duration-300">
          <Link to="/shop" className="text-xl font-serif uppercase tracking-widest border-b border-brand-text/10 pb-4">Shop</Link>
          <Link to="/collections" className="text-xl font-serif uppercase tracking-widest border-b border-brand-text/10 pb-4">Collections</Link>
          <Link to="/about" className="text-xl font-serif uppercase tracking-widest border-b border-brand-text/10 pb-4">About</Link>
          <Link to="/journal" className="text-xl font-serif uppercase tracking-widest border-b border-brand-text/10 pb-4">Journal</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
