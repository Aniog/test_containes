import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openCart, totalItems } = useCart();
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

  const navBg =
    !isHome || scrolled
      ? 'bg-cream/95 backdrop-blur-sm shadow-sm'
      : 'bg-transparent';

  const textColor = !isHome || scrolled ? 'text-espresso' : 'text-white';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link
          to="/"
          className={`font-serif text-xl md:text-2xl tracking-widest-xl font-medium ${textColor} transition-colors duration-500`}
        >
          VELMORA
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {[
            { to: '/shop', label: 'Shop' },
            { to: '/shop', label: 'Collections' },
            { to: '/', label: 'About' },
            { to: '/', label: 'Journal' },
          ].map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`text-xs uppercase tracking-widest font-medium ${textColor} hover:opacity-70 transition-opacity duration-300`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <button
            aria-label="Search"
            className={`${textColor} hover:opacity-70 transition-opacity duration-300`}
          >
            <Search className="w-5 h-5" strokeWidth={1.5} />
          </button>
          <button
            aria-label="Cart"
            onClick={openCart}
            className={`relative ${textColor} hover:opacity-70 transition-opacity duration-300`}
          >
            <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-bronze text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <button
            aria-label="Menu"
            onClick={() => setMobileOpen((v) => !v)}
            className={`md:hidden ${textColor} hover:opacity-70 transition-opacity duration-300`}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" strokeWidth={1.5} />
            ) : (
              <Menu className="w-5 h-5" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-cream/98 backdrop-blur-sm border-t border-divider px-6 py-8">
          <div className="flex flex-col gap-6">
            {[
              { to: '/shop', label: 'Shop' },
              { to: '/shop', label: 'Collections' },
              { to: '/', label: 'About' },
              { to: '/', label: 'Journal' },
            ].map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm uppercase tracking-widest font-medium text-espresso hover:text-bronze transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
