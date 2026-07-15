import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, toggleDrawer } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';
  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparent
          ? 'bg-transparent text-white'
          : 'bg-velmora-cream/95 backdrop-blur-md text-velmora-charcoal border-b border-velmora-taupe/30'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-2xl md:text-3xl tracking-widest font-light uppercase"
          >
            Velmora
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
            <Link to="/shop" className="hover:text-velmora-gold transition-colors duration-300">
              Shop
            </Link>
            <Link to="/shop" className="hover:text-velmora-gold transition-colors duration-300">
              Collections
            </Link>
            <Link to="/#story" className="hover:text-velmora-gold transition-colors duration-300">
              About
            </Link>
            <Link to="/" className="hover:text-velmora-gold transition-colors duration-300">
              Journal
            </Link>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-3 md:gap-5">
            <button aria-label="Search" className="p-2 hover:text-velmora-gold transition-colors duration-300">
              <Search size={20} />
            </button>
            <button
              aria-label="Cart"
              className="p-2 hover:text-velmora-gold transition-colors duration-300 relative"
              onClick={() => toggleDrawer(true)}
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-velmora-gold text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-velmora-cream border-t border-velmora-taupe/30">
          <div className="px-4 py-6 flex flex-col gap-4 text-sm font-medium tracking-wide uppercase">
            <Link to="/shop" className="py-2 border-b border-velmora-taupe/20">
              Shop
            </Link>
            <Link to="/shop" className="py-2 border-b border-velmora-taupe/20">
              Collections
            </Link>
            <Link to="/#story" className="py-2 border-b border-velmora-taupe/20">
              About
            </Link>
            <Link to="/" className="py-2">
              Journal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
