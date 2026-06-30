import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal-900 text-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block">
              <span className="font-serif text-3xl font-semibold tracking-wider text-cream-50">
                VELMORA
              </span>
            </Link>
            <p className="mt-4 text-sm text-warm-gray leading-relaxed">
              Demi-fine jewelry designed for the modern woman. Crafted with care, worn with confidence.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-cream-300 hover:text-gold-400 transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-cream-300 hover:text-gold-400 transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-cream-300 hover:text-gold-400 transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-cream-400 mb-6">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop?category=earrings" className="text-sm text-cream-300 hover:text-gold-400 transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-cream-300 hover:text-gold-400 transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-cream-300 hover:text-gold-400 transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-cream-300 hover:text-gold-400 transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop" className="text-sm text-cream-300 hover:text-gold-400 transition-colors">Gift Cards</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-cream-400 mb-6">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-cream-300 hover:text-gold-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-sm text-cream-300 hover:text-gold-400 transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-cream-300 hover:text-gold-400 transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-cream-300 hover:text-gold-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm text-cream-300 hover:text-gold-400 transition-colors">Care Instructions</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-cream-400 mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-cream-300 hover:text-gold-400 transition-colors">Our Story</Link></li>
              <li><a href="#" className="text-sm text-cream-300 hover:text-gold-400 transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-cream-300 hover:text-gold-400 transition-colors">Press</a></li>
              <li><a href="#" className="text-sm text-cream-300 hover:text-gold-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-cream-300 hover:text-gold-400 transition-colors">Affiliates</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-charcoal-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-warm-gray">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-xs text-warm-gray">We accept</span>
            <div className="flex space-x-3 text-cream-400">
              <span className="text-sm font-medium">VISA</span>
              <span className="text-sm font-medium">MC</span>
              <span className="text-sm font-medium">AMEX</span>
              <span className="text-sm font-medium">PayPal</span>
              <span className="text-sm font-medium">Apple Pay</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
