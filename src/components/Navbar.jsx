import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const bgClass = scrolled || !isHome
    ? 'bg-cream/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent';

  const textClass = scrolled || !isHome ? 'text-dark' : 'text-cream';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgClass}`}
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex h-16 md:h-20 items-center justify-between">
            {/* Mobile menu button */}
            <button
              className={`md:hidden p-2 -ml-2 ${textClass}`}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl font-semibold tracking-widest uppercase ${textClass}`}
            >
              Velmora
            </Link>

            {/* Center links — desktop */}
            <div className={`hidden md:flex items-center gap-10 text-sm font-medium tracking-wide ${textClass}`}>
              <Link to="/shop" className="hover:text-gold transition-colors duration-300">Shop</Link>
              <Link to="/shop?filter=collections" className="hover:text-gold transition-colors duration-300">Collections</Link>
              <Link to="/about" className="hover:text-gold transition-colors duration-300">About</Link>
              <Link to="/journal" className="hover:text-gold transition-colors duration-300">Journal</Link>
            </div>

            {/* Right icons */}
            <div className={`flex items-center gap-4 ${textClass}`}>
              <button aria-label="Search" className="p-1 hover:text-gold transition-colors duration-300">
                <Search size={20} />
              </button>
              <button
                aria-label="Cart"
                className="relative p-1 hover:text-gold transition-colors duration-300"
                onClick={openCart}
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] font-semibold text-cream">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-dark/40" onClick={() => setMobileOpen(false)} />
        <div
          className={`absolute left-0 top-0 h-full w-72 bg-cream shadow-xl transition-transform duration-500 ease-out-expo ${
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-border">
            <span className="font-serif text-lg tracking-widest uppercase">Menu</span>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <X size={22} className="text-dark" />
            </button>
          </div>
          <div className="flex flex-col p-6 gap-6 text-dark font-medium">
            <Link to="/shop" className="text-lg hover:text-gold transition-colors">Shop</Link>
            <Link to="/shop?filter=collections" className="text-lg hover:text-gold transition-colors">Collections</Link>
            <Link to="/about" className="text-lg hover:text-gold transition-colors">About</Link>
            <Link to="/journal" className="text-lg hover:text-gold transition-colors">Journal</Link>
          </div>
        </div>
      </div>
    </>
  );
}
