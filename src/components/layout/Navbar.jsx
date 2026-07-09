import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-[#faf8f5]/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container-padding">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Logo */}
            <Link to="/" className="serif-heading text-2xl md:text-3xl tracking-wider">
              VELMORA
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/shop" className="text-sm tracking-wider uppercase hover:text-[#c9a96e] transition-colors">
                Shop
              </Link>
              <Link to="/shop" className="text-sm tracking-wider uppercase hover:text-[#c9a96e] transition-colors">
                Collections
              </Link>
              <Link to="/about" className="text-sm tracking-wider uppercase hover:text-[#c9a96e] transition-colors">
                About
              </Link>
              <Link to="/journal" className="text-sm tracking-wider uppercase hover:text-[#c9a96e] transition-colors">
                Journal
              </Link>
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-3">
              <button className="p-2 hover:text-[#c9a96e] transition-colors" aria-label="Search">
                <Search className="w-5 h-5" />
              </button>
              <button
                className="p-2 hover:text-[#c9a96e] transition-colors relative"
                onClick={() => setIsOpen(true)}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#c9a96e] text-white text-[10px] rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-[#faf8f5] p-6 animate-slide-up">
            <button
              className="absolute top-4 right-4 p-2"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
            <nav className="mt-16 flex flex-col gap-6">
              <Link to="/shop" className="text-lg tracking-wider uppercase" onClick={() => setMobileOpen(false)}>
                Shop
              </Link>
              <Link to="/shop" className="text-lg tracking-wider uppercase" onClick={() => setMobileOpen(false)}>
                Collections
              </Link>
              <Link to="/about" className="text-lg tracking-wider uppercase" onClick={() => setMobileOpen(false)}>
                About
              </Link>
              <Link to="/journal" className="text-lg tracking-wider uppercase" onClick={() => setMobileOpen(false)}>
                Journal
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
