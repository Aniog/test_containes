import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { label: 'Shop', path: '/shop' },
  { label: 'Collections', path: '/shop?category=sets' },
  { label: 'About', path: '/about' },
  { label: 'Journal', path: '/journal' },
];

export default function Navbar({ onCartOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || !isHome
            ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#2a2a2a]'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
          <button
            className="md:hidden text-[#f5f0eb] hover:text-gold transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="text-xs uppercase tracking-[0.12em] text-[#f5f0eb] hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            to="/"
            className="font-serif text-xl md:text-2xl tracking-[0.15em] text-[#f5f0eb] hover:text-gold transition-colors duration-300"
          >
            VELMORA
          </Link>

          <div className="flex items-center gap-4">
            <button
              className="text-[#f5f0eb] hover:text-gold transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className="relative text-[#f5f0eb] hover:text-gold transition-colors"
              onClick={onCartOpen}
              aria-label="Open cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-[#0a0a0a] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-50 bg-[#0a0a0a] transition-transform duration-300 md:hidden ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-[#2a2a2a]">
          <span className="font-serif text-xl tracking-[0.15em] text-[#f5f0eb]">VELMORA</span>
          <button
            className="text-[#f5f0eb] hover:text-gold transition-colors"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex flex-col gap-6 px-8 pt-12">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="font-serif text-2xl text-[#f5f0eb] hover:text-gold transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <hr className="border-[#2a2a2a] my-4" />
          <button
            className="flex items-center gap-3 text-[#f5f0eb] hover:text-gold transition-colors text-left"
            onClick={() => { setMobileOpen(false); onCartOpen?.(); }}
          >
            <ShoppingBag className="w-5 h-5" />
            <span>Cart ({cartCount})</span>
          </button>
        </div>
      </div>
    </>
  );
}