import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/#about' },
  { label: 'Journal', to: '/#journal' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isTransparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isTransparent
            ? 'bg-transparent'
            : 'bg-velmora-white/95 backdrop-blur-md shadow-sm'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 -ml-2"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? (
                <X className={`w-5 h-5 ${isTransparent ? 'text-velmora-white' : 'text-velmora-charcoal'}`} />
              ) : (
                <Menu className={`w-5 h-5 ${isTransparent ? 'text-velmora-white' : 'text-velmora-charcoal'}`} />
              )}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl tracking-[0.2em] font-medium transition-colors duration-300 ${
                isTransparent ? 'text-velmora-white' : 'text-velmora-charcoal'
              }`}
            >
              VELMORA
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`font-sans text-caption uppercase tracking-[0.15em] transition-colors duration-300 hover:opacity-70 ${
                    isTransparent ? 'text-velmora-white/90' : 'text-velmora-charcoal'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                className={`p-2 transition-colors duration-300 hover:opacity-70 ${
                  isTransparent ? 'text-velmora-white' : 'text-velmora-charcoal'
                }`}
                aria-label="Search"
              >
                <Search className="w-[18px] h-[18px]" />
              </button>
              <button
                onClick={openCart}
                className={`relative p-2 transition-colors duration-300 hover:opacity-70 ${
                  isTransparent ? 'text-velmora-white' : 'text-velmora-charcoal'
                }`}
                aria-label={`Cart with ${totalItems} items`}
              >
                <ShoppingBag className="w-[18px] h-[18px]" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-velmora-gold text-velmora-black text-[10px] font-sans font-semibold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-400 ${
          mobileOpen ? 'visible' : 'invisible'
        }`}
      >
        <div
          className={`absolute inset-0 bg-velmora-black/50 transition-opacity duration-400 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-velmora-white shadow-drawer transition-transform duration-400 ${
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-8 pt-24 flex flex-col gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="font-serif text-heading-md text-velmora-charcoal hover:text-velmora-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
