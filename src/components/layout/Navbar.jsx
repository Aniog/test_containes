import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount, toggleCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navClass = scrolled
    ? 'bg-white/90 backdrop-blur-md border-b border-[#e8e0d5] shadow-sm'
    : 'bg-transparent';

  const textClass = scrolled ? 'text-[#3d3229]' : 'text-white';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            className={`md:hidden ${textClass}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <Link to="/" className={`font-serif text-xl md:text-2xl tracking-widest ${textClass}`}>
            VELMORA
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
              <Link
                key={item}
                to={item === 'Shop' ? '/shop' : `/${item.toLowerCase()}`}
                className={`text-sm tracking-widest uppercase transition-colors hover:text-[#b08d57] ${textClass}`}
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className={`${textClass} hover:text-[#b08d57] transition-colors`} aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button
              className={`relative ${textClass} hover:text-[#b08d57] transition-colors`}
              onClick={toggleCart}
              aria-label="Open cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#b08d57] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-[#e8e0d5]">
          <nav className="flex flex-col px-4 py-4 gap-4">
            {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
              <Link
                key={item}
                to={item === 'Shop' ? '/shop' : `/${item.toLowerCase()}`}
                className="text-sm tracking-widest uppercase text-[#3d3229] hover:text-[#b08d57]"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
