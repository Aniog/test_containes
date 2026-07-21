import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Shop', to: '/shop' },
    { label: 'Collections', to: '/shop' },
    { label: 'About', to: '/about' },
    { label: 'Journal', to: '/journal' },
  ];

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container-luxury">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Left: Logo */}
            <Link
              to="/"
              className={`text-2xl md:text-3xl font-light tracking-[0.2em] uppercase transition-colors duration-500 ${
                isScrolled ? 'text-[#1A1A1A]' : 'text-white'
              }`}
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Velmora
            </Link>

            {/* Center: Nav Links (desktop) */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`text-xs uppercase tracking-[0.15em] font-medium transition-colors duration-500 ${
                    isScrolled ? 'text-[#1A1A1A] hover:text-[#C9A96E]' : 'text-white/90 hover:text-[#C9A96E]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right: Icons */}
            <div className="flex items-center space-x-4">
              <button
                className={`transition-colors duration-500 ${
                  isScrolled ? 'text-[#1A1A1A]' : 'text-white/90'
                } hover:text-[#C9A96E]`}
                aria-label="Search"
              >
                <Search size={18} />
              </button>

              <button
                onClick={() => setIsCartOpen(true)}
                className={`relative transition-colors duration-500 ${
                  isScrolled ? 'text-[#1A1A1A]' : 'text-white/90'
                } hover:text-[#C9A96E]`}
                aria-label="Cart"
              >
                <ShoppingBag size={18} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#C9A96E] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden transition-colors duration-500 ${
                  isScrolled ? 'text-[#1A1A1A]' : 'text-white/90'
                }`}
                aria-label="Menu"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#FAF8F5] transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'mobile-menu-open' : 'mobile-menu-closed'
        }`}
        style={{ top: '0' }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-2xl font-light tracking-[0.1em] uppercase"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
