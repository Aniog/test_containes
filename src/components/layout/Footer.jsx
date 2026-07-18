import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, CreditCard, Truck, RotateCcw, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-velmora-black text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-serif text-3xl mb-4">Join the Velmora Family</h3>
            <p className="text-velmora-warm-gray mb-8">
              Subscribe for exclusive offers, new arrivals, and 10% off your first order.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-transparent border border-gray-700 focus:border-white outline-none text-sm"
              />
              <button className="px-8 py-3 bg-white text-velmora-black text-sm uppercase tracking-wider font-medium hover:bg-opacity-90 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h4 className="font-serif text-xl">VELMORA</h4>
            <p className="text-sm text-velmora-warm-gray leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Each piece is designed with intention and made to last.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-velmora-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-velmora-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-velmora-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h5 className="text-sm uppercase tracking-wider mb-4">Shop</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/shop?category=Earrings" className="text-sm text-velmora-warm-gray hover:text-white transition-colors">
                  Earrings
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Necklaces" className="text-sm text-velmora-warm-gray hover:text-white transition-colors">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Huggies" className="text-sm text-velmora-warm-gray hover:text-white transition-colors">
                  Huggies
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Sets" className="text-sm text-velmora-warm-gray hover:text-white transition-colors">
                  Sets
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-sm text-velmora-warm-gray hover:text-white transition-colors">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h5 className="text-sm uppercase tracking-wider mb-4">Help</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-velmora-warm-gray hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-velmora-warm-gray hover:text-white transition-colors">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-velmora-warm-gray hover:text-white transition-colors">
                  Care Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-velmora-warm-gray hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-velmora-warm-gray hover:text-white transition-colors">
                  Track Order
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h5 className="text-sm uppercase tracking-wider mb-4">Company</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-velmora-warm-gray hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-velmora-warm-gray hover:text-white transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-velmora-warm-gray hover:text-white transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-velmora-warm-gray hover:text-white transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-velmora-warm-gray">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4" />
              <span>Free Worldwide Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="w-4 h-4" />
              <span>30-Day Returns</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>18K Gold Plated</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
              <span>Hypoallergenic</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-velmora-warm-gray">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}