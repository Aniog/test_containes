import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, CreditCard } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-velmora-charcoal text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div>
            <h3 className="font-serif text-2xl tracking-widest mb-4">VELMORA</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Fine jewelry crafted to be treasured. Each piece is designed with intention,
              using premium materials that celebrate life's precious moments.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-serif text-lg mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shop?category=Earrings" className="text-sm text-gray-400 hover:text-velmora-gold transition-colors">
                  Earrings
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Necklaces" className="text-sm text-gray-400 hover:text-velmora-gold transition-colors">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Huggies" className="text-sm text-gray-400 hover:text-velmora-gold transition-colors">
                  Huggies
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-sm text-gray-400 hover:text-velmora-gold transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/shop?filter=bestseller" className="text-sm text-gray-400 hover:text-velmora-gold transition-colors">
                  Bestsellers
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-serif text-lg mb-4">Help</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shipping" className="text-sm text-gray-400 hover:text-velmora-gold transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/care" className="text-sm text-gray-400 hover:text-velmora-gold transition-colors">
                  Jewelry Care
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-gray-400 hover:text-velmora-gold transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-400 hover:text-velmora-gold transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-serif text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-400 hover:text-velmora-gold transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-sm text-gray-400 hover:text-velmora-gold transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/journal" className="text-sm text-gray-400 hover:text-velmora-gold transition-colors">
                  Journal
                </Link>
              </li>
              <li>
                <Link to="/press" className="text-sm text-gray-400 hover:text-velmora-gold transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <Facebook size={20} className="text-gray-400 hover:text-velmora-gold cursor-pointer transition-colors" />
            <Instagram size={20} className="text-gray-400 hover:text-velmora-gold cursor-pointer transition-colors" />
            <Twitter size={20} className="text-gray-400 hover:text-velmora-gold cursor-pointer transition-colors" />
          </div>

          <div className="flex items-center gap-2 text-gray-400">
            <CreditCard size={20} />
            <span className="text-sm">Secure Payment</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;