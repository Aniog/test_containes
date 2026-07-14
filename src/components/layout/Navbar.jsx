import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount, toggleDrawer } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navBg = scrolled || !isHome
    ? 'bg-velmora-cream/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent';
  const textColor = scrolled || !isHome ? 'text-velmora-charcoal' : 'text-velmora-cream';
  const borderColor = scrolled || !isHome ? 'border-velmora-divider' : 'border-white/10';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${textColor}`}
      style={{
        backgroundColor: scrolled || !isHome ? 'rgba(250,247,242,0.95)' : 'transparent',
        backdropFilter: scrolled || !isHome ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 1px 8px rgba(0,0,0,0.06)' : 'none',
      }}
    >
      <nav className={`max-w-[1400px] mx-auto flex items-center justify-between px-5 md:px-8 h-16 md:h-18 border-b ${borderColor} transition-colors duration-500`}>
        {/* Left - Logo */}
        <Link to="/" className="font-serif text-2xl md:text-[1.7rem] font-medium tracking-[0.15em] shrink-0">
          VELMORA
        </Link>

        {/* Center - Nav links (desktop) */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {[
            { to: '/shop', label: 'Shop' },
            { to: '/collections', label: 'Collections' },
            { to: '/about', label: 'About' },
            { to: '/journal', label: 'Journal' },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-[0.8rem] font-sans font-medium uppercase tracking-[0.15em] hover:opacity-70 transition-opacity duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right - Icons */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block p-1 hover:opacity-70 transition-opacity" aria-label="Search">
            <Search className="w-[18px] h-[18px]" strokeWidth={1.5} />
          </button>

          <button
            onClick={toggleDrawer}
            className="relative p-1 hover:opacity-70 transition-opacity"
            aria-label={`Cart (${cartCount})`}
          >
            <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1.5 bg-velmora-gold text-white text-[10px] font-sans font-semibold w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-1"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 bg-velmora-cream border-b border-velmora-divider shadow-lg"
          style={{ backdropFilter: 'blur(12px)' }}
        >
          <div className="flex flex-col py-4 px-6 gap-1">
            {[
              { to: '/shop', label: 'Shop' },
              { to: '/collections', label: 'Collections' },
              { to: '/about', label: 'About' },
              { to: '/journal', label: 'Journal' },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-sans font-medium uppercase tracking-[0.15em] text-velmora-charcoal py-3 border-b border-velmora-divider/50 hover:text-velmora-gold transition-colors"
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
