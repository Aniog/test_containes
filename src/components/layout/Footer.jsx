import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-velmora-charcoal text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div>
            <h3 className="font-serif text-2xl tracking-widest mb-4">VELMORA</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Demi-fine gold jewelry crafted to be treasured. Each piece is designed with intention,
              made to last, and meant to be worn every day.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-wider mb-4">Shop</h4>
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
                <Link to="/shop?category=Sets" className="text-sm text-gray-400 hover:text-velmora-gold transition-colors">
                  Sets
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-wider mb-4">Help</h4>
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
            <h4 className="font-serif text-sm uppercase tracking-wider mb-4">Company</h4>
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
            </ul>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-velmora-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-velmora-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-velmora-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <img src="https://via.placeholder.com/40x25?text=Visa" alt="Visa" className="h-6" />
            <img src="https://via.placeholder.com/40x25?text=MC" alt="Mastercard" className="h-6" />
            <img src="https://via.placeholder.com/40x25?text=Amex" alt="Amex" className="h-6" />
            <img src="https://via.placeholder.com/40x25?text=PayPal" alt="PayPal" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
}
