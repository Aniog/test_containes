import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location]);

  const navBg = scrolled || !isHome
    ? 'bg-warm-white/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent';

  const textColor = scrolled || !isHome ? 'text-ink' : 'text-warm-white';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className={`md:hidden p-2 -ml-2 ${textColor}`}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl tracking-[0.25em] font-medium ${textColor} transition-colors duration-300`}
            >
              VELMORA
            </Link>

            {/* Center links — desktop */}
            <div className={`hidden md:flex items-center gap-10 text-xs tracking-[0.15em] uppercase font-medium ${textColor}`}>
              <Link to="/shop" className="hover:text-gold transition-colors duration-300">Shop</Link>
              <Link to="/shop?category=earrings" className="hover:text-gold transition-colors duration-300">Collections</Link>
              <Link to="/#story" className="hover:text-gold transition-colors duration-300">About</Link>
              <Link to="/#newsletter" className="hover:text-gold transition-colors duration-300">Journal</Link>
            </div>

            {/* Right icons */}
            <div className={`flex items-center gap-3 md:gap-5 ${textColor}`}>
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 hover:text-gold transition-colors duration-300"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={toggleCart}
                className="p-2 hover:text-gold transition-colors duration-300 relative"
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-ink text-[10px] font-semibold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-ink/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)}>
          <div
            className="absolute left-0 top-0 bottom-0 w-80 max-w-[80vw] bg-warm-white p-8 flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="self-end p-2 -mr-2 -mt-2 text-ink"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="mt-8 flex flex-col gap-6 text-sm tracking-[0.15em] uppercase font-medium text-ink">
              <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
              <Link to="/shop?category=earrings" className="hover:text-gold transition-colors">Collections</Link>
              <Link to="/#story" className="hover:text-gold transition-colors">About</Link>
              <Link to="/#newsletter" className="hover:text-gold transition-colors">Journal</Link>
            </div>
          </div>
        </div>
      )}

      {/* Search overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-[60] bg-ink/60 backdrop-blur-sm flex items-start justify-center pt-32" onClick={() => setSearchOpen(false)}>
          <div className="w-full max-w-2xl px-6" onClick={e => e.stopPropagation()}>
            <div className="bg-warm-white rounded-sm p-6 shadow-xl">
              <div className="flex items-center gap-3 border-b border-champagne pb-3">
                <Search className="w-5 h-5 text-muted" />
                <input
                  type="text"
                  placeholder="Search jewelry..."
                  className="flex-1 bg-transparent text-ink placeholder:text-muted outline-none text-sm"
                  autoFocus
                />
                <button onClick={() => setSearchOpen(false)} className="text-muted hover:text-ink">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
