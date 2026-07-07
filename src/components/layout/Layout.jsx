import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';

export default function Layout({ children }) {
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
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky Nav */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cream shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="font-serif text-2xl tracking-widest font-light">
              VELMORA
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm tracking-wide hover:text-gold transition-colors ${
                    isScrolled ? 'text-charcoal' : 'text-charcoal'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:text-gold transition-colors">
                <Search size={20} />
              </button>
              <button
                onClick={() => setIsCartOpen(true)}
                className="p-2 hover:text-gold transition-colors relative"
              >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gold text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 hover:text-gold transition-colors"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-cream border-t">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-lg font-light hover:text-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-charcoal text-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Logo & Description */}
            <div>
              <h3 className="font-serif text-2xl tracking-widest font-light mb-4">VELMORA</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Demi-fine gold jewelry crafted to be treasured. Each piece is designed with intention and made to last.
              </p>
            </div>

            {/* Shop Links */}
            <div>
              <h4 className="font-sans text-sm tracking-wider uppercase mb-4">Shop</h4>
              <ul className="space-y-2">
                {['Earrings', 'Necklaces', 'Huggies', 'New Arrivals', 'Best Sellers'].map(item => (
                  <li key={item}>
                    <Link to="/shop" className="text-sm text-gray-400 hover:text-gold transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help Links */}
            <div>
              <h4 className="font-sans text-sm tracking-wider uppercase mb-4">Help</h4>
              <ul className="space-y-2">
                {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-400 hover:text-gold transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-sans text-sm tracking-wider uppercase mb-4">Company</h4>
              <ul className="space-y-2">
                {['About Us', 'Our Story', 'Sustainability', 'Press', 'Careers'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-400 hover:text-gold transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {['Instagram', 'Facebook', 'Pinterest', 'TikTok'].map(social => (
                <a key={social} href="#" className="text-sm text-gray-400 hover:text-gold transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
