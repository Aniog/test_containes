import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();
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
  const navBg =
    scrolled || !isHome
      ? 'bg-velmora-bg/95 backdrop-blur-sm shadow-sm'
      : 'bg-transparent';
  const textColor = scrolled || !isHome ? 'text-velmora-ink' : 'text-white';

  const links = [
    { to: '/shop', label: 'Shop' },
    { to: '/shop?collection=bestsellers', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${navBg}`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className={`md:hidden p-2 -ml-2 ${textColor}`}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl tracking-widest font-semibold ${textColor}`}
            >
              VELMORA
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`text-xs tracking-widest uppercase font-medium transition-colors hover:text-velmora-gold ${textColor}`}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className={`flex items-center gap-3 md:gap-5 ${textColor}`}>
              <button aria-label="Search" className="p-1 hover:text-velmora-gold transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button
                aria-label="Cart"
                className="p-1 hover:text-velmora-gold transition-colors relative"
                onClick={toggleCart}
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-velmora-gold text-white text-[10px] font-semibold rounded-full flex items-center justify-center">
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
            className="flex-1 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="w-72 bg-velmora-bg h-full shadow-xl p-6 flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <span className="font-serif text-xl tracking-widest font-semibold">
                VELMORA
              </span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="text-sm tracking-widest uppercase font-medium text-velmora-ink hover:text-velmora-gold transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
