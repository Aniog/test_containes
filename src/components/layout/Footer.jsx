import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base text-cream/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-semibold tracking-widest text-cream">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-cream/60 leading-relaxed">
              Fine demi-fine jewelry crafted to be treasured. Designed in California, worn worldwide.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-gold transition-colors duration-300" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-gold transition-colors duration-300" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-gold transition-colors duration-300" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-lg font-medium text-cream mb-4">Shop</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/shop?category=earrings" className="text-sm text-cream/60 hover:text-gold transition-colors duration-300">
                  Earrings
                </Link>
              </li>
              <li>
                <Link to="/shop?category=necklaces" className="text-sm text-cream/60 hover:text-gold transition-colors duration-300">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link to="/shop?category=huggies" className="text-sm text-cream/60 hover:text-gold transition-colors duration-300">
                  Huggies
                </Link>
              </li>
              <li>
                <Link to="/shop?category=sets" className="text-sm text-cream/60 hover:text-gold transition-colors duration-300">
                  Sets
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-sm text-cream/60 hover:text-gold transition-colors duration-300">
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-serif text-lg font-medium text-cream mb-4">Help</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-cream/60 hover:text-gold transition-colors duration-300">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-cream/60 hover:text-gold transition-colors duration-300">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-cream/60 hover:text-gold transition-colors duration-300">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-cream/60 hover:text-gold transition-colors duration-300">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-cream/60 hover:text-gold transition-colors duration-300">
                  Care Instructions
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-lg font-medium text-cream mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-cream/60 hover:text-gold transition-colors duration-300">
                  Our Story
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-cream/60 hover:text-gold transition-colors duration-300">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-cream/60 hover:text-gold transition-colors duration-300">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-cream/60 hover:text-gold transition-colors duration-300">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-cream/40">
            © {currentYear} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-xs text-cream/40">We accept</span>
            <div className="flex space-x-3">
              <div className="w-10 h-6 bg-cream/10 rounded flex items-center justify-center">
                <span className="text-xs text-cream/60">VISA</span>
              </div>
              <div className="w-10 h-6 bg-cream/10 rounded flex items-center justify-center">
                <span className="text-xs text-cream/60">MC</span>
              </div>
              <div className="w-10 h-6 bg-cream/10 rounded flex items-center justify-center">
                <span className="text-xs text-cream/60">AMEX</span>
              </div>
              <div className="w-10 h-6 bg-cream/10 rounded flex items-center justify-center">
                <span className="text-xs text-cream/60">PP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;