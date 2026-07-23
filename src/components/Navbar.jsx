import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, cartCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navClass = scrolled
    ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-stone-200'
    : 'bg-transparent';

  const textClass = scrolled ? 'text-stone-900' : 'text-white';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            className={`md:hidden ${textClass}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/shop" className={`text-sm tracking-widest uppercase ${textClass} hover:text-amber-700 transition-colors`}>
              Shop
            </Link>
            <Link to="/shop" className={`text-sm tracking-widest uppercase ${textClass} hover:text-amber-700 transition-colors`}>
              Collections
            </Link>
            <Link to="/" className={`text-sm tracking-widest uppercase ${textClass} hover:text-amber-700 transition-colors`}>
              About
            </Link>
            <Link to="/" className={`text-sm tracking-widest uppercase ${textClass} hover:text-amber-700 transition-colors`}>
              Journal
            </Link>
          </div>

          <Link to="/" className="absolute left-1/2 -translate-x-1/2">
            <h1 className={`font-serif text-2xl md:text-3xl tracking-widest ${textClass}`}>
              VELMORA
            </h1>
          </Link>

          <div className="flex items-center space-x-4">
            <button className={`${textClass} hover:text-amber-700 transition-colors`} aria-label="Search">
              <Search size={20} />
            </button>
            <button
              className={`relative ${textClass} hover:text-amber-700 transition-colors`}
              onClick={toggleCart}
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-700 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-stone-200">
          <div className="px-4 py-6 space-y-4">
            <Link to="/shop" className="block text-stone-800 tracking-widest uppercase text-sm">
              Shop
            </Link>
            <Link to="/shop" className="block text-stone-800 tracking-widest uppercase text-sm">
              Collections
            </Link>
            <Link to="/" className="block text-stone-800 tracking-widest uppercase text-sm">
              About
            </Link>
            <Link to="/" className="block text-stone-800 tracking-widest uppercase text-sm">
              Journal
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
