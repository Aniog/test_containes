import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-10 h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden p-1 text-[#2C2622]"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>

          {/* Left — Logo */}
          <Link
            to="/"
            className="font-serif text-xl md:text-2xl tracking-[0.25em] text-[#2C2622] hover:text-[#C9A84C] transition-colors duration-300"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            VELMORA
          </Link>

          {/* Center — Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-xs tracking-[0.18em] uppercase text-[#6B5E52] hover:text-[#C9A84C] transition-colors duration-300 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right — Icons */}
          <div className="flex items-center gap-4">
            <button className="p-1 text-[#2C2622] hover:text-[#C9A84C] transition-colors" aria-label="Search">
              <Search size={20} />
            </button>
            <button
              onClick={toggleCart}
              className="relative p-1 text-[#2C2622] hover:text-[#C9A84C] transition-colors"
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1.5 bg-[#C9A84C] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-[#2C2622]/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)}>
          <div
            className="absolute top-0 left-0 w-72 h-full bg-[#FAF7F2] shadow-xl p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-5 text-[#2C2622]"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
            <div className="mt-12 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm tracking-[0.18em] uppercase text-[#2C2622] hover:text-[#C9A84C] transition-colors font-medium"
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
