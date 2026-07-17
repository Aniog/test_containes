import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { ShoppingBag, Search, Menu } from 'lucide-react';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getCartCount, toggleCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop', href: '/shop' },
    { name: 'Collections', href: '/collections' },
    { name: 'About', href: '/about' },
    { name: 'Journal', href: '/journal' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container-velmora">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className={`font-serif text-2xl tracking-widest ${
              isScrolled ? 'text-charcoal' : 'text-white'
            }`}>
              VELMORA
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm tracking-wide uppercase ${
                  isScrolled ? 'text-charcoal' : 'text-white'
                } hover:opacity-70 transition-opacity`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-6">
            <button className={`${
              isScrolled ? 'text-charcoal' : 'text-white'
            } hover:opacity-70 transition-opacity`}>
              <Search size={20} />
            </button>

            <button
              onClick={toggleCart}
              className={`relative ${
                isScrolled ? 'text-charcoal' : 'text-white'
              } hover:opacity-70 transition-opacity`}
            >
              <ShoppingBag size={20} />
              {getCartCount() > 0 && (
                <span className="cart-badge">{getCartCount()}</span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden ${
                isScrolled ? 'text-charcoal' : 'text-white'
              }`}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-sand">
            <div className="py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-sm tracking-wide uppercase text-charcoal hover:opacity-70 transition-opacity"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
