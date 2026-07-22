import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext.jsx';
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

  const navClasses = cn(
    'fixed top-0 w-full z-50 transition-all duration-300 px-6 md:px-12 py-4 flex items-center justify-between',
    isScrolled || !isHome ? 'bg-brand-cream border-b border-brand-stone/10 text-brand-charcoal' : 'bg-transparent text-white'
  );

  return (
    <nav className={navClasses}>
      <div className="flex-1 hidden md:flex gap-8 text-sm items-center">
        <Link to="/shop" className="hover:text-brand-gold transition-colors uppercase tracking-widest text-xs">Shop</Link>
        <Link to="/shop" className="hover:text-brand-gold transition-colors uppercase tracking-widest text-xs">Collections</Link>
        <Link to="#" className="hover:text-brand-gold transition-colors uppercase tracking-widest text-xs">About</Link>
        <Link to="#" className="hover:text-brand-gold transition-colors uppercase tracking-widest text-xs">Journal</Link>
      </div>

      <div className="md:hidden flex-1">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className="flex-1 text-center font-serif text-2xl lg:text-3xl tracking-[0.2em] font-bold">
        <Link to="/" className="">VELMORA</Link>
      </div>

      <div className="flex-1 flex justify-end items-center gap-6">
        <button className="hover:text-brand-gold transition-colors">
          <Search size={20} />
        </button>
        <button 
          className="hover:text-brand-gold transition-colors relative"
          onClick={() => setIsCartOpen(true)}
        >
          <ShoppingBag size={20} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-brand-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-brand-cream z-40 md:hidden flex flex-col p-8 gap-8 animate-in slide-in-from-top duration-300">
          <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif uppercase tracking-widest">Shop All</Link>
          <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif uppercase tracking-widest">Collections</Link>
          <Link to="#" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif uppercase tracking-widest">About</Link>
          <Link to="#" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif uppercase tracking-widest">Journal</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
