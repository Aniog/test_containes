import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartDrawer from './CartDrawer';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, toggleCart } = useCart();
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
    { name: 'Collections', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky Nav */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container-luxury">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-2xl tracking-widest ${
                isScrolled ? 'text-charcoal' : 'text-white'
              }`}
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              VELMORA
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm tracking-wide uppercase ${
                    isScrolled ? 'text-charcoal' : 'text-white'
                  } hover:opacity-70 transition-opacity`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <button
                className={`${
                  isScrolled ? 'text-charcoal' : 'text-white'
                } hover:opacity-70 transition-opacity`}
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              
              <button
                onClick={toggleCart}
                className={`relative ${
                  isScrolled ? 'text-charcoal' : 'text-white'
                } hover:opacity-70 transition-opacity`}
                aria-label="Cart"
              >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gold text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden ${
                  isScrolled ? 'text-charcoal' : 'text-white'
                } hover:opacity-70 transition-opacity`}
                aria-label="Menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container-luxury py-8">
              <div className="flex flex-col space-y-6">
                {navLinks.map(link => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-lg text-charcoal hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Cart Drawer */}
      <CartDrawer />

      {/* Footer */}
      <footer className="bg-charcoal text-cream py-16">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Logo & Description */}
            <div className="md:col-span-1">
              <h3 
                className="font-serif text-2xl tracking-widest mb-4"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                VELMORA
              </h3>
              <p className="text-sm text-taupe mb-6">
                Demi-fine gold jewelry crafted to be treasured. Every piece tells a story.
              </p>
              <div className="flex space-x-4">
                {/* Social Icons */}
                <a href="#" className="text-cream hover:text-gold transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-cream hover:text-gold transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Shop Links */}
            <div>
              <h4 className="font-serif text-lg mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Shop
              </h4>
              <ul className="space-y-2">
                <li><Link to="/shop?category=earrings" className="text-sm text-taupe hover:text-gold transition-colors">Earrings</Link></li>
                <li><Link to="/shop?category=necklaces" className="text-sm text-taupe hover:text-gold transition-colors">Necklaces</Link></li>
                <li><Link to="/shop?category=huggies" className="text-sm text-taupe hover:text-gold transition-colors">Huggies</Link></li>
                <li><Link to="/shop" className="text-sm text-taupe hover:text-gold transition-colors">New Arrivals</Link></li>
                <li><Link to="/shop?sort=bestseller" className="text-sm text-taupe hover:text-gold transition-colors">Best Sellers</Link></li>
              </ul>
            </div>

            {/* Help Links */}
            <div>
              <h4 className="font-serif text-lg mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Help
              </h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-taupe hover:text-gold transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="text-sm text-taupe hover:text-gold transition-colors">Size Guide</a></li>
                <li><a href="#" className="text-sm text-taupe hover:text-gold transition-colors">Care Instructions</a></li>
                <li><a href="#" className="text-sm text-taupe hover:text-gold transition-colors">FAQ</a></li>
                <li><a href="#" className="text-sm text-taupe hover:text-gold transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-serif text-lg mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Company
              </h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-taupe hover:text-gold transition-colors">Our Story</a></li>
                <li><a href="#" className="text-sm text-taupe hover:text-gold transition-colors">Sustainability</a></li>
                <li><a href="#" className="text-sm text-taupe hover:text-gold transition-colors">Press</a></li>
                <li><a href="#" className="text-sm text-taupe hover:text-gold transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-taupe/20 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-taupe mb-4 md:mb-0">
              © 2024 Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              {/* Payment Icons */}
              <span className="text-sm text-taupe">Secure payments:</span>
              <div className="flex space-x-2">
                <div className="w-10 h-6 bg-cream/20 rounded"></div>
                <div className="w-10 h-6 bg-cream/20 rounded"></div>
                <div className="w-10 h-6 bg-cream/20 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
