import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, dispatch } = useCart();
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

  const bgClass = scrolled || !isHome
    ? 'bg-velmora-cream/95 backdrop-blur shadow-sm'
    : 'bg-transparent';

  const textClass = scrolled || !isHome ? 'text-velmora-espresso' : 'text-white';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${bgClass}`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className={`md:hidden p-2 -ml-2 ${textClass}`}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl tracking-ultra uppercase font-semibold ${textClass}`}
            >
              Velmora
            </Link>

            {/* Center links — desktop */}
            <div className={`hidden md:flex items-center gap-8 text-sm font-medium tracking-wide ${textClass}`}>
              <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
              <Link to="/shop?category=Earrings" className="hover:text-velmora-gold transition-colors">Collections</Link>
              <Link to="/#story" className="hover:text-velmora-gold transition-colors">About</Link>
              <Link to="/#testimonials" className="hover:text-velmora-gold transition-colors">Journal</Link>
            </div>

            {/* Right icons */}
            <div className={`flex items-center gap-3 md:gap-5 ${textClass}`}>
              <button aria-label="Search" className="p-2 hover:text-velmora-gold transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button
                aria-label="Cart"
                className="p-2 hover:text-velmora-gold transition-colors relative"
                onClick={() => dispatch({ type: 'TOGGLE_DRAWER' })}
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-velmora-gold text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] flex">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div
            className="relative w-72 max-w-[80vw] bg-velmora-cream h-full shadow-xl p-6 flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <button
              className="self-end p-2 text-velmora-espresso mb-6"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex flex-col gap-6 text-lg font-serif text-velmora-espresso">
              <Link to="/shop" onClick={() => setMobileOpen(false)}>Shop</Link>
              <Link to="/shop?category=Earrings" onClick={() => setMobileOpen(false)}>Collections</Link>
              <Link to="/#story" onClick={() => setMobileOpen(false)}>About</Link>
              <Link to="/#testimonials" onClick={() => setMobileOpen(false)}>Journal</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
