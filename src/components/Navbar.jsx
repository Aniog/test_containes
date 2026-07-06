import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const { count, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  const navBg = scrolled || !isHome
    ? 'bg-cream/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent';
  const textColor = scrolled || !isHome ? 'text-charcoal' : 'text-white';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-expo ${navBg}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className={`md:hidden p-2 ${textColor}`}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Left: Logo */}
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl tracking-widest font-semibold ${textColor} transition-colors`}
            >
              VELMORA
            </Link>

            {/* Center: Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/shop" className={`text-xs font-medium tracking-widest uppercase ${textColor} hover:opacity-70 transition-opacity`}>
                Shop
              </Link>
              <Link to="/shop?filter=collections" className={`text-xs font-medium tracking-widest uppercase ${textColor} hover:opacity-70 transition-opacity`}>
                Collections
              </Link>
              <Link to="/about" className={`text-xs font-medium tracking-widest uppercase ${textColor} hover:opacity-70 transition-opacity`}>
                About
              </Link>
              <Link to="/journal" className={`text-xs font-medium tracking-widest uppercase ${textColor} hover:opacity-70 transition-opacity`}>
                Journal
              </Link>
            </div>

            {/* Right: Search + Cart */}
            <div className="flex items-center gap-3 md:gap-5">
              <button
                className={`p-2 ${textColor} hover:opacity-70 transition-opacity`}
                onClick={() => setSearchOpen(true)}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                className={`p-2 relative ${textColor} hover:opacity-70 transition-opacity`}
                onClick={openCart}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {count > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-espresso text-[10px] font-bold rounded-full flex items-center justify-center">
                    {count}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-[80%] max-w-xs bg-cream p-6 flex flex-col">
            <div className="flex items-center justify-between mb-10">
              <span className="font-serif text-xl tracking-widest font-semibold text-charcoal">
                VELMORA
              </span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X className="w-5 h-5 text-charcoal" />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              <Link to="/shop" className="text-sm font-medium tracking-widest uppercase text-charcoal">
                Shop
              </Link>
              <Link to="/shop" className="text-sm font-medium tracking-widest uppercase text-charcoal">
                Collections
              </Link>
              <Link to="/" className="text-sm font-medium tracking-widest uppercase text-charcoal">
                About
              </Link>
              <Link to="/" className="text-sm font-medium tracking-widest uppercase text-charcoal">
                Journal
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Search overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-[60] bg-cream/95 backdrop-blur-md flex items-start justify-center pt-32 px-4">
          <button
            className="absolute top-6 right-6 p-2 text-charcoal"
            onClick={() => setSearchOpen(false)}
            aria-label="Close search"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="w-full max-w-xl">
            <input
              autoFocus
              type="text"
              placeholder="Search products..."
              className="w-full bg-transparent border-b border-charcoal/20 py-4 text-2xl font-serif text-charcoal placeholder:text-warmgray/50 focus:outline-none focus:border-gold transition-colors"
            />
            <p className="mt-4 text-xs text-warmgray tracking-wide">
              Press Enter to search
            </p>
          </div>
        </div>
      )}
    </>
  );
}
