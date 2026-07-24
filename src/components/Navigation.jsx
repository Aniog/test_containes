import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();

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

  const isHomePage = location.pathname === '/';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHomePage
            ? 'bg-white text-[#2D2926] shadow-sm'
            : 'bg-transparent text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className="font-serif text-2xl tracking-wider"
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              <Link
                to="/shop"
                className="text-sm tracking-wider uppercase hover:text-[#C9A962] transition-colors"
              >
                Shop
              </Link>
              <Link
                to="/shop?category=earrings"
                className="text-sm tracking-wider uppercase hover:text-[#C9A962] transition-colors"
              >
                Collections
              </Link>
              <Link
                to="/about"
                className="text-sm tracking-wider uppercase hover:text-[#C9A962] transition-colors"
              >
                About
              </Link>
              <Link
                to="/journal"
                className="text-sm tracking-wider uppercase hover:text-[#C9A962] transition-colors"
              >
                Journal
              </Link>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <button
                className={`p-2 transition-colors hover:text-[#C9A962] ${
                  isScrolled || !isHomePage ? 'text-inherit' : 'text-white'
                }`}
                aria-label="Search"
              >
                <Search size={20} strokeWidth={1.5} />
              </button>
              <button
                onClick={() => setIsCartOpen(true)}
                className={`p-2 transition-colors hover:text-[#C9A962] relative ${
                  isScrolled || !isHomePage ? 'text-inherit' : 'text-white'
                }`}
                aria-label="Shopping cart"
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#C9A962] text-white text-xs flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`md:hidden p-2 transition-colors ${
                  isScrolled || !isHomePage ? 'text-inherit' : 'text-white'
                }`}
                aria-label="Menu"
              >
                <Menu size={24} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 md:hidden">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between px-4 h-20 border-b border-[#E8E4E0]">
              <span className="font-serif text-2xl tracking-wider">VELMORA</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2"
                aria-label="Close menu"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex flex-col px-6 py-8 space-y-6">
              <Link to="/shop" className="text-lg tracking-wider uppercase hover:text-[#C9A962]">
                Shop
              </Link>
              <Link to="/shop?category=earrings" className="text-lg tracking-wider uppercase hover:text-[#C9A962]">
                Collections
              </Link>
              <Link to="/about" className="text-lg tracking-wider uppercase hover:text-[#C9A962]">
                About
              </Link>
              <Link to="/journal" className="text-lg tracking-wider uppercase hover:text-[#C9A962]">
                Journal
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
