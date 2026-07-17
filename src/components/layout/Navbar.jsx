import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Navbar({ onCartOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navClass = scrolled || !isHome
    ? 'bg-cream-50/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent';

  const textClass = scrolled || !isHome ? 'text-charcoal-800' : 'text-cream-50';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navClass}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Mobile menu toggle */}
            <button
              className={`md:hidden ${textClass}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Center nav links - desktop */}
            <div className="hidden md:flex items-center gap-10">
              <Link
                to="/shop"
                className={`text-sm tracking-wider uppercase font-sans font-medium transition-colors duration-300 hover:text-gold ${textClass}`}
              >
                Shop
              </Link>
              <Link
                to="/collections"
                className={`text-sm tracking-wider uppercase font-sans font-medium transition-colors duration-300 hover:text-gold ${textClass}`}
              >
                Collections
              </Link>
            </div>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-2xl md:text-3xl font-semibold tracking-wider transition-colors duration-300 ${textClass}`}
            >
              VELMORA
            </Link>

            {/* Right nav links - desktop */}
            <div className="hidden md:flex items-center gap-10">
              <Link
                to="/about"
                className={`text-sm tracking-wider uppercase font-sans font-medium transition-colors duration-300 hover:text-gold ${textClass}`}
              >
                About
              </Link>
              <Link
                to="/journal"
                className={`text-sm tracking-wider uppercase font-sans font-medium transition-colors duration-300 hover:text-gold ${textClass}`}
              >
                Journal
              </Link>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <button
                className={`transition-colors duration-300 hover:text-gold ${textClass}`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                className={`relative transition-colors duration-300 hover:text-gold ${textClass}`}
                onClick={onCartOpen}
                aria-label="Open cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gold text-charcoal-900 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 pb-6 pt-2 bg-cream-50 border-t border-charcoal-100">
            <div className="flex flex-col gap-5">
              <Link to="/shop" className="text-sm tracking-wider uppercase font-sans font-medium text-charcoal-800">
                Shop
              </Link>
              <Link to="/collections" className="text-sm tracking-wider uppercase font-sans font-medium text-charcoal-800">
                Collections
              </Link>
              <Link to="/about" className="text-sm tracking-wider uppercase font-sans font-medium text-charcoal-800">
                About
              </Link>
              <Link to="/journal" className="text-sm tracking-wider uppercase font-sans font-medium text-charcoal-800">
                Journal
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* Spacer */}
      <div className="h-20 md:h-24" />
    </>
  );
}