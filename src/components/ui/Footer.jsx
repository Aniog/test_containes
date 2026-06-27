import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & description */}
          <div className="md:col-span-1">
            <h3
              className="text-2xl font-serif tracking-widest uppercase mb-4"
              style={{ letterSpacing: '0.2em' }}
            >
              Velmora
            </h3>
            <p className="text-sm text-velmora-300 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Designed for the modern woman who values quality and elegance.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4 text-velmora-200">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-velmora-300 hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-velmora-300 hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-velmora-300 hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-velmora-300 hover:text-white transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-velmora-300 hover:text-white transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4 text-velmora-200">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-velmora-300 hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-velmora-300 hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-velmora-300 hover:text-white transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-velmora-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm text-velmora-300 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4 text-velmora-200">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-velmora-300 hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-velmora-300 hover:text-white transition-colors">Journal</Link></li>
              <li><a href="#" className="text-sm text-velmora-300 hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-velmora-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-velmora-300 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-velmora-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-velmora-400">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="#" className="text-velmora-400 hover:text-white transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-velmora-400 hover:text-white transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-velmora-400 hover:text-white transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-velmora-400 hover:text-white transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
