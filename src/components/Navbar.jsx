import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const transparent = isHome && !scrolled;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          transparent
            ? 'bg-transparent text-white'
            : 'bg-base/95 backdrop-blur-sm text-primary shadow-[0_1px_0_0_rgba(229,224,218,0.6)]'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>

            {/* Left: Logo */}
            <Link
              to="/"
              className="font-serif text-xl md:text-2xl font-medium tracking-wide"
            >
              VELMORA
            </Link>

            {/* Center: Desktop nav */}
            <div className="hidden md:flex items-center gap-10">
              {[
                { label: 'Shop', to: '/shop' },
                { label: 'Collections', to: '/shop' },
                { label: 'About', to: '/#story' },
                { label: 'Journal', to: '/#testimonials' },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`text-xs font-sans font-medium uppercase tracking-wider transition-colors duration-300 hover:text-accent ${
                    transparent ? 'text-white/90 hover:text-white' : 'text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right: Icons */}
            <div className="flex items-center gap-4 md:gap-5">
              <button
                className="p-1 transition-transform hover:scale-105"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <button
                className="p-1 relative transition-transform hover:scale-105"
                onClick={toggleCart}
                aria-label="Cart"
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1.5 bg-accent text-white text-[10px] font-medium w-4 h-4 flex items-center justify-center">
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
          <div
            className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative w-[280px] bg-base h-full shadow-xl flex flex-col p-6 animate-slide-in-left">
            <div className="flex items-center justify-between mb-10">
              <span className="font-serif text-xl font-medium tracking-wide">
                VELMORA
              </span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X size={22} />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {[
                { label: 'Shop', to: '/shop' },
                { label: 'Collections', to: '/shop' },
                { label: 'About', to: '/#story' },
                { label: 'Journal', to: '/#testimonials' },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-sans font-medium uppercase tracking-wider text-primary hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
