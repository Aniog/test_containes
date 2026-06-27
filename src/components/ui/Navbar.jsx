import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="text-xl md:text-2xl font-serif tracking-widest uppercase"
              style={{ fontFamily: 'var(--font-serif)', letterSpacing: '0.2em' }}
            >
              Velmora
            </Link>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/shop" className="text-xs tracking-widest uppercase hover:text-gold-500 transition-colors">
                Shop
              </Link>
              <Link to="/shop?category=earrings" className="text-xs tracking-widest uppercase hover:text-gold-500 transition-colors">
                Collections
              </Link>
              <Link to="/about" className="text-xs tracking-widest uppercase hover:text-gold-500 transition-colors">
                About
              </Link>
              <Link to="/journal" className="text-xs tracking-widest uppercase hover:text-gold-500 transition-colors">
                Journal
              </Link>
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button className="p-2 hover:text-gold-500 transition-colors" aria-label="Search">
                <Search className="w-5 h-5" />
              </button>
              <button
                className="p-2 hover:text-gold-500 transition-colors relative"
                onClick={toggleCart}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span
                    className="absolute -top-1 -right-1 w-4 h-4 bg-gold-500 text-white text-[10px] rounded-full flex items-center justify-center"
                  >
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-white pt-20 px-6 md:hidden animate-fade-in"
        >
          <div className="flex flex-col gap-6">
            <Link
              to="/shop"
              className="text-lg font-serif tracking-widest uppercase"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/shop?category=earrings"
              className="text-lg font-serif tracking-widest uppercase"
              onClick={() => setMobileMenuOpen(false)}
            >
              Collections
            </Link>
            <Link
              to="/about"
              className="text-lg font-serif tracking-widest uppercase"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/journal"
              className="text-lg font-serif tracking-widest uppercase"
              onClick={() => setMobileMenuOpen(false)}
            >
              Journal
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
