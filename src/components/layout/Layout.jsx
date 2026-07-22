import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import CartDrawer from '../cart/CartDrawer';

export default function Layout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalItems, toggleCart } = useCart();
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
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky Nav */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-sm' 
            : location.pathname === '/' 
              ? 'bg-transparent' 
              : 'bg-white'
        }`}
      >
        <nav className="container-max px-4 md:px-8 py-4 md:py-6 flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className={`font-serif text-2xl md:text-3xl font-light tracking-wider ${
              isScrolled || location.pathname !== '/' ? 'text-velmora-charcoal' : 'text-white'
            }`}
          >
            VELMORA
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm uppercase tracking-wider font-medium transition-colors ${
                  isScrolled || location.pathname !== '/'
                    ? 'text-velmora-charcoal hover:text-velmora-gold'
                    : 'text-white hover:text-velmora-gold-light'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button
              className={`transition-colors ${
                isScrolled || location.pathname !== '/'
                  ? 'text-velmora-charcoal hover:text-velmora-gold'
                  : 'text-white hover:text-velmora-gold-light'
              }`}
            >
              <Search size={20} />
            </button>
            
            <button
              onClick={toggleCart}
              className={`relative transition-colors ${
                isScrolled || location.pathname !== '/'
                  ? 'text-velmora-charcoal hover:text-velmora-gold'
                  : 'text-white hover:text-velmora-gold-light'
              }`}
            >
              <ShoppingBag size={20} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-velmora-gold text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden transition-colors ${
                isScrolled || location.pathname !== '/'
                  ? 'text-velmora-charcoal'
                  : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-velmora-border">
            <div className="container-max px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-velmora-charcoal text-sm uppercase tracking-wider font-medium hover:text-velmora-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20 md:pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-velmora-charcoal text-white py-16 md:py-24">
        <div className="container-max px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Logo & Description */}
            <div className="md:col-span-1">
              <h3 className="font-serif text-2xl font-light tracking-wider mb-4">VELMORA</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Demi-fine jewelry crafted to be treasured. Each piece is designed with intention, 
                made to last, and meant to be worn every day.
              </p>
            </div>

            {/* Shop Links */}
            <div>
              <h4 className="text-sm uppercase tracking-wider font-medium mb-4">Shop</h4>
              <ul className="space-y-2">
                {['Earrings', 'Necklaces', 'Huggies', 'New Arrivals', 'Best Sellers'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help Links */}
            <div>
              <h4 className="text-sm uppercase tracking-wider font-medium mb-4">Help</h4>
              <ul className="space-y-2">
                {['FAQ', 'Shipping & Returns', 'Care Guide', 'Contact Us', 'Size Guide'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-sm uppercase tracking-wider font-medium mb-4">Company</h4>
              <ul className="space-y-2">
                {['Our Story', 'Sustainability', 'Press', 'Wholesale', 'Gift Cards'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2024 Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex space-x-4">
              {['Instagram', 'Pinterest', 'TikTok'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
      
      {/* Cart Drawer */}
      <CartDrawer />
    </div>
  );
}
