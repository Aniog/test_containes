import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { label: 'Shop', path: '/shop' },
  { label: 'Collections', path: '/shop' },
  { label: 'About', path: '/about' },
  { label: 'Journal', path: '/journal' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-luxury ${
          scrolled
            ? 'bg-velvet-50/95 backdrop-blur-md shadow-soft'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 -ml-2"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? (
                <X className="w-5 h-5 text-velvet-900" />
              ) : (
                <Menu className="w-5 h-5 text-velvet-900" />
              )}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="font-serif text-2xl lg:text-[1.75rem] tracking-widest-xl text-velvet-950 order-2 lg:order-1"
            >
              VELMORA
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-10 order-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`text-overline text-velvet-700 hover:text-velvet-950 transition-colors duration-300 ${
                    location.pathname === link.path ? 'text-velvet-950' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4 order-3">
              <button className="p-2 text-velvet-700 hover:text-velvet-950 transition-colors" aria-label="Search">
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={toggleCart}
                className="p-2 text-velvet-700 hover:text-velvet-950 transition-colors relative"
                aria-label={`Cart with ${totalItems} items`}
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-gilded-700 text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-velvet-950/30 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-16 left-0 right-0 bg-velvet-50 shadow-elevated animate-slide-up">
            <div className="px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="block text-subheading text-velvet-900 hover:text-gilded-700 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 hairline">
                <Link
                  to="/shop"
                  className="btn-primary w-full text-center block"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
