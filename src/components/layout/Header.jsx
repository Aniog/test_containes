import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Header() {
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

  const navLinks = [
    { label: 'Shop', path: '/shop' },
    { label: 'Collections', path: '/collections' },
    { label: 'About', path: '/about' },
    { label: 'Journal', path: '/journal' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5] shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-2xl lg:text-3xl tracking-[0.2em]"
            style={{ color: isScrolled ? '#2A2520' : '#FAF8F5' }}
          >
            VELMORA
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm tracking-wider transition-colors"
                style={{ color: isScrolled ? '#2A2520' : '#FAF8F5' }}
                onMouseEnter={(e) => (e.target.style.color = '#8B7355')}
                onMouseLeave={(e) =>
                  (e.target.style.color = isScrolled ? '#2A2520' : '#FAF8F5')
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4 lg:space-x-6">
            <button
              className="transition-colors"
              style={{ color: isScrolled ? '#2A2520' : '#FAF8F5' }}
              onMouseEnter={(e) => (e.target.style.color = '#8B7355')}
              onMouseLeave={(e) =>
                (e.target.style.color = isScrolled ? '#2A2520' : '#FAF8F5')
              }
            >
              <Search size={20} />
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative transition-colors"
              style={{ color: isScrolled ? '#2A2520' : '#FAF8F5' }}
              onMouseEnter={(e) => (e.target.style.color = '#8B7355')}
              onMouseLeave={(e) =>
                (e.target.style.color = isScrolled ? '#2A2520' : '#FAF8F5')
              }
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#8B7355] text-[#FAF8F5] text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden transition-colors"
              style={{ color: isScrolled ? '#2A2520' : '#FAF8F5' }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-t border-[#E8E0D8]">
          <nav className="flex flex-col px-6 py-8 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-lg tracking-wider text-[#2A2520] hover:text-[#8B7355] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
