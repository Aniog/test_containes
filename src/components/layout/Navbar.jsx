import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { itemCount, toggleCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? 'bg-velvet-50/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(31,21,16,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-site flex items-center justify-between h-16 md:h-20">
        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 -ml-2 text-velvet-950 hover:text-velvet-700 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Center links - desktop */}
        <div className="hidden md:flex items-center gap-10">
          <Link to="/shop" className="text-xs tracking-widest uppercase text-velvet-800 hover:text-velvet-950 transition-colors font-sans font-medium">
            Shop
          </Link>
          <Link to="/shop?category=earrings" className="text-xs tracking-widest uppercase text-velvet-800 hover:text-velvet-950 transition-colors font-sans font-medium">
            Collections
          </Link>
          <Link to="/about" className="text-xs tracking-widest uppercase text-velvet-800 hover:text-velvet-950 transition-colors font-sans font-medium">
            About
          </Link>
          <Link to="/journal" className="text-xs tracking-widest uppercase text-velvet-800 hover:text-velvet-950 transition-colors font-sans font-medium">
            Journal
          </Link>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className="absolute left-1/2 -translate-x-1/2 text-xl md:text-2xl tracking-superwide font-serif font-semibold text-velvet-950"
        >
          VELMORA
        </Link>

        {/* Right icons */}
        <div className="flex items-center gap-1 md:gap-3">
          <button
            className="p-2 text-velvet-800 hover:text-velvet-950 transition-colors"
            aria-label="Search"
          >
            <Search className="w-4 h-4 md:w-[18px] md:h-[18px]" />
          </button>
          <button
            onClick={toggleCart}
            className="p-2 text-velvet-800 hover:text-velvet-950 transition-colors relative"
            aria-label="Cart"
          >
            <ShoppingBag className="w-4 h-4 md:w-[18px] md:h-[18px]" />
            {itemCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold-500 text-velvet-950 text-[10px] font-bold rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-site pb-6 pt-2 flex flex-col gap-4 bg-velvet-50/95 backdrop-blur-md">
          <Link to="/shop" className="text-xs tracking-widest uppercase text-velvet-800 hover:text-velvet-950 transition-colors font-sans font-medium py-1">
            Shop
          </Link>
          <Link to="/shop?category=earrings" className="text-xs tracking-widest uppercase text-velvet-800 hover:text-velvet-950 transition-colors font-sans font-medium py-1">
            Collections
          </Link>
          <Link to="/about" className="text-xs tracking-widest uppercase text-velvet-800 hover:text-velvet-950 transition-colors font-sans font-medium py-1">
            About
          </Link>
          <Link to="/journal" className="text-xs tracking-widest uppercase text-velvet-800 hover:text-velvet-950 transition-colors font-sans font-medium py-1">
            Journal
          </Link>
        </div>
      </div>
    </header>
  );
}
