import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingBag, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Layout.css';

function Layout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, toggleDrawer } = useCart();
  const location = useLocation();
  const navRef = useRef(null);
  
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
    { label: 'Collections', path: '/collections/all' },
    { label: 'About', path: '/about' },
    { label: 'Journal', path: '/journal' }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky Nav */}
      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-sm'
            : location.pathname === '/'
            ? 'bg-transparent'
            : 'bg-white'
        }`}
      >
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-2xl tracking-widest ${
              isScrolled || location.pathname !== '/'
                ? 'text-velmora-black'
                : 'text-white'
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
                className={`text-sm tracking-wide uppercase ${
                  isScrolled || location.pathname !== '/'
                    ? 'text-velmora-black'
                    : 'text-white'
                } hover:opacity-70 transition-opacity`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button
              className={`${
                isScrolled || location.pathname !== '/'
                  ? 'text-velmora-black'
                  : 'text-white'
              } hover:opacity-70 transition-opacity`}
            >
              <Search size={20} />
            </button>
            
            <button
              onClick={toggleDrawer}
              className={`relative ${
                isScrolled || location.pathname !== '/'
                  ? 'text-velmora-black'
                  : 'text-white'
              } hover:opacity-70 transition-opacity`}
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-velmora-gold text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden ${
                isScrolled || location.pathname !== '/'
                  ? 'text-velmora-black'
                  : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="container mx-auto px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-lg font-serif text-velmora-black hover:text-velmora-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
      
      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="bg-velmora-black text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Logo & Description */}
            <div className="space-y-4">
              <h3 className="font-serif text-2xl tracking-widest">VELMORA</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Demi-fine jewelry crafted to be treasured. Each piece is designed with intention, 
                made with care, and meant to be worn every day.
              </p>
            </div>
            
            {/* Shop Links */}
            <div>
              <h4 className="font-sans text-sm uppercase tracking-wider mb-6">Shop</h4>
              <ul className="space-y-3">
                {['Earrings', 'Necklaces', 'Huggies', 'New Arrivals', 'Best Sellers'].map((item) => (
                  <li key={item}>
                    <Link to="/shop" className="text-sm text-gray-400 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Help Links */}
            <div>
              <h4 className="font-sans text-sm uppercase tracking-wider mb-6">Help</h4>
              <ul className="space-y-3">
                {['FAQ', 'Shipping & Returns', 'Size Guide', 'Care Instructions', 'Contact Us'].map((item) => (
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
              <h4 className="font-sans text-sm uppercase tracking-wider mb-6">Company</h4>
              <ul className="space-y-3">
                {['Our Story', 'Sustainability', 'Press', 'Careers', 'Wholesale'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Payment Icons & Social Links */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              {/* Payment Icons */}
              <span className="text-xs text-gray-500 uppercase tracking-wider">Secure Payment:</span>
              <div className="flex space-x-2">
                {['Visa', 'MC', 'Amex', 'PayPal'].map((payment) => (
                  <span key={payment} className="text-xs bg-gray-800 px-2 py-1 rounded text-gray-400">
                    {payment}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              {/* Social Links */}
              {['Instagram', 'Facebook', 'Pinterest'].map((social) => (
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
          
          {/* Copyright */}
          <div className="text-center text-xs text-gray-600 mt-8">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;