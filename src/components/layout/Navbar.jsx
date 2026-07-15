import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar({ onCartClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { cartCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isTransparent = !scrolled && location.pathname === '/';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isTransparent
          ? 'bg-transparent text-cream'
          : 'bg-cream/95 backdrop-blur-sm text-espresso shadow-[0_1px_0_0_rgba(0,0,0,0.04)]'
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 -ml-2"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Desktop Nav Left */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/shop" className="text-xs tracking-widest uppercase hover:opacity-70 transition-opacity">
              Shop
            </Link>
            <Link to="/shop?category=earrings" className="text-xs tracking-widest uppercase hover:opacity-70 transition-opacity">
              Collections
            </Link>
            <Link to="/" className="text-xs tracking-widest uppercase hover:opacity-70 transition-opacity">
              About
            </Link>
            <Link to="/" className="text-xs tracking-widest uppercase hover:opacity-70 transition-opacity">
              Journal
            </Link>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-xl md:text-2xl tracking-[0.3em] absolute left-1/2 -translate-x-1/2 transition-colors duration-500 ${
              isTransparent ? 'text-cream' : 'text-espresso'
            }`}
          >
            VELMORA
          </Link>

          {/* Right Actions */}
          <div className="flex items-center gap-1 md:gap-3">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 hover:opacity-70 transition-opacity"
              aria-label="Search"
            >
              <Search className="w-4 h-4 md:w-[18px] md:h-[18px]" />
            </button>
            <button
              onClick={onCartClick}
              className="p-2 hover:opacity-70 transition-opacity relative"
              aria-label="Cart"
            >
              <ShoppingBag className="w-4 h-4 md:w-[18px] md:h-[18px]" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className={`pb-4 transition-all ${isTransparent ? 'text-cream' : 'text-espresso'}`}>
            <div className={`flex items-center border-b ${isTransparent ? 'border-cream/30' : 'border-sand'} pb-2`}>
              <Search className="w-4 h-4 mr-2 opacity-50" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent border-none outline-none text-sm w-full placeholder:opacity-50"
                autoFocus
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-sand/40">
          <div className="px-5 py-6 flex flex-col gap-5">
            <Link to="/shop" className="text-sm tracking-widest uppercase">Shop</Link>
            <Link to="/shop?category=earrings" className="text-sm tracking-widest uppercase">Collections</Link>
            <Link to="/" className="text-sm tracking-widest uppercase">About</Link>
            <Link to="/" className="text-sm tracking-widest uppercase">Journal</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
