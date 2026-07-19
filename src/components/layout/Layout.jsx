import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import CartDrawer from '../cart/CartDrawer';

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { getCartCount } = useCart();

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
      {/* Sticky Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/'
          ? 'bg-velmora-cream shadow-md'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="font-serif text-2xl tracking-wider text-velmora-charcoal">
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm tracking-wide hover:text-velmora-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:text-velmora-gold transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              <button
                onClick={() => setIsCartOpen(true)}
                className="p-2 hover:text-velmora-gold transition-colors relative"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {getCartCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-velmora-gold text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {getCartCount()}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 hover:text-velmora-gold transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-velmora-cream border-t border-velmora-sand">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block py-2 text-sm tracking-wide hover:text-velmora-gold transition-colors"
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

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Footer */}
      <footer className="bg-velmora-charcoal text-velmora-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-serif text-2xl mb-4">VELMORA</h3>
              <p className="text-sm text-velmora-sand">
                Fine jewelry crafted to be treasured. Each piece tells a story of elegance and timeless beauty.
              </p>
            </div>

            <div>
              <h4 className="font-serif text-lg mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-velmora-sand">
                <li><Link to="/shop" className="hover:text-velmora-gold">Earrings</Link></li>
                <li><Link to="/shop" className="hover:text-velmora-gold">Necklaces</Link></li>
                <li><Link to="/shop" className="hover:text-velmora-gold">Huggies</Link></li>
                <li><Link to="/shop" className="hover:text-velmora-gold">New Arrivals</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg mb-4">Help</h4>
              <ul className="space-y-2 text-sm text-velmora-sand">
                <li><a href="#" className="hover:text-velmora-gold">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-velmora-gold">Size Guide</a></li>
                <li><a href="#" className="hover:text-velmora-gold">Care Instructions</a></li>
                <li><a href="#" className="hover:text-velmora-gold">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-velmora-sand">
                <li><Link to="/about" className="hover:text-velmora-gold">Our Story</Link></li>
                <li><a href="#" className="hover:text-velmora-gold">Sustainability</a></li>
                <li><a href="#" className="hover:text-velmora-gold">Press</a></li>
                <li><a href="#" className="hover:text-velmora-gold">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-velmora-charcoal-light flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-velmora-sand">&copy; 2024 Velmora Fine Jewelry. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-velmora-sand hover:text-velmora-gold">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
