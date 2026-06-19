import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { cartCount, setIsCartOpen } = useCart();
  
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
  }, [location]);

  return (
    <header 
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 ease-in-out border-b py-3',
        isScrolled || !isHomepage || isMobileMenuOpen
          ? 'bg-brand-sand/95 backdrop-blur-md shadow-sm border-black/5 text-brand-charcoal' 
          : 'bg-transparent border-transparent py-5 text-white'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <div className="md:hidden flex-1">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 -ml-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Logo */}
        <div className="flex-1 md:flex-none flex justify-center md:justify-start">
          <Link to="/" className="font-serif text-2xl md:text-3xl tracking-widest font-semibold uppercase">
            VELMORA
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center space-x-10 text-sm tracking-widest uppercase">
          <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <Link to="/collections" className="hover:text-primary transition-colors">Collections</Link>
          <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          <Link to="/journal" className="hover:text-primary transition-colors">Journal</Link>
        </nav>

        {/* Icons */}
        <div className="flex-1 flex justify-end items-center space-x-4 md:space-x-6">
          <button className="p-1 hover:text-primary transition-colors">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button 
            className="p-1 hover:text-primary transition-colors relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full h-screen bg-brand-sand flex flex-col pt-10 px-6 space-y-6 md:hidden text-brand-charcoal">
          <Link to="/shop" className="text-xl font-serif uppercase tracking-widest border-b border-black/10 pb-4">Shop All</Link>
          <Link to="/collections" className="text-xl font-serif uppercase tracking-widest border-b border-black/10 pb-4">Collections</Link>
          <Link to="/about" className="text-xl font-serif uppercase tracking-widest border-b border-black/10 pb-4">Our Story</Link>
          <Link to="/journal" className="text-xl font-serif uppercase tracking-widest pb-4">Journal</Link>
        </div>
      )}
    </header>
  );
}