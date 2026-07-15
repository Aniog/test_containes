import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import CartDrawer from './CartDrawer';

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isCartOpen, setIsCartOpen, cartCount } = useCart();
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
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="container-responsive">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="font-serif text-2xl tracking-wider">
              VELMORA
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm uppercase tracking-wider font-light hover:text-velmora-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button className="hover:text-velmora-gold transition-colors">
                <Search size={20} />
              </button>
              <button
                onClick={() => setIsCartOpen(true)}
                className="hover:text-velmora-gold transition-colors relative"
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
                className="md:hidden hover:text-velmora-gold transition-colors"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="container-responsive py-4 flex flex-col gap-4">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm uppercase tracking-wider font-light py-2 hover:text-velmora-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-velmora-charcoal text-white py-16">
        <div className="container-responsive">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Logo & Description */}
            <div>
              <h3 className="font-serif text-2xl mb-4">VELMORA</h3>
              <p className="text-sm text-gray-400 font-light">
                Demi-fine jewelry crafted to be treasured. Each piece is designed with intention, made to last, and meant to be worn every day.
              </p>
            </div>

            {/* Shop Links */}
            <div>
              <h4 className="text-sm uppercase tracking-wider mb-4">Shop</h4>
              <ul className="space-y-2">
                {['Earrings', 'Necklaces', 'Huggies', 'New Arrivals', 'Best Sellers'].map(item => (
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
              <h4 className="text-sm uppercase tracking-wider mb-4">Help</h4>
              <ul className="space-y-2">
                {['FAQ', 'Shipping & Returns', 'Care Guide', 'Contact Us', 'Size Guide'].map(item => (
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
              <h4 className="text-sm uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-2">
                {['About Us', 'Our Story', 'Sustainability', 'Press', 'Wholesale'].map(item => (
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
          <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2024 Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {/* Payment Icons */}
              <div className="flex gap-2 text-gray-400 text-sm">
                <span>Visa</span>
                <span>MC</span>
                <span>Amex</span>
                <span>PayPal</span>
              </div>
              {/* Social Links */}
              <div className="flex gap-4">
                {['Instagram', 'Facebook', 'Pinterest'].map(social => (
                  <a key={social} href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Cart Drawer */}
      <CartDrawer />
    </div>
  );
};

export default Layout;
