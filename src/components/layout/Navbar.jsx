import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, setIsOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-[#faf8f5]/95 backdrop-blur-sm shadow-sm'
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
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Logo */}
            <Link to="/" className="velmora-heading text-2xl md:text-3xl tracking-wider">
              VELMORA
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/shop"
                className={`text-xs tracking-widest uppercase transition-colors duration-300 hover:text-[#c9a96e] ${
                  scrolled || !isHome ? 'text-[#1a1a1a]' : 'text-[#faf8f5]'
                }`}
              >
                Shop
              </Link>
              <Link
                to="/shop"
                className={`text-xs tracking-widest uppercase transition-colors duration-300 hover:text-[#c9a96e] ${
                  scrolled || !isHome ? 'text-[#1a1a1a]' : 'text-[#faf8f5]'
                }`}
              >
                Collections
              </Link>
              <Link
                to="/about"
                className={`text-xs tracking-widest uppercase transition-colors duration-300 hover:text-[#c9a96e] ${
                  scrolled || !isHome ? 'text-[#1a1a1a]' : 'text-[#faf8f5]'
                }`}
              >
                About
              </Link>
              <Link
                to="/journal"
                className={`text-xs tracking-widest uppercase transition-colors duration-300 hover:text-[#c9a96e] ${
                  scrolled || !isHome ? 'text-[#1a1a1a]' : 'text-[#faf8f5]'
                }`}
              >
                Journal
              </Link>
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-3">
              <button
                className={`p-2 transition-colors duration-300 hover:text-[#c9a96e] ${
                  scrolled || !isHome ? 'text-[#1a1a1a]' : 'text-[#faf8f5]'
                }`}
                aria-label="Search"
              >
                <Search size={18} />
              </button>
              <button
                className={`p-2 relative transition-colors duration-300 hover:text-[#c9a96e] ${
                  scrolled || !isHome ? 'text-[#1a1a1a]' : 'text-[#faf8f5]'
                }`}
                onClick={() => setIsOpen(true)}
                aria-label="Cart"
              >
                <ShoppingBag size={18} />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#c9a96e] text-[#1a1a1a] text-[10px] font-medium rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#faf8f5] pt-20 px-6 md:hidden">
          <div className="flex flex-col gap-6">
            <Link
              to="/shop"
              className="velmora-heading text-2xl text-[#1a1a1a] hover:text-[#c9a96e] transition-colors"
            >
              Shop
            </Link>
            <Link
              to="/shop"
              className="velmora-heading text-2xl text-[#1a1a1a] hover:text-[#c9a96e] transition-colors"
            >
              Collections
            </Link>
            <Link
              to="/about"
              className="velmora-heading text-2xl text-[#1a1a1a] hover:text-[#c9a96e] transition-colors"
            >
              About
            </Link>
            <Link
              to="/journal"
              className="velmora-heading text-2xl text-[#1a1a1a] hover:text-[#c9a96e] transition-colors"
            >
              Journal
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
