import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/#about' },
  { label: 'Journal', href: '/#journal' },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, openCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Always solid on non-home pages
  const solid = scrolled || !isHome || mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          solid
            ? 'bg-obsidian shadow-[0_1px_0_rgba(201,169,110,0.15)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl tracking-[0.18em] uppercase transition-colors duration-300 ${
                solid ? 'text-cream' : 'text-cream'
              }`}
            >
              Velmora
            </Link>

            {/* Center nav — desktop */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`font-sans text-xs tracking-widest uppercase transition-colors duration-200 hover:text-gold ${
                    solid ? 'text-cream/80' : 'text-cream/90'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                aria-label="Search"
                className={`hidden md:flex transition-colors duration-200 hover:text-gold ${
                  solid ? 'text-cream/80' : 'text-cream/90'
                }`}
              >
                <Search size={18} strokeWidth={1.5} />
              </button>

              <button
                aria-label={`Cart (${itemCount} items)`}
                onClick={openCart}
                className={`relative transition-colors duration-200 hover:text-gold ${
                  solid ? 'text-cream/80' : 'text-cream/90'
                }`}
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {itemCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-gold text-obsidian text-[9px] font-sans font-600 w-4 h-4 rounded-full flex items-center justify-center leading-none">
                    {itemCount}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                aria-label="Menu"
                onClick={() => setMobileOpen(v => !v)}
                className={`md:hidden transition-colors duration-200 hover:text-gold ${
                  solid ? 'text-cream/80' : 'text-cream/90'
                }`}
              >
                {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-obsidian border-t border-gold/20">
            <nav className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-sans text-xs tracking-widest uppercase text-cream/80 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-gold/20">
                <button className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-cream/80 hover:text-gold transition-colors">
                  <Search size={14} strokeWidth={1.5} />
                  Search
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Nav;
