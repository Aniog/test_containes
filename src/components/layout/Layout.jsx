import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setIsCartOpen, cartCount } = useCart();
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

  return (
    <div className="min-h-screen bg-velmora-cream">
      {/* Sticky Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-velmora-cream shadow-premium'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`text-2xl font-serif tracking-wider ${
                isScrolled ? 'text-velmora-charcoal' : 'text-velmora-ivory'
              }`}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/shop"
                className={`text-sm uppercase tracking-wider hover:text-velmora-gold ${
                  isScrolled ? 'text-velmora-charcoal' : 'text-velmora-ivory'
                }`}
              >
                Shop
              </Link>
              <Link
                to="/collections"
                className={`text-sm uppercase tracking-wider hover:text-velmora-gold ${
                  isScrolled ? 'text-velmora-charcoal' : 'text-velmora-ivory'
                }`}
              >
                Collections
              </Link>
              <Link
                to="/about"
                className={`text-sm uppercase tracking-wider hover:text-velmora-gold ${
                  isScrolled ? 'text-velmora-charcoal' : 'text-velmora-ivory'
                }`}
              >
                About
              </Link>
              <Link
                to="/journal"
                className={`text-sm uppercase tracking-wider hover:text-velmora-gold ${
                  isScrolled ? 'text-velmora-charcoal' : 'text-velmora-ivory'
                }`}
              >
                Journal
              </Link>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <button
                className={`hover:text-velmora-gold ${
                  isScrolled ? 'text-velmora-charcoal' : 'text-velmora-ivory'
                }`}
              >
                <Search size={20} />
              </button>
              <button
                onClick={() => setIsCartOpen(true)}
                className={`relative hover:text-velmora-gold ${
                  isScrolled ? 'text-velmora-charcoal' : 'text-velmora-ivory'
                }`}
              >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-velmora-gold text-velmora-ivory text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden hover:text-velmora-gold ${
                  isScrolled ? 'text-velmora-charcoal' : 'text-velmora-ivory'
                }`}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-velmora-cream border-t border-velmora-sand">
            <div className="px-4 py-6 space-y-4">
              <Link
                to="/shop"
                className="block text-sm uppercase tracking-wider text-velmora-charcoal hover:text-velmora-gold"
              >
                Shop
              </Link>
              <Link
                to="/collections"
                className="block text-sm uppercase tracking-wider text-velmora-charcoal hover:text-velmora-gold"
              >
                Collections
              </Link>
              <Link
                to="/about"
                className="block text-sm uppercase tracking-wider text-velmora-charcoal hover:text-velmora-gold"
              >
                About
              </Link>
              <Link
                to="/journal"
                className="block text-sm uppercase tracking-wider text-velmora-charcoal hover:text-velmora-gold"
              >
                Journal
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20">{children}</main>

      {/* Footer */}
      <footer className="bg-velmora-charcoal text-velmora-ivory py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Logo and Description */}
            <div>
              <h3 className="text-2xl font-serif mb-4">VELMORA</h3>
              <p className="text-sm text-velmora-stone">
                Fine jewelry crafted to be treasured. Each piece tells a story of elegance and timeless beauty.
              </p>
            </div>

            {/* Shop Links */}
            <div>
              <h4 className="text-sm uppercase tracking-wider mb-4">Shop</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/shop" className="text-sm text-velmora-stone hover:text-velmora-gold">
                    All Jewelry
                  </Link>
                </li>
                <li>
                  <Link to="/shop?category=Earrings" className="text-sm text-velmora-stone hover:text-velmora-gold">
                    Earrings
                  </Link>
                </li>
                <li>
                  <Link to="/shop?category=Necklaces" className="text-sm text-velmora-stone hover:text-velmora-gold">
                    Necklaces
                  </Link>
                </li>
                <li>
                  <Link to="/shop?category=Huggies" className="text-sm text-velmora-stone hover:text-velmora-gold">
                    Huggies
                  </Link>
                </li>
              </ul>
            </div>

            {/* Help Links */}
            <div>
              <h4 className="text-sm uppercase tracking-wider mb-4">Help</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-velmora-stone hover:text-velmora-gold">
                    Shipping & Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-velmora-stone hover:text-velmora-gold">
                    Size Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-velmora-stone hover:text-velmora-gold">
                    Care Instructions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-velmora-stone hover:text-velmora-gold">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-sm uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-sm text-velmora-stone hover:text-velmora-gold">
                    Our Story
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-sm text-velmora-stone hover:text-velmora-gold">
                    Sustainability
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-velmora-stone hover:text-velmora-gold">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-velmora-stone hover:text-velmora-gold">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-velmora-charcoal/30 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-velmora-stone">
              © 2024 Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {/* Social Icons - Using text placeholders */}
              <a href="#" className="text-velmora-stone hover:text-velmora-gold">
                Instagram
              </a>
              <a href="#" className="text-velmora-stone hover:text-velmora-gold">
                Pinterest
              </a>
              <a href="#" className="text-velmora-stone hover:text-velmora-gold">
                TikTok
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
