import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const navLinks = [
  { label: 'Shop', path: '/shop' },
  { label: 'Collections', path: '/shop' },
  { label: 'About', path: '/about' },
  { label: 'Journal', path: '#' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isHome = location.pathname === '/';
  const navBg = scrolled || !isHome
    ? 'bg-cream/95 backdrop-blur-md shadow-sm border-b border-velmora-100'
    : 'bg-transparent';
  const textColor = scrolled || !isHome ? 'text-velmora-900' : 'text-white';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-luxury ${navBg}`}
      >
        <nav className="container-wide flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu toggle */}
          <button
            className={`md:hidden p-2 -ml-2 ${textColor}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-2xl md:text-[1.75rem] font-semibold tracking-wider ${textColor} transition-colors duration-300`}
          >
            VELMORA
          </Link>

          {/* Center nav links — desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`text-[13px] font-medium tracking-wide uppercase ${textColor} opacity-80 hover:opacity-100 transition-opacity duration-300 relative group`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-hairline bg-gold group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className={`flex items-center gap-3 ${textColor}`}>
            <button className="p-2 opacity-80 hover:opacity-100 transition-opacity" aria-label="Search">
              <Search size={20} />
            </button>
            <button
              className="p-2 opacity-80 hover:opacity-100 transition-opacity relative"
              onClick={toggleCart}
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-gold text-white text-[10px] font-semibold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-16 left-0 right-0 bg-cream shadow-xl animate-fade-in">
            <div className="container-wide py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="py-3 text-lg font-serif tracking-wide text-velmora-900 hover:text-gold transition-colors border-b border-velmora-100 last:border-0"
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
