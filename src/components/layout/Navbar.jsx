import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled || !isHome ? 'bg-white shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Left: Menu & Nav */}
        <div className="hidden md:flex items-center space-x-8 flex-1">
          <Link to="/shop" className={`text-[10px] uppercase tracking-[0.2em] font-bold hover:text-gold-600 transition-colors ${
            isScrolled || !isHome ? 'text-luxury-black' : 'text-white'
          }`}>Shop</Link>
          <Link to="/collections" className={`text-[10px] uppercase tracking-[0.2em] font-bold hover:text-gold-600 transition-colors ${
            isScrolled || !isHome ? 'text-luxury-black' : 'text-white'
          }`}>Collections</Link>
          <Link to="/about" className={`text-[10px] uppercase tracking-[0.2em] font-bold hover:text-gold-600 transition-colors ${
            isScrolled || !isHome ? 'text-luxury-black' : 'text-white'
          }`}>About</Link>
        </div>

        <button 
          className="md:hidden flex-1 flex"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className={isScrolled || !isHome ? 'text-luxury-black' : 'text-white'} />
        </button>

        {/* Center: Logo */}
        <Link to="/" className={`text-2xl font-serif tracking-[0.3em] flex-1 text-center transition-colors ${
          isScrolled || !isHome ? 'text-luxury-black' : 'text-white'
        }`}>
          VELMORA
        </Link>

        {/* Right: Icons */}
        <div className="flex items-center justify-end space-x-6 flex-1">
          <button className={`hover:text-gold-600 transition-colors ${
            isScrolled || !isHome ? 'text-luxury-black' : 'text-white'
          }`}>
            <Search className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className={`flex items-center gap-2 hover:text-gold-600 transition-colors relative ${
              isScrolled || !isHome ? 'text-luxury-black' : 'text-white'
            }`}
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-gold-600 text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-[60] flex flex-col p-8 md:hidden">
          <div className="flex justify-end mb-12">
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X className="w-8 h-8 text-luxury-black" />
            </button>
          </div>
          <div className="flex flex-col space-y-8">
            <Link to="/shop" className="text-3xl font-serif text-luxury-black">Shop</Link>
            <Link to="/collections" className="text-3xl font-serif text-luxury-black">Collections</Link>
            <Link to="/about" className="text-3xl font-serif text-luxury-black">About</Link>
            <Link to="/journal" className="text-3xl font-serif text-luxury-black">Journal</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
