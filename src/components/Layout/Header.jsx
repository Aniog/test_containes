import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

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

  const navClasses = `sticky-nav ${isScrolled ? 'solid' : 'transparent'}`;

  const textColor = isScrolled ? 'text-velmora-black' : 'text-white';
  const hoverColor = isScrolled ? 'hover:text-velmora-gold' : 'hover:text-velmora-gold-light';

  return (
    <header className={navClasses}>
      <div className="container-velmora">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className={`text-2xl font-light tracking-widest ${textColor}`}
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            VELMORA
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Shop', 'Collections', 'About', 'Journal'].map((link) => (
              <Link
                key={link}
                to={link === 'Shop' ? '/shop' : `/${link.toLowerCase()}`}
                className={`text-sm tracking-wider uppercase ${textColor} ${hoverColor} transition-colors`}
              >
                {link}
              </Link>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className={`${textColor} ${hoverColor} transition-colors`}>
              <Search size={20} />
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              className={`relative ${textColor} ${hoverColor} transition-colors`}
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-velmora-gold text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden ${textColor}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''} md:hidden`}
      >
        <div className="p-8">
          <div className="flex justify-between items-center mb-12">
            <span
              className="text-2xl font-light tracking-widest text-velmora-black"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              VELMORA
            </span>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X size={24} className="text-velmora-black" />
            </button>
          </div>

          <nav className="space-y-6">
            {['Shop', 'Collections', 'About', 'Journal'].map((link) => (
              <Link
                key={link}
                to={link === 'Shop' ? '/shop' : `/${link.toLowerCase()}`}
                className="block text-lg text-velmora-black hover:text-velmora-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}