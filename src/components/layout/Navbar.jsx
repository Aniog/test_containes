import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import CartDrawer from '@/components/layout/CartDrawer';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-white/95 backdrop-blur-sm shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Logo */}
            <Link to="/" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
              <span className={`serif-heading text-2xl md:text-3xl font-semibold tracking-wider transition-colors duration-300 ${
                scrolled || !isHome ? 'text-[#1A1A1A]' : 'text-white'
              }`}>
                VELMORA
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {['Shop', 'Collections', 'About', 'Journal'].map(link => (
                <Link
                  key={link}
                  to={link === 'Shop' ? '/shop' : link === 'Collections' ? '/shop' : `/${link.toLowerCase()}`}
                  className={`text-xs tracking-widest uppercase transition-colors duration-300 hover:text-[#B8860B] ${
                    scrolled || !isHome ? 'text-[#1A1A1A]' : 'text-white/90'
                  }`}
                >
                  {link}
                </Link>
              ))}
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-3">
              <button
                className={`p-2 transition-colors duration-300 hover:text-[#B8860B] ${
                  scrolled || !isHome ? 'text-[#1A1A1A]' : 'text-white'
                }`}
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <button
                className={`p-2 relative transition-colors duration-300 hover:text-[#B8860B] ${
                  scrolled || !isHome ? 'text-[#1A1A1A]' : 'text-white'
                }`}
                onClick={() => setIsOpen(true)}
                aria-label="Cart"
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#B8860B] text-white text-[10px] rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-[#E8E2DB]">
            <nav className="flex flex-col py-4">
              {['Shop', 'Collections', 'About', 'Journal'].map(link => (
                <Link
                  key={link}
                  to={link === 'Shop' ? '/shop' : link === 'Collections' ? '/shop' : `/${link.toLowerCase()}`}
                  className="px-6 py-3 text-sm tracking-widest uppercase text-[#1A1A1A] hover:text-[#B8860B] transition-colors"
                >
                  {link}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <CartDrawer />
    </>
  );
}
