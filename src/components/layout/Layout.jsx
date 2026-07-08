import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();
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
    { name: 'Journal', path: '/journal' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky Nav */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="font-serif text-2xl tracking-widest">
              VELMORA
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm tracking-wide hover:opacity-60 transition-opacity"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <button className="hover:opacity-60 transition-opacity">
                <Search size={20} />
              </button>
              <button
                onClick={toggleCart}
                className="hover:opacity-60 transition-opacity relative"
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden hover:opacity-60 transition-opacity"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-sm tracking-wide py-2"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-16 md:pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo */}
            <div>
              <h3 className="font-serif text-xl tracking-widest mb-4">VELMORA</h3>
              <p className="text-sm text-gray-600">
                Fine jewelry crafted to be treasured. Demi-fine gold pieces for every occasion.
              </p>
            </div>

            {/* Shop Links */}
            <div>
              <h4 className="text-sm font-semibold tracking-wide mb-4">SHOP</h4>
              <ul className="space-y-2">
                <li><Link to="/shop" className="text-sm text-gray-600 hover:text-black">Earrings</Link></li>
                <li><Link to="/shop" className="text-sm text-gray-600 hover:text-black">Necklaces</Link></li>
                <li><Link to="/shop" className="text-sm text-gray-600 hover:text-black">Huggies</Link></li>
                <li><Link to="/shop" className="text-sm text-gray-600 hover:text-black">New Arrivals</Link></li>
              </ul>
            </div>

            {/* Help Links */}
            <div>
              <h4 className="text-sm font-semibold tracking-wide mb-4">HELP</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-black">Shipping & Returns</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-black">Size Guide</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-black">Care Instructions</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-black">FAQ</a></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-sm font-semibold tracking-wide mb-4">COMPANY</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-sm text-gray-600 hover:text-black">About Us</Link></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-black">Sustainability</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-black">Press</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-black">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Payment Icons & Social */}
          <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              {/* Payment icons placeholder */}
              <span className="text-xs text-gray-500">VISA</span>
              <span className="text-xs text-gray-500">MC</span>
              <span className="text-xs text-gray-500">AMEX</span>
              <span className="text-xs text-gray-500">PAYPAL</span>
            </div>
            <div className="flex space-x-4">
              {/* Social links placeholder */}
              <a href="#" className="text-sm text-gray-600 hover:text-black">IG</a>
              <a href="#" className="text-sm text-gray-600 hover:text-black">FB</a>
              <a href="#" className="text-sm text-gray-600 hover:text-black">PIN</a>
            </div>
          </div>

          <div className="mt-8 text-center text-xs text-gray-500">
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;