import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navBg = scrolled || !isHome
    ? 'bg-velmora-dark/95 backdrop-blur-sm text-white'
    : 'bg-transparent text-white';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${navBg}`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Logo */}
            <Link to="/" className="font-serif text-xl md:text-2xl tracking-widest">
              VELMORA
            </Link>

            {/* Center links desktop */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/shop" className="text-sm uppercase tracking-widest hover:opacity-70 transition-opacity">Shop</Link>
              <Link to="/shop" className="text-sm uppercase tracking-widest hover:opacity-70 transition-opacity">Collections</Link>
              <Link to="/" className="text-sm uppercase tracking-widest hover:opacity-70 transition-opacity">About</Link>
              <Link to="/" className="text-sm uppercase tracking-widest hover:opacity-70 transition-opacity">Journal</Link>
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button className="p-1 hover:opacity-70 transition-opacity" aria-label="Search">
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={openCart}
                className="p-1 hover:opacity-70 transition-opacity relative"
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-velmora-gold text-white text-[10px] flex items-center justify-center rounded-full">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-20 bg-velmora-dark text-white pt-20 px-6 md:hidden animate-in fade-in duration-200">
          <div className="flex flex-col gap-6 mt-8">
            <Link to="/shop" className="font-serif text-2xl">Shop</Link>
            <Link to="/shop" className="font-serif text-2xl">Collections</Link>
            <Link to="/" className="font-serif text-2xl">About</Link>
            <Link to="/" className="font-serif text-2xl">Journal</Link>
          </div>
        </div>
      )}
    </>
  );
}
