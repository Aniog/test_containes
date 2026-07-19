import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
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

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/collections', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' },
  ];

  const bgClass = scrolled || !isHome
    ? 'bg-velmora-ivory/95 backdrop-blur-md shadow-sm border-b border-velmora-sand/50'
    : 'bg-transparent';

  const textClass = scrolled || !isHome
    ? 'text-velmora-espresso'
    : 'text-velmora-ivory';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${bgClass}`}>
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(true)}
              className={`md:hidden p-2 -ml-2 ${textClass}`}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl tracking-widest font-medium ${textClass}`}
            >
              VELMORA
            </Link>

            {/* Center links - desktop */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-xs tracking-widest uppercase font-medium hover:opacity-70 transition-opacity ${textClass}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4 md:gap-6">
              <button className={`p-1 ${textClass} hover:opacity-70`} aria-label="Search">
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsCartOpen(true)}
                className={`p-1 relative ${textClass} hover:opacity-70`}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-velmora-gold text-velmora-charcoal text-[10px] font-semibold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-velmora-charcoal/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-velmora-ivory p-6 flex flex-col animate-[slideIn_0.3s_ease]">
            <div className="flex items-center justify-between mb-10">
              <span className="font-serif text-xl tracking-widest">VELMORA</span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X className="w-5 h-5 text-velmora-espresso" />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm tracking-widest uppercase font-medium text-velmora-espresso hover:text-velmora-gold transition-colors"
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
};

export default Navbar;
