import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../cart/CartContext';

export default function Navbar() {
  const { totalItems, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Shop', to: '/shop' },
    { label: 'Collections', to: '/shop' },
    { label: 'About', to: '/about' },
    { label: 'Journal', to: '/journal' },
  ];

  const bgClass = scrolled || !isHome
    ? 'bg-[var(--cream)]/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent';

  const textClass = scrolled || !isHome ? 'text-[var(--ink)]' : 'text-white';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgClass}`}>
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className={`md:hidden p-2 -ml-2 transition-colors ${textClass}`}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Logo */}
            <Link to="/" className={`font-serif text-xl md:text-2xl tracking-widest transition-colors ${textClass}`}>
              VELMORA
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`text-xs uppercase tracking-widest font-medium hover:opacity-60 transition-opacity ${textClass}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className={`flex items-center gap-3 md:gap-4 transition-colors ${textClass}`}>
              <button className="p-2 hover:opacity-60 transition-opacity" aria-label="Search">
                <Search className="w-[18px] h-[18px]" strokeWidth={1.5} />
              </button>
              <button
                className="p-2 hover:opacity-60 transition-opacity relative"
                onClick={openCart}
                aria-label="Cart"
              >
                <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-[var(--gold)] text-white text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
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
        <div className="fixed inset-0 z-[80] bg-[var(--cream)] flex flex-col px-6 py-5">
          <div className="flex items-center justify-between mb-12">
            <span className="font-serif text-xl tracking-widest">VELMORA</span>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="font-serif text-3xl tracking-wide border-b border-[var(--divider)] pb-4"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
