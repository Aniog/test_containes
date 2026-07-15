import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const Navbar = () => {
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

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 px-6 md:px-12 flex items-center justify-between',
        isScrolled || !isHome || isMobileMenuOpen
          ? 'bg-white text-primary shadow-sm py-3'
          : 'bg-transparent text-white'
      )}
    >
      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Nav Links - Desktop Left */}
      <div className="hidden md:flex items-center gap-8">
        <Link to="/shop" className="nav-link">Shop</Link>
        <Link to="/collections" className="nav-link">Collections</Link>
      </div>

      {/* Logo */}
      <Link
        to="/"
        className="text-2xl md:text-3xl font-serif tracking-widestest absolute left-1/2 -translate-x-1/2"
      >
        VELMORA
      </Link>

      {/* Desktop Links Center-Right (About/Journal) */}
      <div className="hidden md:flex items-center gap-8 ml-auto mr-12">
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/journal" className="nav-link">Journal</Link>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-4 md:gap-6">
        <button className="p-2 hover:opacity-60 transition-opacity">
          <Search size={20} />
        </button>
        <button
          className="p-2 hover:opacity-60 transition-opacity relative"
          onClick={() => setIsCartOpen(true)}
        >
          <ShoppingBag size={20} />
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 bg-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-white z-40 flex flex-col p-8 gap-6 animate-in fade-in slide-in-from-top-4 duration-300 md:hidden">
          <Link to="/shop" className="text-xl font-serif tracking-widest uppercase">Shop</Link>
          <Link to="/collections" className="text-xl font-serif tracking-widest uppercase">Collections</Link>
          <Link to="/about" className="text-xl font-serif tracking-widest uppercase">About</Link>
          <Link to="/journal" className="text-xl font-serif tracking-widest uppercase">Journal</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
