import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';
  const navBg = scrolled || !isHome ? 'bg-ivory/95 backdrop-blur-md shadow-sm' : 'bg-transparent';
  const textColor = scrolled || !isHome ? 'text-charcoal' : 'text-white';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 ${textColor} transition-colors`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-2xl md:text-3xl font-medium tracking-mega-wide ${textColor} transition-colors`}
            >
              VELMORA
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/shop"
                className={`font-sans text-xs font-medium tracking-ultra-wide uppercase ${textColor} hover:opacity-70 transition-opacity`}
              >
                Shop
              </Link>
              <Link
                to="/shop?category=earrings"
                className={`font-sans text-xs font-medium tracking-ultra-wide uppercase ${textColor} hover:opacity-70 transition-opacity`}
              >
                Collections
              </Link>
              <Link
                to="/"
                className={`font-sans text-xs font-medium tracking-ultra-wide uppercase ${textColor} hover:opacity-70 transition-opacity`}
              >
                About
              </Link>
              <Link
                to="/"
                className={`font-sans text-xs font-medium tracking-ultra-wide uppercase ${textColor} hover:opacity-70 transition-opacity`}
              >
                Journal
              </Link>
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                className={`p-2 ${textColor} hover:opacity-70 transition-opacity`}
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <button
                onClick={toggleCart}
                className={`p-2 ${textColor} hover:opacity-70 transition-opacity relative`}
                aria-label="Shopping cart"
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gold-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-ivory/98 backdrop-blur-lg border-t border-warmGray-100">
            <div className="px-6 py-8 space-y-6">
              <Link
                to="/shop"
                className="block font-sans text-sm tracking-ultra-wide uppercase text-charcoal hover:text-gold-500 transition-colors"
              >
                Shop All
              </Link>
              <Link
                to="/shop?category=earrings"
                className="block font-sans text-sm tracking-ultra-wide uppercase text-charcoal hover:text-gold-500 transition-colors"
              >
                Earrings
              </Link>
              <Link
                to="/shop?category=necklaces"
                className="block font-sans text-sm tracking-ultra-wide uppercase text-charcoal hover:text-gold-500 transition-colors"
              >
                Necklaces
              </Link>
              <Link
                to="/shop?category=huggies"
                className="block font-sans text-sm tracking-ultra-wide uppercase text-charcoal hover:text-gold-500 transition-colors"
              >
                Huggies
              </Link>
              <div className="border-t border-warmGray-200 pt-6 space-y-6">
                <Link
                  to="/"
                  className="block font-sans text-sm tracking-ultra-wide uppercase text-warmGray-500 hover:text-gold-500 transition-colors"
                >
                  About
                </Link>
                <Link
                  to="/"
                  className="block font-sans text-sm tracking-ultra-wide uppercase text-warmGray-500 hover:text-gold-500 transition-colors"
                >
                  Journal
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Overlay for mobile menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}
