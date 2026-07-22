import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart, useCartDrawer } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount } = useCart();
  const { openDrawer } = useCartDrawer();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? 'bg-transparent text-white'
          : 'bg-velvet-50/95 backdrop-blur-md text-velvet-900 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Center links — desktop */}
          <div className="hidden md:flex items-center gap-10 font-sans text-xs tracking-widest uppercase">
            <Link to="/shop" className="hover:text-warm-600 transition-colors duration-200">
              Shop
            </Link>
            <Link to="/shop/earrings" className="hover:text-warm-600 transition-colors duration-200">
              Collections
            </Link>
            <Link to="/about" className="hover:text-warm-600 transition-colors duration-200">
              About
            </Link>
            <Link to="/journal" className="hover:text-warm-600 transition-colors duration-200">
              Journal
            </Link>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-2xl md:text-3xl tracking-super-wide absolute left-1/2 -translate-x-1/2"
          >
            VELMORA
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-1 md:gap-3">
            <button className="p-2 hover:text-warm-600 transition-colors duration-200" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button
              className="p-2 hover:text-warm-600 transition-colors duration-200 relative"
              onClick={openDrawer}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-warm-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-sans font-medium">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-80 border-t border-velvet-200' : 'max-h-0'
        } ${transparent ? '' : 'bg-velvet-50'}`}
      >
        <div className="px-5 py-6 flex flex-col gap-5 font-sans text-sm tracking-widest uppercase">
          <Link to="/shop" className="hover:text-warm-600 transition-colors">Shop</Link>
          <Link to="/shop/earrings" className="hover:text-warm-600 transition-colors">Collections</Link>
          <Link to="/about" className="hover:text-warm-600 transition-colors">About</Link>
          <Link to="/journal" className="hover:text-warm-600 transition-colors">Journal</Link>
        </div>
      </div>
    </nav>
  );
}
