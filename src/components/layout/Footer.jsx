import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, CreditCard, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-velmora-charcoal text-velmora-cream py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl tracking-widest">VELMORA</h3>
            <p className="text-sm text-velmora-stone-light leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Each piece is designed with intention, 
              made with 18K gold plating for everyday luxury.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                 className="hover:text-velmora-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                 className="hover:text-velmora-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                 className="hover:text-velmora-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="font-sans text-sm uppercase tracking-wider mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shop?category=Earrings" className="text-sm text-velmora-stone-light hover:text-velmora-gold transition-colors">
                  Earrings
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Necklaces" className="text-sm text-velmora-stone-light hover:text-velmora-gold transition-colors">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Huggies" className="text-sm text-velmora-stone-light hover:text-velmora-gold transition-colors">
                  Huggies
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Sets" className="text-sm text-velmora-stone-light hover:text-velmora-gold transition-colors">
                  Sets
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-sm text-velmora-stone-light hover:text-velmora-gold transition-colors">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h4 className="font-sans text-sm uppercase tracking-wider mb-4">Help</h4>
            <ul className="space-y-2">
              <li>
                <a href="#shipping" className="text-sm text-velmora-stone-light hover:text-velmora-gold transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#returns" className="text-sm text-velmora-stone-light hover:text-velmora-gold transition-colors">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#size-guide" className="text-sm text-velmora-stone-light hover:text-velmora-gold transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#care" className="text-sm text-velmora-stone-light hover:text-velmora-gold transition-colors">
                  Jewelry Care
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm text-velmora-stone-light hover:text-velmora-gold transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-sans text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-velmora-stone-light hover:text-velmora-gold transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#sustainability" className="text-sm text-velmora-stone-light hover:text-velmora-gold transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#press" className="text-sm text-velmora-stone-light hover:text-velmora-gold transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-velmora-stone-light hover:text-velmora-gold transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Icons & Copyright */}
        <div className="mt-12 pt-8 border-t border-velmora-charcoal-light">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <CreditCard size={24} className="text-velmora-stone-light" />
              <Shield size={24} className="text-velmora-stone-light" />
              <span className="text-xs text-velmora-stone-light">Secure Payment</span>
            </div>
            <p className="text-xs text-velmora-stone-light">
              © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
