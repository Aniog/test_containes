import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import CartDrawer from './CartDrawer';

export default function Layout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleCart, cartCount } = useCart();
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
    <div className="layout">
      {/* Sticky Nav */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="font-serif text-2xl tracking-wider">
              VELMORA
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm tracking-wide hover:text-gold transition-colors ${
                    isScrolled ? 'text-charcoal' : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <button
                className={`hover:text-gold transition-colors ${
                  isScrolled ? 'text-charcoal' : 'text-white'
                }`}
              >
                <Search size={20} />
              </button>
              <button
                onClick={toggleCart}
                className={`hover:text-gold transition-colors relative ${
                  isScrolled ? 'text-charcoal' : 'text-white'
                }`}
              >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gold text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden hover:text-gold transition-colors ${
                  isScrolled ? 'text-charcoal' : 'text-white'
                }`}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="py-4 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block text-charcoal hover:text-gold transition-colors text-sm tracking-wide"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-charcoal text-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Logo & Description */}
            <div>
              <h3 className="font-serif text-2xl tracking-wider mb-4">VELMORA</h3>
              <p className="text-sm text-warm-gray">
                Fine jewelry crafted to be treasured. Each piece is designed with intention and made to last.
              </p>
            </div>

            {/* Shop Links */}
            <div>
              <h4 className="font-serif text-lg mb-4">Shop</h4>
              <ul className="space-y-2">
                <li><Link to="/shop" className="text-sm text-warm-gray hover:text-gold transition-colors">Earrings</Link></li>
                <li><Link to="/shop" className="text-sm text-warm-gray hover:text-gold transition-colors">Necklaces</Link></li>
                <li><Link to="/shop" className="text-sm text-warm-gray hover:text-gold transition-colors">Huggies</Link></li>
                <li><Link to="/shop" className="text-sm text-warm-gray hover:text-gold transition-colors">New Arrivals</Link></li>
              </ul>
            </div>

            {/* Help Links */}
            <div>
              <h4 className="font-serif text-lg mb-4">Help</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-warm-gray hover:text-gold transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="text-sm text-warm-gray hover:text-gold transition-colors">Size Guide</a></li>
                <li><a href="#" className="text-sm text-warm-gray hover:text-gold transition-colors">Care Instructions</a></li>
                <li><a href="#" className="text-sm text-warm-gray hover:text-gold transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-serif text-lg mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-warm-gray hover:text-gold transition-colors">About Us</a></li>
                <li><a href="#" className="text-sm text-warm-gray hover:text-gold transition-colors">Sustainability</a></li>
                <li><a href="#" className="text-sm text-warm-gray hover:text-gold transition-colors">Press</a></li>
                <li><a href="#" className="text-sm text-warm-gray hover:text-gold transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-warm-gray/20 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-warm-gray">
              © 2024 Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-warm-gray hover:text-gold transition-colors">
                Instagram
              </a>
              <a href="#" className="text-warm-gray hover:text-gold transition-colors">
                Pinterest
              </a>
              <a href="#" className="text-warm-gray hover:text-gold transition-colors">
                TikTok
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Cart Drawer */}
      <CartDrawer />
    </div>
  );
}
