import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext.jsx';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  const navBg = scrolled || !isHome
    ? 'bg-surface/95 backdrop-blur-sm border-b border-hairline'
    : 'bg-transparent';
  const textColor = scrolled || !isHome ? 'text-base' : 'text-white';

  const links = [
    { to: '/shop', label: 'Shop' },
    { to: '/shop?collection=all', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-premium ${navBg}`}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-2 -ml-2 ${textColor}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" strokeWidth={1.5} /> : <Menu className="w-5 h-5" strokeWidth={1.5} />}
          </button>

          {/* Logo */}
          <Link to="/" className={`font-serif text-xl lg:text-2xl tracking-widest font-light uppercase ${textColor}`}>
            Velmora
          </Link>

          {/* Center links - desktop */}
          <div className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className={`text-[13px] uppercase tracking-widest font-medium transition-colors duration-300 hover:text-accent ${textColor}`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button className={`p-2 ${textColor}`} aria-label="Search">
              <Search className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button className={`p-2 relative ${textColor}`} onClick={openCart} aria-label="Cart">
              <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-accent text-white text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-surface border-b border-hairline px-6 pb-6 pt-2">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className="block py-3 text-sm uppercase tracking-widest font-medium text-base hover:text-accent transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}