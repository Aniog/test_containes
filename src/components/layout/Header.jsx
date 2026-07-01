import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Header({ onCartClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-velmora-base/95 backdrop-blur-sm shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Mobile menu button */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Logo */}
            <Link to="/" className="text-white">
              <h1 className="font-serif text-xl sm:text-2xl tracking-super-wide font-light">
                VELMORA
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                to="/shop"
                className="text-white/90 hover:text-velmora-gold text-xs tracking-ultra-wide uppercase transition-colors duration-300"
              >
                Shop
              </Link>
              <Link
                to="/shop"
                className="text-white/90 hover:text-velmora-gold text-xs tracking-ultra-wide uppercase transition-colors duration-300"
              >
                Collections
              </Link>
              <Link
                to="/about"
                className="text-white/90 hover:text-velmora-gold text-xs tracking-ultra-wide uppercase transition-colors duration-300"
              >
                About
              </Link>
              <Link
                to="/journal"
                className="text-white/90 hover:text-velmora-gold text-xs tracking-ultra-wide uppercase transition-colors duration-300"
              >
                Journal
              </Link>
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-3 sm:gap-4">
              <button className="text-white p-2 hover:text-velmora-gold transition-colors duration-300" aria-label="Search">
                <Search size={20} />
              </button>
              <button
                onClick={onCartClick}
                className="text-white p-2 hover:text-velmora-gold transition-colors duration-300 relative"
                aria-label="Cart"
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-velmora-gold text-velmora-base text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-velmora-base transition-transform duration-500 lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <Link
            to="/shop"
            className="text-white hover:text-velmora-gold text-lg tracking-ultra-wide uppercase transition-colors duration-300"
          >
            Shop
          </Link>
          <Link
            to="/shop"
            className="text-white hover:text-velmora-gold text-lg tracking-ultra-wide uppercase transition-colors duration-300"
          >
            Collections
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-velmora-gold text-lg tracking-ultra-wide uppercase transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="/journal"
            className="text-white hover:text-velmora-gold text-lg tracking-ultra-wide uppercase transition-colors duration-300"
          >
            Journal
          </Link>
        </div>
      </div>
    </>
  );
}
