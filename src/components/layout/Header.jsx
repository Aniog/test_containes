import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { ShoppingCart, Menu, X, Search, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();
  const location = useLocation();
  const headerRef = useRef(null);

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

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-velmora-cream shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="font-serif text-2xl tracking-widest text-velmora-charcoal">
            VELMORA
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `text-sm tracking-wide uppercase hover:text-velmora-gold transition-colors ${
                  isActive ? 'text-velmora-gold' : 'text-velmora-charcoal'
                }`
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="/collections"
              className="text-sm tracking-wide uppercase hover:text-velmora-gold transition-colors text-velmora-charcoal"
            >
              Collections
            </NavLink>
            <a
              href="#about"
              className="text-sm tracking-wide uppercase hover:text-velmora-gold transition-colors text-velmora-charcoal"
            >
              About
            </a>
            <a
              href="#journal"
              className="text-sm tracking-wide uppercase hover:text-velmora-gold transition-colors text-velmora-charcoal"
            >
              Journal
            </a>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:text-velmora-gold transition-colors">
              <Search size={20} />
            </button>
            <button
              onClick={toggleCart}
              className="p-2 hover:text-velmora-gold transition-colors relative"
            >
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-velmora-gold text-white text-xs w-5 h-5 rounded-full flex items-center justify-center cart-bounce">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:text-velmora-gold transition-colors"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-velmora-cream border-t border-gray-200 py-4 animate-slide-down">
            <nav className="flex flex-col space-y-4">
              <NavLink
                to="/shop"
                className="text-sm tracking-wide uppercase hover:text-velmora-gold transition-colors px-4 py-2"
              >
                Shop
              </NavLink>
              <a
                href="#collections"
                className="text-sm tracking-wide uppercase hover:text-velmora-gold transition-colors px-4 py-2"
              >
                Collections
              </a>
              <a
                href="#about"
                className="text-sm tracking-wide uppercase hover:text-velmora-gold transition-colors px-4 py-2"
              >
                About
              </a>
              <a
                href="#journal"
                className="text-sm tracking-wide uppercase hover:text-velmora-gold transition-colors px-4 py-2"
              >
                Journal
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
