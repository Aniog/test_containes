import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar({ onCartOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ivory/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Mobile hamburger */}
            <button
              className="lg:hidden text-charcoal"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Left nav links (desktop) */}
            <div className="hidden lg:flex items-center gap-10">
              <Link
                to="/shop"
                className="text-xs uppercase tracking-[0.2em] text-charcoal/80 hover:text-gold transition-colors font-sans"
              >
                Shop
              </Link>
              <Link
                to="/collections"
                className="text-xs uppercase tracking-[0.2em] text-charcoal/80 hover:text-gold transition-colors font-sans"
              >
                Collections
              </Link>
              <Link
                to="/about"
                className="text-xs uppercase tracking-[0.2em] text-charcoal/80 hover:text-gold transition-colors font-sans"
              >
                About
              </Link>
              <Link
                to="/journal"
                className="text-xs uppercase tracking-[0.2em] text-charcoal/80 hover:text-gold transition-colors font-sans"
              >
                Journal
              </Link>
            </div>

            {/* Center logo */}
            <Link
              to="/"
              className={`font-serif text-2xl md:text-3xl tracking-[0.2em] transition-colors ${
                scrolled ? 'text-charcoal' : 'text-white'
              }`}
            >
              VELMORA
            </Link>

            {/* Right icons */}
            <div className="flex items-center gap-5">
              <button
                className={`hover:text-gold transition-colors ${
                  scrolled ? 'text-charcoal/80' : 'text-white/90'
                }`}
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
              <button
                onClick={onCartOpen}
                className={`relative hover:text-gold transition-colors ${
                  scrolled ? 'text-charcoal/80' : 'text-white/90'
                }`}
                aria-label="Open cart"
              >
                <ShoppingBag className="w-4 h-4" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gold text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-sans font-medium">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Scrolled divider */}
        {scrolled && <div className="hairline" />}
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 left-0 bottom-0 w-72 bg-ivory p-8 transform transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center mb-10">
            <span className="font-serif text-xl tracking-[0.2em]">VELMORA</span>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            <Link to="/" className="text-sm uppercase tracking-[0.2em] text-charcoal/80 hover:text-gold transition-colors font-sans" onClick={() => setMobileOpen(false)}>
              Home
            </Link>
            <Link to="/shop" className="text-sm uppercase tracking-[0.2em] text-charcoal/80 hover:text-gold transition-colors font-sans" onClick={() => setMobileOpen(false)}>
              Shop
            </Link>
            <Link to="/collections" className="text-sm uppercase tracking-[0.2em] text-charcoal/80 hover:text-gold transition-colors font-sans" onClick={() => setMobileOpen(false)}>
              Collections
            </Link>
            <Link to="/about" className="text-sm uppercase tracking-[0.2em] text-charcoal/80 hover:text-gold transition-colors font-sans" onClick={() => setMobileOpen(false)}>
              About
            </Link>
            <Link to="/journal" className="text-sm uppercase tracking-[0.2em] text-charcoal/80 hover:text-gold transition-colors font-sans" onClick={() => setMobileOpen(false)}>
              Journal
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}