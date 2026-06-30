import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  const transparent = isHome && !scrolled;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          transparent
            ? 'bg-transparent text-white'
            : 'bg-velmora-cream/95 backdrop-blur-md text-velmora-base shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="font-serif text-xl md:text-2xl tracking-widest uppercase font-semibold"
            >
              Velmora
            </Link>

            {/* Center links - desktop */}
            <div className="hidden md:flex items-center gap-10">
              <Link
                to="/shop"
                className="text-xs uppercase tracking-widest font-medium hover:text-velmora-gold transition-colors"
              >
                Shop
              </Link>
              <Link
                to="/shop"
                className="text-xs uppercase tracking-widest font-medium hover:text-velmora-gold transition-colors"
              >
                Collections
              </Link>
              <Link
                to="/"
                className="text-xs uppercase tracking-widest font-medium hover:text-velmora-gold transition-colors"
              >
                About
              </Link>
              <Link
                to="/"
                className="text-xs uppercase tracking-widest font-medium hover:text-velmora-gold transition-colors"
              >
                Journal
              </Link>
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-3 md:gap-5">
              <button
                onClick={() => setSearchOpen((v) => !v)}
                className="p-2 hover:text-velmora-gold transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={toggleCart}
                className="p-2 hover:text-velmora-gold transition-colors relative"
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-velmora-gold text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="border-t border-velmora-warm/30">
            <div className="max-w-7xl mx-auto px-5 md:px-8 py-3">
              <input
                type="text"
                placeholder="Search jewelry..."
                className="w-full bg-transparent border-b border-velmora-stone/30 pb-2 text-sm focus:outline-none focus:border-velmora-gold placeholder:text-velmora-stone/60"
                autoFocus
              />
            </div>
          </div>
        )}
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-velmora-cream pt-20 px-6 md:hidden">
          <div className="flex flex-col gap-6 mt-8">
            <Link
              to="/shop"
              className="font-serif text-2xl tracking-wide"
              onClick={() => setMobileOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/shop"
              className="font-serif text-2xl tracking-wide"
              onClick={() => setMobileOpen(false)}
            >
              Collections
            </Link>
            <Link
              to="/"
              className="font-serif text-2xl tracking-wide"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <Link
              to="/"
              className="font-serif text-2xl tracking-wide"
              onClick={() => setMobileOpen(false)}
            >
              Journal
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
